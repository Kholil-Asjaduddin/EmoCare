import Sidebar from "./Sidebar";
import ChatSection from "./ChatSection";
import { useParams } from "react-router-dom";

const ConsultationChatPage = () => {
    const { sessionId } = useParams();
    // ambil id dari endpoint

    return (
        <div className="w-screen h-screen flex flex-col">
            <div className="flex flex-row h-full">
                <Sidebar />
                <ChatSection sessionId={sessionId} userId={ sessionId } />
            </div>
        </div>
    );
};

export default ConsultationChatPage;