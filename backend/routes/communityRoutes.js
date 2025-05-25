const express = require("express");
const { createCommunity, joinCommunity } = require("../controllers/communityController");

const router = express.Router();

router.post("/create", createCommunity);
router.post("/join", joinCommunity);

module.exports = router;