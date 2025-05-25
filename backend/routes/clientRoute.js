const express = require("express");
const { saveClientData } = require("../controllers/clientController");

const router = express.Router();

router.post("/save-client", saveClientData);

module.exports = router;