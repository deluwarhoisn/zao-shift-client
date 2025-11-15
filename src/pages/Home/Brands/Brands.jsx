import React from 'react';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';

import amazon from '../../../assets/brands/amazon.png';
import amazon2 from '../../../assets/brands/amazon_vector.png';
import casio from '../../../assets/brands/casio.png';
import moonstar from '../../../assets/brands/moonstar.png';
import randstad from '../../../assets/brands/randstad.png';
import star from '../../../assets/brands/star.png';
import startPeople from '../../../assets/brands/start_people.png';
import { Autoplay } from 'swiper/modules';

const Brands = () => {
    const logos = [amazon, amazon2, casio, moonstar, randstad, star, startPeople];

    return (
        <div className="py-10">
            <Swiper
                slidesPerView={4}
                centeredSlides={false}
                spaceBetween={30}
                grabCursor={true}
                loop={true}
                modules={[Autoplay]}
                autoplay={{ delay: 1000 }}
                className="mySwiper"
            >
                {logos.map((logo, index) => (
                    <SwiperSlide key={index}>
                        <img
                            src={logo}
                            alt="brand"
                            className="w-28 h-20 object-contain mx-auto"
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Brands;
