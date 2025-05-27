const express = require("express");
const { bookConsultation } = require("../controllers/consultationController");
const router = express.Router();

router.post("/book-consultation", bookConsultation);

module.exports = router;