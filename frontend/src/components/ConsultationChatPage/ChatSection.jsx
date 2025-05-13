import MessageBubble from "./MessageBubble";
import { IoSend } from "react-icons/io5";

const ChatSection = () => {
    return (
        <div className="flex-1 flex flex-col items-center py-10 px-6 bg-[#C6DFEA] relative">
            {/* Date */}
            <div className="bg-gray-300 text-blue-dark text-[15px] text-lg px-3 py-1 mt-5 rounded-lg shadow-md">
                1 Jan 2025
            </div>

            {/* Messages */}
            <div className="flex flex-col space-y-6 mt-6 w-full max-w-4xl">
                <MessageBubble text="Hello! How can I help you today?" time="12:01" isSender={false} />
                <MessageBubble text="I have been feeling very anxious lately." time="12:05" isSender={true} />
                <MessageBubble text="I understand. Can you tell me more about what's causing the anxiety?" time="12:10" isSender={false} />
            </div>

            {/* Input Box */}
            <div className="absolute bottom-6 w-[90%] max-w-4xl h-[8%] flex items-center bg-white border rounded-full shadow-md px-6 py-4">
                <input type="text" placeholder="Type a message..." className="flex-1 outline-none text-lg" />
                <button className="ml-2 text-gray-500 hover:text-gray-700">
                    <IoSend size={24} />
                </button>

            </div>
        </div>
    );
};

export default ChatSection;