const { v4: uuidv4 } = require('uuid');
const db = require('../firebase');

// 🔽 Upload Video
const uploadVideo = async (req, res) => {
  try {
    const { contentLink, title } = req.body;
    const contentId = uuidv4();

    await db.collection("education-content").doc("videos").collection("items").doc(contentId).set({
      contentId,
      contentLink,
      title
    });

    res.status(201).json({ message: "Video uploaded successfully", contentId });
  } catch (error) {
    res.status(500).json({ message: "Error uploading video", error });
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
