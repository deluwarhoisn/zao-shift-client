import React from 'react';

const HowItWorks = () => {
    return (
        <div className="w-full bg-white py-16 px-4">

            {/* Heading */}
            <h2 className="text-3xl font-bold text-gray-800 mb-10">
                How it Works
            </h2>

            {/* Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-6xl mx-auto">

                {/* Step 1 */}
                <div className="text-center">
                    <img src="/icons/pickdrop.png" alt="" className="w-14 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold mb-2">Booking Pick & Drop</h3>
                    <p className="text-gray-600 text-sm max-w-xs mx-auto">
                        From personal packages to business shipments — we deliver on time, every time.
                    </p>
                </div>

                {/* Step 2 */}
                <div className="text-center">
                    <img src="/icons/cod.png" alt="" className="w-14 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold mb-2">Cash On Delivery</h3>
                    <p className="text-gray-600 text-sm max-w-xs mx-auto">
                        From personal packages to business shipments — we deliver on time, every time.
                    </p>
                </div>

                {/* Step 3 */}
                <div className="text-center">
                    <img src="/icons/hub.png" alt="" className="w-14 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold mb-2">Delivery Hub</h3>
                    <p className="text-gray-600 text-sm max-w-xs mx-auto">
                        From personal packages to business shipments — we deliver on time, every time.
                    </p>
                </div>

                {/* Step 4 */}
                <div className="text-center">
                    <img src="/icons/sme.png" alt="" className="w-14 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold mb-2">Booking SME & Corporate</h3>
                    <p className="text-gray-600 text-sm max-w-xs mx-auto">
                        From personal packages to business shipments — we deliver on time, every time.
                    </p>
                </div>

            </div>
        </div>
    );
};

export default HowItWorks;
