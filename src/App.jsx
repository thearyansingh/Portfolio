import React, { useState,useEffect } from 'react';


import Navbar from './Navbar';
import Hero from './Hero';
import HeroSidebar from './HeroSidebar';
import About from './About';
import Myservices from './Myservices';
import Projects from './Projects';
import Experience from './Experience';
import Contact from './Contact';


const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(localStorage.getItem("theme") === "light");

  
  
  useEffect(() => {
   
    if (darkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light ");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
  }, [darkMode]);

  return (
    <div >
      <Navbar toggleMenu={() => setIsMenuOpen(!isMenuOpen)} isMenuOpen={isMenuOpen} darkMode={darkMode} setDarkMode={setDarkMode} />
      
      <Hero />
     
   
     <About/>
    
     
      <Myservices/>
      <Projects/>
      <Experience/>
      <Contact/>
      <HeroSidebar isMenuOpen={isMenuOpen} toggleMenu={() => setIsMenuOpen(false)} />
    </div>
  );
};

export default App;
