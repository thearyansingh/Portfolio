import React from 'react'
import {motion} from "framer-motion"
const Experience = () => {
  return (
    <div id='Experience' className='flex flex-col justify-center px-8 sm:px-30 py-15 items-center gap-8 dark:bg-slate-900 dark:text-gray-300 '>
     <motion.h1 whileInView={{opacity:1,y:0}} initial={{opacity:0,y:75}} transition={{duration:1}} className='bg-gradient-to-r py-6  from-purple-300 via-pink-300 to-red-300 bg-clip-text text-transparent animate-gradient robotos text-5xl font-bold'>Experience</motion.h1>
      <div className='flex flex-col sm:flex-row justify-center'>
<motion.p
whileInView={{opacity:1, x:0}} initial={{opacity:0, x:-100}} transition={{duration:1}} className='text-md sm:w-1/3 text-slate-500 w-full font-semibold  '>
April 2024 - July 2024
</motion.p>
<motion.div whileInView={{opacity:1, x:0}} initial={{opacity:0, x:-100}} transition={{duration:1}} className='flex flex-col gap-3 w-full sm:w-1/2'>
  <p className='text-md text-white font-bold '>Aayan Infotech</p>
  <p className='text-sm text-[#6A7B8F]'>
  Built a blog management system for the EFE Travel tour blog page, integrating Draft.js for draft and published posts. Admin interface for managing tours and blog content. Successfully delivered end-to-end full stack web solutions for clients, enhancing system performance by 20% through
optimized React.js frontend and Node.js backend architecture
  </p>
  <div className=' flex flex-wrap gap-3 '>
<button className='p-2 text-sm font-semibold  text-[#6B2195] bg-[#171717] rounded-2xl'> React.js</button>
<button className='p-2 text-sm  text-[#6B2195] bg-[#171717] rounded-xl'> Node js</button>
<button className='p-2 text-sm  text-[#6B2195] bg-[#171717] rounded-xl'> Express</button>
<button className='p-2 text-sm  text-[#6B2195] bg-[#171717] rounded-xl'> MongoDB</button>
<button className='p-2 text-sm  text-[#6B2195] bg-[#171717] rounded-xl'> TailwindCSS</button>
  </div>
  </motion.div>
      </div>
      <div className='flex flex-col w-full sm:flex-row justify-center'>
<motion.p
whileInView={{opacity:1, x:0}} initial={{opacity:0, x:-100}} transition={{duration:1}}
className='text-md sm:w-1/3 text-slate-500 font-semibold  '>
august 2023 - october 2023
</motion.p>
<motion.div whileInView={{opacity:1, x:0}} initial={{opacity:0, x:-100}} transition={{duration:1}}  className='flex flex-col gap-3 w-full sm:w-1/2'>
  <p className='text-md text-white font-bold '>Analyze  Infotech</p>
  <p className='text-sm text-[#6A7B8F]'>
Gained hands-on experience in Java development, focusing on core concepts such as OOP, multithreading, and the Java Collections Framework Organized and tracked project milestones, ensuring smooth communication between technical andnon-technical teams. Strengthened expertise in SQL by designing and managing relational databases, writing efficient queries, and ensuring data integrity.
  </p>
  <div className=' flex flex-wrap gap-3 '>
<button className='p-2 text-sm font-semibold  text-[#6B2195] bg-[#171717] rounded-2xl'>Java</button>
<button className='p-2 text-sm  text-[#6B2195] bg-[#171717] rounded-xl'> SQL</button>
<button className='p-2 text-sm  text-[#6B2195] bg-[#171717] rounded-xl'> React</button>
<button className='p-2 text-sm  text-[#6B2195] bg-[#171717] rounded-xl'> TailwindCSS</button>
  </div>
  </motion.div>
      </div>
    </div>
  )
}

export default Experience
