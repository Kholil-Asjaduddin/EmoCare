import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { getDatabase, ref, child, get } from "firebase/database";
import firebaseApp from "../firebaseConfig";

const auth = getAuth(firebaseApp);

const db = getDatabase(firebaseApp);
const dbRef = ref(db);

const findUserInSubCollections = async (subCollectionName, userId) => {
  get(child(dbRef, `users/${subCollectionName}/${userId}`)).then((snapshot) => {
    if (snapshot.exists()) {
      return true;
    } else {
      return false;
    }
  }).catch((error) => {
    console.error(error);
  });
};


export const loginUser = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);

    const clientSnapshot = await findUserInSubCollections("clients", userCredential.user.uid);
    const psychogistSnapshot = await findUserInSubCollections("psychogist", userCredential.user.uid);
    const userSaved = clientSnapshot || psychogistSnapshot;

    return { uid: userCredential.user.uid, email: userCredential.user.email, userSaved: userSaved };
  } catch (error) {
    throw new Error(error.message);
  }
};

export const getCurrentUser = () => {
  return auth.currentUser;
};