const admin = require("firebase-admin");
const serviceAccount = require("./ServiceAccountKey.json"); 

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://emocare-4b98e.firebaseio.com" 
});

const db = admin.firestore(); 

module.exports = db;
