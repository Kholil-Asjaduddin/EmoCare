import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

const LoginButton = () => {
  const navigate = useNavigate();
  return (
    <button
      type="submit"
      onClick={() => navigate("/selectrole")}
      className="w-[300px] h-[72px] bg-teal text-blue-dark text-2xl font-medium rounded-full shadow-md
       hover:shadow-2xl cursor-pointer transition-all duration-300"
    >
      Log In
    </button>
  );
};

LoginButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default LoginButton;