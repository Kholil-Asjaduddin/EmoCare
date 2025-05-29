const { db } = require("../config/firebaseAdmin");
const EducationVideo = require("../models/educationVideo");

// 🔽 Upload Video
const uploadVideo = async (req, res) => { // nama
  try {
    const { contentId, contentLink, title } = req.body; // request body

    const newEducationVideo = new EducationVideo(contentId, contentLink, title); // model, contructor
    await db.ref(`education-content/videos/${contentId}`).set(newEducationVideo); // url, set()

    res.status(201).json({ status: 201, contentLink, title, message: "Upload video successfully" }); // msg
  } catch (error) {
    res.status(500).json({ status: 500, error: error.message });
  }
};

// 🔽 Upload Podcast
const uploadPodcast = async (req, res) => {
  try {
    const { contentLink, title } = req.body;
    const contentId = uuidv4();

    await db.collection("education-content").doc("podcasts").collection("items").doc(contentId).set({
      contentId,
      contentLink,
      title
    });

    res.status(201).json({ message: "Podcast uploaded successfully", contentId });
  } catch (error) {
    res.status(500).json({ message: "Error uploading podcast", error });
  }
};

// 🔽 Upload Artikel
const uploadArticle = async (req, res) => {
  try {
    const { contentLink } = req.body;
    const contentId = uuidv4();

    await db.collection("education-content").doc("articles").collection("items").doc(contentId).set({
      contentId,
      contentLink
    });

    res.status(201).json({ message: "Article uploaded successfully", contentId });
  } catch (error) {
    res.status(500).json({ message: "Error uploading article", error });
  }
};

module.exports = {
  uploadVideo,
  uploadPodcast,
  uploadArticle
};
