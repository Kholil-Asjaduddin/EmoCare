import ConsultationCard from "./ConsultationCard";

const Consultations = () => {
    return (
        <div className="flex flex-col items-center">
            <h3 className="text-2xl text-blue-light mb-5">Booked Consultation</h3>

                <div className="w-3/4 flex flex-row gap-15 overflow-x-auto pb-6 justify-center scrollbar-hidden-hover">
                    <ConsultationCard
                        date="16 May 2025"
                        time="07:00 - 12:00"
                        name="Dr. Alice"
                    />
                    <ConsultationCard
                        date="5 Jan 2025"
                        time="10:00 - 12:00"
                        name="Abc, M.Psi"       
                    />
                    {/* <ConsultationCard
                        date="10 Jan 2025"
                        time="09:00 - 10:30"
                        name="Def, S.Psi"
                    />
                    <ConsultationCard
                        date="10 Jan 2025"
                        time="09:00 - 10:30"
                        name="Jkl, S.Psi"
                    />
                    <ConsultationCard
                        date="10 Jan 2025"
                        time="09:00 - 10:30"
                        name="Jkl, S.Psi"
                    /> */}
                    {/* Add more ConsultationCard components as needed */}
                </div>
        </div>
    );
};

export default Consultations;