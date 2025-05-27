import PropTypes from "prop-types";
import ContentContainer from './ContentContainer';
import ContentColumn from './ContentColumn';
import VideoItem from './VideoPage/VideoItem';
import PodcastItem from './PodcastPage/PodcastItem';
import ArticleItem from './ArticlePage/ArticleItem';
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
        { id: 1, contentLink: "https://www.youtube.com/watch?v=oxx564hMBUI", title: "What Is Mental Health?"},
        { id: 2, contentLink: "https://www.youtube.com/watch?v=rkZl2gsLUp4", title: "How to manage your mental health"},
        { id: 3, contentLink: "https://www.youtube.com/watch?v=3QIfkeA6HBY", title: "8 Things You Can Do To Improve Your Mental Health"}
    ];

    const podcasts = [
        { id: 1, contentLink: "https://www.youtube.com/watch?v=9QnsB9SCzjw", title: "JIKA MENGALAMI DEPRESI, JANGAN DIPENDAM SENDIRI!"},
        { id: 2, contentLink: "https://www.youtube.com/watch?v=q5x1SNjRQwY", title: "Buat yang Lagi Stress.."},
        { id: 3, contentLink: "https://www.youtube.com/watch?v=GOqEl4ADyVk", title: "OM HOLLAND Gets Vulnerable About Mental Health & Overcoming Social Anxiety"}
    ];

    const articles = [
        { id: 1, contentLink: "https://www.edsurge.com/news/2025-05-15-parents-and-teens-agree-social-media-can-be-harmful-but-how-much"},
        { id: 2, contentLink: "https://who13.com/hello-iowa/how-social-media-affects-mental-health/"}
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
                                shadow-md hover:shadow-2xl cursor-pointer transition-all duration-300 flex justify-center"
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