import React, { useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Andy Styles",
    role: "Founder of a Tech Startup",
    text: "We needed a full rebranding, and this agency delivered beyond our expectations. From the new logo to the website design, everything feels cohesive and professional.",
    image: "/images/andy.jpg",
  },
  {
    name: "Rafi Ahmed",
    role: "Marketing Director",
    text: "Their team completely transformed our online presence. The attention to detail and creativity were outstanding.",
    image: "/images/rafi.jpg",
  },
  {
    name: "Rizvee",
    role: "Product Designer",
    text: "Superb experience working with them. They understood our brand instantly and brought it to life beautifully.",
    image: "/images/rizvee.png",
  },
];

const Testimonial = () => {
  const scrollRef = useRef(null);
  const [scrollIndex, setScrollIndex] = useState(0);

  const scroll = (direction) => {
    const container = scrollRef.current;
    const cardWidth = container.children[0].offsetWidth + 24; // includes gap
    const newIndex =
      direction === "left"
        ? Math.max(scrollIndex - 1, 0)
        : Math.min(scrollIndex + 1, testimonials.length - 1);
    container.scrollTo({
      left: newIndex * cardWidth,
      behavior: "smooth",
    });
    setScrollIndex(newIndex);
  };

  return (
    <section id="blog" className="w-full bg-primary py-12">
      <div className="max-w-5xl mx-auto ">
        <h2 className="text-[36px] font-medium mb-2">(Testimonials)</h2>
        <p className="text-secondary text-[16px] mb-6">What people say</p>

        <div className="relative">
          {/* Left Button */}
          <button
            onClick={() => scroll("left")}
            disabled={scrollIndex === 0}
            className={`absolute left-0 top-1/2 -translate-y-1/2 bg-[#F2F1EC] p-2 rounded-full shadow-md transition ${
              scrollIndex === 0
                ? "opacity-30 cursor-not-allowed"
                : "hover:bg-gray-100"
            }`}
          >
            <ChevronLeft />
          </button>

          {/* Cards */}
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-scroll scrollbar-hide scroll-smooth snap-x snap-mandatory"
          >
            {testimonials.map((t, index) => (
              <div
                key={index}
                className="min-w-[350px] h-[265px] md:min-w-[1080px] bg-[#F2F1EC] rounded-2xl shadow-sm flex items-center gap-6  snap-center"
              >
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-[264px] h-[264px] rounded-2xl object-cover"
                />
                <div>
                  <Quote className="text-secondary mb-2" />
                  <p className="text-secondary text-[24px] font-medium mb-3">{t.text}</p>
                  <p className="font-semibold">{t.name}</p>
                  <p className="text-sm text-gray-500">{t.role}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Right Button */}
          <button
            onClick={() => scroll("right")}
            disabled={scrollIndex === testimonials.length - 1}
            className={`absolute right-0 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md transition ${
              scrollIndex === testimonials.length - 1
                ? "opacity-30 cursor-not-allowed"
                : "hover:bg-gray-100"
            }`}
          >
            <ChevronRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
