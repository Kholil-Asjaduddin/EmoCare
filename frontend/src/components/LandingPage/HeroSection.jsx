import React from "react";
import heroImage from "../../assets/landing-image.svg"; 

const HeroSection = () => {
    return (
        <div className="flex flex-col lg:flex-row justify-between items-center px-16 py-12 bg-light h-screen">
            {/* Left Section (Text + Button) */}
            <div className="text-left">
                <h1 className="text-navy text-6xl font-extrabold">EmoCare</h1>
                <button className="mt-6 bg-teal text-blue-dark text-2xl font-medium px-8 py-4 rounded-full shadow-md">
                    Get Started
                </button>
            </div>

            {/* Right Section (Image) */}
            <div className="max-w-xl mt-10 lg:mt-0">
                <img src={heroImage} alt="Mental health illustration" className="w-full" />
            </div>
        </div>
    );
};

export default HeroSection;