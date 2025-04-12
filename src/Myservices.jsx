import React from 'react'
import SkillsCard from './Components/SkillsCard'
import { assets } from './assets/pic'
import {motion} from "framer-motion"

const Myservices = () => {
  return (
    <div id='Skills' className='flex flex-col justify-center px-5 sm:px-20 py-28 ovo-regular items-center gap-8 dark:bg-[#0F172A] dark:text-gray-300'>
       
        <motion.h1  
         whileInView={{opacity:1, y:0}} 
          animate={{opacity:1,y:50}} 
          transition={{duration:0.5}}
            className='bg-gradient-to-r  from-purple-300 via-pink-200 to-red-200 bg-clip-text text-transparent animate-gradient robotos text-5xl font-bold'>Skills & Tech Stack</motion.h1>
        <p
         whileInView={{opacity:1, y:0}} 
         animate={{opacity:1,y:50}} 
         transition={{duration:0.5}}
          className='text-xl robotos text-slate-300'>Technologies and tools I've worked with and mastered over the years</p>
        <motion.div  initial={{ opacity: -1 }}
  whileInView={{ opacity:1}}
  transition={{ duration: 2 }}  className='grid grid-cols-1 sm:grid-cols-3 gap-10'>
           <div className='bg-gradient-to-br bg-[#0F3440] from-[#0F3440] via-[#1a4c5d] to-[#286b81] rounded-xl  '>
           <SkillsCard  technology="Frontend" pic1={assets.htmls} pic2={assets.css} pic3={assets.javascript} pic7={assets.boot} pic4={assets.tailwind} pic5={assets.Reactjs} pic6={assets.redux} />
           
            </div> 
            <div className='bg-gradient-to-br from-[#2d0e44] via-[#4a2272] to-[#61287f] rounded-xl'>
            <SkillsCard technology="Backend" pic1={assets.java} pic2={assets.javascript} pic3={assets.node} pic4={assets.express} pic5={assets.monogodb} pic6={assets.firebase} pic7={assets.jwt}  />
            </div>
            <div className=' bg-gradient-to-br from-[#0F3824] via-[#1d5e3e] to-[#14462e] rounded-xl'>
            <SkillsCard technology="Other Tools" pic1={assets.git} pic2={assets.docker} pic3={assets.vscode} pic4={assets.AWS} pic5={assets.postman} pic6={assets.redux} pic7={undefined} />
            </div>

        </motion.div>
        <p
        p
        whileInView={{opacity:1, y:0}} 
        animate={{opacity:1,y:50}} 
        transition={{duration:0.5}}
         className='text-xl robotos text-[#A1A1A1]'
        >Always learning and exploring new technologies to stay at the cutting edge of web development.</p>
      
    </div>
  )
}

export default Myservices
