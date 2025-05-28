import { useNavigate } from "react-router-dom";

// Import images (adjust paths as needed)
import articleImg from "../../assets/article.svg";
import videoImg from "../../assets/video.svg";
import podcastImg from "../../assets/podcast.svg";

const ContentsNav = () => {
    const navigate = useNavigate(); // Hook for navigation

    const features = [
        { title: "Article", image: articleImg, path: "/article" },
        { title: "Video", image: videoImg, path: "/video" },
        { title: "Podcast", image: podcastImg, path: "/podcast" },
    ];

    return (
        <div className="flex flex-col items-center mt-25">
            <h3 className="text-2xl text-blue-light">Mental Health Contents</h3>
            <div className="scale-70 flex flex-row space-x-30">
                {features.map((feature, index) => (
                    <div
                        key={index}
                        className="w-[345px] h-[213px] bg-[#EAF0F1] border border-[#9DC8DC] shadow-md rounded-[50px] flex flex-col items-center p-5 cursor-pointer hover:bg-[#d6e4eb] transition-all"
                        onClick={() => navigate(feature.path)}
                    >
                        <h2 className="text-[#13005A] text-3xl font-bold">{feature.title}</h2>
                        {/* Replace square with image */}
                        <img
                            src={feature.image}
                            alt={feature.title}
                            className="w-[250px] h-[174px] -mt-1 object-cover rounded-lg"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ContentsNav;