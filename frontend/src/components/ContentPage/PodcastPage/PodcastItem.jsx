import PropTypes from "prop-types";

const PodcastItem = ({ contentLink, title }) => {
    const podcastId = contentLink.split("v=")[1]?.split("&")[0];
    const thumbnailLink = podcastId ? `https://img.youtube.com/vi/${podcastId}/hqdefault.jpg` : "";

    return (
        <div className="mb-5 min-w-[200px]">
            <a href={contentLink} target="_blank">
                <img className="h-35 w-60 object-cover rounded-md" src={thumbnailLink} alt="Podcast Thumbnail" />
            </a>
            <p className="mt-2 text-md text-[#13005A]">{title}</p>
        </div>
    );
};

PodcastItem.propTypes = {
  contentLink: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};

export default PodcastItem;