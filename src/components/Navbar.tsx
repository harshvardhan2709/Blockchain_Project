// src/components/Navbar.tsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-white shadow-md fixed w-full z-10">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <div className="text-xl font-bold text-green-600">
          Climatrixs
        </div>

        <div className="md:hidden">
          <button onClick={toggleNavbar} className="text-gray-700 focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        <div className={`md:flex md:items-center md:gap-6 ${isOpen ? 'block' : 'hidden'} md:block`}>
          <Link to="/" className="block py-2 md:py-0 text-gray-700 hover:text-green-600">Home</Link>
          <Link to="/profile" className="block py-2 md:py-0 text-gray-700 hover:text-green-600">Profile</Link>
          <Link to="/projects" className="block py-2 md:py-0 text-gray-700 hover:text-green-600">Projects</Link>
          <Link to="/login" className="block py-2 md:py-0 text-gray-700 hover:text-green-600">Login</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
