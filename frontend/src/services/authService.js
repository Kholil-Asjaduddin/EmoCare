import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { getDatabase, ref, child, get } from "firebase/database";
import firebaseApp from "../firebaseConfig";

const auth = getAuth(firebaseApp);

const db = getDatabase(firebaseApp);
const dbRef = ref(db);

const findUserInSubCollections = async (subCollectionName, userId) => {
  try {
    const snapshot = await get(child(dbRef, `users/${subCollectionName}`));
    if (snapshot.hasChild(userId)) {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    console.error(error);
    return false;
  }
};

const checkUserAvailability = async (userId) => {
  try {
    const clientSnapshot = await findUserInSubCollections("clients", userId);
    const psychogistSnapshot = await findUserInSubCollections("psychogist", userId);

    var userRole = null;
    var userSaved = false;
    if (clientSnapshot) {
      userRole = "client";
      userSaved = true;
    }
    else if (psychogistSnapshot) {
      userRole = "psychogist";
      userSaved = true;
    } else {
      userSaved = false;
    }
    
    return { uid: userId, role: userRole, userSaved: userSaved };
  } catch (error) {
    console.error(error.message);
    throw new Error(error.message);
  }
}


export const loginUser = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const userSnapshot = await checkUserAvailability(userCredential.user.uid);
    
    return userSnapshot;
  } catch (error) {
    console.error(error.message);
    throw new Error(error.message);
  }
};

export const getCurrentUser = async () => {
    const currentUser = auth.currentUser;
    if (!currentUser) return null;

    const userSnapshot = await checkUserAvailability(currentUser.uid);
    
    return userSnapshot;
};