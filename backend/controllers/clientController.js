const { db } = require("../config/firebaseAdmin");
const { findUserById } = require("../utils/userUtils");
const Client = require("../models/client");

const saveClientProfile = async (req, res) => {
    try {
        const { userId, username, photoBase64 } = req.body;

        if (!userId || !username) {
            return res.status(400).json({ status: 400, error: "User ID and username are required" });
        }

        const newClient = new Client(userId, username, photoBase64);

        await db.ref(`users/clients/${userId}`).set(newClient);

        res.status(201).json({ status: 201, userId, username, message: "Client data saved successfully" });
    } catch (error) {
        res.status(500).json({ status: 500, error: error.message });
    }
};

const updateClientProfile = async (req, res) => {
    try {
        const { userId, username, photoBase64 } = req.body;

        if (!userId || !username) {
            return res.status(400).json({ status: 400, error: "User ID and username are required" });
        }

        const userData = await findUserById(userId);
        if (!userData) {
            return res.status(404).json({ status: 404, error: "User not found" });
        }

        if (userData.role !== "client") {
            return res.status(403).json({ status: 403, error: "User is not a client" });
        }

        const updatedClient = new Client(userId, username, photoBase64);

        await db.ref(`users/clients/${userId}`).set(updatedClient);

        res.status(200).json({ status: 200, userId, username, message: "Client data updated successfully" });
    } catch (error) {
        res.status(500).json({ status: 500, error: error.message });
    }
};

module.exports = { saveClientProfile, updateClientProfile };