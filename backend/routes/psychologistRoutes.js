const express = require("express");
const { savePsychologistProfile } = require("../controllers/psychologistController");

const router = express.Router();

router.post("/save-profile", savePsychologistProfile);

module.exports = router;