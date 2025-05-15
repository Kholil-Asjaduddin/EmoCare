import { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import LandingPage from "./LandingPage/LandingPage";
import HomePage from "./HomePage/HomePage";

const ProtectedRoute = () => {
  const [user, setUser] = useState(null);
  const auth = getAuth();

  useEffect(() => {
    onAuthStateChanged(auth, (loggedInUser) => {
      setUser(loggedInUser);
    });
  }, [auth]);

  return user ? <HomePage /> : <LandingPage />;
};

export default ProtectedRoute;