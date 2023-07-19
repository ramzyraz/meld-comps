import React, { useState } from 'react';
import Logo from '/public/c_letter_m.jpg'
import Image from 'next/image';
import MobileSidebar from './Sidebar';

export function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={classNames(
        isMobileMenuOpen ? 'bg-opacity-70' : '',
        'bg-gray-800 text-white py-4 px-6 md:px-10'
    )}>
      <div className="flex items-center justify-between">
        {/* Logo and Title */}
        <div className="flex items-center space-x-4">
            <Image 
                src={Logo}
                alt="Logo"
                className="w-8 h-8"
            />
          {/* <img src="/path/to/logo.png" alt="Logo" className="w-8 h-8" /> */}
          <span className="text-xl font-bold">Your App Name</span>
        </div>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center space-x-6">
          <li><a href="#" className="hover:text-gray-300">Home</a></li>
          <li><a href="#" className="hover:text-gray-300">App</a></li>
          <li><a href="#" className="hover:text-gray-300">Pricing</a></li>
          <li><a href="#" className="hover:text-gray-300">Contact</a></li>
        </ul>

        {/* Mobile Hamburger */}
        <div className="md:hidden flex items-center">
          <button
            className="text-white focus:outline-none"
            onClick={toggleMobileMenu}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>

      {isMobileMenuOpen && <MobileSidebar onClose={closeMobileMenu} />}
    </nav>
  );
};

export default Navbar;
