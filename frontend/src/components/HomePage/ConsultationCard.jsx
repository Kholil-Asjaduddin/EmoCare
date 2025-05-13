const ConsultationCard = ({ date, time, name }) => {
    return (
        <div className={`p-4 mt-3 ml-5 min-w-[250px] scale-110 bg-[#EAF0F1] border border-[#9DC8DC] shadow-md rounded-3xl shadow`}>
            <p className="ml-2 text-blue-dark font-semibold">{date}</p>
            <p className="ml-2 text-teal">{time}</p>
            <p className="ml-2 text-navy font-bold">{name}</p>
        </div>
    );
};

export default ConsultationCard;