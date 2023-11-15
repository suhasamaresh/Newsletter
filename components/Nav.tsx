// Navbar.tsx
"use client"
import React, { useState } from 'react';

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-black p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="text-white text-lg font-bold pl-8">
          Your Logo
        </a>

        {/* Mobile Menu Button */}
        <button
          className="text-white focus:outline-none lg:hidden"
          onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>

        {/* Navbar Links */}
        <div className="hidden lg:flex space-x-4 mx-6">
          <a href="#" className="text-white px-5">
            Home
          </a>
          <a href="#" className="text-white px-5">
            Explore
          </a>
          <a href="#" className="text-white px-5">
            Contribute
          </a>
          <a href="#" className="text-white px-5">
            Login
          </a>
        </div>
      </div>

      {/* Mobile Menu (hidden by default) */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-gray-800 p-4">
          <a href="#" className="block text-white mb-2">
            Home
          </a>
          <a href="#" className="block text-white mb-2">
            Explore
          </a>
          <a href="#" className="block text-white mb-2">
            Write
          </a>
          <a href="#" className="block text-white mb-2">
            Login
          </a>
          <a className='block text-white'>
            Profile
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
