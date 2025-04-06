import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
const SkillsCard = ({
  technology,
  pic1,
  pic2,
  pic3,
  pic4,
  pic5,
  pic6,
  pic7,
}) => {
  return (
    <div className="flex flex-col p-8 gap-5 ">
      <p className="text-2xl ovo-regular  font-bold">{technology}</p>
      
      <div className="flex flex-wrap gap-4  items-center  ">
        <img className="h-15 w-15" src={pic1} alt="" />

        <img className="h-15 w-15" src={pic2} alt="" />

        <img className="h-15 w-15" src={pic3} alt="" />

        <img className="h-15 w-15" src={pic4} alt="" />

        <img className="h-15 w-15" src={pic5} alt="" />

        <img className="h-15 w-15" src={pic6} alt="" />

     {
        pic7?  <img className="h-15 w-15" src={pic7} alt="" />:<>   </>
     }
      
     
      
      </div>
      <div className=" flex items-center gap-3">
        <p className="text-sm ovo-regular font-serif pvalue  font-bold">Read more</p>
        <FaArrowRightLong className="h-6 w-6 font-serif hover:scale-x-125 duration-300" />
      </div>
    
    </div>
  );
};

export default SkillsCard;
