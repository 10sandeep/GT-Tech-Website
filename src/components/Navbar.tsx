import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import Logo from "../assets/logo1.png";

interface NavbarProps {
  toggleTheme: () => void;
  isDarkMode: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ toggleTheme, isDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { title: "Home", to: "/" },
    {
      title: "We Offer",
      to: "#services",
      dropdown: [
        { title: "Solution", to: "#solution" },
        { title: "Service", to: "#service" },
        { title: "Products", to: "#products" },
      ],
    },
    { title: "About", to: "/about" },
    { title: "Industry", to: "#industry" },
    { title: "Gallery", to: "#gallery" },
    { title: "Career", to: "/career" },
    { title: "Contact", to: "/contact" },
  ];

  return (
    <nav
      className={`fixed w-full z-50 backdrop-blur-lg bg-white/30 dark:bg-black/30 transition-all duration-300 ${
        isScrolled ? "shadow-lg" : "shadow-none"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <NavLink to="/" className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">
            <img src={Logo} alt="Logo" className="h-10 w-auto" />
          </NavLink>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6">
            {navItems.map((item) => (
              <div key={item.title} className="relative group">
                <NavLink
                  to={item.to}
                  className={({ isActive }) =>
                    `px-3 py-2 text-sm font-medium text-gray-800 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200 ${
                      isActive ? "font-semibold" : ""
                    }`
                  }
                >
                  <span className="flex items-center">
                    {item.title}
                    {item.dropdown && <ChevronDown className="ml-1 h-4 w-4" />}
                  </span>
                </NavLink>
                {item.dropdown && (
                  <div className="absolute left-0 mt-2 w-48 rounded-lg shadow-lg backdrop-blur-md bg-white/40 dark:bg-black/40 ring-1 ring-black/10 dark:ring-white/10 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                    <div className="py-2">
                      {item.dropdown.map((dropItem) => (
                        <NavLink
                          key={dropItem.title}
                          to={dropItem.to}
                          className={({ isActive }) =>
                            `block px-4 py-2 text-sm text-gray-800 dark:text-gray-200 hover:bg-indigo-100 dark:hover:bg-indigo-600/30 ${
                              isActive ? "bg-indigo-100 dark:bg-indigo-600/30" : ""
                            }`
                          }
                        >
                          {dropItem.title}
                        </NavLink>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-gray-800 dark:text-gray-200"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden ${isOpen ? "block" : "hidden"}`}>
        <div className="px-4 pt-2 pb-3 space-y-2 bg-white/30 dark:bg-black/30 backdrop-blur-lg shadow-lg">
          {navItems.map((item) => (
            <React.Fragment key={item.title}>
              <NavLink
                to={item.to}
                className={({ isActive }) =>
                  `block px-3 py-2 text-base font-medium text-gray-800 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400 ${
                    isActive ? "font-semibold" : ""
                  }`
                }
                onClick={() => setIsOpen(false)}
              >
                {item.title}
              </NavLink>
              {item.dropdown?.map((dropItem) => (
                <NavLink
                  key={dropItem.title}
                  to={dropItem.to}
                  className={({ isActive }) =>
                    `block px-3 py-2 pl-6 text-sm text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 ${
                      isActive ? "text-indigo-600 dark:text-indigo-400" : ""
                    }`
                  }
                  onClick={() => setIsOpen(false)}
                >
                  {dropItem.title}
                </NavLink>
              ))}
            </React.Fragment>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;