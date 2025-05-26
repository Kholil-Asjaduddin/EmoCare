const express = require("express");
const { savePsychologistProfile, updatePsychologistProfile } = require("../controllers/psychologistController");

const router = express.Router();

router.post("/save-profile", savePsychologistProfile);
router.put("/update-profile", updatePsychologistProfile);

module.exports = router;