import { useState } from "react";
import PsychologistCard from "./PsychologistCard";
import SchedulePopup from "./SchedulePopup";

const PsychologistPage = () => {
  const [isPopupVisible, setPopupVisible] = useState(false);
  const [selectPsychologist, setSelectedPsychologist] = useState(null);

  const handleOpenPopup = (psychologist) => {
    setSelectedPsychologist(psychologist);
    setPopupVisible(true);
  };

  const handleClosePopup = () => {
    setPopupVisible(false);
    setSelectedPsychologist(null);
  };

  const psychologists = [
    { id: 2, profilePhotoUrl: "https://i.pinimg.com/736x/d4/07/18/d407187d8444f080a258b4d1caef1076.jpg", name: "Dr. Alice", specialist: "Stress Management", experience: 8, isBooked: true, isSessionTime: true },
    { id: 3, profilePhotoUrl: "https://imgs.search.brave.com/4lctyMF-lPDLrEI1H-maKo97o7htpmU0aX7A2GBkdoE/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9mYWNlLXlvdW5n/LWhhbmRzb21lLWJ1/c2luZXNzbWFuXzI1/MTEzNi0zMTI0OS5q/cGc_c2VtdD1haXNf/aHlicmlkJnc9NzQw", name: "Dr. Charlie", specialist: "Depression", experience: 12, isBooked: false, isSessionTime: false },
  ];

  return (
    <div className="w-screen h-full px-29">
      <h1 className="w-full text-center text-navy text-5xl font-bold mb-10">
        Psychologist
      </h1>
      <div>
        {psychologists.map((psychologist) => (
          <PsychologistCard
            key={psychologist.id}
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