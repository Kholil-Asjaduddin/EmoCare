import PropTypes from "prop-types";

const SignupButton = ({ onClick }) => {
  return (
    <button
      onClick={ onClick }
      className="w-[300px] h-[70px] bg-teal text-blue-dark text-2xl font-medium rounded-full shadow-md
          hover:shadow-2xl cursor-pointer transition-all duration-300"
    >
      Create Account
    </button>
  );
};

SignupButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default SignupButton;