import PropTypes from "prop-types";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../../services/authService";
import LoginButton from "./LoginButton";

const LoginForm = ({ onLoginSuccess }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const user = await loginUser(email, password);
      if (!user.userSaved) {
        navigate("/selectrole");
      }
      else {
        onLoginSuccess(user);
      }
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <form className="scale-80 w-[500px] flex flex-col gap-6">
      <h2 className="text-navy text-5xl py-15 mt-[-120px] font-bold text-center">Log In</h2>

      {/* Email Input */}
      <div>
        <label className="block text-black text-xl mb-1">Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full h-[70px] border border-black rounded-4xl px-8 text-navy text-lg focus:outline-none"
          placeholder="Enter your email"
        />
      </div>

      {/* Password Input */}
      <div>
        <label className="block text-black text-xl mb-1">Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full h-[70px] border border-black rounded-4xl px-8 text-navy text-lg focus:outline-none"
          placeholder="Enter your password"
        />
      </div>

      {/* Error Message */}
      {error && <p className="text-red-500 text-center">Failed to login. Please double check your email and password!</p>}

      {/* Login Button */}
      <div className="flex justify-end items-center mt-6 w-full pr-25">
        <LoginButton onClick={handleSubmit} />
      </div>

      {/* Sign Up Link */}
      <p className="text-center text-xl text-navy mt-0">
        Don&apos;t have an account yet?{" "}
        <a href="/signup" className="text-teal underline">
          Sign Up
        </a>
      </p>
    </form>
  );
};

LoginForm.propTypes = {
  onLoginSuccess: PropTypes.func.isRequired,
};

export default LoginForm;