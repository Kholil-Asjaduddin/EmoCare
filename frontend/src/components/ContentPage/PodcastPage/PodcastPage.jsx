import PropTypes from "prop-types";
import ContentContainer from '../ContentContainer';
import PodcastItem from "./PodcastItem";
import { useState } from 'react';
import ContentPopup from '../ContentPopup';

const PodcastPage = ({ userRole }) => {
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

    const podcasts = [
        { id: 1, contentLink: "https://www.youtube.com/watch?v=9QnsB9SCzjw", title: "JIKA MENGALAMI DEPRESI, JANGAN DIPENDAM SENDIRI!"},
        { id: 2, contentLink: "https://www.youtube.com/watch?v=q5x1SNjRQwY", title: "Buat yang Lagi Stress.."},
        { id: 3, contentLink: "https://www.youtube.com/watch?v=GOqEl4ADyVk", title: "OM HOLLAND Gets Vulnerable About Mental Health & Overcoming Social Anxiety"},
        { id: 4, contentLink: "https://www.youtube.com/watch?v=9QnsB9SCzjw", title: "JIKA MENGALAMI DEPRESI, JANGAN DIPENDAM SENDIRI!"},
        { id: 5, contentLink: "https://www.youtube.com/watch?v=q5x1SNjRQwY", title: "Buat yang Lagi Stress.."},
        { id: 6, contentLink: "https://www.youtube.com/watch?v=GOqEl4ADyVk", title: "OM HOLLAND Gets Vulnerable About Mental Health & Overcoming Social Anxiety"},
        { id: 7, contentLink: "https://www.youtube.com/watch?v=9QnsB9SCzjw", title: "JIKA MENGALAMI DEPRESI, JANGAN DIPENDAM SENDIRI!"},
        { id: 8, contentLink: "https://www.youtube.com/watch?v=q5x1SNjRQwY", title: "Buat yang Lagi Stress.."},
        { id: 9, contentLink: "https://www.youtube.com/watch?v=GOqEl4ADyVk", title: "OM HOLLAND Gets Vulnerable About Mental Health & Overcoming Social Anxiety"},
        { id: 10, contentLink: "https://www.youtube.com/watch?v=9QnsB9SCzjw", title: "JIKA MENGALAMI DEPRESI, JANGAN DIPENDAM SENDIRI!"},
        { id: 11, contentLink: "https://www.youtube.com/watch?v=q5x1SNjRQwY", title: "Buat yang Lagi Stress.."},
        { id: 12, contentLink: "https://www.youtube.com/watch?v=GOqEl4ADyVk", title: "OM HOLLAND Gets Vulnerable About Mental Health & Overcoming Social Anxiety"}
    ];

    return (
        <div className="w-screen bg-light text-navy justify-items-center pt-14">
            <div className="relative flex items-center justify-between px-10 mb-6">
                <h2 className="text-3xl font-semibold text-navy text-center">
                    Podcast
                </h2>

                {isPsychologist && (
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
                        {podcasts.map((podcast) => (
                            <PodcastItem key={podcast.id} {...podcast} />
                        ))}
                      </div>
                    </div>
                </ContentContainer>
                {showPopup && <ContentPopup onClose={handleClosePopup} type="Podcast"/>}
            </div>
        </div>
    );
};

PodcastPage.propTypes = {
  userRole: PropTypes.string.isRequired,
};

export default PodcastPage;