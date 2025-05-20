import { useState } from "react";
import MessageBubble from "./MessageBubble";
import { IoSend } from "react-icons/io5";

const ChatSection = () => {
    const [messages, setMessages] = useState([]); // Awalnya kosong
    const [inputValue, setInputValue] = useState("");

    // Daftar respons chatbot secara bergantian
    const consultationResponses = [
        "It sounds like a tough situation. Have you tried talking to someone about it?",
        "I appreciate you sharing this with me. What do you think would help you feel more at ease?",
        "Sometimes writing down your feelings can help make sense of things. Would you like to try?",
        "Deep breaths can work wonders. Would you like a short breathing exercise?",
        "You're doing your best, and that's enough. What's one small thing you can do for yourself today?"
    ];

    // Fungsi untuk menangani pengiriman pesan
    const handleSendMessage = () => {
        if (!inputValue.trim()) return; // Cegah input kosong

        const userMessage = {
            text: inputValue,
            time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
            isSender: true
        };

        setMessages((prevMessages) => [...prevMessages, userMessage]); // Tambahkan pesan pengguna
        setInputValue(""); // Kosongkan input

        // Tambahkan respons chatbot setelah 1 detik
        setTimeout(() => {
            const botMessage = {
                text: consultationResponses[Math.floor(Math.random() * consultationResponses.length)],
                time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
                isSender: false
            };
            setMessages((prevMessages) => [...prevMessages, botMessage]); // Tambahkan respons chatbot
        }, 1000);
    };

    return (
        <div className="flex-1 flex flex-col items-center py-10 px-6 bg-[#C6DFEA] overflow-y-auto overflow-x-hidden scrollbar-hidden-hover">
            {/* Date */}
            <div className="bg-gray-300 text-blue-dark text-[15px] text-lg px-3 py-1 mt-5 rounded-lg shadow-md">
                {new Date().toLocaleDateString()}
            </div>

            {/* Messages */}
            <div className="flex flex-col space-y-6 mt-6 w-full max-w-4xl">
                {messages.map((msg, index) => (
                    <MessageBubble key={index} text={msg.text} time={msg.time} isSender={msg.isSender} />
                ))}
            </div>

            {/* Input Box */}
            <div className="absolute bottom-0 w-[90%] max-w-4xl h-12 bg-light">
                <div className="h-full flex items-center bg-white border rounded-full shadow-md px-3 py-1">
                    <input
                        type="text"
                        placeholder="Type a message..."
                        className="flex-1 outline-none text-lg"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        onKeyPress={(e) => e.key === "Enter" && handleSendMessage()} // Kirim dengan Enter
                    />
                    <button className="ml-2 text-gray-500 hover:text-gray-700" onClick={handleSendMessage}>
                        <IoSend size={24} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ChatSection;