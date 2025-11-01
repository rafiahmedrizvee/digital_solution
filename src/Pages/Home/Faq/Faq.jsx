import React from "react";

const faqs = [
  {
    question: "Can I request multiple projects at once?",
    answer: "Yes, our unlimited creativity model has no restrictions.",
  },
  {
    question: "What happens if I want to change my plan?",
    answer:
      "You can adjust or cancel your plan at any time, without complications.",
  },
  {
    question: "How long does it take to deliver a project?",
    answer: "We guarantee speed, adapting to each client's timeline.",
  },
  {
    question: "What happens if I want to change my plan?",
    answer:
      "You can adjust or cancel your plan at any time, without complications.",
  },
  {
    question: "What services are included in the membership?",
    answer:
      "Includes graphic design, branding, art direction, multimedia production, and more.",
  },
];

const Faq = () => {
  return (
    <section className="bg-[#f9f8f6]">
      {/* ===== FAQ Section ===== */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-semibold mb-1">(FAQ)</h2>
        <p className="text-gray-600 mb-10">Any more QUESTIONS?</p>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Left Column */}
          <div className="space-y-6">
            {faqs.slice(0, 2).map((faq, index) => (
              <div key={index}>
                <h3 className="font-semibold text-gray-900 mb-1">
                  {faq.question}
                </h3>
                <p className="text-gray-600 text-sm border-b border-gray-200 pb-3">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {faqs.slice(2).map((faq, index) => (
              <div key={index}>
                <h3 className="font-semibold text-gray-900 mb-1">
                  {faq.question}
                </h3>
                <p className="text-gray-600 text-sm border-b border-gray-200 pb-3">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
