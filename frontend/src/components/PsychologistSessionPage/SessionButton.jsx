import PropTypes from "prop-types";

const SessionButton = ({ onClick, isInSessionTime }) => {
    return (
        <button
            onClick={isInSessionTime ? onClick : null}
            disabled={!isInSessionTime}
            className={`w-fit font-normal text-md py-2 px-6 rounded-full mr-5 drop-shadow-sm transition
                ${isInSessionTime
                    ? "bg-teal text-[#13005A] hover:bg-teal-dark"
                    : "bg-[#CBD3D6] text-[#13005A] cursor-not-allowed"}
            `}
        >
            Start Session
        </button>
    );
};

SessionButton.propTypes = {
    onClick: PropTypes.func.isRequired,
    isInSessionTime: PropTypes.bool.isRequired,
};

export default SessionButton;