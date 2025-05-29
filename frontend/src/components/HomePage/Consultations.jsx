import { useState, useEffect } from "react";
import ConsultationCard from "./ConsultationCard";
import firebaseApp from "../../firebaseConfig";
import { getDatabase, ref, get } from "firebase/database";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getCurrentUser } from "../../services/authService";
import { getUserData } from "../../services/utilService";

const database = getDatabase(firebaseApp);

const Consultations = () => {
    const [user, setUser] = useState(undefined);
    const [bookedConsultations, setBookedConsultations] = useState([]);
    const auth = getAuth();

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
        if (firebaseUser) {
            const currentUser = await getCurrentUser(); 
            setUser(currentUser);
        } else {
            setUser(null);
        }
        });

    return () => unsubscribe();
    }, [auth]);

    // useeffect snapshot semua consul -> if snapshot.client == user.uid -> masuk list
    useEffect(() => {
        const fetchConsultations = async () => {
        if (!user?.uid) {
            console.warn("User not logged in, skipping consultation fetch.");
            return;
        }

        try {
            const consultSnapshot = await get(ref(database, "consultations"));
            const consultationsData = consultSnapshot.exists() ? Object.values(consultSnapshot.val()) : [];

            const userConsultations = consultationsData.filter(
            (consult) => consult.clientId === user.uid
            );

            const enrichedConsultations = await Promise.all(
                userConsultations.map(async (consult) => {
                    const psychologistData = await getUserData("psychologist", consult.psychologistId);
                    return {
                        ...consult,
                        psychologistName: psychologistData?.fullName || "Psychologist",
                        psychologistInfo: psychologistData || {},
                    };
                })
            );

            console.log("Enriched consultations:", enrichedConsultations);

            setBookedConsultations(enrichedConsultations);
        } catch (error) {
            console.error("Error fetching consultations:", error);
        }
        };

        fetchConsultations();
    }, [user]);

    const formatTimeRange = (startTime, duration = 60) => {
    const [hours, minutes] = startTime.split(":").map(Number);
    const start = new Date();
    start.setHours(hours, minutes);
    const end = new Date(start.getTime() + duration * 60000);

    const format = (date) =>
      `${String(date.getHours()).padStart(2, "0")}:${String(date.getMinutes()).padStart(2, "0")}`;

    return `${format(start)} - ${format(end)}`;
     };

    return (
        <div className="flex flex-col items-center">
            <h3 className="text-2xl text-blue-light mb-5">Booked Consultation</h3>
                <div className="w-3/4 flex flex-row gap-15 overflow-x-auto pb-6 justify-center scrollbar-hidden-hover">
                    {/* map list booked consul, key = consultationId */}
                    {bookedConsultations.length === 0 ? (
                        <p className="text-gray-500">No consultations booked.</p>
                ) : (
                bookedConsultations.map((consult, index) => (
                    <ConsultationCard
                    key={consult.consultationId || index}
                    date={consult.date}
                    time={formatTimeRange(consult.time, 120)}
                    name={consult.psychologistInfo.username || "Psychologist"}
                    />
                ))
                )}
                    {/* <ConsultationCard
                        date="5 Jan 2025"
                        time="10:00 - 12:00"
                        name="Abc, M.Psi"       
                    /> */}
                    {/* <ConsultationCard
                        date="10 Jan 2025"
                        time="09:00 - 10:30"
                        name="Def, S.Psi"
                    />
                    <ConsultationCard
                        date="10 Jan 2025"
                        time="09:00 - 10:30"
                        name="Jkl, S.Psi"
                    />
                    <ConsultationCard
                        date="10 Jan 2025"
                        time="09:00 - 10:30"
                        name="Jkl, S.Psi"
                    /> */}
                    {/* Add more ConsultationCard components as needed */}
                </div>
        </div>
    );
};

export default Consultations;