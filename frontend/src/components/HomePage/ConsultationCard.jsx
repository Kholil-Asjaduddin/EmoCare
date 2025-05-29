import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

const ConsultationCard = ({ date, time, name }) => {
    const navigate = useNavigate();
    return (
        <button onClick={() => navigate("/consultation")} className={`p-4 mt-3 ml-5 min-w-[250px] scale-110 bg-[#EAF0F1] border border-[#9DC8DC] shadow-md rounded-3xl shadow cursor-pointer hover:bg-[#d6e4eb] transition-all`}>
            <p className="text-blue-dark font-semibold">{date}</p>
            <p className="text-teal">{time}</p>
            <p className="text-navy font-bold">{name}</p>
        </button>
    );
};


ConsultationCard.propTypes = {
  date: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
 

export default ConsultationCard;