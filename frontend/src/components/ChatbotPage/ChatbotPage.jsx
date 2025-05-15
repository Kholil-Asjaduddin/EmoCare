import MessageBubble from "./MessageBubble";
import { IoSend } from "react-icons/io5";

const ChatbotPage = () => {
    return (
        // <div className="w-screen h-screen bg-light flex flex-col overflow-y-auto overflow-x-hidden scrollbar-hidden-hover">
        //     {/* Chat Container */}
        //     <div className="flex flex-col flex-grow items-center justify-center px-4 pt-20 w-full">
        //         {/* Messages */}
        //         <div className="flex flex-col space-y-6 w-full max-w-4xl">
        //             <MessageBubble text="Hello! How can I help you today?" time="12:01" isSender={false} />
        //             <MessageBubble text="I have been feeling very stressed lately." time="12:05" isSender={true} />
        //             <MessageBubble text="I understand. Can you tell me more about what's causing the stress?" time="12:10" isSender={false} />
        //             <MessageBubble text="I think it's mostly due to work and deadlines." time="12:12" isSender={true} />
        //             <MessageBubble text="That makes sense. Deadlines can be overwhelming. Have you tried any coping strategies?" time="12:15" isSender={false} />
        //             <MessageBubble text="Not really. I usually just push through, but it’s exhausting." time="12:17" isSender={true} />
        //             <MessageBubble text="It's good that you're talking about it. Maybe we can explore some techniques together." time="12:20" isSender={false} />
        //             <MessageBubble text="I'd like that. I want to feel more in control." time="12:23" isSender={true} />
        //         </div>
        //     </div>

        //     {/* Message Input Box */}
        //     <div className="w-full max-w-4xl mx-auto p-4 pt-30">
        //         <div className="flex items-center bg-white rounded-full shadow-md px-4 py-2">
        //             <input
        //                 type="text"
        //                 //placeholder="Type here..."
        //                 className="w-full outline-none text-gray-700"
        //             />
        //             <button className="ml-2 text-gray-500 hover:text-gray-700">
        //                 <IoSend size={24} />
        //             </button>
        //         </div>
        //     </div>
        // </div>
        <div className="w-screen h-screen bg-light flex flex-col">
            {/* Chat messages scrollable area */}
            <div className="flex-grow overflow-y-auto overflow-x-hidden scrollbar-hidden-hover px-4 pt-20 w-full flex justify-center">
                <div className="flex flex-col space-y-6 w-full max-w-3xl pb-32">
                    <MessageBubble text="Hello! How can I help you today?" time="12:01" isSender={false} />
                    <MessageBubble text="I have been feeling very stressed lately." time="12:05" isSender={true} />
                    <MessageBubble text="I understand. Can you tell me more about what's causing the stress?" time="12:10" isSender={false} />
                    <MessageBubble text="I think it's mostly due to work and deadlines." time="12:12" isSender={true} />
                    <MessageBubble text="That makes sense. Deadlines can be overwhelming. Have you tried any coping strategies?" time="12:15" isSender={false} />
                    <MessageBubble text="Not really. I usually just push through, but it’s exhausting." time="12:17" isSender={true} />
                    <MessageBubble text="It's good that you're talking about it. Maybe we can explore some techniques together." time="12:20" isSender={false} />
                    <MessageBubble text="I'd like that. I want to feel more in control." time="12:23" isSender={true} />
                </div>
            </div>

            {/* Input box fixed at the bottom */}
            <div className="w-full max-w-4xl mx-auto p-4 bg-light fixed bottom-0 left-1/2 -translate-x-1/2">
                <div className="flex items-center bg-white rounded-full shadow-md px-4 py-2">
                    <input
                        type="text"
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