const { db } = require("../config/firebaseAdmin");
const Client = require("../models/client");

const saveClientData = async (req, res) => {
    try {
        const { userId, username, photoBase64 } = req.body;

        if (!userId || !username || !photoBase64) {
            return res.status(400).json({ error: "User ID, username, and photo are required" });
        }

        const newClient = new Client(userId, username, photoBase64);

        await db.ref(`clients/${userId}`).set(newClient);

        res.status(201).json({ message: "Client data saved successfully", userId, username });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = { saveClientData };