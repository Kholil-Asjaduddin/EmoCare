var admin = require("firebase-admin");
var serviceAccount = require("../serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://emocare-3e290-default-rtdb.asia-southeast1.firebasedatabase.app"
});

const auth = admin.auth();
const db = admin.database();

module.exports = { auth, db };