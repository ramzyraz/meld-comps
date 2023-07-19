import React from 'react';
import Logo from '/public/c_letter_m.jpg'
import Image from 'next/image';
import Link from 'next/link';

const MobileSidebar = ({ onClose }) => {
    return (
      <div className="fixed top-0 left-0 w-[90%] h-full bg-gray-800 text-white p-4 shadow-lg">
        <div className="relative h-full flex flex-col">
          <div className="flex-grow">
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center">
                <Image src={Logo} alt="Logo" className="w-8 h-8 mr-1" />
                <span className="text-xl font-bold">inimal</span>
              </div>
              <button className="text-white focus:outline-none" onClick={onClose}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-red-500 mr-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <hr className="border-gray-700 my-4" />
            <nav className="mb-4">
              <Link href={'/'} className="block py-2">
                Home
              </Link>
              <hr className="border-gray-700 my-2" />
              <Link href={'/'} className="block py-2">
                App
              </Link>
              <hr className="border-gray-700 my-2" />
              <Link href={'/'} className="block py-2">
                Pricing
              </Link>
              <hr className="border-gray-700 my-2" />
              <Link href={'/'} className="block py-2">
                Contact
              </Link>
              <hr className="border-gray-700 my-2" />
            </nav>
          </div>
  
          <div className="absolute bottom-16 left-0 right-0 flex justify-center gap-2">
            <button className="bg-blue-500 text-white px-4 py-2 mr-2 rounded">
              Export Product
            </button>
            <button className="bg-green-500 text-white px-4 py-2 ml-2 rounded">
              Sign up
            </button>
          </div>
        </div>
      </div>
    );
};  

export default MobileSidebar;
