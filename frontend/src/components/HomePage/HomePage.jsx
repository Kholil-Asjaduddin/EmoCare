import ContentsNav from "./ContentsNav";
import Navbar from "../../components/Navbar";
import Consultations from "./Consultations";

const HomePage = () => {
    return (
        <div className="relative w-screen min-h-screen bg-light">
            <Navbar />
            {/* Contents Navigation */}
            <footer className="absolute bottom-[30px] left-[50%] transform -translate-x-1/2">
                <ContentsNav />
            </footer>     

            {/* Consultation Component */}
            <div className="absolute bottom-0 w-screen">
                <Consultations />
            </div>
        </div>
    );
};

export default HomePage;