const { db } = require("../config/firebaseAdmin");
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

module.exports = { saveClientProfile };