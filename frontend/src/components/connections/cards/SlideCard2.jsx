import { useState } from 'react';
import AliceCarousel from 'react-alice-carousel';

import 'react-alice-carousel/lib/alice-carousel.css';
import Slide from './Slide';

function SlideCard2({ sendDatas, sectionName }) {
  const [index, setIndex] = useState(0);
  const itemsPerPage = 4;

  const responsive = {
    0: { items: 1.3 },
    500:{items:2.3},
    720: { items: 3.5 },
    820: { items: 3.2 },
    1024: { items: 4.4 },
    1050: { items: 4.5 }

  };

  const items = sendDatas.map((item, idx) => (
    <Slide key={idx} {...item} />
  ));

  // const slidePrev = () => {
  //   setIndex(Math.max(index - itemsPerPage, 0));
  // };

  // const slideNext = () => {
  //   setIndex(Math.min(index + itemsPerPage, items.length - Math.ceil(responsive[1024].items)));
  // };

  const syncActiveIndex = ({ item }) => {
    setIndex(item);
  };

  return (
    <div className="relative px-4 lg:px-8  ">
      <h2 className=' ml-10 text-3xl font-display cursor-pointer'>{sectionName}</h2>
      <div className="relative p-5">
        <AliceCarousel
          mouseTracking
          items={items}
          responsive={responsive}
          disableButtonsControls
          disableDotsControls
          onSlideChanged={syncActiveIndex}
          activeIndex={index}
          infinite={false}
        />
        {/* {index > 0 && (
          <button
            className="z-20 border border-gray-100 absolute font-bold items-center flex hover:border-black top-24 p-2 rounded-full left-5"
            onClick={slidePrev}
          >
            &#9664; 
          </button>
        )} */}
        {/* {index < items.length - Math.ceil(responsive[1024].items) && (
          <button
            className="z-20 border border-gray-100 absolute font-bold items-center flex hover:border-black top-24 p-2 rounded-full right-1"
            onClick={slideNext}
          >
            &#9654;
          </button>
        )} */}
      </div>
    </div>
  );
}

export default SlideCard2;
