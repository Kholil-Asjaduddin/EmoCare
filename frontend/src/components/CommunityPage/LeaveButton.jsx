import PropTypes from "prop-types";

const LeaveButton = ({ onClick }) => {
    return (
        <button
            onClick={onClick}
            className={`bg-red-broken text-navy font-normal text-3xl py-4 px-20 rounded-full drop-shadow-lg`}
        >
            Leave
        </button>
    );
};

LeaveButton.propTypes = {
    onClick: PropTypes.func.isRequired,
};

export default LeaveButton;