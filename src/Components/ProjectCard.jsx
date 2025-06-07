import React from 'react'

const ProjectCard = ({image,proName,description,skills,code,Link}) => {
  return (
    <div className='flex flex-col gap-3  p-4 border-2 justify-start border-[#171717] rounded-xl bg-[#171717] '>
      <img className='rounded-xl' src={image} alt="proimage " />
      <h1 className='font-semibold text-2xl '>{proName}</h1>
      <p className='text-slate-400'>{description}</p>
      <div className='flex flex-wrap gap-2   '>
  {
    skills.map((items)=>(
        <p className='p-2 font-bold text-[10px] border-[2px] bg-black border-slate-800 rounded-full '>{items}</p>
    ))
  }
     </div>
    
  <a href={Link} className='w-1/3 text-center p-2 text-sm font-bold rounded-full border-2 bg-slate-800 border-amber-50'>Source Code</a>
   
    </div>
  
  )
}

export default ProjectCard
