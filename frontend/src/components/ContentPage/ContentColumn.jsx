import PropTypes from "prop-types";

const ContentColumn = ({ title, children }) => {
    return (
        <div className="flex flex-col flex-1 me-10">
            {/* Fixed Title */}
            <h2 className="text-2xl text-[#10004B] font-semibold mt-[-20px] mb-5">{title}</h2>

            {/* Scrollable Content */}
            <div className="h-[400px] overflow-y-auto overflow-x-hidden flex flex-col gap-8 scrollbar-hidden-hover">
                {children}
            </div>
        </div>
    );
};


ContentColumn.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.object,
};

export default ContentColumn;