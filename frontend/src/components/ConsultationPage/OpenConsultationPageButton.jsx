import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

const OpenConsultationPageButton = ({ disabled, bgColor }) => {
  const navigate = useNavigate();
  
  // ambil session id dari db

  return (
    <button
      onClick={() => {
        const sessionId = "1234"; // TODO: Replace this with dynamic ID from DB if needed
        navigate(`/consultationchat/${sessionId}`);
      }}
      disabled={disabled}
      style={{
        backgroundColor: bgColor,
      }}
      className={`w-fit font-normal text-2xl py-6 px-15 rounded-full drop-shadow-lg 
                  ${disabled ? "cursor-not-allowed" : ""}`}
    >
      Start Session
    </button>
  );
};

OpenConsultationPageButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool.isRequired,
  bgColor: PropTypes.string.isRequired,
};

OpenConsultationPageButton.defaultProps = {
  disabled: false,
};

export default OpenConsultationPageButton;
