import React from "react";

const Hero = () => {
  return (
    <div className=" md:pt-[80px] pt-[40px] md:px-[20px] px-[10px] bg-primary">
      <div className=" md:flex md:justify-between  md:items-baseline-last ">
        <h2 className="font-bold text-[30px] md:text-[64px] leading-none font-Plus Jakarta Sans">
          <span className="text-[#20202399]">Creative </span>
          Design <br /> & Development <br />
          <span className="text-[#20202399]"> Agency</span>
        </h2>
        <p className="font-inter font-normal text-[10px] md:text-[20px] text-[#20202399] pt-[10px] ">
          Our goal is to add a unique touch to <br /> your ideas by bringing
          creativity and a <br /> personalized approach to each project.
        </p>
      </div>
      <h1 className=" text-[30px] md:text-[112.5px] pt-[20px] md:pt-[80px] md:font-extrabold font-bold font-[Plus Jakarta Sans] tracking-wider pb-[10px] md:pb-[20px]  ">
        DIGITAL SOLUTIONS
      </h1>
    </div>
  );
};

export default Hero;
