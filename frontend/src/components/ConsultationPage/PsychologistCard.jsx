import PropTypes from "prop-types";

import BriefcaseIcon from "../../assets/briefcase-icon.svg";
import BookSessionButton from "./BookSessionButton";

import OpenConsultationPageButton from "./OpenConsultationPageButton";

const PsychologistCard = ({
  photoBase64,
  username,
  specialization,
  experience,
  isBooked,
  consultationDate,
  isSessionTime,
  onOpenSchedule,
  onOpenConsultationPage
}) => {
  const photoSrc = photoBase64 ? `data:image/jpeg;base64,${photoBase64}` : "";

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });
  };

  return (
    <div className="w-full h-58 flex justify-between items-center bg-nav rounded-[40px] mb-9 ps-15 pe-20 drop-shadow-lg font-poppins">
      <div className="flex gap-15">
        <div className="bg-gray-300 rounded-2xl">
          <img
            className="size-36 object-cover rounded-2xl"
            src={photoSrc}
            alt="Profile Photo"
          />
        </div>
        <div className="flex flex-col text-black">
          <p className="font-normal text-5xl pb-2">{username}</p>
          <p className="font-normal text-2xl">{specialization}</p>
          <div className="flex items-center gap-2">
            <img src={BriefcaseIcon} alt="Briefcase Icon" />
            <p className="font-normal text-xl">
              {experience} {experience > 1 ? "years" : "year"}
            </p>
          </div>
        </div>
      </div>

      <div>
        {!isBooked ? (
          <BookSessionButton onClick={onOpenSchedule} />
        ) : (
          <div className="flex flex-col gap-3">
            <div className="flex flex-row gap-2 text-2xl text-blue-light">
              <p className="font-bold">Booked for:</p>
              <p className="font-normal">{formatDate(consultationDate)}</p>
            </div>
            <OpenConsultationPageButton
              onClick={onOpenConsultationPage}
              disabled={isSessionTime ? false : true}
              bgColor={isSessionTime ? "#03C988" : "#CBD3D6"}
            />
          </div>
        )}
      </div>
    </div>
  );
};

PsychologistCard.propTypes = {
  photoBase64: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  specialist: PropTypes.string.isRequired,
  experience: PropTypes.number.isRequired,
  isBooked: PropTypes.bool.isRequired,
  consultationDate: PropTypes.string.isRequired,
  isSessionTime: PropTypes.bool.isRequired,
  onOpenSchedule: PropTypes.func.isRequired,
  onOpenConsultationPage: PropTypes.func.isRequired
};

export default PsychologistCard;
