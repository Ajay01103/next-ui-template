import React from "react"

const CTA2 = () => {
  return (
    <div className="mt-24 pt-12 pb-12 mb-24 w-[95%] md:w-4/5 mx-auto">
      <div className="rounded-2xl pt-20 pb-24 flex justify-center align-center shadow-lg custom-gradient">
        <div className="text-center text-gray-100 w-[80%] md:w-[60%] m-auto ">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold Inter">
            Sign up to get started with our calendar app today
          </h1>
          <p className="text-base pt-4 text-gray-100 Inter">
            Sign up in just thirty seconds, and you'll have your calendars ready to go and set up.
          </p>
          <div className="pt-6">
            <button
              className="text-[#302DCA] bg-white focus:ring-4  hover:bg-gray-100 transition focus:ring-blue-300 font-semibold rounded-full text-sm px-8 py-4 mr-2  focus:outline-none "
              type="button"
            >
              Get Started
            </button>
            <button
              className="text-white bg-transparent border border-white border-solid hover:bg-white hover:text-[#302DCA] md:mt-0 mt-4 focus:ring-4 focus:ring-blue-300 font-semibold rounded-full text-sm px-8 py-4 mr-2 transition focus:outline-none"
              type="button"
            >
              More Info
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CTA2
