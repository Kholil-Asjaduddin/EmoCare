import ConsultationCard from "./ConsultationCard";

const Consultations = () => {
    return (
        <div className="w-3/4">
            {/* Booked Consultation */}
            <div className="mt-[-500px] ml-20">
                <h3 className="text-2xl text-blue-light ml-3 mb-3">Booked Consultation</h3>

                <div className="flex flex-row gap-15 overflow-x-auto pb-6 mb-4 scrollbar-hidden-hover">
                    <ConsultationCard
                        date="1 Jan 2025"
                        time="12:00 - 14:00"
                        name="Xyz, S.Psi"
                    />
                    <ConsultationCard
                        date="5 Jan 2025"
                        time="10:00 - 12:00"
                        name="Abc, M.Psi"       
                    />
                    <ConsultationCard
                        date="10 Jan 2025"
                        time="09:00 - 10:30"
                        name="Def, S.Psi"
                    />
                    <ConsultationCard
                        date="10 Jan 2025"
                        time="09:00 - 10:30"
                        name="Jkl, S.Psi"
                    />
                    {/* Add more ConsultationCard components as needed */}
                </div>
            </div>
        </div>
    );
};

export default Consultations;