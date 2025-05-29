import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

const OpenConsultationPageButton = ({ disabled, bgColor, sessionId }) => {
  console.log("OpenConsultationPageButton rendered", { disabled, sessionId });
  const navigate = useNavigate();

  return (
    <button
      onClick={() => {
        console.log("Button clicked, sessionId:", sessionId);
        if (sessionId) {
          navigate(`/consultationchat/${sessionId}`);
        }
      }}
      disabled={disabled || !sessionId}
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
  disabled: PropTypes.bool.isRequired,
  bgColor: PropTypes.string.isRequired,
  sessionId: PropTypes.string,
};

OpenConsultationPageButton.defaultProps = {
  disabled: false,
};

export default OpenConsultationPageButton;
