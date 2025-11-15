import React from "react";

const HeroSection = () => {
  const GraphicSVG = () => (
    <svg
      viewBox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute inset-0 w-full h-full"
    >
      <g stroke="#ffffff" strokeWidth="2" fill="none">
        <rect x="20" y="80" width="160" height="80" rx="5" ry="5" />
        <rect x="40" y="40" width="140" height="80" rx="5" ry="5" />
        <path d="M 0 170 C 50 180, 150 190, 200 180" />
      </g>
      <g fill="none" stroke="white" strokeWidth="2">
        <path
          d="M 150 10 C 130 10, 130 40, 150 40 C 170 40, 170 10, 150 10 L 150 50"
          fill="#ef4444"
        />
        <circle cx="150" cy="25" r="5" fill="white" />
      </g>
    </svg>
  );

  return (
    <div className="max-w-7xl mx-auto p-4 md:p-8">
      {/* Hero Section */}
      <div className="relative overflow-hidden rounded-xl bg-[#0A243F] text-white p-8 md:p-16 shadow-2xl">
        {/* Background pattern */}
        <div
          className="absolute inset-0 opacity-70 pointer-events-none"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)
            `,
            backgroundSize: "20px 20px",
          }}
        ></div>

        {/* Content */}
        <div className="relative z-20 flex flex-col lg:flex-row items-center justify-between gap-10">
          {/* Text */}
          <div className="flex-1 lg:max-w-xl text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-5">
              Merchant and Customer Satisfaction
              <br className="hidden sm:inline" />
              is Our First Priority
            </h1>
            <p className="text-lg mb-8 opacity-90">
              We offer the lowest delivery charge with the highest value along
              with 100% safety of your product. Pathao courier delivers your
              parcels in every corner of Bangladesh right on time.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="#"
                className="inline-block px-8 py-3 rounded-full font-bold text-[#0A243F] bg-[#C8FF8A] hover:bg-[#b7e37a] transition shadow-lg shadow-[#C8FF8A]/50"
              >
                Become a Merchant
              </a>
              <a
                href="#"
                className="inline-block px-8 py-3 rounded-full font-bold text-white border-2 border-[#74FF7C] hover:bg-[#74FF7C] hover:text-[#0A243F] transition"
              >
                Earn with ZapShift Courier
              </a>
            </div>
          </div>

          {/* SVG Graphic */}
          <div className="flex-1 min-w-[300px] max-w-[400px] h-[300px] relative mt-10 lg:mt-0">
          
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
