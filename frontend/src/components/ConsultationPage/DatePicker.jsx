import { useState, useEffect } from "react";
import { getDatabase, ref, get } from "firebase/database";
import PropTypes from "prop-types";

const DatePicker = ({ date, clientId, psychologistId, onSuccess }) => {
  const [bookedTimes, setBookedTimes] = useState([]);
  const database = getDatabase();
  const timeSlots = ["12:00", "14:00", "16:00"];
  
  useEffect(() => {
      const fetchBookedTimes = async () => {
          try {
              const consultSnapshot = await get(ref(database, "consultations"));
              if (consultSnapshot.exists()) {
                  const consultations = Object.values(consultSnapshot.val());
                  const bookedSlots = consultations
                      .filter(consult => consult.psychologistId === psychologistId && consult.date === date)
                      .map(consult => consult.time);
                  setBookedTimes(bookedSlots);
              }
          } catch (error) {
              console.error("Error fetching booked times:", error);
          }
      };

      fetchBookedTimes();
  }, [database, date, psychologistId]);

  const isPastDate = (date) => {
      const now = new Date();
      const today = now.toISOString().split("T")[0];
      return date < today;
  };

  const handleBook = async (time) => {
        if (!clientId) {
            console.error("User not authenticated");
            return;
        }

        try {
            const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/consultation/book-consultation`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    clientId: clientId,
                    psychologistId: psychologistId,
                    date,
                    time
                })
            });

            if (response.status == 201)
            {
                onSuccess();
            }
        } catch (error) {
            console.error("Error saving profile:", error);
        }
    }

  return (
    <div className="w-full flex flex-col bg-white rounded-2xl pb-[10px] px-6 drop-shadow-lg gap-0.5">
      <p className="text-xl text-blue-dark">{date}</p>
      <div className="flex justify-start text-navy gap-4">
        {timeSlots.map((time) => (
          <button key={time} onClick={() => handleBook(time)}>
            <div className={`rounded-lg px-2 text-center drop-shadow-md ${
              isPastDate(date) || bookedTimes.includes(time) ? "bg-gray-300 opacity-50 cursor-not-allowed"
              : "bg-teal hover:bg-blue-600"
            }`}
            disabled={isPastDate(date) || bookedTimes.includes(time)}
            >
              <p>{time}</p>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

DatePicker.propTypes = {
  date: PropTypes.string.isRequired,
  clientId: PropTypes.string.isRequired,
  psychologistId: PropTypes.string.isRequired,
  onSuccess: PropTypes.func.isRequired,
};

export default DatePicker;