import { useState } from "react";
import MessageBubble from "./MessageBubble";
import { IoSend } from "react-icons/io5";

const ChatbotPage = () => {
    const [messages, setMessages] = useState([]); // Awalnya kosong
    const [inputValue, setInputValue] = useState("");

    // Daftar respons chatbot secara bergantian
    const chatbotResponses = [
        "I understand. Can you tell me more about what's causing the stress?",
        "That makes sense. Deadlines can be overwhelming. Have you tried any coping strategies?",
        "It's good that you're talking about it. Maybe we can explore some techniques together.",
        "I'm here to listen. Tell me more.",
        "Would you like some relaxation techniques?"
    ];

    // Menangani pengiriman pesan
    const handleSendMessage = () => {
        if (!inputValue.trim()) return; // Cegah input kosong

        const userMessage = {
            text: inputValue,
            time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
            isSender: true
        };

        setMessages((prevMessages) => [...prevMessages, userMessage]); // Tambahkan pesan pengguna

        setInputValue(""); // Kosongkan input

        // Tambahkan respons chatbot setelah 1 detik
        setTimeout(() => {
            const botMessage = {
                text: chatbotResponses[Math.floor(Math.random() * chatbotResponses.length)],
                time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
                isSender: false
            };
            setMessages((prevMessages) => [...prevMessages, botMessage]); // Tambahkan respons chatbot
        }, 1000);
    };

    return (
        <div className="w-screen h-screen bg-light flex flex-col">
            {/* Area Percakapan */}
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
                        onKeyPress={(e) => e.key === "Enter" && handleSendMessage()} // Enter untuk kirim pesan
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