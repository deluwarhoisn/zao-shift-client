import React, { useState } from "react";

const faqData = [
    {
        q: "How does this posture corrector work?",
        a: "A posture corrector works by providing support and gentle alignment to your shoulders, back, and spine, encouraging you to maintain proper posture throughout the day.",
    },
    {
        q: "Is it suitable for all ages and body types?",
        a: "Yes, it is designed to be adjustable and fit various ages and body shapes.",
    },
    {
        q: "Does it really help with back pain and posture improvement?",
        a: "Most users experience reduced pain and improved posture with consistent use.",
    },
    {
        q: "Does it have smart features like vibration alerts?",
        a: "Yes, some versions include vibration alerts to remind you to maintain posture.",
    },
    {
        q: "How will I be notified when the product is back in stock?",
        a: "You will receive an email notification once the product is restocked.",
    },
];

const Faqs = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="w-11/12 md:w-9/12 mx-auto py-16 bg-[#F6F6F6] rounded-2xl">
            {/* Title */}
            <h2 className="text-3xl font-extrabold text-center text-[#1E1E1E]">
                Frequently Asked Question (FAQ)
            </h2>

            <p className="text-gray-600 text-center max-w-2xl mx-auto mt-3 text-sm md:text-base">
                Enhance posture, mobility, and well-being effortlessly with Posture Pro.
                Achieve proper alignment, reduce pain, and strengthen your body with ease!
            </p>

            {/* FAQ Items */}
            <div className="mt-10 space-y-4 max-w-2xl mx-auto">
                {faqData.map((item, index) => (
                    <div
                        key={index}
                        className="bg-white border border-gray-200 rounded-xl shadow-sm transition hover:shadow-md"
                    >
                        <button
                            onClick={() => toggle(index)}
                            className="w-full flex justify-between items-center p-5 text-left text-[17px] font-semibold cursor-pointer"
                        >
                            {item.q}

                            <span
                                className={`transition-transform duration-300 ${
                                    openIndex === index ? "rotate-180" : "rotate-0"
                                }`}
                            >
                                ▼
                            </span>
                        </button>

                        {/* Answer Box */}
                        <div
                            className={`overflow-hidden transition-all duration-300 px-5 ${
                                openIndex === index ? "max-h-48 pb-4" : "max-h-0"
                            }`}
                        >
                            <p className="text-gray-600 bg-[#F9FAFB] p-3 rounded-lg">
                                {item.a}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Button */}
            <div className="text-center mt-10">
                <button className="bg-lime-300 hover:bg-lime-400 px-7 py-3 rounded-full font-semibold text-black shadow-sm">
                    See More FAQ’s
                </button>
            </div>
        </section>
    );
};

export default Faqs;
