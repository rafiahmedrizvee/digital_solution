import React from "react";
import Hero from "./Hero/Hero";
import About from "./About/About";
import Project from "./Project/Project";
import Service from "./Service/Service";
import LogoSlider from "./LogoSlider/LogoSlider";
import Testimonial from "./Testimonial/Testimonial";
import Price from "./Price/Price";
import Faq from "./Faq/Faq";

const Home = () => {
  return (
    <div>
        <Hero></Hero>
        <About></About>
        <Project></Project>
        <Service></Service>
        <LogoSlider></LogoSlider>
        <Testimonial></Testimonial>
        <Price></Price>
        <Faq></Faq>

    </div>
  );
};

export default Home;
