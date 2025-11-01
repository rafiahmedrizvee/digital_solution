import React from "react";

const Footer = () => {
  return (
    <div>
      {/* ===== Footer Section ===== */}
      <footer className="bg-black text-white">
        <div className="max-w-6xl mx-auto px-6 py-12">
          {/* Top Row */}
          <div className="flex flex-wrap justify-between text-sm text-gray-300 mb-8 space-y-2 md:space-y-0">
            <p>(rizvirafi7@gmail.com)</p>
            <p>(+880 1601192690)</p>
            <p>(Twitter)</p>
            <p>(LinkedIn)</p>
            <p>(Github)</p>
          </div>

          {/* Center Branding */}
          <h2 className="text-5xl text-[#F9F8F5] md:text-[112.5px] font-extrabold tracking-tight mb-8">
            DIGITAL SOLUTIONS
          </h2>

          {/* Bottom Row */}
          <div className="flex flex-wrap justify-between text-gray-400 text-sm border-t border-gray-800 pt-4">
            <p>© 2025 Digital Agency. All Right Reserved</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition">
                About
              </a>
              <a href="#" className="hover:text-white transition">
                Projects
              </a>
              <a href="#" className="hover:text-white transition">
                Services
              </a>
              <a href="#" className="hover:text-white transition">
                Pricing
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
