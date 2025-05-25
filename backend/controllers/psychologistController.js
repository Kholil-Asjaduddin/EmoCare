const { db } = require("../config/firebaseAdmin");
const Psychologist = require("../models/psychologist");

const savePsychologistProfile = async (req, res) => {
    try {
        const { userId, username, specialization, experience, photoBase64 } = req.body;

        if (!userId || !username || !specialization || !experience || !photoBase64) {
            return res.status(400).json({ status: 400, error: "User ID, username, specialization, experience, and photo are required" });
        }

        const newPsychologist = new Psychologist(userId, username, specialization, experience, photoBase64);

        await db.ref(`users/psychologists/${userId}`).set(newPsychologist);

        res.status(201).json({ status: 201, userId, username, specialization, experience, message: "Psychologist data saved successfully" });
    } catch (error) {
        res.status(500).json({ status: 500, error: error.message });
    }
};

module.exports = { savePsychologistProfile };