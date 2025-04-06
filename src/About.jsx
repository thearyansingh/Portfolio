import React from 'react'
import about from "./assets/about.png"
import Card from './Components/Card'
import { FaCode } from "react-icons/fa";
import { MdOutlineSchool } from "react-icons/md";
import { IoBagHandleSharp } from "react-icons/io5";
import firebase from "./assets/firebase.png"
import mongodb from "./assets/mongodb.png"

import figma from "./assets/figma.png"
import git from "./assets/git.png"
import vscode from "./assets/vscode.png"
import {motion} from "framer-motion"

const container = (delay) =>({
  hidden:{y:-50, opacity:0},
  visible:{
    y:0,
    opacity:1,
    transition:{duration:0.5, delay:delay}
  },
})



const About = () => {

  return (
    <div className='flex flex-col space-y-20 justify-center items-center py-8 sm:px-20 dark:bg-[#0F172A] dark:text-gray-300'>
      <div id='About'  className='flex flex-col gap-3 items-center'>
<motion.h1   variants={container(0.5)}   
 whileInView={{opacity:1, y:0}}  animate={{opacity:1,y:-100}} transition={{duration:0.5}} className='bg-gradient-to-r from-purple-300 via-pink-200 to-red-200 bg-clip-text text-transparent animate-gradient roboto text-5xl font-bold'>About Me</motion.h1>
 <p   
 className='text-xl font-semibold text-slate-400 w-[75%] text-center'>My journey from Java programming to web development, hackathons,Internship and community leadership</p>
      </div>
      <motion.div  initial={{ opacity: -1 }}
  whileInView={{ opacity:1}}
  transition={{ duration: 2 }} 
       className=' flex flex-col sm:flex-row justify-center gap-16 px-8 items-center '>
        <div className='rounded-xl sm:w-[30%]   border-2 bg-gray-300'>
        <img  src={about} className='' alt="" />
        </div>
        <div className='ovo-regular sm:w-[50%] flex flex-col gap-5 justify-start   '>
<p className='text-lg'>
I am an experienced Full-Stack Developer with over a decade of professional expertise in the field. Throughout my career, I have had the privilege of collaborating with prestigious organizations, contributing to their success and growth.</p>
       <div className='flex flex-col sm:flex-row  gap-3'>
       <Card icon={<FaCode className='h-10 w-10' />} text="Languages" languages="HTML, CSS, JavaScript React Js, Next Js"/>
       <Card icon={<MdOutlineSchool  className='h-10 w-10' />} text="Education" languages="Master Of Computer Application (MCA)"/>
       <Card icon={<IoBagHandleSharp  className='h-10 w-10' />} text="Projects" languages="Built more then 5 Projects"/>
      
       </div>
       
       <p className='text-lg font-semibold'>Tools I use </p>
       <div className='flex gap-6 '>
       <div className ="h-12 w-12 rounded-lg p-2  border-2 border-gray-500  "> 
        <img src={git} alt="" />
       </div>
       <div className ="h-12 w-12 rounded-lg p-2  border-2  border-gray-500  "> 
        <img src={firebase} alt="" />
       </div>
       <div className ="h-12 w-12 rounded-lg p-2  border-2  border-gray-500 "> 
        <img src={mongodb} alt="" />
       </div>
       <div className ="h-12 w-12 rounded-lg p-2  border-2  border-gray-500 "> 
        <img src={figma} alt="" />
       </div>
       <div className ="h-12 w-12 rounded-lg p-2  border-2  border-gray-500  "> 
        <img src={vscode} alt="" />
       </div>
       </div>
        </div>
       
      </motion.div>
    </div>
  )
}

export default About
