// src/components/Navbar.tsx
import React, { useState } from 'react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-white fixed w-full shadow-md z-10">
      <div className="mx-8 py-5 flex justify-between items-center">
        <div className="text-xl font-bold text-green-600">
          ClimCarbon
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
          <span className="text-gray-600 text-sm">Powered by Climekare</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
