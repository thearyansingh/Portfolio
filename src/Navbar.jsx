import { FiMenu, FiX } from 'react-icons/fi';
import { CiDark } from 'react-icons/ci';
import { MdArrowOutward } from 'react-icons/md';


import { BsSun } from "react-icons/bs";
const Navbar = ({ toggleMenu, isMenuOpen, darkMode, setDarkMode }) => {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <nav className="fixed top-0 left-0 w-full z-50 py-3 px-4 bg-white dark:bg-[#0F172A]   dark:text-gray-300">
      <div className="max-w-7xl mx-auto flex justify-between items-center h-16">
        <div className="flex items-center gap-2">
          <h1 className="font-bold text-3xl">Aryan</h1>
          <span className="rounded-full p-1 bg-violet-800 mt-2"></span>
        </div>

        <div className="hidden px-20 py-3  
   md:flex items-center space-x-8  rounded-full">
          {['Home', 'About','Skills', 'Projects', 'Experience','Contact'].map((item) => (
            <span
            onClick={() => scrollToSection(item)} key={item} className="text-gray-700 dark:text-gray-300 cursor-pointer hover:text-gray-400">{item}</span>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-6">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 transition"
            aria-label="Toggle Dark Mode"
          >
            {!darkMode ? <BsSun className="w-6 h-6" /> : <CiDark className="w-6 h-6" />}
          </button>
          <button className="flex items-center gap-2 px-6 py-2 rounded-full border border-gray-500 shadow transition-transform duration-300 hover:scale-110">
            Contact <MdArrowOutward className="h-5 w-5 text-gray-500" />
          </button>
        </div>

        <div className="md:hidden flex items-center gap-4">
          <button onClick={() => setDarkMode(!darkMode)}>{darkMode ? <BsSun className="w-6 h-6" /> : <CiDark className="w-6 h-6" />}</button>
          <button onClick={toggleMenu} className="p-2 rounded-md">
            {isMenuOpen ? <FiX className="h-6 w-6" /> : <FiMenu className="h-6 w-6" />}
          </button>
        </div>
      </div>
    </nav>
  );
};


export default Navbar
