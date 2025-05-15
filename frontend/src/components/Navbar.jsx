import { useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();

  // Define paths where the navbar should be hidden
  const excludedPaths = ['/landing', '/login', '/signup', '/selectrole', '/psychologistprofile', '/userprofile', '/profile'];

  if (excludedPaths.includes(location.pathname)) {
    return null;
  }

  return (
    <header className="fixed top-0  w-screen h-16 flex bg-nav items-center px-8">
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

      {/* Profile Icon */}
      <div className="ms-auto size-9 bg-gray-300 border border-bg-light rounded-full"></div>
    </header>
  );
};

export default Navbar;