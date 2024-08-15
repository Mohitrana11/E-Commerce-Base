// import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import mens_kurta from '../Jsons/men_kurta';

function SlideCard() {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div>
      <div className="slider-container">
        <Slider {...settings}>
          {
            mens_kurta.map((item,idx) => (
              <div key={idx}> {/* assuming item.id is unique */}
                <img key={idx} src={item.imageUrl} alt="" />
              </div>
            )
          )
        }
      </Slider>
    </div>
  </div>
)
}
export default SlideCard;