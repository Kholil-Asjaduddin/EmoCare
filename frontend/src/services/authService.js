import { getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { getDatabase, ref, child, get } from "firebase/database";
import firebaseApp from "../firebaseConfig";

const auth = getAuth(firebaseApp);

const db = getDatabase(firebaseApp);
const dbRef = ref(db);

const findUserInSubCollections = async (subCollectionName, userId) => {
  try {
    const snapshot = await get(child(dbRef, `users/${subCollectionName}`));
    if (snapshot.hasChild(userId)) {
      return snapshot.val()[userId];
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

    var username = null;
    var photoBase64 = null;
    var userRole = null;
    var userSaved = false;
    if (clientSnapshot) {
      username = clientSnapshot.username;
      photoBase64 = clientSnapshot.photoBase64;
      userRole = "client";
      userSaved = true;
    }
    else if (psychogistSnapshot) {
      username = psychogistSnapshot.username;
      photoBase64 = psychogistSnapshot.photoBase64;
      userRole = "psychogist";
      userSaved = true;
    } else {
      userSaved = false;
    }
    
    return { uid: userId, username: username, photoBase64: photoBase64, role: userRole, userSaved: userSaved };
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

export const logoutUser = async () => {
    try {
        await signOut(auth);
        return { status: 200, message: "User logged out successfully" };
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