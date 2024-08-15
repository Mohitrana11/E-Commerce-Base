import AddressCard from "../addressCard/AddressCard"


function DeliveryAddress() {
  return (
    <>
      <div className="w-full h-full flex flex-row flex-wrap ">
      <div className=" w-full md:w-[28vw]  px-5 py-4 ">
          <div >
          <h1 className='text-xl '>User Info</h1>
            <AddressCard/>
            <button className="btn bg-blue-600 text-white mt-8   hover:bg-orange-400 hover:text-black">Address Details</button>
          </div>
      </div>
      <div  className=" w-full md:w-[54vw] border rounded-xl px-6 md:px-4 py-4 ">
        <form action="">
          <div className="flex flex-wrap  md:flex-row gap-x-5 gap-y-4">
            <input type="text" placeholder="First Name" className="border outline-none px-4 py-4 rounded-md w-full max-w-xs" />
            <input type="text" placeholder="Last Name" className="border outline-none px-4 py-4 rounded-md w-full max-w-xs" />
          </div>
          <textarea
          placeholder="Bio"
          className=" outline-none border rounded-lg textarea-lg w-full  mt-4 "></textarea>

        <div className="flex flex-wrap  md:flex-row gap-x-5 gap-y-4 mt-3">
            <input type="text" placeholder="City" className="border outline-none px-4 py-4 rounded-md w-full max-w-xs" />
            <input type="text" placeholder="State" className="border outline-none px-4 py-4 rounded-md w-full max-w-xs" />
          </div>

          <div className="mt-4 flex flex-wrap  md:flex-row gap-x-5 gap-y-4">
            <input type="text" placeholder="Zip Code" className="border outline-none px-4 py-4 rounded-md w-full max-w-xs" />
            <input type="text" placeholder="Phone Number" className="border outline-none px-4 py-4 rounded-md w-full max-w-xs" />
          </div>
          <button className="btn mt-5 bg-blue-600 text-white hover:bg-orange-400 hover:text-black" type="submit">Deliver Here</button>
        </form>
      </div>
      </div>
    </>
  )
}

export default DeliveryAddress
