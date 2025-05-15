import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import SessionButton from "./SessionButton";
// import { useNavigate } from "react-router-dom"; // Uncomment if using navigation

const SessionCard = ({ date, time, name }) => {
    const [isInSessionTime, setIsInSessionTime] = useState(false);

    useEffect(() => {
        const checkSessionWindow = () => {
            const now = new Date();

            const sessionDate = new Date(date);
            const [startStr, endStr] = time.split(" - ");
            const [startHour, startMin] = startStr.split(":").map(Number);
            const [endHour, endMin] = endStr.split(":").map(Number);

            const startTime = new Date(sessionDate);
            startTime.setHours(startHour, startMin, 0, 0);

            const endTime = new Date(sessionDate);
            endTime.setHours(endHour, endMin, 0, 0);

            setIsInSessionTime(now >= startTime && now <= endTime);
        };

        checkSessionWindow();
        const interval = setInterval(checkSessionWindow, 30000); // check every 30 seconds
        return () => clearInterval(interval);
    }, [date, time]);

    const handleStartSession = () => {
        if (isInSessionTime) {
            console.log("Session started!");
            // e.g., navigate(`/session-room/${sessionId}`);
            // or call API: axios.post('/api/start-session', { sessionId });
        } else {
            console.log("Session not active yet.");
        }
    };

    return (
        <div className="p-5 mt-3 ml-8 max-w-120 bg-[#EAF0F1] border border-[#9DC8DC] shadow-md rounded-3xl flex justify-between items-center">
            {/* Left Side - Text */}
            <div className="flex flex-col">
                <p className="ml-2 mb-1 text-blue-dark font-semibold">{date}</p>
                <p className="ml-2 mb-1 text-teal">{time}</p>
                <p className="ml-2 text-navy font-bold">{name}</p>
            </div>

            {/* Right Side - Button */}
            <SessionButton
                onClick={handleStartSession}
                isInSessionTime={isInSessionTime}
            />
        </div>
    );
};

SessionCard.propTypes = {
  date: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default SessionCard;