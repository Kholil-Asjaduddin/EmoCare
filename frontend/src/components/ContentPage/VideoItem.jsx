import PropTypes from "prop-types";

const VideoItem = ({ contentLink, title }) => {
    const videoId = contentLink.split("v=")[1]?.split("&")[0];
    const thumbnailLink = videoId ? `https://img.youtube.com/vi/${videoId}/hqdefault.jpg` : "";

    return (
        <div className="mb-5">
            <a href={contentLink} target="_blank">
                <img className="h-44" src={thumbnailLink} alt="YouTube Thumbnail" />
            </a>
            <p className="mt-2 text-xl">{title}</p>
        </div>
    );
};

VideoItem.propTypes = {
  contentLink: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};

export default VideoItem;