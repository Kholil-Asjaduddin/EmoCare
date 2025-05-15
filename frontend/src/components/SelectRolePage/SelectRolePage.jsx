import { useNavigate } from "react-router-dom";
import clientIcon from "../../assets/client.svg"; 
import psychologistIcon from "../../assets/psychologist.svg"; 

const SelectRolePage = () => {
    const navigate = useNavigate();

    const roles = [
        { title: "Client", image: clientIcon, width: 200, height: 160, path: "/userprofile" }, 
        { title: "Psychologist", image: psychologistIcon, width: 130, height: 160, path: "/psychologistprofile" },
    ];

    return (
        <div className="w-screen h-screen flex items-center justify-center">
            {/* Left Side - Welcome Message */}
            <div className="w-2/5 h-full flex items-center justify-center bg-nav text-center">
                <h1 className="text-navy leading-relaxed">
                    <span className="block text-5xl font-bold">Welcome!</span>
                    <span className="block mt-4 text-3xl font-medium">Select your role to continue</span>
                </h1>
            </div>

            {/* Right Side - Role Cards */}
            <div className="w-3/5 h-full flex items-center justify-center">
                <div className="flex flex-col space-x-1 gap-20">
                    {roles.map((role, index) => (
                        <div
                            key={index}
                            onClick={() => navigate(role.path)}
                            className="w-[300px] h-[200px] bg-[#509FBF] border border-[#509FBF] shadow-md rounded-[50px] flex flex-col items-center p-5 cursor-pointer hover:bg-[#d6e4eb] transition-all"
                        >
                            <img
                                src={role.image}
                                alt={role.title}
                                style={{ width: `${role.width}px`, height: `${role.height}px` }}
                                className="object-contain mt-0"
                            />
                            <h2 className="text-[#13005A] text-2xl font-semibold">{role.title}</h2>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SelectRolePage;