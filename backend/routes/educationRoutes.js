const express = require('express');
const router = express.Router();

const {
  uploadVideo,
  uploadPodcast,
  uploadArticle
} = require('../controllers/educationContentController');

// Routes
router.post('/upload/video', uploadVideo);
router.post('/upload/podcast', uploadPodcast);
router.post('/upload/article', uploadArticle);

module.exports = router;
