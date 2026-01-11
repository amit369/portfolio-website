import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-900 text-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo / Name */}
        <h1 className="text-xl font-bold text-blue-400">
          Amit Chaman
        </h1>

        {/* Navigation Links */}
        <ul className="hidden md:flex space-x-8 text-sm font-medium">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-blue-400"
                  : "hover:text-blue-400"
              }
            >
              Home
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? "text-blue-400"
                  : "hover:text-blue-400"
              }
            >
              About
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/skills"
              className={({ isActive }) =>
                isActive
                  ? "text-blue-400"
                  : "hover:text-blue-400"
              }
            >
              Skills
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/projects"
              className={({ isActive }) =>
                isActive
                  ? "text-blue-400"
                  : "hover:text-blue-400"
              }
            >
              Projects
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive
                  ? "text-blue-400"
                  : "hover:text-blue-400"
              }
            >
              Contact
            </NavLink>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button className="text-2xl">☰</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
