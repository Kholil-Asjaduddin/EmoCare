import { BsBriefcaseFill } from "react-icons/bs";

const Sidebar = () => {
    return (
        <div className="w-[357px] h-full bg-light border-r border-blue-dark px-8 py-10 text-center">
            <img src="https://i.pinimg.com/736x/d4/07/18/d407187d8444f080a258b4d1caef1076.jpg" alt="" className="w-[150px] h-[160px] mt-8 bg-gray-300 rounded-lg mx-auto"/>
            <div ></div>
            <h2 className="text-blue-dark text-2xl font-bold mt-6">Dr.Alice</h2>
            <div className="flex justify-center items-center text-blue-dark text-l mt-3">
                <BsBriefcaseFill className="mr-2" />
                <span>12 years</span>
            </div>
            <p className="text-blue-dark text-lg font-medium mt-4">Specialty:</p>
            <p className="text-blue-dark text-lg">Stress Management</p>
            <p className="text-blue-dark text-lg font-medium mt-6">alice@gmail.com</p>
            <p className="text-blue-dark text-lg font-medium mt-6">Session:</p>
            <p className="text-blue-dark text-lg">16/05/25 | 07.00-12.00</p>
        </div>
    );
};

export default Sidebar;