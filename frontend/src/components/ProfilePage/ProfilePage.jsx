import ProfileForm from "./ProfileForm";

const ProfilePage = () => {
    return (
        <div className="w-screen min-h-screen flex items-center justify-center bg-nav p-6">
            {/* Profile Information */}
            <div className="w-full max-w-xl h-130 flex items-center justify-center bg-light text-center rounded-4xl rounded-4xl p-8 shadow-md">
                <ProfileForm />
            </div>
        </div>
    );
};

export default ProfilePage;