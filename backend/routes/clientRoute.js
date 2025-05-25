const express = require("express");
const { saveClientProfile } = require("../controllers/clientController");

const router = express.Router();

router.post("/save-client", saveClientProfile);

module.exports = router;