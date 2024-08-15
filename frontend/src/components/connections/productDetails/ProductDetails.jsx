import { useState } from "react";
import { Radio, RadioGroup } from "@headlessui/react";
import Navbar from "../Navbar";
import ReactStars from "react-stars";
import ProductReviewCard from "./ProductReviewCard";
import mens_kurta from '../Jsons/men_kurta'
import SlideCard2 from '../cards/SlideCard2'
import Footer from "../Footer";
import { useNavigate } from "react-router-dom";

// import  mens_kurta from '../Jsons/men_jeans.json';

const product = {
  name: "Basic Tee 6-Pack",
  price: "$192",
  href: "#",
  breadcrumbs: [
    { id: 1, name: "Men", href: "#" },
    { id: 2, name: "Clothing", href: "#" },
  ],
  images: [
    {
      src: "https://tailwindui.com/img/ecommerce-images/product-page-02-secondary-product-shot.jpg",
      alt: "Two each of gray, white, and black shirts laying flat.",
    },
    {
      src: "https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-01.jpg",
      alt: "Model wearing plain black basic tee.",
    },
    {
      src: "https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-02.jpg",
      alt: "Model wearing plain gray basic tee.",
    },
    {
      src: "https://tailwindui.com/img/ecommerce-images/product-page-02-featured-product-shot.jpg",
      alt: "Model wearing plain white basic tee.",
    },
  ],
  colors: [
    { name: "White", class: "bg-white", selectedClass: "ring-gray-400" },
    { name: "Gray", class: "bg-gray-200", selectedClass: "ring-gray-400" },
    { name: "Black", class: "bg-gray-900", selectedClass: "ring-gray-900" },
  ],
  sizes: [
    { name: "S", inStock: true },
    { name: "M", inStock: true },
    { name: "L", inStock: true },
    { name: "XL", inStock: true },
  ],
  description: "The Basic Tee 6-Pack allows you t .",
  highlights: [
    "Hand cut and sewn locally",
    "Dyed with our proprietary colors",
    "Pre-washed & pre-shrunk",
    "Ultra-soft 100% cotton",
  ],
  details:
    'The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release.',
};

// const reviews = { href: "#", average: 4, totalCount: 117 };

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function ProductDetails() {
  // const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [selectedSize, setSelectedSize] = useState(product.sizes[2]);
  const [images, setImages] = useState(product.images[0].src);

  const navigate = useNavigate();
  const handleClick = ()=>{
    navigate(`/checkOut/${1}`)
  }

  return (
    <>
      <Navbar />
      <div className="pt-8 bg-white">
        <div className="pt-6">
          <section className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-10 px-4 pt-10">
            {/* Image gallery */}
            <div className="flex flex-col items-center ">
              <div className="overflow-hidden rounded-lg max-w-[30rem] max-h-[24rem]">
                <img
                  alt={product.images[0].alt}
                  src={images}
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <div className="flex flex-wrap w-full space-x-5 justify-center cursor-pointer">
                {product.images.map((item) => (
                  <div
                    key={item.src}
                    className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg max-w-[5rem] h-[5rem] mt-5"
                  >
                    <img
                      alt={item.alt}
                      src={item.src}
                      onClick={() => {
                        setImages(item.src);
                      }}
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Product info */}
            <div className="lg:col-span-1   mx-auto max-w-2xl px-10 pb-16 sm:px-6 lg:max-w-7xl lg:px-8 lg:pb-24">
              <div className="lg:col-span-2 ">
                <h1 className="text-lg lg:text-xl font-semibold text-gray-900 ">
                  {/* {product.name} */}
                  Lorem ipsum
                </h1>
                <p className="text-lg lg:tet-xl my-2  text-gray-500">
                  Lorem ipsum dolor sit amet.
                </p>
              </div>

              {/* Options */}
              <div className="mt-4 lg:row-span-3 lg:mt-0">
                <h2 className="sr-only">Product information</h2>
                <div className="flex space-x-5 items-center mt-1 lg:text-xl text-gray-900">
                  <p className="font-semibold text-display ">199</p>
                  <p className="line-through opacity-50">490</p>
                  <p className="text-green-500 font-format">50% off</p>
                </div>

                {/* Reviews */}
                <div className="mt-2">
                  <div className="flex items-center ">
                    <ReactStars
                      count={5}
                      size={24}
                      value={4.5}
                      className="text-[#ffd700]"
                      color2={"#ffd700"}
                    />
                    {/* <Rating name="read-only" value={3.5} readOnly /> */}
                    <p className="ml-2 opacity-50 text-sm">34345 Rating</p>
                    <p className="ml-3 text-sm font-md text-indigo-500">
                      23 Reviews
                    </p>
                  </div>
                  {/* <Typography component="legend">Read only</Typography> */}
                </div>

                <form className="mt-10">
                  {/* Sizes */}
                  <div className="mt-10">
                    <div className="flex items-center justify-between">
                      <h3 className="text-sm font-medium text-gray-900">
                        Size
                      </h3>
                    </div>

                    <fieldset aria-label="Choose a size" className="mt-4">
                      <RadioGroup
                        value={selectedSize}
                        onChange={setSelectedSize}
                        className="grid grid-cols-4 gap-4 sm:grid-cols-8 lg:grid-cols-4"
                      >
                        {product.sizes.map((size) => (
                          <Radio
                            key={size.name}
                            value={size}
                            disabled={!size.inStock}
                            className={classNames(
                              size.inStock
                                ? "cursor-pointer bg-white text-gray-900 shadow-sm"
                                : "cursor-not-allowed bg-gray-50 text-gray-200",
                              "group relative flex items-center justify-center rounded-md border px-1 py-1 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none data-[focus]:ring-2 data-[focus]:ring-indigo-500 sm:flex-1 sm:py-2"
                            )}
                          >
                            <span>{size.name}</span>
                            {size.inStock ? (
                              <span
                                aria-hidden="true"
                                className="pointer-events-none absolute -inset-px rounded-md border-2 border-transparent group-data-[focus]:border group-data-[checked]:border-indigo-500"
                              />
                            ) : (
                              <span
                                aria-hidden="true"
                                className="pointer-events-none absolute -inset-px rounded-md border-2 border-gray-200"
                              >
                                <svg
                                  stroke="currentColor"
                                  viewBox="0 0 100 100"
                                  preserveAspectRatio="none"
                                  className="absolute inset-0 h-full w-full stroke-2 text-gray-200"
                                >
                                  <line
                                    x1={0}
                                    x2={100}
                                    y1={100}
                                    y2={0}
                                    vectorEffect="non-scaling-stroke"
                                  />
                                </svg>
                              </span>
                            )}
                          </Radio>
                        ))}
                      </RadioGroup>
                    </fieldset>
                  </div>

                  <button className="btn bg-green-400 px-3 py-2 mt-5 rounded-md font-semibold " onClick={handleClick}  >
                    Add to cart
                  </button>
                </form>
              </div>

              <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
                {/* Description and details */}
                <div>
                  <h3 className="sr-only">Description</h3>

                  <div className="space-y-6">
                    <p className="text-base text-gray-900">
                      {product.description}
                    </p>
                  </div>
                </div>

                <div className="mt-1">
                  <h2 className="text-sm font-medium text-gray-900">Details</h2>

                  <div className="mt-4 space-y-6">
                    <p className="text-sm text-gray-600">{product.details}</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

            <ProductReviewCard/>
          <section className="my-10">
            <SlideCard2 sendDatas={mens_kurta} sectionName={"Similer Product"} />
          </section>
        </div>
        <Footer/>
      </div>


    </>
  );
}
