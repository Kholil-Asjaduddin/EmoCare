import { signInWithEmailAndPassword } from "firebase/auth";
import auth from "../firebaseConfig";

export const loginUser = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    return { uid: userCredential.user.uid, email: userCredential.user.email };
  } catch (error) {
    throw new Error(error.message);
  }
};