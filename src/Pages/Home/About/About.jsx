import React from 'react';

const About = () => {
        return (
                 <section className="bg-[#0B0B0B] text-white py-20 px-6 md:px-16 font-['Plus_Jakarta_Sans']">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left Text */}
        <div>
          <p className="text-lg md:text-xl leading-relaxed">
            We are an award winning{" "}
            <span className="font-semibold">web design</span> and{" "}
            <span className="font-semibold">branding agency</span> that combines
            the best in technology and creative expertise to deliver
            high-quality, out-of-this-world results.
          </p>
        </div>

        {/* Right Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <div>
            <h3 className="text-3xl font-bold">17+</h3>
            <p className="text-gray-300 text-sm mt-1">Websites launched</p>
            <p className="text-gray-500 text-xs">
              Helping brands make their mark online.
            </p>
          </div>

          <div>
            <h3 className="text-3xl font-bold">1.5M+</h3>
            <p className="text-gray-300 text-sm mt-1">Users reached</p>
            <p className="text-gray-500 text-xs">
              Our designs engage millions globally.
            </p>
          </div>

          <div>
            <h3 className="text-3xl font-bold">98%</h3>
            <p className="text-gray-300 text-sm mt-1">
              Client satisfaction rate
            </p>
            <p className="text-gray-500 text-xs">
              We build long-term partnerships through proven results.
            </p>
          </div>

          <div>
            <h3 className="text-3xl font-bold">10+</h3>
            <p className="text-gray-300 text-sm mt-1">Years of expertise</p>
            <p className="text-gray-500 text-xs">
              Decades of experience in delivering impactful digital solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
        );
};

export default About;