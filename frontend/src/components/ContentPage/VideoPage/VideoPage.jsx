import PropTypes from "prop-types";
import ContentContainer from '../ContentContainer';
import VideoItem from "./VideoItem";
import { useEffect, useState } from 'react';
import ContentPopup from '../ContentPopup';
import { getDatabase, ref, get } from "firebase/database";
import firebaseApp from "../../../firebaseConfig";
import { getAuth, onAuthStateChanged } from "firebase/auth";


const VideoPage = ({ userRole }) => {
    const [user, setUser] = useState(null);
    const [role, setRole] = useState(null);
    const [showPopup, setShowPopup] = useState(false);
    const [videos, setVideos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [refreshKey, setRefreshKey] = useState(0);
    
    void(userRole, user);
    // Ambil user dan role
    useEffect(() => {
        const auth = getAuth();
        const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
            console.log("Auth state changed. firebaseUser:", firebaseUser);
            if (firebaseUser) {
                setUser(firebaseUser);
    
                const db = getDatabase(firebaseApp);
                // Cek di clients
                let userRole = null;
                let userSnap = await get(ref(db, `users/clients/${firebaseUser.uid}`));
                console.log("Client snapshot:", userSnap.exists(), userSnap.val());
                if (userSnap.exists()) {
                    userRole = "client";
                } else {
                    // Cek di psychologists
                    userSnap = await get(ref(db, `users/psychologists/${firebaseUser.uid}`));
                    console.log("Psychologist snapshot:", userSnap.exists(), userSnap.val());
                    if (userSnap.exists()) {
                        userRole = "psychologist";
                    }
                }
                setRole(userRole);
                console.log("Detected userRole:", userRole);
            } else {
                setUser(null);
                setRole(null);
                console.log("No user logged in.");
            }
        });
        return () => unsubscribe();
    }, []);

    const handleAddClick = () => {
        setShowPopup(true);
    };

    const handleClosePopup = () => {
        setShowPopup(false);
    };

    useEffect(() => {
        const fetchVideos = async () => {
            setLoading(true);
            try {
                const db = getDatabase(firebaseApp);
                const videosRef = ref(db, "education-content/videos");
                const snapshot = await get(videosRef);
                if (snapshot.exists()) {
                    const videosObj = snapshot.val();
                    const videosArr = Object.entries(videosObj).map(([id, data]) => ({
                        id,
                        ...data,
                    }));
                    setVideos(videosArr);
                } else {
                    setVideos([]);
                }
            } catch (error) {
                console.error("Error fetching videos:", error);
                setVideos([]);
            }
            setLoading(false);
        };
        fetchVideos();
    }, [refreshKey]);

    const handleVideoAdded = () => {
    setRefreshKey(prev => prev + 1);
    setShowPopup(false);
};

    return (
        <div className="w-screen bg-light text-navy justify-items-center pt-14">
          <div className="relative flex items-center justify-between px-10 mb-6">
              <h2 className="text-3xl font-semibold text-navy text-center">
                Video
              </h2>

              {role === "psychologist" && (
                    <button
                    className="absolute left-155 w-[50px] h-[50px] rounded-full bg-[#509FBF] text-[#00337C] text-[30px] font-semibold pb-2 
                                shadow-md hover:shadow-2xl cursor-pointer transition-all duration-300 flex justify-center"
                        onClick={handleAddClick}
                    >
                            +
                    </button>
              )}
          </div>
            <div className="flex gap-10">
                <ContentContainer>
                    <div className="w-full">
                      <div className="flex flex-row gap-7 mt-10 overflow-x-auto overflow-y-hidden scrollbar-hidden-hover">
                        {loading ? (
                            <div>Loading videos...</div>
                        ) : videos.length === 0 ? (
                            <div>No videos found.</div>
                        ) : (
                            videos.map((video) => (
                                <VideoItem key={video.id} {...video} />
                            ))
                        )}
                      </div>
                    </div>
                </ContentContainer>
                {role === "psychologist" && showPopup && <ContentPopup onClose={handleClosePopup} onSuccess={handleVideoAdded} type="Video" />}
            </div>
        </div>
    );
};

VideoPage.propTypes = {
  userRole: PropTypes.string.isRequired,
};

export default VideoPage;