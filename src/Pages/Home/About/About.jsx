import React from "react";
import { motion } from "framer-motion";

const fadeLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
};

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay },
  },
});

const About = () => {
  return (
    <section id="about" className=" bg-secondary text-primary py-20 px-2 md:px-6 lg:px-6">
      <div className="  items-start">
        {/* Left Animated Text */}
        <motion.div
          variants={fadeLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <p className=" text-[20px] md:text-[34px] leading-snug font-light pb-[30px] ">
            We are an award winning{" "}<span className="font-semibold">web design</span> and
            <span className="font-semibold">
              {" "}
              branding <br /> agency
            </span>{" "}
            that combines the best in technology and <br />
            creative expertise to deliver high-quality, out-of- <br />{" "}
            this-world results.
          </p>
        </motion.div>
      </div>
      <div className="flex justify-end items-center ">
        {/* Right Animated Stats */}
        <div className="">
          {[
            {
              number: "17+",
              title: "Websites launched",
              text: "Helping brands make their mark online.",
            },
            {
              number: "1.5M+",
              title: "Users reached",
              text: "Our designs engage millions globally.",
            },
            {
              number: "98%",
              title: "Client satisfaction rate",
              text: "We build long-term partnerships through proven results.",
            },
            {
              number: "10+",
              title: "Years of expertise",
              text: "Decades of experience in delivering impactful digital solutions.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              variants={fadeUp(i * 0.2)} // Delay per item
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex items-start gap-6"
            >
              <h3 className="text-[40px] font-semibold">{item.number}</h3>
              <div className="border-l border-gray-600 pl-4">
                <p className="text-[15px] font-medium">{item.title}</p>
                <p className="text-[14px] text-gray-400">{item.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
