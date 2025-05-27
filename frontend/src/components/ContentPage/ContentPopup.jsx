import { IoIosClose } from 'react-icons/io';
import PropTypes from "prop-types";

const ContentPopup = ({ onClose, type }) => {
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
            <div className="p-6 space-y-6 text-[#00337C]">
                {/* Input Link */}
                <div>
                    <label className="block text-xl mb-2">Input Link</label>
                    <input
                        type="text"
                        className="w-full h-[60px] border border-black rounded-[32px] px-8 text-[#13005A] text-lg focus:outline-none"
                        placeholder="Enter link"
                    />
                </div>

                {/* Title (only for Video/Podcast) */}
                {type !== 'Article' && (
                    <div>
                        <label className="block text-xl mb-2">Title</label>
                        <textarea
                            className="w-full h-[80px] border border-black rounded-[32px] px-8 py-4 text-[#13005A] text-lg resize-none focus:outline-none"
                            placeholder="Enter title"
                        />
                    </div>
                )}

                {/* Done Button */}
                <div className="scale-80 justify-center flex pt-10">
                    <button className="bg-[#03C988] text-[#13005A] text-2xl font-medium rounded-[40px] w-[149px] h-[59px] shadow-md">
                        Done
                    </button>
                </div>
            </div>
        </div>
    );
};

ContentPopup.propTypes = {
  onClose: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired, 
};

export default ContentPopup;