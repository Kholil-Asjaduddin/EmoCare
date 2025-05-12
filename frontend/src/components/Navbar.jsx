const Navbar = () => {
  return (
    <header className="absolute top-[-2px] left-0 w-full h-[50px] flex items-center bg-nav px-8">
      {/* Navigation Links */}
      <nav className="flex gap-10">
        <a href="/" className="text-navy text-[20px] font-bold px-4 py-1">
          Home
        </a>
        <a
          href="/community"
          className="text-navy text-[20px] font-normal px-4 py-1"
        >
          Community
        </a>
        <a
          href="/consultation"
          className="text-navy text-[20px] font-normal px-4 py-1"
        >
          Consultation
        </a>
        <a
          href="/chatbot"
          className="text-navy text-[20px] font-normal px-4 py-1"
        >
          Chatbot
        </a>
      </nav>

      {/* Profile Icon */}
      <div className="ml-auto w-[35px] h-[30px] bg-gray-300 border border-bg-light rounded-full"></div>
    </header>
  );
};

export default Navbar;
