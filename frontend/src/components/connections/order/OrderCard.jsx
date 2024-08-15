// import React from 'react'

function OrderCard() {
  return (
    <div className='flex flex-row flex-wrap items-center justify-between w-full h-[250px]  sm:h-[200px] md:h-[200px]   lg:h-[120px] border px-6 rounded-lg my-2 hover:shadow-lg '>
      <div className='flex flex-wrap flex-row items-center gap-x-4'>
      <img src="https://rukminim1.flixcart.com/image/612/612/xif0q/kurta/z/l/b/xl-grey-sws2902-allan-peter-original-imag3y6tzaaxwkhy-bb.jpeg?q=70" alt=""  className='w-20 h-20 rounded-lg '/>
      <div>
        <h1 className='font-semibold'>Product name </h1>
        <p>data not found</p>
      </div>
      </div>
      <p className='font-semibold'>$3434</p>
      <div>
        <p className='font-semibold'>Expected Delivery on 3</p>
        <p>Lorem ipsum dolor sit.</p>
      </div>

    </div>
  )
}

export default OrderCard
