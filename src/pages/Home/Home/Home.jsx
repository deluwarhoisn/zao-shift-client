import React from 'react';
import Banner from '../Banner/Banner';
import Services from '../../../componets/Logo/Services';
import HowItWorks from '../../../componets/Logo/HowItWorks';
import Brands from '../Brands/Brands';
import ProductService from '../../../componets/ProductService';
import HeroSection from '../../../componets/HeroSection ';
import Reviews from '../Reviews/Reviews';
import Faqs from '../../Faqs';



const reviewsPromise = fetch('/public/reviews.json').then(res => res.json());

const Home = () => {
    return (
        <div>
      <Banner></Banner>
       <HowItWorks></HowItWorks>
      <Services></Services>
      <Brands></Brands>
      <ProductService></ProductService>
      <HeroSection></HeroSection>
      <Reviews reviewsPromise={reviewsPromise}></Reviews>
      <Faqs></Faqs>
     
     
        </div>
    );
};

export default Home;