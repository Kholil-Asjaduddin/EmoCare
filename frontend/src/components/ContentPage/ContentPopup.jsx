import { IoIosClose } from 'react-icons/io';
import { useState } from "react";
import PropTypes from "prop-types";

function generateRandomId(length = 20) {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
        result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
}

const ContentPopup = ({ onClose, onSuccess, type }) => {
    const [title, setTitle] = useState("");
    const [contentLink, setContentLink] = useState("");
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setLoading(true);
    try {
            let endpoint = "";
            let body = {};
            const contentId = generateRandomId();
            if (type === "Article") {
                endpoint = `${import.meta.env.VITE_BACKEND_URL}/education/upload-article`;
                body = { contentId, contentLink };
            } else if (type === "Podcast") {
                endpoint = `${import.meta.env.VITE_BACKEND_URL}/education/upload-podcast`;
                body = { contentId, contentLink, title };
            } else if (type === "Video") {
                endpoint = `${import.meta.env.VITE_BACKEND_URL}/education/upload-video`;
                body = { contentId, contentLink, title };
            }
            const response = await fetch(endpoint, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body),
            });
            const data = await response.json();
            if (!response.ok) throw new Error(data.error || "Failed to upload content");
            if (onSuccess) onSuccess();
            onClose();
            console.log("POST body:", body, "endpoint:", endpoint);
        } catch (err) {
            setError(err.message);
        }
        setLoading(false);
    };

    return (
        <div className="scale-80 fixed top-1/2 left-1/2 w-[492px] h-[580px] bg-[#C6DFEA] z-[1000] rounded-xl shadow-lg transform -translate-x-1/2 -translate-y-1/2 overflow-hidden font-poppins">
            {/* Header */}
            <div className="bg-[#9DC8DC] h-[60px] flex items-center justify-between px-4">
                <h2 className="text-[#00337C] text-xl font-medium">Add Content</h2>
                <button onClick={onClose} className="cursor-pointer">
                    <IoIosClose size={36} color="#13005A" />
                </button>
            </div>
            {/* Body */}
            <form className="p-6 space-y-6 text-[#00337C]" onSubmit={handleSubmit}>
                <div>
                    <label className="block text-xl mb-2">Input Link</label>
                    <input
                        type="text"
                        value={contentLink}
                        onChange={e => setContentLink(e.target.value)}
                        className="w-full h-[60px] border border-black rounded-[32px] px-8 text-[#13005A] text-lg focus:outline-none"
                        placeholder="Enter link"
                        required
                    />
                </div>
                {/* Title (only for Video/Podcast) */}
                {type !== 'Article' && (
                    <div>
                        <label className="block text-xl mb-2">Title</label>
                        <textarea
                            value={title}
                            onChange={e => setTitle(e.target.value)}
                            className="w-full h-[80px] border border-black rounded-[32px] px-8 py-4 text-[#13005A] text-lg resize-none focus:outline-none"
                            placeholder="Enter title"
                            required
                        />
                    </div>
                )}
                {error && <div className="text-red-500 text-center">{error}</div>}
                <div className="scale-80 justify-center flex pt-10">
                    <button
                        type="submit"
                        disabled={loading}
                        className="bg-[#03C988] text-[#13005A] text-2xl font-medium rounded-[40px] w-[149px] h-[59px] shadow-md"
                    >
                        {loading ? "Uploading..." : "Done"}
                    </button>
                </div>
            </form>
        </div>
    );
};

ContentPopup.propTypes = {
  onClose: PropTypes.func.isRequired,
  onSuccess: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired, 
};

export default ContentPopup;