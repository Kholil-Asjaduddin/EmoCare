const { db } = require("../config/firebaseAdmin");
const Client = require("../models/client");

const saveClientData = async (req, res) => {
    try {
        const { userId, username, photoBase64 } = req.body;

        if (!userId || !username || !photoBase64) {
            return res.status(400).json({ status: 400, error: "User ID, username, and photo are required" });
        }

        const newClient = new Client(userId, username, photoBase64);

        await db.ref(`users/clients/${userId}`).set(newClient);

        res.status(201).json({ status: 201, userId, username, message: "Client data saved successfully" });
    } catch (error) {
        res.status(500).json({ status: 500, error: error.message });
    }
};

module.exports = { saveClientData };