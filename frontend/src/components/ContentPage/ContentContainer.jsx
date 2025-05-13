import PropTypes from "prop-types";

const ContentContainer = ({ children }) => {
    return (
    <div className="w-[950px] h-[470px] bg-[#BCD6E2] rounded-[25px] shadow-md flex 
    p-[50px_30px] overflow-hidden">
        {children}
    </div>

    );
};

ContentContainer.propTypes = {
  children: PropTypes.object,
};

export default ContentContainer;