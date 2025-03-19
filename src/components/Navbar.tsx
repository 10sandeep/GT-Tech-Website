import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import Logo from "../assets/logo1.png";

const Navbar: React.FC = () => {
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
        { title: "Solutions", to: "/solutions" }, // Updated "SolutionPage" to "Solutions" for consistency
        { title: "Services", to: "/services" },
        { title: "Products", to: "#products" },
      ],
    },
    { title: "About", to: "/about" },
    { title: "Industry", to: "/industry" },
    { title: "Gallery", to: "#gallery" },
    { title: "Career", to: "/career" },
    { title: "Contact", to: "/contact" },
  ];

  return (
    <nav
      className={`fixed w-full z-50 backdrop-blur-xl bg-gray-900/80 transition-all duration-500 border-b border-cyan-500/50 ${
        isScrolled ? "shadow-lg shadow-cyan-500/40" : "shadow-none"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
        <NavLink to="/">
          <img
            src={Logo}
            alt="Logo"
            className="h-12 w-auto drop-shadow-lg hover:scale-110 transition-transform duration-300"
          />
        </NavLink>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <div key={item.title} className="relative group">
              <NavLink
                to={item.to}
                className="px-4 py-2 text-lg font-semibold text-gray-200 hover:text-cyan-400 transition-all duration-300 transform hover:scale-105"
              >
                <span className="flex items-center">
                  {item.title}
                  {item.dropdown && <ChevronDown className="ml-2 h-5 w-5" />}
                </span>
              </NavLink>
              {item.dropdown && (
                <div className="absolute left-0 mt-3 w-56 rounded-xl bg-gray-800/80 border border-cyan-500/50 backdrop-blur-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:-translate-y-1">
                  <div className="py-3">
                    {item.dropdown.map((dropItem) => (
                      <NavLink
                        key={dropItem.title}
                        to={dropItem.to}
                        className="block px-5 py-2 text-gray-300 hover:bg-cyan-500/20 hover:text-cyan-300 transition-colors duration-200"
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
            className="p-2 text-gray-200 hover:text-cyan-400 transition-colors duration-300"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden fixed inset-0 bg-black/80 backdrop-blur-lg transition-all duration-500 ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}>
        <div className="px-6 pt-24 pb-6 space-y-6">
          {navItems.map((item) => (
            <div key={item.title}>
              <NavLink
                to={item.to}
                className="block px-4 py-3 text-xl font-semibold text-gray-200 hover:text-cyan-400 transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                {item.title}
              </NavLink>
              {item.dropdown?.map((dropItem) => (
                <NavLink
                  key={dropItem.title}
                  to={dropItem.to}
                  className="block px-6 py-2 text-lg text-gray-400 hover:text-cyan-400 hover:bg-cyan-500/10 transition-colors duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  {dropItem.title}
                </NavLink>
              ))}
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
