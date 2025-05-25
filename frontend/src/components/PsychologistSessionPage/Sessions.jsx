import SessionCard from "./SessionCard";

const Sessions = () => {
    return (
        <div className="w-screen h-screen flex flex-col items-center justify-center">
            {/* Booked Consultation */}
            <div className="w-full max-w-xl px-4">
                <h3 className="text-2xl text-blue-light font-semibold mb-4 text-center">Consultation Sessions</h3>

                <div className="h-[400px] overflow-y-auto overflow-x-hidden flex flex-col gap-8 pr-2 scrollbar-hidden-hover">
                    <SessionCard
                        date="1 Jan 2025"
                        time="12:00 - 14:00"
                        name="Xyz, S.Psi"
                    />
                    <SessionCard
                        date="5 Jan 2025"
                        time="10:00 - 12:00"
                        name="Abc, M.Psi"       
                    />
                    <SessionCard
                        date="10 Jan 2025"
                        time="09:00 - 10:30"
                        name="Def, S.Psi"
                    />
                    <SessionCard
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

export default Sessions;