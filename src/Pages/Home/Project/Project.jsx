import React from "react";
import project from "/images/project.png";
import brand from "/images/brand.jpg";
import webapp from "/images/web.jpg";
import eco from "/images/eco.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandPointRight } from "@fortawesome/free-solid-svg-icons";

const projects = [
  {
    id: 1,
    title: "Levers Lab",
    category: "IT Consultancy",
    image: project,
    list: ["Brand Identity", "Web Development", "Web 3.0 Development"],
  },
  {
    id: 2,
    title: "Strategy",
    category: "Brand Strategy",
    image: brand,
    list: ["UI/UX", "Frontend Dev", "Backend Dev"],
  },
  {
    id: 3,
    title: "App Development",
    category: "Web App",
    image: webapp,
    list: ["SaaS", "Dashboard", "API Integration"],
  },
  {
    id: 4,
    title: "Shop",
    category: "E-Commerce",
    image: eco,
    list: ["Shopify", "Custom Theme", "Payment Gateway"],
  },
];

const Project = () => {
  return (
    <section id="project" className="h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth bg-primary">
      {/* Top Text Section */}
      <div className="text-center pt-10 pb-6 px-4 md:px-0">
        <p className="text-secondary text-inter font-medium text-sm md:text-[16px] leading-relaxed">
          Our work is the product of careful analysis, creative <br className="hidden md:block" /> thinking,
          and a commitment to excellence.
        </p>

        <div className="flex justify-center items-center my-4">
          <hr className="h-[80px] md:h-[148px] border-[1px] border-black" />
        </div>

        <h3 className="text-[26px] md:text-[36px] font-medium">(Projects)</h3>
      </div>

      {/* Scrollable Projects */}
      {projects.map((item, index) => (
        <section
          key={item.id}
          className="h-screen snap-start flex flex-col md:flex-row justify-between items-center px-6 md:px-16 text-center md:text-left gap-6"
        >
          {/* Left Text */}
          <h4 className="text-[18px] md:text-[24px] font-semibold">
            {item.category}
          </h4>

          {/* Center Image + Title */}
          <div className="flex flex-col items-center">
            <img
              className="h-[220px] w-full max-w-[380px] md:max-w-[748px] md:h-[424px] object-cover mx-auto rounded-md"
              src={item.image}
              alt={item.title}
            />

            <h3 className="mt-3 underline decoration-1 decoration-secondary flex justify-center items-center gap-2 text-lg md:text-2xl">
              <FontAwesomeIcon icon={faHandPointRight} className="text-lg md:text-xl" />
              {item.title}
            </h3>
          </div>

          {/* Right Section */}
          <div className="flex flex-col items-center md:items-end gap-4">
            {/* Counter */}
            <h3 className="text-[18px] md:text-[20px] font-medium">
              {String(index + 1).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}
            </h3>

            {/* List */}
            <ul className="mt-2 text-[12px] md:text-[16px] text-secondary font-medium space-y-1">
              {item.list.map((service, i) => (
                <li key={i} className="flex items-center gap-2">
                  <span className="w-[6px] h-[6px] bg-secondary rounded-full"></span>
                  {service}
                </li>
              ))}
            </ul>
          </div>
        </section>
      ))}
    </section>
  );
};

export default Project;
