import React from "react";
import { ArrowRight } from "lucide-react";

const plans = [
  {
    title: "Standard",
    color: "text-green-700",
    description: "Ideal for small brands or specific project.",
    price: "$2,350/Month",
    subText: "Cancel anytime",
    paymentInfo: "Annual payment",
    discount: "Save 20%",
    services: [
      "(01) Request at a time",
      "(01) Dedicated senior creative",
      "Average delivery in 2-3 days",
      "Unlimited revisions",
      "Unlimited design requests",
      "Online project management",
    ],
  },
  {
    title: "Pro",
    color: "text-red-800",
    description: "For large brands seeking continuous & strategic approach.",
    price: "$3,950/Month",
    subText: "Cancel anytime",
    paymentInfo: "Annual payment",
    discount: "Save 20%",
    services: [
      "(02) Request at a time",
      "(02) Dedicated senior creative",
      "Average delivery in 2-3 days",
      "Unlimited revisions",
      "Unlimited design requests",
      "Online project management",
    ],
  },
];

const Price = () => {
  return (
    <section className="bg-[#f9f8f6] py-16 px-4 sm:px-6 lg:px-8">
      {/* Section Header */}
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-semibold mb-2">(Pricing)</h2>
        <p className="text-gray-600 text-sm md:text-base">
          Choose the plan that best fits your needs. <br className="hidden sm:block" />
          From a solid foundation to a fully optimized solution
        </p>
      </div>

      {/* Pricing Cards */}
      <div className="mt-12 grid gap-8 md:grid-cols-2 max-w-5xl mx-auto">
        {plans.map((plan, index) => (
          <div
            key={index}
            className="border border-gray-300 bg-[#EDEAE3] rounded-xl p-6 sm:p-8 flex flex-col justify-between shadow-sm hover:shadow-md transition"
          >
            {/* Header */}
            <div>
              <h3 className={`text-xl md:text-2xl font-semibold ${plan.color}`}>
                {plan.title}
              </h3>
              <p className="text-gray-700 mt-2 mb-6 text-sm sm:text-base">
                {plan.description}
              </p>
            </div>

            {/* Price Box */}
            <div className="flex flex-col sm:flex-row items-stretch justify-between border border-gray-300 rounded-md overflow-hidden mb-6">
              <div className="px-4 py-3 text-left flex-1">
                <p className="font-semibold text-base sm:text-lg">{plan.price}</p>
                <p className="text-xs text-gray-500">{plan.subText}</p>
              </div>

              <div className="px-4 py-3 border-t sm:border-t-0 sm:border-l border-gray-300 text-center flex-1">
                <p className="text-sm font-medium">{plan.paymentInfo}</p>
                <p className="text-xs text-gray-500">{plan.discount}</p>
              </div>

              <button className="flex items-center justify-center gap-2 bg-black text-white text-sm font-medium px-5 py-3 hover:bg-gray-800 transition w-full sm:w-auto">
                Subscribe <ArrowRight size={16} />
              </button>
            </div>

            {/* Included Services */}
            <div>
              <p className="font-medium mb-3 text-sm sm:text-base">
                Included Services
              </p>
              <ul className="text-sm text-gray-700 space-y-2">
                {plan.services.map((service, i) => (
                  <li
                    key={i}
                    className="border-t border-gray-200 pt-2 first:border-t-0 first:pt-0"
                  >
                    {service}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Price;
