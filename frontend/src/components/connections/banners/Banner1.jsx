import React from 'react'

function Banner1() {
  return (
    <>
      <div className=' px-10 md:px-20 bg-blue-200 flex flex-wrap md:flex-row flex-col items-center justify-center my-10'>
        <div className='w-full  md:w-[50%] h-screen bg-orange-200 cursor-pointer' >
            <div className='hidden hover:flex  hover:bg-red-700'>

            </div>
        </div>
        <div className='w-full  md:w-[50%] h-screen bg-red-200'></div>
      </div>
    </>
  )
}

export default Banner1
