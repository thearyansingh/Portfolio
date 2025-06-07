import React, { useState } from 'react'
import {motion} from "framer-motion"
import ProjectCard from './Components/ProjectCard'
import { assets } from './assets/pic'
const Projects = () => {
    const pro1 = ['React', 'TailwindCSS', 'Nodejs','Express','MongoDB','javascript'];
    const pro2 = ['React', 'Nodejs','Express','MongoDB','javascript','Stripe','SEO'];
    const pro3= ['React', 'TailwindCSS', 'Nodejs','Express','MongoDB','javascript'];

    
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
    
  
      
       image={assets.attiro}
       proName="Attiro"
       description="Built a full stack e-commerce platform for a clothing brand offering a wide range of products for men, women, and kids, with
features like pagination, product filtering, and category-based browsing.Integrated Stripe and RazorPay payment gateways for seamless and secure transactions, ensuring a smooth checkout experience
for users" 
skills={pro1}
Link={"https://github.com/thearyansingh/Attiro1"}

/>
<ProjectCard 
       image={assets.travel}
       proName="efe Travels"
       description="• Developed a dynamic web application for a tour and travel service, enabling customers to book vehicles (car, bus, sedan) based on group size and preferences, with seamless food ordering functionality. Integrated Stripe payment gateway, ensuring secure and efficient transactions, and implemented a responsive UI using
React, backed by Node.js, Express, and MongoDB for scalable backend services." 
skills={pro2}



/>
<ProjectCard 
       image={assets.Blog}
       proName="Blogish"
       description="Built a full-stack blog website where users can read blogs and admins can manage blog posts (create, update, delete) via a secure admin panel using React, Node.js, Express, and MongoDB.
Designed a responsive UI with Tailwind CSS and implemented RESTful APIs to handle dynamic content and CRUD operations efficiently." 
skills={pro3}
Link={"https://github.com/thearyansingh/Blog_website"}

/>

      </motion.div>
    </div>
  )
}

export default Projects
