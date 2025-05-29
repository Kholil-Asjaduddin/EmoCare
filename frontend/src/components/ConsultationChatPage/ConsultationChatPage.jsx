import Sidebar from "./Sidebar";
import ChatSection from "./ChatSection";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getDatabase, ref, get } from "firebase/database";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getCurrentUser } from "../../services/authService";

const ConsultationChatPage = () => {
    const [user, setUser] = useState(null);
    const [partnerId, setPartnerId] = useState(null);
    const [sessionDate, setSessionDate] = useState("");
    const [sessionTime, setSessionTime] = useState("");
    const [partnerRole, setPartnerRole] = useState(null);
    const { sessionId } = useParams();

    const auth = getAuth();

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
            if (firebaseUser) {
                const currentUser = await getCurrentUser();
                setUser(currentUser);

                if (sessionId) {
                    const db = getDatabase();
                    const sessionRef = ref(db, `consultations/${sessionId}`);
                    const snapshot = await get(sessionRef);
                    if (snapshot.exists()) {
                        const sessionData = snapshot.val();

                        setSessionDate(sessionData.date || "");
                        setSessionTime(sessionData.time || "");

                        if (currentUser.role === "client") {
                            setPartnerId(sessionData.psychologistId);
                            setPartnerRole("psychologist");
                        } else if (currentUser.role === "psychologist") {
                            setPartnerId(sessionData.clientId);
                            setPartnerRole("client");
                        }
                    }
                }
            } else {
                setUser(null);
            }
        });

        return () => unsubscribe();
    }, [auth, sessionId]);

    return (
        <div className="w-screen h-screen flex flex-col">
            <div className="flex flex-row h-full">
                <Sidebar
                    partnerId={partnerId}
                    partnerRole={partnerRole}
                    sessionDate={sessionDate}
                    sessionTime={sessionTime}
                />
                <ChatSection
                    sessionId={sessionId}
                    userId={user?.uid}
                    partnerId={partnerId}
                />
            </div>
        </div>
    );
};

export default ConsultationChatPage;