import PropTypes from "prop-types";

const ViewButton = ({ onClick }) => {
    return (
        <button
            onClick={onClick}
            className={`w-fit bg-blue-light text-navy font-normal text-3xl py-4 px-16 rounded-full drop-shadow-lg`}
        >
            View
        </button>
    );
};

ViewButton.propTypes = {
    onClick: PropTypes.func.isRequired,
};

export default ViewButton;