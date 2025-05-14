import LoginButton from "./LoginButton";

const LoginForm = () => {
  return (
    <div className="scale-80 w-[500px] flex flex-col gap-6">
      <h2 className="text-navy text-5xl py-15 mt-[-120px] font-bold text-center">Log In</h2>

      {/* Email Input */}
      <div>
        <label className="block text-black text-xl mb-1">Email</label>
        <input
          type="email"
                  className="w-full h-[70px] border border-black rounded-4xl px-8 text-navy text-lg focus:outline-none"
          placeholder="Enter your email"
        />
      </div>

      {/* Password Input */}
      <div>
        <label className="block text-black text-xl mb-1">Password</label>
        <input
          type="password"
          className="w-full h-[70px] border border-black rounded-4xl px-8 text-navy text-lg focus:outline-none"
          placeholder="Enter your password"
        />
      </div>

      {/* Login Button */}
      <div className="flex justify-end items-center mt-6 w-full pr-25">
        <LoginButton />
      </div>

      {/* Sign Up Link */}
      <p className="text-center text-xl text-navy mt-0">
        Don&apos;t have an account yet?{" "}
        <a href="/signup" className="text-teal underline">
          Sign Up
        </a>
      </p>
    </div>
  );
};

export default LoginForm;
