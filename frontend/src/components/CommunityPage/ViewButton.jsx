import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

const ViewButton = ({ onClick }) => {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => navigate("/communityconvo")}
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
