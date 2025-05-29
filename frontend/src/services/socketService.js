import { io } from "socket.io-client";
 
export const socket = io("http://localhost:3000");

socket.on("serverTest", (msg) => {
    console.log(msg);
});

export const joinSession = (sessionId) => {
    socket.emit("joinSession", sessionId);
};

export const sendMessage = (sessionId, userId, message) => {
    socket.emit("sendMessage", { sessionId, userId, message });
};

export const listenForMessages = (callback) => {
    socket.off("receiveMessage");
    socket.on("receiveMessage", callback);
};
 
export const leaveSession = (sessionId) => {
    socket.emit("leaveSession", sessionId);
    socket.off("receiveMessage");
};