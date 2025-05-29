import MessageBubble from "./MessageBubble";
import { IoSend } from "react-icons/io5";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { socket, joinSession, sendMessage, listenForMessages, leaveSession } from "../../services/socketService";

const ChatSection = ({ sessionId, userId }) => {
    const [messages, setMessages] = useState([]);
    const [messageInput, setMessageInput] = useState("");

    useEffect(() => {
        joinSession(sessionId);

        const handleNewMessage = (newMessage) => {
            setMessages((prev) => [...prev, newMessage]);
            console.log("Pesan diterima di client:", newMessage);
        };
        listenForMessages(handleNewMessage);

        return () => {
            leaveSession(sessionId);
            socket.off("receiveMessage", handleNewMessage);
        };
    }, [sessionId]);
 
    const handleSendMessage = () => {
    if (!messageInput.trim()) return;

        if (messageInput.trim()) {
            sendMessage(sessionId, userId, messageInput);
            console.log("Pesan terkirim:", {
                sessionId,
                userId,
                message: messageInput
            });
            setMessageInput("");
        }
    };


    return (
        <div className="flex-1 flex flex-col items-center py-10 px-6 bg-[#C6DFEA] overflow-y-auto overflow-x-hidden scrollbar-hidden-hover">

            {/* Messages */}
            <div className="w-full max-w-4xl h-full flex flex-col gap-4 overflow-y-auto scrollbar-hidden-hover pt-10">
                {messages.map((msg, index) => (
                    <MessageBubble
                        key={index}
                        text={msg.message}
                        time={new Date(msg.timestamp).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                        isSender={msg.userId === userId}
                    />
                ))}
            </div>


            {/* Input Box */}
            <div className="absolute bottom-0 w-[90%] max-w-4xl h-12 bg-light">
                <div className="h-full flex items-center bg-white border rounded-full shadow-md px-3 py-1">
                    <input
                        type="text"
                        placeholder="Type a message..."
                        className="flex-1 outline-none text-lg"
                        value={messageInput}
                        onChange={(e) => setMessageInput(e.target.value)}
                    />
                    <button className="ml-2 text-gray-500 hover:text-gray-700" onClick={handleSendMessage}>
                        <IoSend size={24} />
                    </button>
                </div>
            </div>
        </div>
    );
};

ChatSection.propTypes = {
  sessionId: PropTypes.string.isRequired,
  userId: PropTypes.string.isRequired,
};

export default ChatSection;