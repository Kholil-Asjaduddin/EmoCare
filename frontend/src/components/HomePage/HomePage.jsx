import ContentsNav from "./ContentsNav";
import Consultations from "./Consultations";

const HomePage = () => {
    return (
        <div className="w-screen h-screen flex flex-col">
            <ContentsNav />
            <Consultations />
        </div>
    );
};

export default HomePage;