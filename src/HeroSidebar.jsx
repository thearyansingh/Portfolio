import React from 'react'
import { FiMenu, FiX } from 'react-icons/fi';

import { MdArrowOutward } from "react-icons/md";

const HeroSidebar = ({ isMenuOpen, toggleMenu }) => {
    return (
      <>
        {isMenuOpen && <div className="fixed inset-0 bg-black bg-opacity-50 z-40" onClick={toggleMenu}></div>}
        <div className={`fixed top-0 left-0 w-64 h-full bg-white dark:bg-[#1a0025] shadow-lg z-50 transform ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300`}>
          <div className="flex justify-between items-center px-6 py-4 border-b">
            <button onClick={toggleMenu} className="text-gray-700 dark:text-gray-300">
              <FiX className="h-6 w-6" />
            </button>
          </div>
          <ul className="flex flex-col space-y-4 px-6 py-4">
            {['Home', 'Collection', 'About', 'Contact'].map((item) => (
              <li key={item} className="text-gray-700 dark:text-gray-300 hover:text-gray-900 cursor-pointer">{item}</li>
            ))}
          </ul>
          <div className="px-6 pt-4">
            <button className="w-full flex items-center justify-center px-6 py-2 border border-gray-500 rounded-full hover:scale-110">
              Contact <MdArrowOutward className="h-5 w-5 text-gray-500 ml-2" />
            </button>
          </div>
        </div>
      </>
    );
  };

export default HeroSidebar
