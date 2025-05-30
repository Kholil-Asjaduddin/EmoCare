const admin = require("firebase-admin");
const fs = require("fs");

// Membuat file sementara untuk kredensial Firebase dari environment variable
const serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT);
// const filePath = "/tmp/serviceAccountKey.json";
// fs.writeFileSync(filePath, JSON.stringify(serviceAccount));

// Inisialisasi Firebase Admin SDK
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: process.env.FIREBASE_DATABASE_URL
});

const auth = admin.auth();
const db = admin.database();

module.exports = { auth, db };