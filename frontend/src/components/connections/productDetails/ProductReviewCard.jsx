// import React from 'react'
import ReactStars from "react-stars";
function ProductReviewCard() {
  return (
    <div>
          {/* ratting and reviews */}
          <section className="px-8 md:px-20">
            <h1 className="font-semibold text-lg pb-4">
              Recent Review & Rating
            </h1>
            <div className="border rounded-3xl p-5">
              <h1>Product Review</h1>
              <div className="flex flex-wrap md:flex-row items-center justify-between pr-20 pt-3 gap-y-6">
                <div>
                  <div className="border  gap-x-6  w-80 h-30 flex items-center justify-center">
                    <div className="avatar">
                      <div className="w-14 rounded-full">
                        <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                      </div>
                    </div>
                    <div>
                      <h1 className="mt-2 font-bold  text-2xl font-geek">User name</h1>
                      <p>About Product</p>
                      <ReactStars
                        count={5}
                        size={20}
                        value={4.5}
                        className="text-[#ffd700]"
                        color2={"#ffd700"}
                      />
                    </div>
                  </div>
                </div>

                <div className="flex flex-col  gap-y-3">
                  <div className="flex flex-row justify-center items-center  gap-x-3  ">
                      <p>Excellent</p>
                      <progress
                        className="progress progress-error w-60"
                        value={80}
                        max="100"
                      ></progress>
                  </div>
                  <div className="flex flex-row justify-center items-center  gap-x-1">
                      <p>Very Good</p>
                      <progress
                        className="progress progress-info w-60"
                        value={50}
                        max="100"
                      ></progress>
                  </div>
                  <div className="flex flex-row justify-center items-center  gap-x-10">
                      <p>Good </p>
                      <progress
                        className="progress progress-success w-60"
                        value={70}
                        max="100"
                      ></progress>
                  </div>
                  <div className="flex flex-row justify-center items-center  gap-x-3">
                      <p>Average</p>
                      <progress
                        className="progress progress-accent w-60"
                        value={20}
                        max="100"
                      ></progress>
                  </div>
                  <div className="flex flex-row justify-center items-center  gap-x-10">
                      <p>Poor</p>
                      <progress
                        className="progress progress-primary w-60"
                        value={30}
                        max="100"
                      ></progress>
                  </div>
                </div>

              </div>
            </div>
          </section>

    </div>
  )
}

export default ProductReviewCard
