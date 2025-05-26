const express = require("express");
const { sendMessage } = require("../controllers/communityChatController");

const router = express.Router();

router.post("/send-message", sendMessage);

module.exports = router;