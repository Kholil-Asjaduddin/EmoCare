import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { BsBriefcaseFill } from "react-icons/bs";
import { getUserData } from "../../services/utilService";
import { getAuth } from "firebase/auth";

const Sidebar = ({ partnerId, partnerRole, sessionDate, sessionTime }) => {
    const [partnerData, setPartnerData] = useState(null);
    const [email, setEmail] = useState("");

    useEffect(() => {
        const fetchData = async () => {
            if (partnerId && partnerRole) {
                const data = await getUserData(partnerRole, partnerId);
                setPartnerData(data);
            }
        };
        fetchData();

        const auth = getAuth();
        if (auth.currentUser) {
            setEmail(auth.currentUser.email);
        }
    }, [partnerId, partnerRole]);

    return (
        <div className="w-[357px] h-full bg-light border-r border-blue-dark px-8 py-10 text-center">
            <img
                src={
                    partnerData?.photoBase64
                        ? partnerData.photoBase64.startsWith("data:")
                            ? partnerData.photoBase64
                            : `data:image/jpeg;base64,${partnerData.photoBase64}`
                        : "https://i.pinimg.com/736x/d4/07/18/d407187d8444f080a258b4d1caef1076.jpg"
                }
                alt=""
                className="w-[150px] h-[160px] mt-8 bg-gray-300 rounded-lg mx-auto"
            />
            <h2 className="text-blue-dark text-2xl font-bold mt-6">
                {partnerData?.username}
            </h2>
            {partnerRole === "psychologist" && (
                <>
                    <div className="flex justify-center items-center text-blue-dark text-l mt-3">
                        <BsBriefcaseFill className="mr-2" />
                        <span>{partnerData?.experience ? `${partnerData.experience} years` : "-"}</span>
                    </div>
                    <p className="text-blue-dark text-lg font-medium mt-4">Specialty:</p>
                    <p className="text-blue-dark text-lg">
                        {partnerData?.specialization || "-"}
                    </p>
                </>
            )}
            <p className="text-blue-dark text-lg font-medium mt-6">
                {partnerData?.email || email || "-"}
            </p>
            <p className="text-blue-dark text-lg font-medium mt-6">Session:</p>
            <p className="text-blue-dark text-lg">
                {sessionDate} | {
                    (() => {
                        if (!sessionTime) return "-";
                        const [hour, minute] = sessionTime.split(":").map(Number);
                        const endHour = (hour + 2) % 24;
                        const endTime = `${endHour.toString().padStart(2, "0")}:${minute.toString().padStart(2, "0")}`;
                        return `${sessionTime}-${endTime}`;
                    })()
                }
            </p>
        </div>
    );
};

Sidebar.propTypes = {
    partnerId: PropTypes.string,
    partnerRole: PropTypes.string,
    sessionDate: PropTypes.string,
    sessionTime: PropTypes.string,
};

export default Sidebar;