import PropTypes from "prop-types";
import ContentContainer from '../ContentContainer';
import PodcastItem from "./PodcastItem";
import { useEffect, useState } from 'react';
import ContentPopup from '../ContentPopup';
import { getDatabase, ref, get } from "firebase/database";
import firebaseApp from "../../../firebaseConfig";
import { getAuth, onAuthStateChanged } from "firebase/auth";


const PodcastPage = ({ userRole }) => {
    const [user, setUser] = useState(null);
    const [role, setRole] = useState(null);
    const [showPopup, setShowPopup] = useState(false);
    const [podcasts, setPodcsats] = useState([]);
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
        const fetchPodcasts = async () => {
            setLoading(true);
            try {
                const db = getDatabase(firebaseApp);
                const podcastsRef = ref(db, "education-content/podcasts");
                const snapshot = await get(podcastsRef);
                if (snapshot.exists()) {
                    const podcastsObj = snapshot.val();
                    const podcastsArr = Object.entries(podcastsObj).map(([id, data]) => ({
                        id,
                        ...data,
                    }));
                    setPodcsats(podcastsArr);
                } else {
                    setPodcsats([]);
                }
            } catch (error) {
                console.error("Error fetching videos:", error);
                setPodcsats([]);
            }
            setLoading(false);
        };
        fetchPodcasts();
    }, [refreshKey]);

    const handlePodcastAdded = () => {
    setRefreshKey(prev => prev + 1);
    setShowPopup(false);
};

    return (
        <div className="w-screen bg-light text-navy justify-items-center pt-14">
          <div className="relative flex items-center justify-between px-10 mb-6">
              <h2 className="text-3xl font-semibold text-navy text-center">
                Podcast
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
                            <div>Loading podcasts...</div>
                        ) : podcasts.length === 0 ? (
                            <div>No podcasts found.</div>
                        ) : (
                            podcasts.map((podcast) => (
                                <PodcastItem key={podcast.id} {...podcast} />
                            ))
                        )}
                      </div>
                    </div>
                </ContentContainer>
                {role === "psychologist" && showPopup && <ContentPopup onClose={handleClosePopup} onSuccess={handlePodcastAdded} type="Podcast" />}
            </div>
        </div>
    );
};

PodcastPage.propTypes = {
  userRole: PropTypes.string.isRequired,
};

export default PodcastPage;