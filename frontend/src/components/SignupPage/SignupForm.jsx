import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import SignupButton from "./SignupButton";

const SignupForm = ({ onSignupSuccess }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    
    event.preventDefault();

    try {
      const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/account/signup`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      if (!response.ok) throw new Error(data.error || "Signup failed");

      onSignupSuccess(data);
      navigate("/login");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <form className="scale-80 w-[500px] flex flex-col gap-6">
      <h2 className="text-navy text-5xl py-15 mt-[-120px] font-bold text-center">Sign Up</h2>

      {/* Email Input */}
      <div>
        <label className="block text-black text-xl mb-1">Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full h-[65px] border border-black rounded-4xl px-8 text-navy text-lg focus:outline-none"
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
          className="w-full h-[65px] border border-black rounded-4xl px-8 text-navy text-lg focus:outline-none"
          placeholder="Enter your password"
        />
      </div>

      {/* Error Message */}
      {error && <p className="text-red-500 text-center">{error}</p>}

      {/* Signup Button */}
      <div className="flex justify-end items-center w-full mt-6 pr-25">
        <SignupButton onClick={handleSubmit} />
      </div>

      {/* Log In Link */}
      <p className="text-center text-xl text-navy mt-0">
        Already have an account?{" "}
        <a href="/login" className="text-teal underline">
          Login
        </a>
      </p>
    </form>
  );
};

SignupForm.propTypes = {
  onSignupSuccess: PropTypes.func.isRequired,
};

export default SignupForm;