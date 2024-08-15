// import { Toaster, toast } from 'react-hot-toast';

import { Link } from "react-router-dom";
import Navbar from "../connections/Navbar";

function Login() {
  return (
    <>
      <Navbar />
      <div className="w-full h-screen pt-[20px] px-40 sm:px-0 flex items-center justify-center cursor-pointer LoginHome">
        {/* <Toaster position='top-center ' reverseOrder={false}></Toaster> */}
        <div className="border card bg-base-100 w-96 shadow-blue-400 shadow-2xl px-9">
          <div className="flex items-center justify-center flex-col mt-5">
            <h1 className="text-4xl font-semibold font-geek">Hello!</h1>
            <div className="flex items-center justify-center flex-col my-4 ">
              <p className="text-md">Explore More</p>{" "}
              <p>by connecting with us</p>
            </div>
          </div>
          <form action="">
            <div className="mt-4">
              <label className="border mb-3 px-3 py-2 rounded-md flex items-center gap-2">
                <input
                  type="email"
                  className="grow border-none outline-none"
                  placeholder="Email"
                />
              </label>
              <label className="border px-3 py-2 rounded-md flex items-center gap-2">
                <input
                  type="password"
                  className="grow border-none outline-none"
                  placeholder="Password"
                />
              </label>
              <Link to={'/forgetPassword'} className="float-end text-blue-700 underline text-[13px]">forget</Link>
            </div>
            <div className="w-full my-3 flex items-center justify-center">
              <button
                className="btn btn-active bg-blue-600 font-medium text-white hover:bg-orange-400 duration-500 hover:text-black hover:font-bold"
                type="submit"
              >
                Login
              </button>
            </div>

          </form>
          <div className="flex items-center justify-end mb-5">
            <p>
            Not a{" "}
              <Link
                to={"/register"}
                className="text-red-600 font-semibold cursor-pointer hover:font-bold"
              >
                Register User?
              </Link>
            </p>
          </div>
        </div>
      </div>
      {/* <Toaster /> */}
    </>
  );
}

export default Login;
