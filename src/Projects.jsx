import React, { useState } from 'react'
import {motion} from "framer-motion"
import ProjectCard from './Components/ProjectCard'
import { assets } from './assets/pic'
const Projects = () => {
    const pro1 = ['React', 'TailwindCSS', 'Nodejs','Express','MongoDB','javascript'];
    
  return (
    <div id='Projects' className='flex flex-col justify-center px-8 sm:px-15 py-15  items-center gap-8 dark:bg-slate-900 dark:text-gray-300'>
      <motion.h1
       whileInView={{opacity:1, y:0}} 
       animate={{opacity:1,y:50}} 
       transition={{duration:0.5}}
        className='bg-gradient-to-r  from-purple-300 via-pink-300 to-red-300 bg-clip-text text-transparent animate-gradient robotos text-5xl font-bold'>Projects</motion.h1>
      <motion.p
         whileInView={{opacity:1, y:0}} 
         animate={{opacity:1,y:50}} 
         transition={{duration:0.5}}
          className='text-xl robotos items-center text-center text-slate-300'>Technologies and tools I've worked with and mastered over the years</motion.p>
       
      <motion.div   initial={{ opacity: -1 }}
  whileInView={{ opacity:1}}
  transition={{ duration: 2 }}  className='grid grid-cols-1 sm:grid-cols-3 gap-4 '>
      <ProjectCard
    
  
      
       image={assets.ecommerce}
       proName="Attiro"
       description="Built a full stack e-commerce platform for a clothing brand offering a wide range of products for men, women, and kids, with
features like pagination, product filtering, and category-based browsing.Integrated Stripe and RazorPay payment gateways for seamless and secure transactions, ensuring a smooth checkout experience
for users" 
skills={pro1}

/>
<ProjectCard 
       image={assets.ecommerce}
       proName="Attiro"
       description="Built a full stack e-commerce platform for a clothing brand offering a wide range of products for men, women, and kids, with
features like pagination, product filtering, and category-based browsing.Integrated Stripe and RazorPay payment gateways for seamless and secure transactions, ensuring a smooth checkout experience
for users" 
skills={pro1}

/>
<ProjectCard 
       image={assets.ecommerce}
       proName="Attiro"
       description="Built a full stack e-commerce platform for a clothing brand offering a wide range of products for men, women, and kids, with
features like pagination, product filtering, and category-based browsing.Integrated Stripe and RazorPay payment gateways for seamless and secure transactions, ensuring a smooth checkout experience
for users" 
skills={pro1}

/>

      </motion.div>
    </div>
  )
}

export default Projects
