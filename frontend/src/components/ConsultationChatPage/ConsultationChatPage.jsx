import Sidebar from "./Sidebar";
import ChatSection from "./ChatSection";

const ConsultationChatPage = () => {
    return (
        <div className="w-screen h-screen bg-lightBlue flex flex-col">
            <div className="flex flex-row h-full">
                <Sidebar />
                <ChatSection />
            </div>
        </div>
    );
};

export default ConsultationChatPage;