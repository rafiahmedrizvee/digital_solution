import React from "react";
import project from "../../../assets/images/project.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  } from "@fortawesome/free-regular-svg-icons";
import {  } from "@fortawesome/free-solid-svg-icons";
import { faHandPointRight } from "@fortawesome/free-solid-svg-icons/faHandPointRight";

const Project = () => {
  return (
    <div className="  bg-primary">
      <div>
        <p className="text-center text-secondary text-inter font-medium text-[16px] pt-[64px] ">
          Our work is the product of careful analysis, creative <br /> thinking,
          and a commitment to excellence.
        </p>
        <div className="flex justify-center items-center">
        
                 <hr className="  h-[148px] border-[1px] border-black " />
        </div>

        <h3 className="text-[36px] font-medium text-center ">(Projects)</h3>
        
      </div>

      <div className="flex justify-between items-center">
        <h4 className="text-[24px] font-semibold ">IT Consultancy </h4>
       <div className="">
         <img className="h-[424px] w-[748px] object-cover " src={project} alt="prjoect" />
         
<h3 className="text-center underline decoration-1 decoration-secondary">
        <FontAwesomeIcon icon={faHandPointRight} className="text-xl" />
  Levers Lab
</h3>
<h5 className="flex items-center gap-2 px-4 py-2 text-secondary rounded">
  
  
</h5>


         
       </div>
        <h3 className="pe-20">01 / 04</h3>


      </div>
      
    </div>
  );
};

export default Project;
