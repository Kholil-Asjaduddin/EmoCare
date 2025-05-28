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

  useEffect(() => {console.log(user)}, [user]);
  
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
              const currentTime = now.getHours() * 60 + now.getMinutes();console.log("Current time:", currentTime);

              // const updatedPsychologists = psychologistsData.map((psychologist) => ({
              //     ...psychologist,
              //     isBooked: consultationsData.some(
              //         (consult) => consult.clientId === user.uid && consult.psychologistId === psychologist.userId
              //     ),
              //     isSessionTime: consultationsData.some((consult) => {
              //         if (consult.psychologistId !== psychologist.userId) return false;
              //         if (consult.date !== currentDate) return false;

              //         const consultationTime = parseInt(consult.time.split(":")[0]) * 60 + parseInt(consult.time.split(":")[1]);
              //         return currentTime >= consultationTime && (currentTime <= consultationTime + 120);
              //     })
              // }));

              const updatedPsychologists = psychologistsData.map((psychologist) => {
                const userConsultation = consultationsData.find(
                    (consult) => consult.clientId === user.uid && consult.psychologistId === psychologist.userId
                );

                const consultationDate = userConsultation ? userConsultation.date : null;
                const isBooked = Boolean(userConsultation);

                const isSessionTime = userConsultation && userConsultation.date === currentDate
                    ? (() => {
                        const consultationTime = parseInt(userConsultation.time.split(":")[0]) * 60 + parseInt(userConsultation.time.split(":")[1]);
                        return currentTime >= consultationTime && currentTime <= consultationTime + 120;
                    })()
                    : false;

                return { ...psychologist, isBooked, isSessionTime, consultationDate };
            });

              setPsychologists(updatedPsychologists);console.log("Updated psychologists:", updatedPsychologists);
          } catch (error) {
              console.error("Error fetching data:", error);
          }
      };

      fetchData();
  }, [user]);

//   useEffect(() => {

//             // 🔥 Dapatkan waktu saat ini dalam format yang sama dengan database (YYYY-MM-DD dan HH:mm)
//             const now = new Date();
//             const currentDate = now.toISOString().split("T")[0]; // 🔥 Format: "YYYY-MM-DD"
//             const currentTime = now.getHours() * 60 + now.getMinutes(); // 🔥 Konversi jam ke total menit

//             // 🔥 Tandai psikolog yang memiliki sesi aktif
//             const updatedPsychologists = psychologistsData.map((psychologist) => {
//                 const isBooked = consultationsData.some(
//                     (consult) => consult.clientId === user.uid && consult.psychologistId === psychologist.id
//                 );

//                 const isSessionTime = consultationsData.some((consult) => {
//                     if (consult.psychologistId !== psychologist.id) return false;
//                     if (consult.date !== currentDate) return false;

//                     const consultationTime = parseInt(consult.time.split(":")[0]) * 60 + parseInt(consult.time.split(":")[1]); // 🔥 Konversi ke total menit
//                     return consultationTime >= currentTime && consultationTime <= currentTime + 120; // 🔥 Cek rentang waktu 2 jam
//                 });

//                 return { ...psychologist, isBooked, isSessionTime };
//             });

//             setPsychologists(updatedPsychologists);
//         } catch (error) {
//             console.error("Error fetching data:", error);
//         }
//     };

//     fetchData();
// }, [user]);

  const handleOpenPopup = (psychologist) => {
    setSelectedPsychologist(psychologist);
    setPopupVisible(true);
  };

  const handleClosePopup = () => {
    setPopupVisible(false);
    setSelectedPsychologist(null);
  };

  // const psychologists = [
  //   { id: 2, profilePhotoUrl: "https://i.pinimg.com/736x/d4/07/18/d407187d8444f080a258b4d1caef1076.jpg", name: "Dr. Alice", specialist: "Stress Management", experience: 8, isBooked: true, isSessionTime: true },
  //   { id: 3, profilePhotoUrl: "https://imgs.search.brave.com/4lctyMF-lPDLrEI1H-maKo97o7htpmU0aX7A2GBkdoE/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9mYWNlLXlvdW5n/LWhhbmRzb21lLWJ1/c2luZXNzbWFuXzI1/MTEzNi0zMTI0OS5q/cGc_c2VtdD1haXNf/aHlicmlkJnc9NzQw", name: "Dr. Charlie", specialist: "Depression", experience: 12, isBooked: false, isSessionTime: false },
  // ];

  return (
    <div className="w-screen h-full px-29">
      <h1 className="w-full text-center text-navy text-5xl font-bold mb-10">
        Psychologist
      </h1>
      <div>
        {psychologists.map((psychologist, index) => (
        <PsychologistCard
            key={psychologist.id || index}
            {...psychologist}
            onOpenSchedule={() => handleOpenPopup(psychologist)}
          />
        ))}
      </div>

      {/* Render popup if needed */}
      <SchedulePopup isVisible={isPopupVisible} onClose={handleClosePopup} psychologist={selectPsychologist} />
    </div>
  );
};

export default PsychologistPage;