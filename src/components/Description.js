import "./Description.css";
import Projects from './sections/Projects'; //Projects
import AboutMe from "./sections/AboutMe";
import Interest from "./sections/Interest";
import Skills from "./sections/Skills";
import  Certificates  from "./sections/Certificates";

import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css"
import "swiper/components/pagination/pagination.min.css"
import "swiper/components/effect-flip/effect-flip.min.css"


import SwiperCore, {EffectFlip,
    Navigation,Pagination,Mousewheel,Keyboard
  } from 'swiper/core';
  
  // install Swiper modules
  SwiperCore.use([EffectFlip, Navigation,Pagination,Mousewheel,Keyboard]);
  
  

const Description = () => {

return (
    <section className="description_section">
        <>
    <Swiper effect={'flip'}  navigation={true} loop={true} pagination={{
"clickable": true
}} mousewheel={false} keyboard={true} className="mySwiper">
  <SwiperSlide><AboutMe/></SwiperSlide>
  <SwiperSlide><Interest/></SwiperSlide>
  <SwiperSlide><Projects/></SwiperSlide>
  <SwiperSlide><Skills/></SwiperSlide>
  <SwiperSlide><Certificates/></SwiperSlide>
  </Swiper>
    </>

    </section>
);
}
export default Description;

