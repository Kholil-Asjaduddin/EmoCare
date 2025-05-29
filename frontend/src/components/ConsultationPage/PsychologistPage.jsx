import { useState, useEffect } from "react";
import { getDatabase, ref, get } from "firebase/database";
import firebaseApp from "../../firebaseConfig";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getCurrentUser } from "../../services/authService";
import PsychologistCard from "./PsychologistCard";
import SchedulePopup from "./SchedulePopup";

const database = getDatabase(firebaseApp);

const PsychologistPage = () => {
  const [user, setUser] = useState(undefined);
  const [isPopupVisible, setPopupVisible] = useState(false);
  const [selectPsychologist, setSelectedPsychologist] = useState(null);
  const [psychologists, setPsychologists] = useState([]);
  const [refreshKey, setRefreshKey] = useState(0);
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
  
  useEffect(() => {
      const fetchData = async () => {
          try {
              const psychSnapshot = await get(ref(database, "users/psychologists"));
              const psychologistsData = psychSnapshot.exists() ? Object.values(psychSnapshot.val()) : [];

              const consultSnapshot = await get(ref(database, "consultations"));
              const consultationsData = consultSnapshot.exists() ? Object.values(consultSnapshot.val()) : [];
              
              if (!user?.uid) { console.warn("User not logged in, skipping consultation processing.");
                  setPsychologists(psychologistsData);
                  return;
              }

              const now = new Date();
              const currentDate = now.toISOString().split("T")[0];
              const currentTime = now.getHours() * 60 + now.getMinutes();

              const updatedPsychologists = psychologistsData.map((psychologist) => {
                  const userConsultation = consultationsData.find(
                      (consult) => consult.clientId === user.uid && consult.psychologistId === psychologist.userId
                  );
                  const consultationDate = userConsultation ? userConsultation.date : null;
                  const isBooked = Boolean(userConsultation);
                  const sessionId = userConsultation ? userConsultation.consultationId : null;

                  const isSessionTime = userConsultation && userConsultation.date === currentDate
                      ? (() => {
                          const consultationTime = parseInt(userConsultation.time.split(":")[0]) * 60 + parseInt(userConsultation.time.split(":")[1]);
                          return currentTime >= consultationTime && currentTime <= consultationTime + 120;
                      })()
                      : false;

                  return { ...psychologist, isBooked, isSessionTime, consultationDate, sessionId };
              });

              setPsychologists(updatedPsychologists);console.log("Updated psychologists:", updatedPsychologists);
          } catch (error) {
              console.error("Error fetching data:", error);
          }
      };

      fetchData();
  }, [user, refreshKey]);

  const handleOpenPopup = (psychologist) => {
    setSelectedPsychologist(psychologist);
    setPopupVisible(true);
  };

  const handleClosePopup = () => {
    setPopupVisible(false);
    setSelectedPsychologist(null);
  };

  return (
    <div className="w-screen h-full pt-20 px-29">
      <h1 className="w-full text-center text-navy text-5xl font-bold mb-10">
        Psychologist
      </h1>
      <div>
        {psychologists.map((psychologist, index) => (
        <PsychologistCard
            key={psychologist.id || index}
            {...psychologist}
            sessionId={psychologist.sessionId}
            onOpenSchedule={() => handleOpenPopup(psychologist)}
          />
        ))}
      </div>

      {/* Render popup if needed */}
      <SchedulePopup
        isVisible={isPopupVisible}
        onClose={handleClosePopup}
        psychologist={selectPsychologist}
        clientId={user?.uid}
        onBookSuccess={() => setRefreshKey(prev => prev + 1)} // Pass ke SchedulePopup
      />
    </div>
  );
};

export default PsychologistPage;