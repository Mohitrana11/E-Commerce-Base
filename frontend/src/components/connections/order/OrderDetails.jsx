// import React from 'react'

import AddressCard from "../addressCard/AddressCard"
import Navbar from "../Navbar"
import OrderCustomer from "./OrderCustomer"
import OrderTracking from "./OrderTracking"

function OrderDetails() {
  return (
    <>
    <Navbar/>
      <div className="w-full h-full pt-20 px-6 md:px-20 ">
        <div className="border px-5 pb-2 rounded-xl">
            <AddressCard/>
        </div>
        <div className="flex flex-row mt-3 border py-4 rounded-lg shadow-base-600 shadow-sm ">
            <OrderTracking/>
            <button className="mr-10 cursor-pointer">Cancel </button>
        </div>
    <div className="">
    <OrderCustomer/>
    <OrderCustomer/>
    <OrderCustomer/>
    <OrderCustomer/>

    </div>
      </div>
    
    </>
  )
}

export default OrderDetails
