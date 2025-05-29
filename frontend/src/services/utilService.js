import { getDatabase, ref, child, get } from "firebase/database";
import firebaseApp from "../firebaseConfig";

const db = getDatabase(firebaseApp);
const dbRef = ref(db);

export const getUserData = async (userRole, userId) => {
  try {
    const snapshot = await get(child(dbRef, `users/${userRole}s`));
    if (snapshot.hasChild(userId)) {console.log(snapshot.val()[userId])
      return snapshot.val()[userId];
    } else {
      return false;
    }
  } catch (error) {
    console.error(error);
    return false;
  }
};