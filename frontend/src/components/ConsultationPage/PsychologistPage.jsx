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
    { id: 1, profilePhotoUrl: "https://i.pinimg.com/736x/d4/07/18/d407187d8444f080a258b4d1caef1076.jpg", name: "Dr. Alice", specialist: "Anxiety, Trauma", experience: 10, fee: 750000, isBooked: true, isSessionTime: false },
    { id: 2, profilePhotoUrl: "https://i.pinimg.com/736x/d4/07/18/d407187d8444f080a258b4d1caef1076.jpg", name: "Dr. Bob", specialist: "Stress Management", experience: 8, fee: 850000, isBooked: true, isSessionTime: true },
    { id: 3, profilePhotoUrl: "https://i.pinimg.com/736x/d4/07/18/d407187d8444f080a258b4d1caef1076.jpg", name: "Dr. Charlie", specialist: "Depression", experience: 12, fee: 1000000, isBooked: false, isSessionTime: false },
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