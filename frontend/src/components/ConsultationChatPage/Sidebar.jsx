import { BsBriefcaseFill } from "react-icons/bs";

const Sidebar = () => {
    return (
        <div className="w-[357px] h-full bg-light border-r border-blue-dark px-8 py-10 text-center">
            <div className="w-[150px] h-[160px] mt-8 bg-gray-300 rounded-lg mx-auto"></div>
            <h2 className="text-blue-dark text-2xl font-bold mt-6">Xyz, S.Psi</h2>
            <div className="flex justify-center items-center text-blue-dark text-l mt-3">
                <BsBriefcaseFill className="mr-2" />
                <span>12 years</span>
            </div>
            <p className="text-blue-dark text-lg font-medium mt-4">Specialty:</p>
            <p className="text-blue-dark text-lg">Anxiety, Trauma, Stress</p>
            <p className="text-blue-dark text-lg font-medium mt-6">xyz@gmail.com</p>
            <p className="text-blue-dark text-lg font-medium mt-6">Session:</p>
            <p className="text-blue-dark text-lg">1/1/25 | 13.00-15.00</p>
        </div>
    );
};

export default Sidebar;