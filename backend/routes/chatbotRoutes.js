const express = require("express");
const { getResponse } = require("../controllers/chatbotController");

const router = express.Router();

router.post("/", getResponse);

module.exports = router;