const { Server } = require("socket.io");

const initializeSocket = (server) => {
    const io = new Server(server, {
        cors: {
            origin: "http://localhost:5173",
            methods: ["GET", "POST"]
        }
    });

    io.on("connection", (socket) => {
        socket.on("joinSession", (sessionId) => {
            socket.join(sessionId);
            console.log(`User joined session: ${sessionId}`);
        });

        socket.on("sendMessage", ({ sessionId, userId, message }) => {
            console.log("Pesan diterima di server:", { sessionId, userId, message });
            io.to(sessionId).emit("receiveMessage", { userId, message, timestamp: Date.now() });
        });

        socket.on("leaveSession", (sessionId) => {
            socket.leave(sessionId);
            console.log(`User left session: ${sessionId}`);
        });

        socket.on("disconnect", () => {
            console.log(`User disconnected: ${socket.id}`);
        });
    });

    return io;
};

module.exports = { initializeSocket };