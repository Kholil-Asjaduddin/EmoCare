const { db } = require("../config/firebaseAdmin");
const { findUserById } = require("../utils/userUtils");
const Psychologist = require("../models/psychologist");

const savePsychologistProfile = async (req, res) => {
    try {
        const { userId, username, specialization, experience, photoBase64 } = req.body;

        if (!userId || !username || !specialization || !experience) {
            return res.status(400).json({ status: 400, error: "User ID, username, specialization, and experience are required" });
        }

        const newPsychologist = new Psychologist(userId, username, specialization, experience, photoBase64);

        await db.ref(`users/psychologists/${userId}`).set(newPsychologist);

        res.status(201).json({ status: 201, userId, username, specialization, experience, message: "Psychologist data saved successfully" });
    } catch (error) {
        res.status(500).json({ status: 500, error: error.message });
    }
};

const updatePsychologistProfile = async (req, res) => {
    try {
        const { userId, username, specialization, experience, photoBase64 } = req.body;

        if (!userId || !username || !specialization || !experience) {
            return res.status(400).json({ status: 400, error: "User ID, username, specialization, and experience are required" });
        }

        const existingUser = await findUserById(userId);
        if (!existingUser) {
            return res.status(404).json({ status: 404, error: "User not found" });
        }

        const updatedPsychologist = new Psychologist(userId, username, specialization, experience, photoBase64);

        await db.ref(`users/psychologists/${userId}`).set(updatedPsychologist);

        res.status(200).json({ status: 200, userId, username, specialization, experience, message: "Psychologist data updated successfully" });
    } catch (error) {
        res.status(500).json({ status: 500, error: error.message });
    }
};

module.exports = { savePsychologistProfile, updatePsychologistProfile };