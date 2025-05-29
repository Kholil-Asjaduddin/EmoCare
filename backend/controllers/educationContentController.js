const { db } = require("../config/firebaseAdmin");
const EducationVideo = require("../models/educationVideo");
const EducationPodcast = require("../models/educationPodcast");
const EducationArticle = require("../models/educationArticle");

// 🔽 Upload Video
const uploadVideo = async (req, res) => { // nama
  try {
    const { contentId, contentLink, title } = req.body; // request body

    const newEducationVideo = new EducationVideo(contentId, contentLink, title); // model, contructor
    await db.ref(`education-content/videos/${contentId}`).set(newEducationVideo); // url, set()

    res.status(201).json({ status: 201, contentLink, title, message: "Uploaded video successfully" }); // msg
  } catch (error) {
    res.status(500).json({ status: 500, error: error.message });
  }
};

// 🔽 Upload Podcast
const uploadPodcast = async (req, res) => { // nama
  try {
    const { contentId, contentLink, title } = req.body; // request body

    const newEducationPodcast = new EducationPodcast(contentId, contentLink, title); // model, contructor
    await db.ref(`education-content/podcasts/${contentId}`).set(newEducationPodcast); // url, set()

    res.status(201).json({ status: 201, contentLink, title, message: "Uploaded podcast successfully" }); // msg
  } catch (error) {
    res.status(500).json({ status: 500, error: error.message });
  }
};

// 🔽 Upload Artikel
const uploadArticle = async (req, res) => { // nama
  try {
    const { contentId, contentLink } = req.body; // request body

    const newEducationArticle = new EducationArticle(contentId, contentLink); // model, contructor
    await db.ref(`education-content/articles/${contentId}`).set(newEducationArticle); // url, set()

    res.status(201).json({ status: 201, contentLink, message: "Uploaded article successfully" }); // msg
  } catch (error) {
    res.status(500).json({ status: 500, error: error.message });
  }
};

module.exports = {
  uploadVideo,
  uploadPodcast,
  uploadArticle
};
