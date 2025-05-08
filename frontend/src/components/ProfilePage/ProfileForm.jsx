const ProfileForm = () => {
    return (
        <div className="scale-77 w-[500px] flex flex-col gap-6">
            <h2 className="text-navy text-5xl font-bold -mt-2">Profile</h2>

            {/* Name Input */}
            <div>
                <label className="block text-black text-xl mb-3 -ml-100">Name</label>
                <input
                    type="text"
                    className="w-full h-[65px] border border-black rounded-4xl text-navy px-8 text-lg focus:outline-none"
                    defaultValue="emo"
                />
            </div>

            {/* Email Input */}
            <div>
                <label className="block text-black text-xl mb-3 -ml-105">Email</label>
                <input
                    type="email"
                    className="w-full h-[65px] border border-black rounded-4xl text-navy px-8 text-lg focus:outline-none"
                    defaultValue="emo@gmail.com"
                />
            </div>

            {/* Password Input */}
            <div>
                <label className="block text-black text-xl mb-3 -ml-95">Password</label>
                <input
                    type="password"
                    className="w-full h-[65px] border border-black rounded-4xl text-navy px-8 text-lg focus:outline-none"
                    defaultValue="emo1234"
                />
            </div>

            {/* Change Password Button */}
            <button className="w-[300px] h-[70px] bg-teal text-blue-dark text-2xl font-medium rounded-full shadow-md mt-2 ml-57 scale-75
              hover:hover:shadow-2xl cursor-pointer transition-all duration-300">
                Change Password
            </button>
        </div>
    );
};

export default ProfileForm;