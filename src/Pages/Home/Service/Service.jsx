import React from "react";

const images = [
  "/src/assets/images/pic1.png",
  "/src/assets/images/pic2.png",
  "/src/assets/images/pic3.png",
  
];

const Service = () => {
  return (
    <section className="w-full bg-primary py-20 px-2 md:px-5 flex flex-col md:flex-row gap-10">
      {/* LEFT SIDE - AUTO SCROLL IMAGES */}
      <div className="w-full md:w-1/2 h-[550px] overflow-hidden relative">
        <div className="scroll-wrapper">
          {[...images, ...images].map((src, i) => (
            <img
              key={i}
              src={src}
              className="w-[400px] object-cover h-[256px]  mb-3 rounded-lg"
              alt="service"
            />
          ))}
        </div>
      </div>
      <div>
        <p className="text-[36px] font-medium text-secondary ">(Services)</p>
      </div>

      {/* RIGHT SIDE - SERVICES TEXT */}
      <div className="w-full pt-20 md:w-1/2 flex flex-col gap-2">
        {[
          {
            id: "01/",
            title: "Branding",
            desc: `We create impactful brand identities that   differentiate your business and connect with your audience.`,
          },
          {
            id: "02/",
            title: "Development",
            desc: `From front-end interactions to back-end functionality, we deliver robust solutions that grow with your business.`,
          },
          {
            id: "03/",
            title: "Website",
            desc: "We build custom websites that go beyond aesthetics, balancing design and functionality to captivate your audience.",
          },
          {
            id: "04/",
            title: "Design Support",
            desc: "We're here to help with everything from small updates to full-scale redesigns, tailored to your evolving needs.",
          },
        ].map((item, index) => (
          <div
            key={index}
            className="group border-b border-gray-300 pb-6 cursor-pointer transition-all duration-300"
          >
            <p className="text-gray-500 font-medium text-xl group-hover:text-black transition duration-300">
              {item.id} <span className="font-semibold">{item.title}</span>
            </p>
            <p className="text-gray-500 mt-2 group-hover:text-black transition duration-300">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Service;
