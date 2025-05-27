const express = require("express");
const { createCommunity, joinCommunity, leaveCommunity } = require("../controllers/communityController");

const router = express.Router();

router.post("/create", createCommunity);
router.post("/join", joinCommunity);
router.post("/leave", leaveCommunity);

module.exports = router;