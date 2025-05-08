import React from "react";

const MessageBubble = ({ text, time, isSender }) => {
    const bgColor = isSender ? "bg-[#509FBF] text-white" : "bg-[#EAF0F1] text-gray-800";

    return (
        <div className={`flex ${isSender ? "justify-end" : "justify-start"}`}>
            <div className={`max-w-[50%] px-6 py-4 rounded-2xl shadow-md ${bgColor}`}>
                <p className="text-lg">{text}</p>
                <p className="text-xs text-right mt-2">{time}</p>
            </div>
        </div>
    );
};

export default MessageBubble;