import { useState } from "react";
import MessageBubble from "./MessageBubble";
import { IoSend } from "react-icons/io5";

const ChatbotPage = () => {
    const [messages, setMessages] = useState([]);
    const [inputValue, setInputValue] = useState("");

    const handleSendMessage = async () => {
        if (!inputValue.trim()) return;

        const userMessage = {
            text: inputValue,
            time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
            isSender: true
        };

        setMessages((prevMessages) => [...prevMessages, userMessage]);
        setInputValue("");

        try {
            const res = await fetch(`${import.meta.env.VITE_CHATBOT_URL}/chat`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ text: inputValue })
            });
            const data = await res.json();
            
            const aiMessage = {
                text: data.response,
                time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
                isSender: false
            };
            setMessages((prev) => [...prev, aiMessage]);
        } catch (err) {
            console.error("Gagal fetch ke API:", err);
        }
    };

    return (
        <div className="w-screen h-screen bg-light flex flex-col">
            {/* Chat area */}
            <div className="flex-grow overflow-y-auto overflow-x-hidden scrollbar-hidden-hover px-4 pt-20 w-full flex justify-center">
                <div className="flex flex-col space-y-6 w-full max-w-3xl pb-32">
                    {messages.map((msg, index) => (
                        <MessageBubble key={index} text={msg.text} time={msg.time} isSender={msg.isSender} />
                    ))}
                </div>
            </div>

            {/* Input Chat */}
            <div className="w-full max-w-4xl mx-auto p-4 bg-light fixed bottom-0 left-1/2 -translate-x-1/2">
                <div className="flex items-center bg-white rounded-full shadow-md px-4 py-2">
                    <input
                        type="text"
                        className="w-full outline-none text-gray-700"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                    />
                    <button className="ml-2 text-gray-500 hover:text-gray-700" onClick={handleSendMessage}>
                        <IoSend size={24} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ChatbotPage;