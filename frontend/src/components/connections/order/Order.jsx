// import React from 'react';

import Footer from "../Footer";
import Navbar from "../Navbar";
import OrderCard from './OrderCard';

function Order() {
  const OrderStatus = [
    { label: "On the Way", value: "On the way" },
    { label: "Delivered", value: "delivered" },
    { label: "Cancelled", value: "Cancelled" },
    { label: "Returned", value: "Returned" },
  ];

  return (
    <>
      <Navbar />
      <div className="  pt-[80px] px-6 lg:px-20 flex  flex-wrap  justify-center">
        <div className="border w-[70%]  sm:w-[50%] lg:w-[30%] h-60 px-4 py-4 rounded-lg">
          <h1 className="text-xl font-semibold">Filter</h1>
          <div className="mt-4">
            <h1 className="font-semibold underline hover:text-blue cursor-pointer mb-4">ORDER STATUS</h1>
            {
              OrderStatus.map((item, idx) => (
                <div key={idx} className="flex flex-row gap-4">
                  <input
                    type="radio"
                    name="orderStatus"
                    value={item.value}
                    id={item.value}
                  />
                  <label htmlFor={item.value}>{item.label}</label>
                </div>
              ))
            }
          </div>
        </div>
        <div className='lg:ml-10 px-5 py-0 md:w-[65%]'>
            <OrderCard/>
            <OrderCard/>
            <OrderCard/>
            <OrderCard/>
            <OrderCard/>
            <OrderCard/>
            <OrderCard/>
            <OrderCard/>
        </div>
      </div>
      <div className="mt-14">
      <Footer />

      </div>
    </>
  );
}

export default Order;