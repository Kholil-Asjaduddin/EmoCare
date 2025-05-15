import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import LoginForm from "./LoginForm";

const LoginPage = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user, navigate]);

  return (
    <div className="w-screen h-screen flex items-center justify-center">
      {/* Left Side - Welcome Message */}
      <div className="w-2/5 h-full flex items-center justify-center bg-nav text-center">
        <h1 className="text-navy text-6xl font-semibold leading-tight">
          Welcome Back!
        </h1>
      </div>

      {/* Right Side - Login Form atau Redirect */}
      <div className="w-3/5 h-full flex items-center justify-center">
        {!user ? (
          <LoginForm onLoginSuccess={setUser} />
        ) : (
          <p className="text-2xl text-navy">Redirecting...</p>
        )}
      </div>
    </div>
  );
};

export default LoginPage;