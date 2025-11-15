import React from 'react';

const Services = () => {
    return (
        <div className="w-full bg-[#06342f] py-20 text-center text-white px-4">

            {/* Heading */}
            <h2 className="text-4xl font-bold mb-3">Our Services</h2>
            <p className="text-gray-200 max-w-2xl mx-auto mb-12">
                Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle.
                From personal packages to business shipments — we deliver on time, every time.
            </p>

            {/* Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">

                {/* Card 1 */}
                <div className="bg-[#fde8ef] rounded-2xl p-8 shadow-xl text-gray-800">
                    <img src="/icons/express.png" alt="" className="w-14 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-3">Express & Standard Delivery</h3>
                    <p>
                        We deliver parcels within 24–72 hours in major Bangladesh cities.
                        Express delivery in Dhaka within 4–6 hours from pick-up to drop-off.
                    </p>
                </div>

                {/* Card 2 */}
                <div className="bg-[#95da20] rounded-2xl p-8 shadow-xl text-gray-800">
                    <img src="/icons/nationwide.png" alt="" className="w-14 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-3">Nationwide Delivery</h3>
                    <p>
                        Nationwide parcel delivery with home delivery in every district.
                        Products reach customers within 48–72 hours.
                    </p>
                </div>

                {/* Card 3 */}
                <div className="bg-[#fde8ef] rounded-2xl p-8 shadow-xl text-gray-800">
                    <img src="/icons/fulfillment.png" alt="" className="w-14 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-3">Fulfillment Solution</h3>
                    <p>
                        Customized inventory management, online order processing,
                        packaging, and after-sales support.
                    </p>
                </div>

                {/* Card 4 */}
                <div className="bg-[#fde8ef] rounded-2xl p-8 shadow-xl text-gray-800">
                    <img src="/icons/cash.png" alt="" className="w-14 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-3">Cash on Home Delivery</h3>
                    <p>
                        100% cash on delivery anywhere in Bangladesh with guaranteed safety.
                    </p>
                </div>

                {/* Card 5 */}
                <div className="bg-[#f1f1f1] rounded-2xl p-8 shadow-xl text-gray-800">
                    <img src="/icons/corporate.png" alt="" className="w-14 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-3">
                        Corporate Service / Contract In Logistics
                    </h3>
                    <p>
                        Corporate logistics solutions with warehouse and inventory support.
                    </p>
                </div>

                {/* Card 6 */}
                <div className="bg-[#fde8ef] rounded-2xl p-8 shadow-xl text-gray-800">
                    <img src="/icons/return.png" alt="" className="w-14 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-3">Parcel Return</h3>
                    <p>
                        Reverse logistics service to allow customers to return
                        products efficiently.
                    </p>
                </div>

            </div>
        </div>
    );
};

export default Services;
