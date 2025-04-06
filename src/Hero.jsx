import React from 'react'
import removed from "./assets/removed.png"
import {motion} from "framer-motion"
import { BsSun } from "react-icons/bs";
const container = (delay) =>({
  hidden:{x:-100, opacity:0},
  visible:{
    x:0,
    opacity:1,
    transition:{duration:0.5, delay:delay}
  },
})
const Hero = () => {
  
    return (
      
      <section id='Home' className="flex flex-col  sm:flex-row items-center justify-center pt-30 pb-20  border-slate-800  sm:mt-5 px-10 dark:bg-[#0F172A] dark:text-gray-300">
        <div className="w-full sm:w-1/2 space-y-2 flex flex-col justify-center">
          <motion.h1  variants={container(0)} initial="hidden" animate="visible" className="robotos text-6xl font-bold">Hi, I'm Aryan Singh</motion.h1>
          <motion.p  variants={container(0.5)} initial="hidden" animate="visible" className="text-4xl font-bold bg-gradient-to-r from-purple-500 via-pink-200 to-red-200 bg-clip-text text-transparent animate-gradient">I am a Full-Stack Developer</motion.p>
          <motion.p  variants={container(1)} initial="hidden" animate="visible" className="poppins-thin mt-4 text-gray-600 dark:text-gray-400">
          Experienced in designing and developing scalable web applications with a strong foundation in both frontend and backend technologies. Passionate about creating seamless user experiences, optimizing performance, and ensuring robust security.
          🚀 Frontend: React.js, Next.js, Tailwind CSS, HTML, CSS, JavaScript, TypeScript
⚡ Backend: Node.js, Express.js, REST APIs, WebSockets
📦 Database: MongoDB, Mongoose, Firebase
🔐 Authentication & Security: JWT, OAuth, Role-Based Access Control

            </motion.p>
          <motion.button  variants={container(1)} initial="hidden" animate="visible" className="mt-6 px-3 py-3 w-[60%]  sm:w-[30%] bg-violet-600 text-white rounded-full shadow-md hover:bg-violet-700">See Resume</motion.button>
        </div>
        <div  className="w-full sm:w-[60%] flex justify-center mt-6 sm:mt-0">
          < motion.img initial={{x:100, opacity:0}} animate={{x:0, opacity:1}} transition={{duration:1, delay:1.2}} src={removed} className="w-full sm:w-3/5" alt="Profile" />
        </div>
      </section>
     
    );
  };

export default Hero
