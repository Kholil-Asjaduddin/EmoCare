import PropTypes from "prop-types";

const DatePicker = ({ date }) => {
  return (
    <div className="w-full flex flex-col bg-white rounded-2xl pb-[10px] px-6 drop-shadow-lg gap-0.5">
      <p className="text-xl text-blue-dark">{date}</p>
      <div className="flex justify-start text-navy gap-4">
        <button className="bg-gray-900 rounded-lg px-2 text-center drop-shadow-md">
          <p>12.00</p>
        </button>
        <button className="bg-gray-900 rounded-lg px-2 text-center drop-shadow-md">
          <p>14.00</p>
        </button>
        <button className="bg-gray-900 rounded-lg px-2 text-center drop-shadow-md">
          <p>16.00</p>
        </button>
      </div>
    </div>
  );
};

DatePicker.propTypes = {
  date: PropTypes.string.isRequired,
};

export default DatePicker;