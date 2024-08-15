// Slide.js
import ReactStars from "react-stars";
import { FaShoppingCart } from "react-icons/fa";
import { MdCurrencyRupee } from "react-icons/md";
import { useNavigate } from "react-router-dom";

function Slide({ imageUrl, brand, title,price,discountedPrice }) {
  const ratingChanged = (newRating) => {
    console.log(newRating);
  };

  const navigate = useNavigate();
  const handleClick = ()=>{
    navigate(`/productDetails/:${2}`);
  }

  return (
    <div className="relative cursor-pointer flex items-center flex-col my-4 shadow-base-900 rounded-lg shadow-lg overflow-hidden w-[15rem] ml-26 hover:scale-105"   onClick={handleClick}>
     
      <div className="h-[12rem] w-10rem">
        <img
          className="object-cover object-top w-full h-full"
          src={imageUrl}
          alt=""
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-medium text-gray-900">{brand}</h3>
        <p className="mt-1 text-sm text-gray-500">{title}</p>
        <div className="flex flex-row gap-2  mt-2">
          <p className="font-bold flex flex-row items-center justify-center">{<MdCurrencyRupee className="text-xl text-[#112141]" />}{discountedPrice}</p>
          <p className="line-through opacity-50">{price}</p>
        </div>
        <ReactStars
          count={5}
          // onChange={ratingChanged}
          onChange={ratingChanged}
          size={24}
          value={4.5}
          className="text-[#ffd700]"
          color2={"#ffd700"}
        />
      </div>
      <div className="absolute bottom-5 right-5 rounded-full px-3 py-3  bg-blue-300 hover:bg-pink-200  ">
      <FaShoppingCart  className=" "/>

      </div>

    </div>
  );
}

export default Slide;
