const express = require('express');
const cors = require("cors");
const dotenv = require("dotenv");

const app = express();
app.use(cors());
app.use(express.json());

dotenv.config();

const accountRoutes = require("./routes/accountRoutes");
const chatbotRoutes = require("./routes/chatbotRoutes");

app.use("/account", accountRoutes);
app.use("/chatbot", chatbotRoutes);

// Run the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});