import React from "react";
import SignupButton from "./SignupButton";

const SignupForm = () => {
    return (
        <div className="w-[530px] flex flex-col gap-6">
            <h2 className="text-navy text-5xl font-bold text-center">Sign Up</h2>

            {/* Username Input */}
            <div>
                <label className="block text-black text-xl mb-1">Username</label>
                <input
                    type="username"
                    className="w-full h-[65px] border border-black rounded-4xl px-4 text-lg focus:outline-none"
                    placeholder="Enter your username"
                />
            </div>

            {/* Email Input */}
            <div>
                <label className="block text-black text-xl mb-1">Email</label>
                <input
                    type="email"
                    className="w-full h-[65px] border border-black rounded-4xl px-4 text-lg focus:outline-none"
                    placeholder="Enter your email"
                />
            </div>

            {/* Password Input */}
            <div>
                <label className="block text-black text-xl mb-1">Password</label>
                <input
                    type="password"
                    className="w-full h-[65px] border border-black rounded-4xl px-4 text-lg focus:outline-none"
                    placeholder="Enter your password"
                />
            </div>

            {/* Signup Button */}
            <div className="flex justify-end items-center w-full pr-20">
                <SignupButton />
            </div>


            {/* Log In Link */}
            <p className="text-center text-xl text-navy mt-4">
                Already have an account?{" "}
                <a href="/login" className="text-teal underline">
                    Login
                </a>
            </p>
        </div>
    );
};

export default SignupForm;