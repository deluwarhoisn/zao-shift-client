import React, { useEffect, useState } from 'react';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import ReviewsCard from './ReviewsCard';

const Reviews = ({ reviewsPromise }) => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        reviewsPromise.then((data) => setReviews(data));
    }, [reviewsPromise]);

    if (!reviews.length) return <p>Loading reviews...</p>;

    return (
        <div>
            <div className='text-center mb-8'>
                <h3 className='text-3xl font-bold'>Review</h3>
                <p className='max-w-xl mx-auto'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus facere perspiciatis harum possimus fugit magnam recusandae itaque ea eius et distinctio, ipsum laudantium aperiam, eos tenetur est ex, ipsa obcaecati!
                </p>
            </div>

            <Swiper
            loop={true}
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={3}
                coverflowEffect={{
                    rotate: 50,
                    stretch: '50%',
                    depth: 200,
                    modifier: 1,
                    slideShadows: true,
                }}
                
                pagination={{ clickable: true }}
                modules={[EffectCoverflow, Pagination]}
                className="mySwiper"
            >

               {
                reviews.map(review =>  <SwiperSlide key={review.id}>
                    <ReviewsCard review={review}></ReviewsCard>
                </SwiperSlide>)

               }
            </Swiper>
        </div>
    );
};

export default Reviews;
