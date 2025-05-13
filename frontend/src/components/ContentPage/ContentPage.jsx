import PropTypes from "prop-types";
import ContentContainer from './ContentContainer';
import ContentColumn from './ContentColumn';
import VideoItem from './VideoItem';
import PodcastItem from './PodcastItem';
import ArticleItem from './ArticleItem';
import { useState } from 'react';
import ContentPopup from './ContentPopup';

const ContentPage = ({ userRole }) => {
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

    const videos = [
        { id: 1, contentLink: "https://www.youtube.com/watch?v=eUT9B2EfldM", title: "Content 1"},
        { id: 2, contentLink: "https://www.youtube.com/watch?v=LnQU8n-vD1M&list=RDLnQU8n-vD1M&start_radio=1", title: "Content 2"},
        { id: 3, contentLink: "https://www.youtube.com/watch?v=l1T3raMh_II&list=RDl1T3raMh_II&start_radio=1", title: "Content 3"}
    ];

    const podcasts = [
        { id: 1, contentLink: "https://www.youtube.com/watch?v=eUT9B2EfldM", title: "Content 1"},
        { id: 2, contentLink: "https://www.youtube.com/watch?v=LnQU8n-vD1M&list=RDLnQU8n-vD1M&start_radio=1", title: "Content 2"},
        { id: 3, contentLink: "https://www.youtube.com/watch?v=l1T3raMh_II&list=RDl1T3raMh_II&start_radio=1", title: "Content 3"}
    ];

    const articles = [
        { id: 1, contentLink: "https://en.tempo.co/read/2006674/a-guide-to-2025-vesak-day-in-indonesia-traditions-and-celebrations"},
        { id: 2, contentLink: "https://en.antaranews.com/news/354937/borobudur-symbolizes-harmony-between-religious-communities-zon"},
        { id: 3, contentLink: "https://en.antaranews.com/news/354845/east-kalimantan-buddhists-pray-for-smooth-nusantara-development"}
    ];

    return (
        <div className="w-screen bg-light text-navy justify-items-center pt-14">
            <div className="flex gap-10">
                <ContentContainer>
                    <ContentColumn title="Video">
                        {videos.map((video) => (
                            <VideoItem key={video.id} {...video} />
                        ))}
                    </ContentColumn>

                    <ContentColumn title="Podcast">
                        {podcasts.map((podcast) => (
                            <PodcastItem key={podcast.id} {...podcast} />
                        ))}
                    </ContentColumn>

                    <ContentColumn title="Article">
                        {articles.map((article) => (
                            <ArticleItem key={article.id} {...article} />
                        ))}
                    </ContentColumn>
                </ContentContainer>
                {isPsychologist && (
                    <button
                    className="w-[50px] h-[50px] rounded-full bg-[#509FBF] text-[#00337C] text-[30px] font-semibold pb-2 
                                shadow-md hover:shadow-2xl cursor-pointer transition-all duration-300 flex justify-center z-[999]"
                        onClick={handleAddClick}
                    >
                            +
                    </button>
                )}
                {showPopup && <ContentPopup onClose={handleClosePopup} />}
            </div>
        </div>
    );
};

ContentPage.propTypes = {
  userRole: PropTypes.string.isRequired,
};

export default ContentPage;