import PropTypes from "prop-types";
import ContentContainer from '../ContentContainer';
import ArticleItem from "./ArticleItem";
import { useEffect, useState } from 'react';
import ContentPopup from '../ContentPopup';
import { getDatabase, ref, get } from "firebase/database";
import firebaseApp from "../../../firebaseConfig";
import { getAuth, onAuthStateChanged } from "firebase/auth";


const ArticlePage = ({ userRole }) => {
    const [user, setUser] = useState(null);
    const [role, setRole] = useState(null);
    const [showPopup, setShowPopup] = useState(false);
    const [articles, setArticles] = useState([]);
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
        const fetchArticles = async () => {
            setLoading(true);
            try {
                const db = getDatabase(firebaseApp);
                const articlesRef = ref(db, "education-content/articles");
                const snapshot = await get(articlesRef);
                if (snapshot.exists()) {
                    const articlesObj = snapshot.val();
                    const articlesArr = Object.entries(articlesObj).map(([id, data]) => ({
                        id,
                        ...data,
                    }));
                    setArticles(articlesArr);
                } else {
                    setArticles([]);
                }
            } catch (error) {
                console.error("Error fetching articles:", error);
                setArticles([]);
            }
            setLoading(false);
        };
        fetchArticles();
    }, [refreshKey]);

    const handleArticleAdded = () => {
    setRefreshKey(prev => prev + 1);
    setShowPopup(false);
};

    return (
        <div className="w-screen bg-light text-navy justify-items-center pt-14">
          <div className="relative flex items-center justify-between px-10 mb-6">
              <h2 className="text-3xl font-semibold text-navy text-center">
                Article
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
                      <div className="flex flex-col gap-7 mt-1 h-[285px] pr-3 overflow-y-auto overflow-x-hidden scrollbar-hidden-hover">
                        {loading ? (
                            <div>Loading articles...</div>
                        ) : articles.length === 0 ? (
                            <div>No articles found.</div>
                        ) : (
                            articles.map((article) => (
                                <ArticleItem key={article.id} {...article} />
                            ))
                        )}
                      </div>
                    </div>
                </ContentContainer>
                {role === "psychologist" && showPopup && <ContentPopup onClose={handleClosePopup} onSuccess={handleArticleAdded} type="Article" />}
            </div>
        </div>
    );
};

ArticlePage.propTypes = {
  userRole: PropTypes.string.isRequired,
};

export default ArticlePage;