// import VideoItem from "./VideoItem";

// const VideoPage = () => {
//   const videos = [
//         { id: 1, contentLink: "https://www.youtube.com/watch?v=oxx564hMBUI", title: "What Is Mental Health?"},
//         { id: 2, contentLink: "https://www.youtube.com/watch?v=rkZl2gsLUp4", title: "How to manage your mental health"},
//         { id: 3, contentLink: "https://www.youtube.com/watch?v=3QIfkeA6HBY", title: "8 Things You Can Do To Improve Your Mental Health"}
//     ];

//   return (
//     <div className="pt-14 px-6">
//       <h2 className="text-2xl text-[#10004B] font-semibold mt-[-20px] mb-5">Videos</h2>
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
//         {videos.map((video) => (
//           <VideoItem key={video.id} {...video} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default VideoPage;

import PropTypes from "prop-types";
import ContentContainer from '../ContentContainer';
import ContentColumn from '../ContentColumn';
import VideoItem from "./VideoItem";
import { useState } from 'react';
import ContentPopup from '../ContentPopup';

const VideoPage = ({ userRole }) => {
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
        { id: 3, contentLink: "https://www.youtube.com/watch?v=3QIfkeA6HBY", title: "8 Things You Can Do To Improve Your Mental Health"},
        { id: 4, contentLink: "https://www.youtube.com/watch?v=oxx564hMBUI", title: "What Is Mental Health?"},
        { id: 5, contentLink: "https://www.youtube.com/watch?v=rkZl2gsLUp4", title: "How to manage your mental health"},
        { id: 6, contentLink: "https://www.youtube.com/watch?v=3QIfkeA6HBY", title: "8 Things You Can Do To Improve Your Mental Health"}
    ];

    return (
        <div className="w-screen bg-light text-navy justify-items-center pt-14">
            <div className="flex gap-10">
                <ContentContainer>
                    <div className="w-full">
                        <div className="w-full mt-[-20px] mb-15">
                            <h2 className="text-3xl font-semibold text-navy text-center">
                                Video
                            </h2>
                        </div>
                      <div className="flex flex-row gap-7 mt-10 overflow-x-auto overflow-y-hidden scrollbar-hidden-hover">
                        {videos.map((video) => (
                            <VideoItem key={video.id} {...video} />
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
                {showPopup && <ContentPopup onClose={handleClosePopup} type="Video"/>}
            </div>
        </div>
    );
};

VideoPage.propTypes = {
  userRole: PropTypes.string.isRequired,
};

export default VideoPage;