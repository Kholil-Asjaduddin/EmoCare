import ProfileForm from "./ProfileForm";

const PsychologistProfilePage = () => {
    return (
        <div className="w-screen h-screen flex items-center justify-center">
            {/* Left Side - Welcome Message */}
            <div className="w-2/5 h-full flex items-center justify-center bg-nav text-center">
                <h1 className="text-navy text-xl font-semibold leading-relaxed">
                    <span className="block">Fill out</span>
                    <span className="block mt-4">your</span>
                    <span className="block mt-4">profile!</span>
                </h1>
            </div>

            {/* Right Side - Profile Form */}
            <div className="w-3/5 h-full flex items-center justify-center">
                <ProfileForm />
            </div>
        </div>
    );
};

export default PsychologistProfilePage;