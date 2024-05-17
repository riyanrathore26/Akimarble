import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import Footer from './Footer';
import QuestionAnswerDropdown from './QuestionAnswerDropdown'
import Productpage from './Productpage';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';


// import required modules
import { Navigation } from 'swiper/modules';
import MultiCarousel from './MultiCarousel';


function Homepage() {
  return (
    <>
    <div className="firsthome">
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide><div className='sliderbox'>k</div></SwiperSlide>
        <SwiperSlide><div className='sliderbox'>k</div></SwiperSlide>
        <SwiperSlide><div className='sliderbox'>k</div></SwiperSlide>
        <SwiperSlide><div className='sliderbox'>k</div></SwiperSlide>
      </Swiper>
      </div>
      <h1 style={{margin:'5px 55px 5px'}}>Products</h1>
      <Productpage showsomething={false} />
      <div className="categoriesContainer">
        <h1 className='homeh1'>Shop By Categories</h1>
        <MultiCarousel/>
        <h1 style={{margin:'0px 0px 0px -27pc'}}>Most Asked QuestionAndAnswer</h1>
        <QuestionAnswerDropdown/>
      <Footer></Footer>
      </div>
    </>

  )
}

export default Homepage
