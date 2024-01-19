const Hero = () => {
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
    <div style={divStyle}>
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
  )
}

export default Hero
