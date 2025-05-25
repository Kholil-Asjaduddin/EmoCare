import { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getCurrentUser } from "../services/authService";
import LandingPage from "./LandingPage/LandingPage";
import HomePage from "./HomePage/HomePage";

const ProtectedRoute = () => {
  const [user, setUser] = useState(undefined);
  const auth = getAuth();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      if (firebaseUser) {
        const currentUser = await getCurrentUser();
        setUser(currentUser);
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, [auth]);

  return user === undefined ? null : user ? <HomePage /> : <LandingPage />;
};

export default ProtectedRoute;