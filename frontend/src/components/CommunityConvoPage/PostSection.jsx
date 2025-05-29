import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import MessageBubble from './MessageBubble';
import { IoSend } from "react-icons/io5";
import firebaseApp from "../../firebaseConfig";
import { getDatabase, ref, get } from "firebase/database";
import { getUserData } from "../../services/utilService";

const database = getDatabase(firebaseApp);

const PostSection = ({ chatId, userId, userJoined, onSuccess, refreshKey }) => {
    const [messages, setMessages] = useState([]);
    const [messageText, setMessageText] = useState("");

    useEffect(() => {
        const fetchMessages = async () => {
            const messagesRef = ref(database, `community-chats/${chatId}/messages`);
            const snapshot = await get(messagesRef);console.log(snapshot.val())
            if (snapshot.exists()) {
                const messagesObj = snapshot.val();
                const messageList = await Promise.all(
                    Object.values(messagesObj).map(async (msg) => {
                        // Ambil nama sender
                        let senderName = "";
                        try {
                            let userData = await getUserData("client", msg.senderId);
                            if (!userData) {
                                userData = await getUserData("psychologist", msg.senderId);
                            }
                            senderName = userData.username;
                        } catch {
                            senderName = "Unknown";
                        }
                        // Cek apakah pengirim adalah user saat ini
                        const isSender = msg.senderId === userId;
                        // Format timestamp
                        const dateObj = new Date(msg.timestamp);
                        const date = dateObj.toLocaleDateString("id-ID", { day: "numeric", month: "short", year: "numeric" });
                        const time = dateObj.toLocaleTimeString("id-ID", { hour: "2-digit", minute: "2-digit" });
                        return {
                            ...msg,
                            senderName,
                            isSender,
                            date,
                            time,
                        };
                    })
                );
                setMessages(messageList.sort((a, b) => a.timestamp - b.timestamp));
            }
        };
        if (chatId) fetchMessages();
    }, [chatId, userId, refreshKey]);

    // Ambil tanggal unik untuk header tanggal
    const dateGroups = {};
    messages.forEach(msg => {
        if (!dateGroups[msg.date]) dateGroups[msg.date] = [];
        dateGroups[msg.date].push(msg);
    });

    const handleMessageTextChange = (e) => {
        const value = e.target.value;
        setMessageText(value);
    };

    const handleSend = async () => {
        if (!userId) {
            console.log("User not authenticated");
            return;
        }

        try {
            const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/community-chat/send-message`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    communityId: chatId,
                    userId: userId,
                    text: messageText,
                })
            });

            if (response.status == 201)
            {
                onSuccess(true);
                setMessageText("");
            }
        } catch (error) {
            console.log(error.message);
            console.error("Error saving profile:", error);
        }
    }

    return(
        <div className="flex-1 flex flex-col items-center py-10 px-6 bg-[#C6DFEA] static overflow-y-auto overflow-x-hidden scrollbar-hidden-hover">
            {/* Messages Grouped by Date */}
            <div className="flex flex-col space-y-6 mt-6 w-full max-w-4xl">
                {Object.entries(dateGroups).map(([date, msgs]) => (
                    <div key={date}>
                        {/* <div className="bg-gray-300 text-blue-dark text-[15px] text-lg px-3 py-1 mt-5 rounded-lg shadow-md text-center">
                            {date}
                        </div> */}
                        {msgs.map((msg) => (
                            <MessageBubble
                                key={msg.messageId}
                                username={msg.isSender ? "You" : msg.senderName}
                                text={msg.text}
                                time={msg.time}
                                date={msg.date}
                                isSender={msg.isSender}
                            />
                        ))}
                    </div>
                ))}
            </div>

            {/* Input Box hanya ditampilkan jika userJoined = true */}
            {userJoined && (
                <div className="absolute bottom-0 w-[62%] max-w-4xl h-12 bg-light">
                    <div className="h-100vh flex items-center bg-white text-black border rounded-full shadow-md px-3 py-1">
                        <input type="text" value={messageText} onChange={handleMessageTextChange} placeholder="Type a message..." className="flex-1 outline-none text-lg" />
                        <button onClick={handleSend} className="ml-2 text-gray-500 hover:text-gray-700">
                            <IoSend size={24} />
                        </button>
                    </div>
                </div>
            )}
        </div>         
    );
}

PostSection.propTypes = {
    chatId: PropTypes.string.isRequired,
    userId: PropTypes.string.isRequired,
    userJoined: PropTypes.bool.isRequired,
    onSuccess: PropTypes.func.isRequired,
    refreshKey: PropTypes.any,
};

export default PostSection;