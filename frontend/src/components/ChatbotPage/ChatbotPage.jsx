import MessageBubble from "./MessageBubble";
import { IoSend } from "react-icons/io5";

const ChatbotPage = () => {
    return (
        <div className="w-screen h-screen bg-light">
            {/* Chat Container */}
            <div className="flex flex-col flex-grow items-center justify-center px-4 pt-20 w-full">
                {/* Messages */}
                <div className="flex flex-col space-y-6 w-full max-w-4xl">
                    <MessageBubble text="Hello! How can I help you today?" time="12:01" isSender={false} />
                    <MessageBubble text="I have been feeling very stressed lately." time="12:05" isSender={true} />
                    <MessageBubble text="I understand. Can you tell me more about what's causing the stress?" time="12:10" isSender={false} />
                </div>
            </div>

            {/* Message Input Box */}
            <div className="w-full max-w-4xl mx-auto p-4 pt-30">
                <div className="flex items-center bg-white rounded-full shadow-md px-4 py-2">
                    <input
                        type="text"
                        //placeholder="Type here..."
                        className="w-full outline-none text-gray-700"
                    />
                    <button className="ml-2 text-gray-500 hover:text-gray-700">
                        <IoSend size={24} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ChatbotPage;