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
        <a href="/" className="text-navy px-4">
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

      <div className='flex items-end gap-4 ml-auto'>
      {/* Profile Icon */}
        <p className='mb-1 text-lg'>Sam</p>
        <img src='https://imgs.search.brave.com/s-FdOtiJTvkBr0HYUw4f3vZj06rt6KUs5reDU36P13Q/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTQx/Nzc1MDA1MS9waG90/by9sYXJnZS1tYW4t/bWFraW5nLWZ1bm55/LXN1cnByaXNlZC1m/YWNlLmpwZz9zPTYx/Mng2MTImdz0wJms9/MjAmYz10cXdrQS04/YnpLU1dTeHNFMXNS/VWNGWWo3QjBPZFFp/N1E4d29lRTBoQnZn/PQ' className="ms-auto size-9 bg-gray-300 border border-bg-light rounded-full" />
      </div>
    </header>
  );
};

export default Navbar;