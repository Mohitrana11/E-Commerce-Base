// import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { homeCarouselData } from "./HomeCarousel";

const Carousel = () => (
  <div className="mt-[70px] ">
    <AliceCarousel
      mouseTracking
      disableButtonsControls
      autoPlay
      autoPlayInterval={1000}
      infinite
    >
      {homeCarouselData.map((item, index) => (
        <img
          key={index}
          className="h-80 w-full cursor-pointer"
          role="presentation"
          src={item.image}
          alt=""
        />
      ))} 
    </AliceCarousel>
  </div>
);

export default Carousel;
