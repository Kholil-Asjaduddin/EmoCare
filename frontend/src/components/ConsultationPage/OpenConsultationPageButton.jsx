import PropTypes from "prop-types";

const OpenConsultationPageButton = ({ onClick, disabled, bgColor }) => {
  return (
    <button
      onClick={onClick}
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
