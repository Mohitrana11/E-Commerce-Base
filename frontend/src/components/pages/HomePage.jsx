// import React from 'react';
import SlideCard2 from "../connections/cards/SlideCard2";
import Carousel from "../connections/carousal/Carousel";
import Navbar from "../connections/Navbar";
import Footer from '../connections/Footer';
import mens_kurta from '../connections/Jsons/men_kurta';
import men_jeans from '../connections/Jsons/men_jeans.json';
// import  lehngacholiPage2 from '../connections/Jsons/Saree/lenghaCholiPage2';
import mens_tshirts from '../connections/Jsons/men_shirt.json';
// import   kurtaPage1 from '../connections/Jsons/Kurta/kurta';

import Banner1 from "../connections/banners/Banner1";


function HomePage() {
  return (
    <>
      <div>
        <Navbar />
        <Carousel />
        <SlideCard2 sendDatas={mens_kurta} sectionName={"For Mens"} />
        <SlideCard2 sendDatas={men_jeans} sectionName={"Mans Jeans"} />
        {/* <SlideCard2 sendDatas={lehngacholiPage2} sectionName={"Gound"} /> */}
        <SlideCard2 sendDatas={ mens_tshirts } sectionName={"Mans Shirts"} />
        {/* <Banner1/> */}
        <Footer />
      </div>
    </>
  );
}

export default HomePage;