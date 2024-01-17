import React from "react"
import LogoGrids from "./LogoGrid"
import CTA from "./CTA"
import CTA1 from "./CTA1"
import Features from "./Features"
import Reviews from "./Reviews"
import Footer from "./Footer"
import CTA2 from "./CTA2"

const Testimonials = () => {
  const divStyle = {
    background:
      "radial-gradient(at 50% 40%, rgb(255, 255, 255), transparent 80%) 0% 0% repeat scroll, " +
      "radial-gradient(at 50% -47%, rgb(172, 224, 249), transparent 80%) 0% 0% repeat scroll, " +
      "radial-gradient(at 0% 0%, rgb(232, 225, 255) 0px, transparent 32%) 0% 0% repeat scroll, " +
      "radial-gradient(at 100% 98%, rgb(255, 241, 235), transparent) 0% 0% repeat scroll, " +
      "radial-gradient(at 0px 97%, rgb(227, 235, 255), white) 0% 0% repeat scroll rgba(0, 0, 0, 0)",
    zIndex: 9999999,
  }

  return (
    <div>
      <div
        className=""
        style={{
          padding: "0px",
        }}
      >
        <div>
          <div
            className="undefined"
            style={divStyle}
          >
            <div className="dark:text-zinc-100 mx-auto w-7/8 ">
              <div className="w-7/8 mx-auto relative h-4/5 z-30 pt-6 inter  ">
                <div className=" text-center pt-8 md:pt-12 md:mt-12 mx-auto w-4/5 md:w-3/5">
                  <h1 className="text-[#030647]  font-semibold text-5xl md:text-7xl dark:text-gray-200 Inter">
                    {" "}
                    The All-In-One Calendar App for SaaS Founders{" "}
                  </h1>
                  <p className="text-lg text-[#515568] pt-2 mt-4 text-center w-4/5  mx-auto dark:text-gray-100/70 Inter">
                    Streamline your workflow with the all-in-one calendar and organization app for
                    founders. Get started with a free trial today, no credit card needed.{""}
                  </p>
                  <div className="flex flex-row mx-auto justify-center pt-6 mt-4">
                    <button
                      className="text-white bg-[#302DCA] hover:drop-shadow-lg focus:ring-4 text-lg focus:ring-blue-300 font-semibold rounded-2xl text-sm px-12 py-4 mr-2 mb-2 dark:bg-purple-600  dark:hover:bg-purple-700 focus:outline-none dark:focus:ring-blue-800"
                      type="button"
                    >
                      Get Started
                    </button>
                  </div>
                </div>
              </div>
              <div className="rounded-2xl md:h-[600px] relative mt-8 pt-4">
                <img
                  className="rounded-2xl w-4/5 mx-auto z-20 pb-12"
                  src="https://res.cloudinary.com/dnzjbmzag/image/upload/v1694679379/CalendarPlanDashboard.png"
                />
              </div>
            </div>
          </div>
        </div>
        <LogoGrids />

        <CTA />

        <CTA1 />

        <Features />

        <Reviews />

        <div>
          <section className="mb-24 w-4/5 md:w-1/2 mx-auto">
            <div className="bg-white">
              <div className=" text-center pt-8 mt-4 md:pt-16 md:mt-14">
                <h1 className="font-bold text-3xl md:text-5xl text-[#030647] pt-3 mt-2  Inter">
                  Frequently Asked Questions
                </h1>
              </div>
              <div className="mt-12 md:mt-20 text-lg">
                <div className="pb-12 flex flex-col space-y-4">
                  <details
                    className="bg-white shadow rounded-xl px-4 py-4 mb-1 faqBoxShadow"
                    open
                  >
                    <summary
                      className="font-bold text-[#030647] rounded-lg py-3 px-4 text-lg dark:text-gray-200 
 cursor-pointer"
                    >
                      How do I get started?
                    </summary>
                    <div>
                      <p className="text-[#9295A5] px-4 pb-4 text-base Inter">
                        If you'd like to try out our app, you can get started with a free 30-day
                        trial, no credit card needed. Simply click here to get started.
                      </p>
                    </div>
                  </details>
                  <details className="bg-white shadow rounded-xl px-4 py-4 mb-1 faqBoxShadow">
                    <summary
                      className="font-bold text-[#030647] rounded-lg py-3 px-4 text-lg dark:text-gray-200 
 cursor-pointer"
                    >
                      Do you offer discounts?
                    </summary>
                    <div>
                      <p className="text-[#9295A5] px-4 pb-4 text-base Inter">
                        If you'd like to try out our app, you can get started with a free 30-day
                        trial, no credit card needed. Simply click here to get started.
                      </p>
                    </div>
                  </details>
                  <details className="bg-white shadow rounded-xl px-4 py-4 mb-1 faqBoxShadow">
                    <summary
                      className="font-bold text-[#030647] rounded-lg py-3 px-4 text-lg dark:text-gray-200 
 cursor-pointer"
                    >
                      What are the pricing plans?
                    </summary>
                    <div>
                      <p className="text-[#9295A5] px-4 pb-4 text-base Inter">
                        If you'd like to try out our app, you can get started with a free 30-day
                        trial, no credit card needed. Simply click here to get started.
                      </p>
                    </div>
                  </details>
                  <details className="bg-white shadow rounded-xl px-4 py-4 mb-1 faqBoxShadow">
                    <summary
                      className="font-bold text-[#030647] rounded-lg py-3 px-4 text-lg dark:text-gray-200 
 cursor-pointer"
                    >
                      How do I get started?
                    </summary>
                    <div>
                      <p className="text-[#9295A5] px-4 pb-4 text-base Inter">
                        If you'd like to try out our app, you can get started with a free 30-day
                        trial, no credit card needed. Simply click here to get started.
                      </p>
                    </div>
                  </details>
                </div>
              </div>
            </div>
          </section>
        </div>
        <div>
          <section className="py-8 w-4/5 mx-auto md:pt-12 md:mt-24 pt-4 px-4">
            <div className="mb-16 text-center">
              <h1 className="text-3xl font-bold text-[#030647] lg:text-5xl Inter">
                Our pricing plans
              </h1>
              <p className="text-[#515568] text-base font-normal pt-4 mt-2 md:w-4/5 lg:w-2/5 mx-auto Inter">
                We have three pricing plans below. You can also get started with a free trial, no
                credit card needed.
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-8 -mx-4">
              <div className="flex w-full mb-8 sm:px-4 lg:mb-0 border  rounded-3xl bg-white">
                <div className="flex flex-col w-full p-6 space-y-8  sm:p-8 ">
                  <div className="space-y-1 ">
                    <h4 className="text-2xl md:text-3xl font-semibold pt-4  Inter">Basic Plan</h4>
                    <p className="mt-3 leading-relaxed text-[#A7A6DB] font-normal text-lg pb-6 Inter">
                      For Small team needs
                    </p>
                    <span className="text-4xl font-semibold text-[#030647] pt-4 mt-4 Inter">
                      $10
                    </span>
                    <span className="text-xl tracking-wide text-[#9DA1B5] Inter">/mo</span>
                  </div>
                  <ul className="flex-1 mb-6 text-base md:text-lg space-y-4">
                    <li className="flex mb-2 space-x-2 align-center items-center">
                      <svg
                        className="flex-shrink-0 w-6 h-6 text-indigo-600"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          clipRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          fillRule="evenodd"
                        />
                      </svg>
                      <span className="text-[#515568] Inter">10 GB Disk Space</span>
                    </li>
                    <li className="flex mb-2 space-x-2 align-center items-center">
                      <svg
                        className="flex-shrink-0 w-6 h-6 text-indigo-600"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          clipRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          fillRule="evenodd"
                        />
                      </svg>
                      <span className="text-[#515568] Inter">1 Year Support</span>
                    </li>
                    <li className="flex mb-2 space-x-2 align-center items-center">
                      <svg
                        className="flex-shrink-0 w-6 h-6 text-indigo-600"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          clipRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          fillRule="evenodd"
                        />
                      </svg>
                      <span className="text-[#515568] Inter">500 Queries</span>
                    </li>
                    <li className="flex mb-2 space-x-2 align-center items-center">
                      <svg
                        className="flex-shrink-0 w-6 h-6 text-indigo-600"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          clipRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          fillRule="evenodd"
                        />
                      </svg>
                      <span className="text-[#515568] Inter">Free Custom Domain</span>
                    </li>
                  </ul>
                  <button
                    className="w-full block shadow-none px-5 py-4 font-semibold  text-center rounded-full hover:shadow-none
 bg-[#EBEBFA] text-[#302DCA] focus:ring-4 text-base md:text-lg
 focus:ring-blue-300"
                    type="button"
                  >
                    Buy Now
                  </button>
                </div>
              </div>
              <div className="flex w-full mb-8 sm:px-4 lg:mb-0 border rounded-3xl bg-[#302DCA] text-white">
                <div className="flex flex-col w-full p-6 space-y-8  sm:p-8  ">
                  <div className="space-y-1 ">
                    <h4 className="text-2xl md:text-3xl font-semibold pt-4  Inter">
                      Business Plan
                    </h4>
                    <p className="mt-3 leading-relaxed text-[#A7A6DB] font-normal text-lg pb-6 Inter">
                      For Small team needs
                    </p>
                    <span className="text-4xl font-semibold pt-4 mt-4 Inter">$20</span>
                    <span className="text-xl tracking-wide text-[#A7A6DB] Inter">/mo</span>
                  </div>
                  <ul className="flex-1 mb-6 text-base md:text-lg space-y-4">
                    <li className="flex mb-2 space-x-2 align-center items-center">
                      <svg
                        className="flex-shrink-0 w-6 h-6 text-indigo-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          clipRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          fillRule="evenodd"
                        />
                      </svg>
                      <span className="undefined Inter">10 GB Disk Space</span>
                    </li>
                    <li className="flex mb-2 space-x-2 align-center items-center">
                      <svg
                        className="flex-shrink-0 w-6 h-6 text-indigo-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          clipRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          fillRule="evenodd"
                        />
                      </svg>
                      <span className="undefined Inter">1 Year Support</span>
                    </li>
                    <li className="flex mb-2 space-x-2 align-center items-center">
                      <svg
                        className="flex-shrink-0 w-6 h-6 text-indigo-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          clipRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          fillRule="evenodd"
                        />
                      </svg>
                      <span className="undefined Inter">500 Queries</span>
                    </li>
                    <li className="flex mb-2 space-x-2 align-center items-center">
                      <svg
                        className="flex-shrink-0 w-6 h-6 text-indigo-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          clipRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          fillRule="evenodd"
                        />
                      </svg>
                      <span className="undefined Inter">Free Custom Domain</span>
                    </li>
                  </ul>
                  <button
                    className="w-full block shadow-none px-5 py-4 font-semibold  text-center rounded-full hover:shadow-none
 bg-white text-[#302DCA] focus:ring-4 text-base md:text-lg
 focus:ring-gray-300 "
                    type="button"
                  >
                    Buy Now
                  </button>
                </div>
              </div>
              <div className="flex w-full mb-8 sm:px-4 lg:mb-0 border  rounded-3xl bg-white">
                <div className="flex flex-col w-full p-6 space-y-8  sm:p-8 ">
                  <div className="space-y-1 ">
                    <h4 className="text-2xl md:text-3xl font-semibold pt-4  Inter">
                      Enterprise Plan
                    </h4>
                    <p className="mt-3 leading-relaxed text-[#A7A6DB] font-normal text-lg pb-6 Inter">
                      For Small team needs
                    </p>
                    <span className="text-4xl font-semibold text-[#030647] pt-4 mt-4 Inter">
                      $40
                    </span>
                    <span className="text-xl tracking-wide text-[#9DA1B5] Inter">/mo</span>
                  </div>
                  <ul className="flex-1 mb-6 text-base md:text-lg space-y-4">
                    <li className="flex mb-2 space-x-2 align-center items-center">
                      <svg
                        className="flex-shrink-0 w-6 h-6 text-indigo-600"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          clipRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          fillRule="evenodd"
                        />
                      </svg>
                      <span className="text-[#515568] Inter">10 GB Disk Space</span>
                    </li>
                    <li className="flex mb-2 space-x-2 align-center items-center">
                      <svg
                        className="flex-shrink-0 w-6 h-6 text-indigo-600"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          clipRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          fillRule="evenodd"
                        />
                      </svg>
                      <span className="text-[#515568] Inter">1 Year Support</span>
                    </li>
                    <li className="flex mb-2 space-x-2 align-center items-center">
                      <svg
                        className="flex-shrink-0 w-6 h-6 text-indigo-600"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          clipRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          fillRule="evenodd"
                        />
                      </svg>
                      <span className="text-[#515568] Inter">500 Queries</span>
                    </li>
                    <li className="flex mb-2 space-x-2 align-center items-center">
                      <svg
                        className="flex-shrink-0 w-6 h-6 text-indigo-600"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          clipRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          fillRule="evenodd"
                        />
                      </svg>
                      <span className="text-[#515568] Inter">Free Custom Domain</span>
                    </li>
                  </ul>
                  <button
                    className="w-full block shadow-none px-5 py-4 font-semibold  text-center rounded-full hover:shadow-none
 bg-[#EBEBFA] text-[#302DCA] focus:ring-4 text-base md:text-lg
 focus:ring-blue-300"
                    type="button"
                  >
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          </section>
        </div>
        <div />
        <div />
        <div />
        <div />
        <CTA2 />
        <div>
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default Testimonials
