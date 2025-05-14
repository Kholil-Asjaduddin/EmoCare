import SignupButton from "./SignupButton";

const SignupForm = () => {
  return (
    <div className="scale-80 w-[500px] flex flex-col gap-6">
      <h2 className="text-navy text-5xl py-15 mt-[-120px] font-bold text-center">Sign Up</h2>

      {/* Email Input */}
      <div>
        <label className="block text-black text-xl mb-1">Email</label>
        <input
          type="email"
          className="w-full h-[65px] border border-black rounded-4xl px-8 text-navy text-lg focus:outline-none"
          placeholder="Enter your email"
        />
      </div>

      {/* Password Input */}
      <div>
        <label className="block text-black text-xl mb-1">Password</label>
        <input
          type="password"
          className="w-full h-[65px] border border-black rounded-4xl px-8 text-navy text-lg focus:outline-none"
          placeholder="Enter your password"
        />
      </div>

      {/* Signup Button */}
      <div className="flex justify-end items-center w-full mt-6 pr-25">
        <SignupButton />
      </div>

      {/* Log In Link */}
      <p className="text-center text-xl text-navy mt-0">
        Already have an account?{" "}
        <a href="/login" className="text-teal underline">
          Login
        </a>
      </p>
    </div>
  );
};

export default SignupForm;
