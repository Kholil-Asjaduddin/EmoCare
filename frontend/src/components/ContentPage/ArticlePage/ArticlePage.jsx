import PropTypes from "prop-types";
import ContentContainer from '../ContentContainer';
import ArticleItem from "./ArticleItem";
import { useState } from 'react';
import ContentPopup from '../ContentPopup';

const ArticlePage = ({ userRole }) => {
    userRole = 'psychologist';
    const isPsychologist = userRole === 'psychologist';
    // const [isPsychologist, setIsPsychologist] = useState(true);
    const [showPopup, setShowPopup] = useState(false);

    const handleAddClick = () => {
        setShowPopup(true);
    };

    const handleClosePopup = () => {
        setShowPopup(false);
    };

    const articles = [
        { id: 1, contentLink: "https://www.edsurge.com/news/2025-05-15-parents-and-teens-agree-social-media-can-be-harmful-but-how-much"},
        { id: 2, contentLink: "https://who13.com/hello-iowa/how-social-media-affects-mental-health/"},
        { id: 3, contentLink: "https://www.edsurge.com/news/2025-05-15-parents-and-teens-agree-social-media-can-be-harmful-but-how-much"},
        { id: 4, contentLink: "https://who13.com/hello-iowa/how-social-media-affects-mental-health/"},
        { id: 5, contentLink: "https://www.edsurge.com/news/2025-05-15-parents-and-teens-agree-social-media-can-be-harmful-but-how-much"},
        { id: 6, contentLink: "https://who13.com/hello-iowa/how-social-media-affects-mental-health/"},
        { id: 7, contentLink: "https://www.edsurge.com/news/2025-05-15-parents-and-teens-agree-social-media-can-be-harmful-but-how-much"},
        { id: 8, contentLink: "https://who13.com/hello-iowa/how-social-media-affects-mental-health/"}
    ];

    return (
        <div className="w-screen bg-light text-navy justify-items-center pt-14">
            <div className="flex gap-10">
                <ContentContainer>
                    <div className="w-full">
                        <div className="w-full mt-[-20px] mb-10">
                            <h2 className="text-3xl font-semibold text-navy text-center">
                                Article
                            </h2>
                        </div>
                      <div className="flex flex-col gap-7 mt-8 h-[270px] pr-3 overflow-y-auto overflow-x-hidden scrollbar-hidden-hover">
                        {articles.map((article) => (
                            <ArticleItem key={article.id} {...article} />
                        ))}
                      </div>
                    </div>
                </ContentContainer>
                {isPsychologist && (
                    <button
                    className="w-[50px] h-[50px] rounded-full bg-[#509FBF] text-[#00337C] text-[30px] font-semibold pb-2 
                                shadow-md hover:shadow-2xl cursor-pointer transition-all duration-300 flex justify-center"
                        onClick={handleAddClick}
                    >
                            +
                    </button>
                )}
                {showPopup && <ContentPopup onClose={handleClosePopup} type="Article" />}
            </div>
        </div>
    );
};

ArticlePage.propTypes = {
  userRole: PropTypes.string.isRequired,
};

export default ArticlePage;