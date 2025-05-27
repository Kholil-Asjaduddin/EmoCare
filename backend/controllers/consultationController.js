const { db } = require("../config/firebaseAdmin");
const { findUserById } = require("../utils/userUtils");
const Consultation = require("../models/consultation");

const bookConsultation = async (req, res) => {
    try {
        const { clientId, psychologistId, date, time } = req.body;

        if (!clientId || !psychologistId || !date || !time) {
            return res.status(400).json({ status: 400, error: "Client ID, psychologist ID, date, and time are required" });
        }

        const clientData  = await findUserById(clientId);
        if (!clientData ) {
            return res.status(404).json({ status: 404, error: "Client not found" });
        }

        const psychologistData  = await findUserById(psychologistId);
        if (!psychologistData ) {
            return res.status(404).json({ status: 404, error: "PsychologistData not found" });
        }

        const allowedTimes = ["12:00", "14:00", "16:00"];
        if (!allowedTimes.includes(time)) {
            return res.status(400).json({ status: 400, error: "Invalid consultation time. Available slots are 12:00, 14:00, 16:00 (Monday-Friday)" });
        }

        const selectedDate = new Date(date);
        const dayOfWeek = selectedDate.getDay();
        if (dayOfWeek === 0 || dayOfWeek === 6) {
            return res.status(400).json({ status: 400, error: "Consultations are only available from Monday to Friday" });
        }

        const consultationRef = db.ref("consultations").push();
        const consultationId = consultationRef.key;

        const newConsultation = new Consultation(consultationId, clientId, psychologistId, date, time);

        await consultationRef.set(newConsultation);

        res.status(201).json({ status: 201, consultationId, message: "Consultation booked successfully" });
    } catch (error) {
        res.status(500).json({ status: 500, error: error.message });
    }
};

module.exports = { bookConsultation };