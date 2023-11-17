// Navbar.tsx
"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import { CgProfile } from 'react-icons/cg';

interface NavbarProps {
  isAuthenticated: true; // Assume you have a way to determine authentication status
}

const Navbar: React.FC<NavbarProps> = ({ isAuthenticated }) => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-black p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo with Link */}
        <Link href="/" passHref>
          <span className="text-white text-lg font-bold pl-8 cursor-pointer">
            Your Logo
          </span>
        </Link>

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
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>

        {/* Navbar Links with Link */}
        <div className="hidden lg:flex space-x-4 mx-6">
          <Link href="/" passHref>
            <span className="text-white px-5 cursor-pointer">
              Home
            </span>
          </Link>
          <Link href="/explore" passHref>
            <span className="text-white px-5 cursor-pointer">
              Explore
            </span>
          </Link>
          <Link href="/contribute" passHref>
            <span className="text-white px-5 cursor-pointer">
              Contribute
            </span>
          </Link>
          {isAuthenticated ? (
            <Link href="/profile" passHref>
              <span className='text-white px-5 cursor-pointer'>
                {/* Use CgProfile icon for the profile logo */}
                <CgProfile className="h-6 w-6" />
              </span>
            </Link>
          ) : (
            <Link href="/login" passHref>
              <span className="text-white px-5 cursor-pointer">
                Login
              </span>
            </Link>
          )}
        </div>
      </div>

      {/* Mobile Menu (hidden by default) */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-gray-800 p-4">
          <Link href="/" passHref>
            <span className="block text-white mb-2 cursor-pointer">
              Home
            </span>
          </Link>
          <Link href="/explore" passHref>
            <span className="block text-white mb-2 cursor-pointer">
              Explore
            </span>
          </Link>
          <Link href="/write" passHref>
            <span className="block text-white mb-2 cursor-pointer">
              Write
            </span>
          </Link>
          {isAuthenticated ? (
            <Link href="/profile" passHref>
              <span className='block text-white cursor-pointer'>
                {/* Use CgProfile icon for the profile logo */}
                <CgProfile className="h-6 w-6" />
              </span>
            </Link>
          ) : (
            <Link href="/login" passHref>
              <span className="block text-white mb-2 cursor-pointer">
                Login
              </span>
            </Link>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
