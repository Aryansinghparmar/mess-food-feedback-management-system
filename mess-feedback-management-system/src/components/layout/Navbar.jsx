// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-scroll';

const Navbar = ({ onLogout }) => {
  return (
    <header className="fixed top-0 left-0 w-full bg-gradient-to-r from-indigo-500 to-purple-600 shadow-lg z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <img
              src="/logo.png" // Add your logo file in public folder
              alt="Mess Feedback System Logo"
              className="h-10 w-10 rounded-full"
            />
            <span className="ml-3 text-white font-bold text-lg">
              MessMate
            </span>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex space-x-8">
            <Link
              to="hero"
              smooth={true}
              duration={500}
              className="text-white hover:text-gray-300 cursor-pointer"
            >
              Home
            </Link>
            <Link
              to="feedback"
              smooth={true}
              duration={500}
              className="text-white hover:text-gray-300 cursor-pointer"
            >
              Feedback
            </Link>
            <Link
              to="footer"
              smooth={true}
              duration={500}
              className="text-white hover:text-gray-300 cursor-pointer"
            >
              About
            </Link>
          </div>

          {/* Logout Button */}
          <div className="flex items-center space-x-4">
            <button
              onClick={onLogout}
              className="bg-red-500 text-white px-4 py-2 rounded-md shadow hover:bg-red-600"
            >
              Logout
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            {/* Add a mobile menu toggle here if required */}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
