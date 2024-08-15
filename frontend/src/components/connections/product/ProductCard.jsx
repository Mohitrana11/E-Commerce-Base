// import React from 'react'
import ReactStars from "react-stars";
function ProductCard({props}) {
  return (
    <>
    <div className='productCard w-[15rem] m-3 transition-all rounded-md overflow-hidden shadow-md cursor-pointer hover:scale-[1.01] duration-150 '>
      <div className="h-[16rem]">
        <img  className="h-full w-full object-cover object-left-top" src={props.imageUrl}  alt="" />
      </div>

      {/* Product Section:------  */}
      <div className="textPart bg-white p-3">
      <div>
        <h2 className="font-bold ">{props.brand}</h2>
        <p>{props.title}</p>
        <div className="flex gap-2">
          <p className="font-bold">{props.discountedPrice}</p>
          <p className="line-through ">{props.price}</p>
          <p className="text-green-800" >{props.discountPersent}% off</p>
        </div>
        <ReactStars
              count={5}
              size={24}
              value={4.5}
              className="text-[#ffd700]"
              color2={"#ffd700"}
            />
      </div>
      </div>

    </div>
    </>
  )
}

export default ProductCard
