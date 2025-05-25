import { useState } from "react";
import SaveButton from "./SaveButton";

const ProfileForm = () => {
    const [photo, setPhoto] = useState(null);
    const [photoURL, setPhotoURL] = useState("");

    const handlePhotoUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            setPhoto(file);
            console.log(photo);
            setPhotoURL(URL.createObjectURL(file)); // For preview
        }
    };

    return (
        <div className="scale-65 w-[500px] flex flex-col gap-6">
            <h2 className="text-navy text-4xl font-bold text-center">Psychologist Profile</h2>

            {/* Name Input */}
            <div>
                <label className="block text-black text-xl mb-1">Name</label>
                <input
                    type="name"
                    className="w-full h-[65px] border border-black rounded-4xl px-8 text-navy text-lg focus:outline-none"
                    placeholder="Enter your name"
                />
            </div>

            {/* Specialty Input */}
            <div>
                <label className="block text-black text-xl mb-1">Specialty</label>
                <input
                    type="specialty"
                    className="w-full h-[65px] border border-black rounded-4xl px-8 text-navy text-lg focus:outline-none"
                    placeholder="Enter your specialty (ex: Anxiety, Depression, etc)."
                />
            </div>

            {/* Experience Input */}
            <div>
                <label className="block text-black text-xl mb-1">Experience</label>
                <input
                    type="experience"
                    className="w-full h-[65px] border border-black rounded-4xl px-8 text-navy text-lg focus:outline-none"
                    placeholder="Enter your experience (years)"
                />
            </div>

            {/* Profile Photo */}
            <div className="flex flex-col gap-2 items-start">
                <label className="block text-black text-xl mb-1">Profile Photo</label>

                {/* Image preview */}
                <div className="w-32 h-32 rounded-full bg-gray-300 overflow-hidden mb-2">
                    {photoURL ? (
                        <img src={photoURL} alt="Profile" className="w-full h-full object-cover" />
                    ) : (
                        <div className="w-full h-full flex items-center justify-center text-gray-500 text-sm">No Photo</div>
                    )}
                </div>

                {/* Upload button */}
                <label className="bg-[#509FBF] text-[#13005A] px-4 py-2 ml-2 text-sm font-semibold rounded-3xl transition duration-200 shadow-md hover:shadow-2xl cursor-pointer">
                    Upload image
                    <input
                        type="file"
                        accept="image/*"
                        onChange={handlePhotoUpload}
                        className="hidden"
                    />
                </label>
            </div>

            {/* Save Button */}
            <div className="flex justify-end items-center w-full mt-6 mx-[-40px] pr-25">
                <SaveButton />
            </div>
        </div>
    );
};

export default ProfileForm;