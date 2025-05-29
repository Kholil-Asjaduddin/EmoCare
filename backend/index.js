const express = require('express');
const cors = require("cors");
const dotenv = require("dotenv");
const http = require("http");
const { initializeSocket } = require("./socket/socketHandler");

const app = express();
app.use(cors());
app.use(express.json());

const server = http.createServer(app);
const io = initializeSocket(server);

dotenv.config();

const accountRoutes = require("./routes/accountRoutes");
const clientRoutes = require("./routes/clientRoute");
const psychologistRoutes = require("./routes/psychologistRoutes");
const communityRoutes = require("./routes/communityRoutes");
const communityChatRoutes = require("./routes/communityChatRoutes");
const consultationRoutes = require("./routes/consultationRoutes");
const educationRoutes = require("./routes/educationRoutes");

const chatbotRoutes = require("./routes/chatbotRoutes");

app.use("/account", accountRoutes);
app.use("/client", clientRoutes);
app.use("/psychologist", psychologistRoutes);
app.use("/community", communityRoutes);
app.use("/community-chat", communityChatRoutes);
app.use("/consultation", consultationRoutes);
app.use("/education", educationRoutes);
app.use("/chatbot", chatbotRoutes);

// Run the server
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});