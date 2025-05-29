import PropTypes from "prop-types";

const MessageBubble = ({ text, time, isSender, username }) => {
    const bgColor = isSender ? "bg-[#509FBF] text-white" : "bg-[#EAF0F1] text-gray-800";
    // const alignment = isSender ? "items-end" : "items-start";
    const usernameAlignment = isSender ? "text-right pr-4" : "text-left pl-4";

    return (
        <div className={`flex flex-col ${isSender ? "items-end" : "items-start"} mb-4`}>
            {/* Username positioned above the bubble */}
            <div className={`text-[#1C82AD] text-base ml-[-10px] leading-[30px] ${usernameAlignment}`}>
                {username}
            </div>
            
            {/* Message bubble */}
            <div className={`relative max-w-[50%] min-w-[25%] px-6 py-4 rounded-2xl shadow-md ${bgColor}`}>
                <p className="text-lg">{text}</p>
                <div className="flex justify-between mt-2">
                    <span className={`text-xs text-right ${isSender ? "text-gray-200" : "text-gray-400"}`}>{time}</span>
                </div>
            </div>
        </div>
    );
};


MessageBubble.propTypes = {
  text: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  isSender: PropTypes.bool.isRequired,
  username: PropTypes.string.isRequired,
};
 
export default MessageBubble;