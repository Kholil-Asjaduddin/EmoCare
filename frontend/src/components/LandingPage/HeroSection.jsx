import heroImage from "../../assets/landing-image.svg";
import { Link } from "react-router-dom";

const HeroSection = () => {
    return (
        <div className="flex flex-col lg:flex-row justify-between items-center px-16 py-12">
            {/* Left Section (Text + Button) */}
            <div className="text-left px-50">
                <h1 className="text-navy text-6xl font-extrabold">EmoCare</h1>
                <Link to="/login">
                    <button className="mt-6 bg-teal text-blue-dark text-2xl font-medium px-8 py-4 rounded-full shadow-md
            hover:hover:shadow-2xl cursor-pointer transition-all duration-300">
                        Get Started
                    </button>
                </Link>
            </div>

            {/* Right Section (Image) */}
            <div className="max-w-xl lg:mt-0 -ml-18">
                <img
                    src={heroImage}
                    alt="Mental health illustration"
                    className="w-full"
                />
            </div>
        </div>
    );
};

export default HeroSection;