import { useState, useEffect } from "react";
import PropTypes from "prop-types";

const getArticleMetadata = async (contentLink) => {
    try {
        const response = await fetch(`https://api.microlink.io/?url=${contentLink}`);
        const data = await response.json();

        return {
            title: data.data.title || "Judul Tidak Ditemukan",
            publisherName: data.data.publisher || "Publisher Tidak Ditemukan",
            publisherIcon: data.data.logo || "https://via.placeholder.com/48"
        };
    } catch (error) {
        console.error("Error fetching metadata:", error);
        return null;
    }
};

const ArticleItem = ({ contentLink }) => {
    const [metadata, setMetadata] = useState({ title: "", publisherName: "", publisherIcon: "" });

    useEffect(() => {
        async function fetchMetadata() {
            const data = await getArticleMetadata(contentLink);
            if (data) setMetadata(data);
        }
        fetchMetadata();
    }, [contentLink]);

    return (
        <div className="border-b border-[#13005A] pb-2">
            <a href={contentLink} className="font-bold text-navy hover:underline" target="_blank">
                {metadata.title}
            </a>
            <p className="text-[#13005A] font-md">{metadata.publisherName} </p>
        </div>
    );
};

ArticleItem.propTypes = {
  contentLink: PropTypes.string.isRequired
};

export default ArticleItem;