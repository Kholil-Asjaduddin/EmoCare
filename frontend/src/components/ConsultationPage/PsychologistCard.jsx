import PropTypes from "prop-types";

import BriefcaseIcon from "../../assets/briefcase-icon.svg";
import BookSessionButton from "./BookSessionButton";

const PsychologistCard = ({
  profilePhotoUrl,
  name,
  specialist,
  experience,
  fee,
  isBooked,
  openSchedule,
}) => {
  return (
    <div className="w-full h-58 flex justify-between items-center bg-nav rounded-[40px] mb-9 ps-15 pe-20 drop-shadow-lg">
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
          <BookSessionButton onClick={openSchedule} />
        ) : (
          <button
            className="bg-gray-300 text-blue-dark text-2xl font-medium px-8 py-4 rounded-full shadow-md"
            disabled
          >
            Booked
          </button>
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
  openSchedule: PropTypes.func.isRequired,
};

export default PsychologistCard;
