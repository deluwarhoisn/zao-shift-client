import React from "react";

const ProductService = () => {
  const services = [
    {
      id: 1,
      title: "Live Parcel Tracking",
      desc: "Stay updated in real-time with our live parcel tracking feature. From pick-up to delivery, monitor your shipment’s journey and get instant status updates for complete peace of mind.",
      img: "https://i.ibb.co.com/gPt1FHN/tracking.png",
    },
    {
      id: 2,
      title: "100% Safe Delivery",
      desc: "We ensure your parcels are handled with the utmost care and delivered securely to their destination. Our reliable process guarantees safe and damage-free delivery every time.",
      img: "https://i.ibb.co.com/RhyLqfn/safe-Delivery.png",
    },
    {
      id: 3,
      title: "24/7 Call Center Support",
      desc: "Our dedicated support team is available around the clock to assist you with any questions, updates, or delivery concerns—anytime you need us.",
      img: "https://i.ibb.co.com/ZBG5Qp7/support.png",
    },
  ];

  return (
    <div className="w-full bg-[#f7f7f7] py-16">
      <div className="max-w-6xl mx-auto">

        {services.map((service) => (
          <div
            key={service.id}
            className="bg-white rounded-xl shadow-sm p-8 mb-8 flex items-center gap-10"
          >
            {/* Image */}
            <div className="w-40">
              <img src={service.img} alt={service.title} className="w-full" />
            </div>

            {/* Text */}
            <div>
              <h2 className="text-xl font-bold mb-2">{service.title}</h2>
              <p className="text-gray-600 text-sm leading-relaxed">
                {service.desc}
              </p>
            </div>
          </div>
        ))}

      </div>
    </div>
  );
};

export default ProductService;
