import { io } from "socket.io-client";
 
const socket = io("http://localhost:3000");

socket.on("serverTest", (msg) => {
    console.log(msg);
});
 
// 🔥 Fungsi untuk join session
export const joinSession = (sessionId) => {
    socket.emit("joinSession", sessionId);
};
 
// 🔥 Fungsi untuk mengirim pesan
export const sendMessage = (sessionId, userId, message) => {
    socket.emit("sendMessage", { sessionId, userId, message });
};
 
// 🔥 Fungsi untuk menerima pesan baru
export const listenForMessages = (callback) => {
    socket.on("receiveMessage", callback);
};
 
// 🔥 Fungsi untuk keluar dari sesi konsultasi
export const leaveSession = (sessionId) => {
    socket.emit("leaveSession", sessionId);
    socket.off("receiveMessage");
};
 
export default socket;