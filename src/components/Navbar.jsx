// src/components/Navbar.jsx
import React, { useState } from "react";
import { Link } from "react-scroll";
import logo from "../assets/logo.jpg"; // Import logo image

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", to: "hero" },
    { name: "Problem", to: "problem" },
    { name: "Solution", to: "solution" },
    { name: "Market", to: "market" },
    { name: "Product", to: "product" },
    { name: "Business", to: "business" },
    { name: "Traction", to: "traction" },
    { name: "Competitive", to: "competitive" },
    { name: "Financial", to: "financial" },
    { name: "Funding", to: "funding" },
  ];

  return (
    <nav className="bg-gray-900 text-white fixed w-full z-50 shadow-md">
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center h-16">
        
        {/* Logo */}
        <div className="flex items-center cursor-pointer">
          <img src={logo} alt="EndoExo Logo" className="h-10 w-10 rounded-full mr-2" />
          <span className="text-xl font-bold">EndoExo</span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              smooth={true}
              duration={500}
              className="cursor-pointer hover:text-blue-400 transition-colors duration-300"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="focus:outline-none text-2xl"
          >
            {isOpen ? "✖" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-800 px-6 py-4 flex flex-col space-y-3">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              smooth={true}
              duration={500}
              className="cursor-pointer hover:text-blue-400 transition-colors duration-300"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
