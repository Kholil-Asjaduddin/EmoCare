import Sessions from "./Sessions";

const PsychologistSessionPage = () => {
    return (
        <div className="w-screen h-screen bg-light">
            {/* Sessions Component */}
            <div className="absolute bottom-0 w-screen">
                <Sessions />
            </div>
        </div>
    );
};

export default PsychologistSessionPage;