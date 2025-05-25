import PropTypes from "prop-types";

const SaveButton = ({ onClick }) => {
    return (
        <button 
            onClick={onClick}
            className="w-[200px] h-[70px] bg-teal text-blue-dark text-2xl font-medium rounded-full shadow-md
            hover:shadow-2xl cursor-pointer transition-all duration-300">
            Save
        </button>
    );
};

SaveButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default SaveButton;