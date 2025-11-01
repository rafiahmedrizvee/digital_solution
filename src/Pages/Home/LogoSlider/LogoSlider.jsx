import React from "react";

const logos = [
  "/src/assets/logo/Logo.png",
  "/src/assets/logo/Logo (1).png",
  "/src/assets/logo/Logo (2).png",
  "/src/assets/logo/Logo (3).png",

];

const LogoSlider = () => {
  return (
    <div className="overflow-hidden whitespace-nowrap py-8 bg-primary">
      <div className="inline-block animate-scroll">
        {logos.concat(logos).map((logo, index) => (
          <img
            key={index}
            src={logo}
            alt={`Logo ${index}`}
            className="inline-block bg-[#F2F1EC] h-[200px] w-[260px] mx-8"
          />
        ))}
      </div>
    </div>
  );
};

export default LogoSlider;
