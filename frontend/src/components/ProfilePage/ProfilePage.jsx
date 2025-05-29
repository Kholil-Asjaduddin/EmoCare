import ProfileForm from "./ProfileForm";

const ProfilePage = () => {
    return (
        <div className="w-screen min-h-screen flex items-center justify-center bg-light p-6">
            {/* Profile Information */}
            <div className="w-full scale-80 max-w-xl h-130 flex items-center justify-center bg-nav text-center rounded-4xl rounded-4xl p-8 shadow-md">
                <ProfileForm />
            </div>
        </div>
    );
};

export default ProfilePage;