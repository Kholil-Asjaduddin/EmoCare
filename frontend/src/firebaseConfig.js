// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_Firebase_API_KEY,
  authDomain: import.meta.env.VITE_Firebase_AUTH_DOMAIN,
  databaseURL: import.meta.env.VITE_Firebase_DATABASE_URL,
  projectId: import.meta.env.VITE_Firebase_PROJECT_ID,
  storageBucket: import.meta.env.VITE_Firebase_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_Firebase_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_Firebase_APP_ID
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp;