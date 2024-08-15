// import React from 'react'

import CartItem from "./CartItem"
import { MdCurrencyRupee } from "react-icons/md";
function Cart() {
  return (
    <>
      <div className=" px-4 md:px-10  ">
            <div className="lg:grid grid-cols-3 lg:px-lg relative mt-4  ">
                <div className="col-span-2  ">
                <CartItem/>
                <CartItem/>
                <CartItem/>
                <CartItem/>
                <CartItem/>
                </div>
                <div className="px-5  sticky top-0 h-[100vh] mt-5 lg:mt-0">
                    <div className="border px-4 py-4 rounded-2xl "> 
                        <p className="uppercase font-semibold  text-center font-display text-xl pd-4">Price Details</p>
                        <br />
                        <div className="space-y-3 text-lg mx-4 ">
                            <div className="justify-between pt-3 text-black flex flex-row items-center" >
                                <span>Price </span>
                                <span className="flex flex-row items-center">{<MdCurrencyRupee />}4523</span>
                            </div>
                            <div className="flex justify-between pt-0 text-black">
                                <span>Discount</span>
                                <span className="flex flex-row items-center">{<MdCurrencyRupee />}4523</span>
                            </div>
                            <div className="flex justify-between pt-0 text-black">
                                <span>Delivery Charge </span>
                                <span className="flex flex-row items-center">{<MdCurrencyRupee />}4523</span>
                            </div>

                            <div className="flex justify-between text-lg text-green-800 pt-1 text-black">
                                <span>Total Amount </span>
                                <span className="flex flex-row items-center">{<MdCurrencyRupee />}4523</span>
                            </div>
                        </div>
                        <button className="text-sm py-2   bg-green-300 border rounded-md font-semibold uppercase w-80  mx-5 mt-4">CheckOut</button>
                    </div>
                </div>
            </div>
      </div>
    </>
  )
}

export default Cart
