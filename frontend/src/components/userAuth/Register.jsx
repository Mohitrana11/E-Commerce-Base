
// import { Toaster, toast } from 'react-hot-toast';


import { Link } from 'react-router-dom';
import Navbar from '../connections/Navbar';

function Register() {
  


    return (
        <>
          <Navbar/>
            <div className="w-full h-screen pt-[80px] px-40 sm:px-0 flex items-center justify-center cursor-pointer RegisterHome">
                {/* <Toaster position='top-center ' reverseOrder={false}></Toaster> */}
                <div className="border card bg-base-100 w-96 shadow-blue-400 shadow-2xl px-9">
                    <div className="flex items-center justify-center flex-col mt-3">
                        <h1 className="text-4xl font-semibold font-geek">Register</h1>
                        <div className="flex items-center justify-center flex-col mt-2">
                            <p className='text-md '>Happy to join you</p>
                        </div>
                    </div>
                    <form action="" >
                        <div className="avatar flex items-center justify-center my-2">
                            <div className="ring-primary ring-offset-base-100 w-16 my-2  rounded-full ring ring-offset-2">
                                <label htmlFor="profile">
                                    <img src={ `https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp`} alt="avatar" />
                                </label>
                            </div>
                        </div>
                        <div className="">
                        <label className="border my-3 px-3 py-2 rounded-md flex items-center ">
                                <input type="text" className="grow border-none outline-none" placeholder="Username"  />
                            </label>
                            
                            <label className="border px-3 py-2 rounded-md flex items-center my-3">
                                <input type="email" className="grow border-none outline-none" placeholder="Email"  />
                            </label>
                      
                            <label className="border px-3 py-2 rounded-md flex items-center gap-2">
                                <input type="password" className="grow border-none outline-none" placeholder="Password" />
                            </label>
                        </div>

                        <div className="w-full my-3 flex items-center justify-center">
                            <button className="btn btn-active bg-blue-600 font-medium text-white hover:bg-orange-400 duration-500 hover:text-black hover:font-bold" type="submit">
                                Sign In
                            </button>
                        </div>
                    </form>
                    <div className="flex items-center justify-end mb-5">
                        <p>
                            Already Registered? <Link to={'/login'} className="text-red-600 font-semibold cursor-pointer hover:font-bold">Login</Link>
                        </p>
                    </div>
                </div>
            </div>
            {/* <Toaster /> */}
        </>
    );
}

export default Register;
