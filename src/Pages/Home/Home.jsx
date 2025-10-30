import React from "react";

const Home = () => {
  return (
    <div className="pt-[80px] px-[20px] bg-primary">
      {/* Top Section */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-baseline gap-6">
        <h2 className="font-bold font-['Plus Jakarta Sans'] text-[32px] sm:text-[40px] md:text-[50px] lg:text-[64px] leading-[110%] lg:leading-none">
          <span className="text-[#20202399]">Creative </span>
          Design <br className="hidden sm:block" /> & Development <br className="hidden sm:block" />
          <span className="text-[#20202399]"> Agency</span>
        </h2>

        <p className="font-inter font-normal text-[16px] sm:text-[18px] md:text-[20px] text-[#20202399] leading-[150%] max-w-[480px]">
          Our goal is to add a unique touch to your ideas by bringing creativity
          and a personalized approach to each project.
        </p>
      </div>

      {/* Bottom Section */}
      <h1 className="font-extrabold font-['Plus Jakarta Sans'] text-[48px] sm:text-[64px] md:text-[80px] lg:text-[112.5px] tracking-wider pt-[60px] lg:pt-[80px] pb-[20px] leading-[105%] text-text">
        DIGITAL SOLUTIONS
      </h1>
    </div>
  );
};

export default Home;
