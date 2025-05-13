import ContentsNav from "./ContentsNav";
import Consultations from "./Consultations";

const HomePage = () => {
    return (
        <div className="w-screen">
            {/* Contents Navigation */}
            <div className="absolute bottom-[30px] left-[60%] transform -translate-x-1/2">
                <ContentsNav />
            </div>     

            {/* Consultation Component */}
            <div className="absolute bottom-0 w-screen">
                <Consultations />
            </div>
        </div>
    );
};

export default HomePage;