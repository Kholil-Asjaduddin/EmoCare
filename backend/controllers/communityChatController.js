const { db } = require("../config/firebaseAdmin");
const { findUserById } = require("../utils/userUtils");
const { findCommunityById } = require("../utils/communityUtils");
const CommunityChat = require("../models/communityChat");

const sendMessage = async (req, res) => {
    try {
        const { communityId, userId, text } = req.body;

        if (!communityId || !userId || !text) {
            return res.status(400).json({ status: 400, error: "Community ID, user ID, and text are required" });
        }

        const communityData = await findCommunityById(communityId);
        if (!communityData) {
            return res.status(404).json({ status: 404, error: "Community not found" });
        }

        if (!communityData.members.includes(userId)) {
            return res.status(403).json({ status: 403, error: "User is not a member of this community" });
        }

        const senderName = await findUserById(userId);
        if (!senderName) {
            return res.status(404).json({ status: 404, error: "User name not found" });
        }

        const messageRef = db.ref(`communityChats/${communityId}/messages`).push();
        const messageId = messageRef.key;

        const newMessage = new CommunityChat(messageId, communityId, senderName, text, Date.now());

        await messageRef.set(newMessage);

        res.status(201).json({ status: 201, messageId, message: "Message sent successfully" });
    } catch (error) {
        res.status(500).json({ status: 500, error: error.message });
    }
};

module.exports = { sendMessage };