import { useLocation } from 'react-router-dom';
import ProfileMenu from "./UserProfilePage/ProfileMenu";

const Navbar = () => {
  const location = useLocation();

  // Define paths where the navbar should be hidden
  const excludedPaths = ['/', '/login', '/signup', '/selectrole', '/psychologistprofile', '/userprofile'];

  if (excludedPaths.includes(location.pathname)) {
    return null;
  }

  return (
    <header className="fixed top-0  w-screen h-16 flex bg-nav items-center shadow-sm px-8 z-50">
      {/* Navigation Links */}
      <nav className="flex gap-10 text-2xl font-normal">
        <a href="/home" className="text-navy px-4">
          Home
        </a>
        <a href="/community" className="text-navy px-4">
          Community
        </a>
        <a href="/consultation" className="text-navy px-4">
          Consultation
        </a>
        <a href="/chatbot" className="text-navy px-4">
          Chatbot
        </a>
      </nav>
        
      {/* Profile Dropdown */}
      <ProfileMenu />
    </header>
  );
};

export default Navbar;