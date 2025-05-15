const express = require('express');
const cors = require("cors");
const dotenv = require("dotenv");

const accountRoutes = require("./routes/accountRoutes");

const app = express();
app.use(cors());
app.use(express.json());

dotenv.config();

app.use("/account", accountRoutes);

// Run the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});