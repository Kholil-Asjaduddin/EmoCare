import { IoIosClose } from 'react-icons/io';
import PropTypes from "prop-types";

const ContentPopup = ({ onClose }) => {
    return (
        <div className="scale-80 fixed top-1/2 left-1/2 w-[492px] h-[700px] bg-[#C6DFEA] z-[1000] rounded-xl shadow-lg transform -translate-x-1/2 -translate-y-1/2 overflow-hidden font-poppins">
            {/* Header */}
            <div className="bg-[#9DC8DC] h-[80px] flex items-center justify-between px-6">
                <h2 className="text-[#00337C] text-2xl font-medium">Add Content</h2>
                <button onClick={onClose} className="cursor-pointer">
                    <IoIosClose size={36} color="#13005A" />
                </button>
            </div>

            {/* Body */}
            <div className="p-6 space-y-6 text-[#00337C]">
                {/* Type Selection */}
                <div>
                    <label className="block text-xl font-medium mb-2">Type</label>
                    <div className="flex gap-20 ml-9 text-lg">
                        <label className="flex items-center gap-2">
                            <input type="radio" name="type" defaultChecked />
                            Video
                        </label>
                        <label className="flex items-center gap-2">
                            <input type="radio" name="type" />
                            Podcast
                        </label>
                        <label className="flex items-center gap-2">
                            <input type="radio" name="type" />
                            Article
                        </label>
                    </div>
                </div>

                {/* Input Link */}
                <div>
                    <label className="block text-xl mb-2">Input Link</label>
                    <input
                        type="text"
                        className="w-full h-[60px] border border-black rounded-[32px] px-8 text-[#13005A] text-lg focus:outline-none"
                        placeholder="Enter link"
                    />
                </div>

                {/* Title */}
                <div>
                    <label className="block text-xl mb-2">Title</label>
                    <textarea
                        className="w-full h-[80px] border border-black rounded-[32px] px-8 py-4 text-[#13005A] text-lg resize-none focus:outline-none"
                        placeholder="Enter title"
                    />
                </div>

                {/* Description
                <div>
                    <label className="block text-xl mb-2">Description</label>
                    <textarea
                        className="w-full h-[80px] border border-black rounded-[32px] px-8 py-4 text-[#13005A] text-lg resize-none focus:outline-none"
                        placeholder="Enter description"
                    />
                </div> */}

                {/* Upload Thumbnail */}
                {/*<div>*/}
                {/*    <label className="block text-xl mb-1">Thumbnail</label>*/}
                {/*    <button className="mt-2 bg-[#509FBF] text-[#13005A] text-lg font-medium rounded-[32px] px-6 py-2 shadow-md">*/}
                {/*        Upload image*/}
                {/*    </button>*/}
                {/*</div>*/}

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
};

export default ContentPopup;