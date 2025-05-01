import PropTypes from "prop-types";

import BriefcaseIcon from "../../assets/briefcase-icon.svg";
import BookSessionButton from "./BookSessionButton";
import OpenConsultationPageButton from "./OpenConsultationPageButton";

const PsychologistCard = ({
  profilePhotoUrl,
  name,
  specialist,
  experience,
  fee,
  isBooked,
  isSessionTime,
  onOpenSchedule,
}) => {
  // profilePhotoUrl = "https://i.pinimg.com/736x/d4/07/18/d407187d8444f080a258b4d1caef1076.jpg";
  // name = name || "John Doe, S.Psi";
  // specialist = specialist || "Anxiety, Trauma, Stress";
  // experience = experience || 12;
  // fee = fee || 1000000;
  // isBooked = false;
  // isSessionTime = false;

  return (
    <div className="w-full h-58 flex justify-between items-center bg-nav rounded-[40px] mb-9 ps-15 pe-20 drop-shadow-lg font-poppins">
      <div className="flex gap-15">
        <div className="bg-gray-300 rounded-2xl">
          <img
            className="size-36 object-cover rounded-2xl"
            src={profilePhotoUrl}
            alt="Profile Photo"
          />
        </div>
        <div className="flex flex-col text-black">
          <h1 className="font-normal text-5xl pb-2">{name}</h1>
          <p className="font-normal text-2xl">{specialist}</p>
          <div className="flex items-center gap-2">
            <img src={BriefcaseIcon} alt="Briefcase Icon" />
            <p className="font-normal text-xl">
              {experience} {experience > 1 ? "years" : "year"}
            </p>
            <p className="font-medium text-2xl text-blue-light">
              Rp.{fee.toLocaleString("id-ID")}
            </p>
          </div>
        </div>
      </div>

      <div>
        {!isBooked ? (
          <BookSessionButton
            onClick={onOpenSchedule}
            disabled={false}
            bgColor={""}
          />
        ) : (
          <div className="flex flex-col gap-1">
            <OpenConsultationPageButton
              onClick={onOpenSchedule}
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
  profilePhotoUrl: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  specialist: PropTypes.string.isRequired,
  experience: PropTypes.number.isRequired,
  fee: PropTypes.number.isRequired,
  isBooked: PropTypes.bool.isRequired,
  isSessionTime: PropTypes.bool.isRequired,
  onOpenSchedule: PropTypes.func.isRequired,
};

export default PsychologistCard;
