import { useNavigate } from "react-router-dom";
import { useState } from "react";
import SaveButton from "./SaveButton";
import { getCurrentUser } from "../../services/authService";

const ProfileForm = () => {
    const [username, setUsername] = useState('');
    const [photoBase64, setPhotoBase64] = useState("");

    const navigate = useNavigate();

    const handleUsernameChange = (e) => {
        const value = e.target.value;
        setUsername(value);
    };

    const handlePhotoUpload = (event) => {
        const file = event.target.files[0];
        const reader = new FileReader();

        reader.onloadend = () => {
            const base64String = reader.result.split(",")[1];
            setPhotoBase64(base64String);
        };

        if (file) {
            reader.readAsDataURL(file);
        }
    };


    const handleSave = async () => {
        const user = getCurrentUser();

        try {
            const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/client/save-client`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    userId: user.uid,
                    username: username,
                    photoBase64
                })
            });

            if (response.status == 201)
            {
                navigate("/");
            }
        } catch (error) {
            console.error("Error saving profile:", error);
        }
    }

    return (
        <div className="scale-65 w-[500px] flex flex-col gap-6">
            <h2 className="text-navy text-5xl py-15 mt-[-120px] font-bold text-center">User Profile</h2>

            {/* Name Input */}
            <div>
                <label className="block text-black text-xl mb-1">Name</label>
                <input
                    id="username"
                    type="name"
                    value={username}
                    onChange={handleUsernameChange}
                    className="w-full h-[65px] border border-black rounded-4xl px-8 text-navy text-lg focus:outline-none"
                    placeholder="Enter your name"
                />
            </div>

            {/* Profile Photo */}
            <div className="flex flex-col gap-2 items-start">
                <label className="block text-black text-xl mb-1">Profile Photo</label>

                {/* Image preview */}
                <div className="w-32 h-32 rounded-full bg-gray-300 overflow-hidden mb-2">
                    {photoBase64 ? (
                        <img src={`data:image/jpeg;base64,${photoBase64}`} alt="Profile" className="w-full h-full object-cover" />
                    ) : (
                        <div className="w-full h-full flex items-center justify-center text-gray-500 text-sm">No Photo</div>
                    )}
                </div>

                {/* Upload button */}
                <label className="bg-[#509FBF] text-[#13005A] px-4 py-2 ml-2 text-sm font-semibold rounded-3xl transition duration-200 shadow-md hover:shadow-2xl cursor-pointer">
                    Upload image
                    <input
                        id="photo"
                        type="file"
                        accept="image/*"
                        onChange={handlePhotoUpload}
                        className="hidden"
                    />
                </label>
            </div>

            {/* Save Button */}
            <div className="flex justify-end items-center w-full mt-6 mx-[-40px] pr-25">
                <SaveButton onClick={handleSave} />
            </div>
        </div>
    );
};

export default ProfileForm;