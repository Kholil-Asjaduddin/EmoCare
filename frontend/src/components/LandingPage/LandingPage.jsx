import Navbar from "./Nav";
import HeroSection from "./HeroSection";

const LandingPage = () => {
    return (
        <div className="bg-light min-h-screen w-full">
            <Navbar />
            <HeroSection />
        </div>
    );
};

export default LandingPage;