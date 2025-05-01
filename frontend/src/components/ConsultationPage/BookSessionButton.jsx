import PropTypes from "prop-types";

const BookSessionButton = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`w-fit bg-blue-light text-navy font-normal text-2xl py-6 px-15 rounded-full drop-shadow-lg`}
    >
      Book Session
    </button>
  );
};

BookSessionButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default BookSessionButton;
