const { db } = require("../config/firebaseAdmin");
const Community = require("../models/community");

const createCommunity = async (req, res) => {
    try {
        const { name, userId } = req.body;

        if (!name || !userId) {
            return res.status(400).json({ status: 400, error: "Community name and user ID are required" });
        }

        const communityRef = db.ref("communities").push();
        const communityId = communityRef.key;

        const newCommunity = new Community(communityId, name, 1, [userId]);

        await communityRef.set(newCommunity);

        res.status(201).json({ status: 201, communityId, name, message: "Community created successfully" });
    } catch (error) {
        res.status(500).json({ status: 500, error: error.message });
    }
};


module.exports = { createCommunity };