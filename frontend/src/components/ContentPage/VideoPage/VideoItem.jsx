import PropTypes from "prop-types";

const VideoItem = ({ contentLink, title }) => {
    const videoId = contentLink.split("v=")[1]?.split("&")[0];
    const thumbnailLink = videoId ? `https://img.youtube.com/vi/${videoId}/hqdefault.jpg` : "";

    return (
        <div className="mb-5 min-w-[200px]">
            <a href={contentLink} target="_blank">
                <img className="h-35 w-60 object-cover rounded-md" src={thumbnailLink} alt="YouTube Thumbnail" />
            </a>
            <p className="mt-2 text-md text-[#13005A]">{title}</p>
        </div>
    );
};

VideoItem.propTypes = {
  contentLink: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};

export default VideoItem;