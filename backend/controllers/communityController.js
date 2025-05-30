const { db } = require("../config/firebaseAdmin");
const { findCommunityById } = require("../utils/communityUtils");
const Community = require("../models/community");

const createCommunity = async (req, res) => {
    try {
        const { name, userId } = req.body;

        if (!name || !userId) {
            return res.status(400).json({ status: 400, error: "Community name and user ID are required" });
        }

        const communitiesRef = db.ref("communities");
        const communitiesSnapshot = await communitiesRef.once("value");
        const communitiesData = communitiesSnapshot.val();

        if (communitiesData) {
            const nameExists = Object.values(communitiesData).some(
                community => community.name.toLowerCase() === name.toLowerCase()
            );
            if (nameExists) {
                return res.status(400).json({ status: 400, error: "Community name already exists" });
            }
        }

        const communityRef = communitiesRef.push();
        const communityId = communityRef.key;

        const newCommunity = new Community(communityId, name, 1, [userId]);

        await communityRef.set(newCommunity);

        res.status(201).json({ status: 201, communityId, name, message: "Community created successfully" });
    } catch (error) {
        res.status(500).json({ status: 500, error: error.message });
    }
};

const joinCommunity = async (req, res) => {
    try {
        const { communityId, userId } = req.body;

        if (!communityId || !userId) {
            return res.status(400).json({ status: 400, error: "Community ID and user ID are required" });
        }

        const communityData = await findCommunityById(communityId);
        if (!communityData) {
            return res.status(404).json({ status: 404, error: "Community not found" });
        }

        if (communityData.members.includes(userId)) {
            return res.status(400).json({ status: 400, error: "User already in community" });
        }

        communityData.members.push(userId);
        communityData.memberCount += 1;

        await db.ref(`communities/${communityId}`).set(communityData);

        res.status(200).json({ status: 200, communityId, message: "Joined community successfully" });
    } catch (error) {
        res.status(500).json({ status: 500, error: error.message });
    }
};

const leaveCommunity = async (req, res) => {
    try {
        const { communityId, userId } = req.body;

        if (!communityId || !userId) {
            return res.status(400).json({ status: 400, error: "Community ID and user ID are required" });
        }

        const communityData = await findCommunityById(communityId);
        if (!communityData) {
            return res.status(404).json({ status: 404, error: "Community not found" });
        }

        if (!communityData.members.includes(userId)) {
            return res.status(400).json({ status: 400, error: "User is not a member of this community" });
        }

        communityData.members = communityData.members.filter(memberId => memberId !== userId);
        communityData.memberCount -= 1;

        await db.ref(`communities/${communityId}`).set(communityData);

        res.status(200).json({ status: 200, communityId, message: "Left community successfully" });
    } catch (error) {
        res.status(500).json({ status: 500, error: error.message });
    }
};

module.exports = { createCommunity, joinCommunity, leaveCommunity };