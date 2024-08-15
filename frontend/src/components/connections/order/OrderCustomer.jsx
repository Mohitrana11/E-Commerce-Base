// import React from 'react'
import { FaStar } from "react-icons/fa";
function OrderCustomer() {
  return (
   <>
    <div className='flex flex-row flex-wrap items-center justify-between w-full h-[250px]  sm:h-[200px] md:h-[200px]   lg:h-[120px] border px-6 rounded-lg my-2 hover:shadow-lg '>
      <div className='flex flex-wrap flex-row items-center gap-x-4'>
      <img src="https://rukminim1.flixcart.com/image/612/612/xif0q/kurta/z/l/b/xl-grey-sws2902-allan-peter-original-imag3y6tzaaxwkhy-bb.jpeg?q=70" alt=""  className='w-20 h-20 rounded-lg '/>
      <div>
        <h1 className='font-semibold'>Product name </h1>
        <p>data not found</p>
        <p className=''>Seller: <span className="font-bold"> mohit </span></p>
        <p className='font-semibold'>$3434</p>
      </div>
      </div>
      <div className="flex flex-row items-center gap-x-2">
      {<FaStar className="text-blue-400" />} 
        <p> Rate and review Product.</p>
      </div>

    </div>
   </>
  )
}

export default OrderCustomer
