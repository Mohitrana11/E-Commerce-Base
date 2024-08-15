// import React from 'react'

import Navbar from "../connections/Navbar"

function ProfilePage() {
  return (
    <>
      <Navbar/>
      <div className="pt-[20px] flex flex-col md:flex-row items-center justify-between px-10  w-full h-screen RegisterHome">
        <div className="avatar w-50 bg-orange-200">
            <div className="ring-primary ring-offset-base-100 w-36 my-2  rounded-full ring ring-offset-2">
                <label htmlFor="profile">
                    <img src={ `https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp`} alt="avatar" />
                </label>
            </div>
        </div>

        <div>

        </div>
      </div>
    </>
  )
}

export default ProfilePage
