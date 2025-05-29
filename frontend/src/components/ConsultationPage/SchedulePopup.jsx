import { useState } from "react";
import PropTypes from "prop-types";
import CloseIcon from "../../assets/close-icon.svg";
import BriefcaseIcon from "../../assets/briefcase-icon.svg";
import DextIcon from "../../assets/next-icon.svg";
import DatePicker from "./DatePicker";

// Helper function to get weekday dates
const getWeekdays = (weekOffset = 0) => {
  const today = new Date();
  const monday = new Date(today.setDate(today.getDate() - today.getDay() + 1 + weekOffset * 7));
  let weekdays = [];

  for (let i = 0; i < 5; i++) {
    let day = new Date(monday);
    day.setDate(monday.getDate() + i);

    const formattedDate = day.toLocaleDateString("en-US", { day: "numeric", month: "long", year: "numeric" });
    const [month, date, year] = formattedDate.split(" ");
    weekdays.push(`${date.slice(0, -1)} ${month} ${year}`);
  }

  return weekdays;
};

const SchedulePopup = ({ isVisible, onClose, psychologist, clientId }) => {
  const [weekOffset, setWeekOffset] = useState(0);
  
  const photoBase64 = psychologist?.photoBase64 || "";
  const photoSrc = photoBase64 ? `data:image/jpeg;base64,${photoBase64}` : "";
  const psychologistId = psychologist?.userId;
  const psychologistName = psychologist?.username;
  const specialization = psychologist?.specialization;
  const experience = psychologist?.experience;

  if (!isVisible) return null;
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/20 backdrop-blur-sm">
      <div className="w-100 h-4/5 flex flex-col bg-light">
        {/* Header section */}
        <div className="bg-nav">
          <div className="justify-self-end px-2">
            <img
              className="w-8 h-8 cursor-pointer"
              src={CloseIcon}
              alt="Close Icon"
              onClick={onClose}
            />
          </div>
          <div className="flex items-center gap-6 pb-6 px-6">
            <div className="bg-gray-300 rounded-2xl">
              <img className="size-25 object-cover rounded-2xl" src={photoSrc} alt="Profile Photo" />
            </div>
            <div>
              <p className="text-4xl font-normal text-black">{psychologistName}</p>
              <p className="text-lg text-black">{specialization}</p>
              <div className="flex items-center text-black gap-2">
                <img className="size-5" src={BriefcaseIcon} alt="Briefcase Icon" />
                <span className="text-md">{experience} {experience > 1 ? "years" : "year"}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Main content */}
        <div className="flex-1 px-6">
          <h2 className="text-2xl font-normal text-black py-2">Select Date & Time</h2>
          <div className="flex flex-col gap-4">
            {getWeekdays(weekOffset).map((date, index) => (
              <DatePicker key={index} date={date} psychologistId={psychologistId} clientId={clientId} />
            ))}
          </div>
        </div>

        {/* Navigation arrows */}
        <div className="flex justify-center gap-8 p-4">
          <img
            className={`w-8 h-8 rotate-180 cursor-pointer ${weekOffset === 0 ? "opacity-50 cursor-not-allowed" : ""}`}
            src={DextIcon}
            alt="Back Icon"
            onClick={() => weekOffset > 0 && setWeekOffset(weekOffset - 1)}
          />
          <img
            className="w-8 h-8 cursor-pointer"
            src={DextIcon}
            alt="Next Icon"
            onClick={() => setWeekOffset(weekOffset + 1)}
          />
        </div>
      </div>
    </div>
  );
};

SchedulePopup.propTypes = {
  clientId: PropTypes.string.isRequired,
  psychologist: PropTypes.shape({
    photoBase64: PropTypes.string.isRequired,
    userId: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    specialization: PropTypes.string.isRequired,
    experience: PropTypes.number.isRequired,
  }).isRequired,
  isVisible: PropTypes.bool.isRequired,
  profilePhotoUrl: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default SchedulePopup;