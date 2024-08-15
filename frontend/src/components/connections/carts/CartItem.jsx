// import React from 'react'

import ReactStars from "react-stars";

function CartItem() {
  const ratingChanged = (newRating) => {
    console.log(newRating);
  };
  return (
    <div className=" p-5 mt-5 shadow-lg border rounded-md" >
        <div className="flex items-center ">
            <div className="w-[5rem] h-[5rem] lg:w-[9rem] lg:h-[9rem]">
                <img src="https://rukminim1.flixcart.com/image/612/612/l5h2xe80/kurta/x/6/n/xl-kast-tile-green-majestic-man-original-imagg4z33hu4kzpv.jpeg?q=70" className="w-full h-full object-cover object-top" alt="" />
            </div>
            <div className="ml-5 space-y-1 ">
                <h1 className="font-semibold">Product Name</h1>
                <p className="opacity-70">size: L white</p>
                <p className="opacity-70 ml-0">Seller: xfaer345</p>
                <div className="flex space-x-2 items-center mt-2 lg:text-lg text-gray-900">
                <p className="font-bold tex">199</p>
                <p className="line-through opacity-50">490</p>
                <p className="text-green-500 font-format">50% off</p>
              </div>
              <ReactStars
          count={5}
          // onChange={ratingChanged}
          onChange={ratingChanged}
          size={24}
          value={4.5}
          className="text-[#ffd700]"
          color2={"#ffd700"}
        />
            </div>
            <div className="lg:flex items-center lg:space-x-10 pt-4">
                <div className="flex items-center space-x-2">
                    {/* <h1 className="font-bold text-4xl">hi  Code here</h1> */}
                </div>

            </div>

        </div>
        
      
    </div>
  )
}

export default CartItem
