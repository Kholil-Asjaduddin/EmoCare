const express = require("express");
const { saveClientProfile, updateClientProfile } = require("../controllers/clientController");

const router = express.Router();

router.post("/save-profile", saveClientProfile);
router.put("/update-profile", updateClientProfile);

module.exports = router;