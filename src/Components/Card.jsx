import React from 'react'
import { FaCode } from "react-icons/fa";
const Card = ({icon,text,languages}) => {
  return (
    <div className='flex flex-col p-7 border-2 gap-5 rounded-xl border-white'>
    {icon}
    <p className='robotos text-lg font-bold'>{text}</p>
    <p className='robotos text-sm font-bold'>{languages}</p>
    </div>
  )
}

export default Card
