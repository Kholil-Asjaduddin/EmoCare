import { useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();

  // Define paths where the navbar should be hidden
  const excludedPaths = ['/landing', '/login', '/signup', '/selectrole', '/psychologistprofile', '/profile'];

  if (excludedPaths.includes(location.pathname)) {
    return null;
  }

  return (
    <header className="sticky top-[-2px] left-0 w-full h-[90px] flex bg-nav items-center px-8">
      {/* Navigation Links */}
      <nav className="flex gap-10 text-3xl font-bold">
        <a href="/" className="text-navy px-4">
          Home
        </a>
        <a href="/community" className="text-navy font-normal px-4">
          Community
        </a>
        <a href="/consultation" className="text-navy font-normal px-4">
          Consultation
        </a>
        <a href="/chatbot" className="text-navy font-normal px-4">
          Chatbot
        </a>
      </nav>

      {/* Profile Icon */}
      <div className="ml-auto w-[35px] h-[30px] bg-gray-300 border border-bg-light rounded-full"></div>
    </header>
  );
};

export default Navbar;