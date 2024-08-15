// import { Toaster, toast } from 'react-hot-toast';

import { Link } from "react-router-dom";
import Navbar from "../connections/Navbar";

function ForgetPassword() {
  return (
    <>
      <Navbar />
      <div className="w-full h-screen pt-[20px]  px-40 sm:px-0 flex items-center justify-center cursor-pointer ForgetPasswordHome">
        {/* <Toaster position='top-center ' reverseOrder={false}></Toaster> */}
        <div className="border py-10 card bg-base-100 w-96 shadow-blue-400 shadow-2xl px-9">
          <div className="flex items-center justify-center flex-col mt-5">
            <h1 className="text-4xl font-semibold font-geek">Enter Email</h1>
           
          </div>
          <form action="">
            <div className="mt-4">
             
              <label className="border px-3 py-2 rounded-md flex items-center gap-2">
                <input
                  type="email"
                  className="grow border-none outline-none"
                  placeholder="Email"
                />
              </label>
            </div>
            <div className="w-full my-3 flex items-center justify-center">
              <button
                className="btn btn-active bg-blue-600 font-medium text-white hover:bg-orange-400 duration-500 hover:text-black hover:font-bold"
                type="submit"
              >
                ForgetPassword
              </button>
            </div>

          </form>
       
        </div>
      </div>
      {/* <Toaster /> */}
    </>
  );
}

export default ForgetPassword;
