import { Link } from "react-router-dom";


const Nav = () => {
  return (
      <nav className="justify-start items-center p-5">
          <ul className="flex gap-15 px-8 text-navy text-xl font-semibold">
              <li>
                  <Link to="/" className="font-bold text-navy">
                      Home
                  </Link>
              </li>
              <li>
                  <a
                      href="https://kholil-asjaduddin.github.io/EmoCare/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-navy"
                  >
                      About Us
                  </a>
              </li>
          </ul>
      </nav>
  );
};

export default Nav;
