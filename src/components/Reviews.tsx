import { Card, CardBody, CardHeader } from "@nextui-org/react"
import React from "react"

const Reviews = () => {
  return (
    <>
      <section className="bg-[#F3F5F9]">
        <div className="py-24 w-4/5 mx-auto">
          <div className="flex md:flex-row flex-col pt-8 items-center pb-12">
            <h1 className="font-bold text-4xl md:text-5xl text-[#030647]">Testimonials</h1>
          </div>
          <div className="overflow-auto md:overflow-clip flex">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-6">
              <div className="flex mr-4 min-w-0 antialiased">
                <Card className="w-full flex flex-col bg-white p-6 rounded-2xl">
                  <CardHeader className="flex flex-row items-center">
                    <img
                      className="rounded-full inline h-12 w-12"
                      src="https://source.unsplash.com/KIPqvvTOC1s/400x400"
                      alt="John Doe"
                    />
                    <div className="flex flex-col ml-4">
                      <div>
                        <h2 className="font-semibold text-[#030647]">John Doe</h2>
                        <p className="text-gray-500 text-base">Founder</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardBody>
                    <p className="pt-4 mt-2 text-gray-600 leading-relaxed">
                      I'm a huge fan of this app, I've found it to be incredibly intuitive overall.
                      Would definitely recommend this if you're looking for an app to make planning
                      that bit easier.
                    </p>
                  </CardBody>
                </Card>
              </div>
              <div className="flex mr-4 min-w-0">
                <Card className="w-full flex flex-col bg-white p-6 rounded-2xl">
                  <CardHeader className="flex flex-row items-center">
                    <img
                      className="rounded-full inline h-12 w-12"
                      src="https://source.unsplash.com/rDEOVtE7vOs/450x450"
                      alt="Emma Doe"
                    />
                    <div className="flex flex-col ml-4">
                      <div>
                        <h2 className="font-semibold text-[#030647]">Emma Doe</h2>
                        <p className="text-gray-500 text-base">Founder</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardBody>
                    <p className="pt-4 mt-2 text-gray-600 leading-relaxed">
                      This app has been pivotal for helping our team collaborate on tasks and new
                      plans, I’d definitely recommend this if you’d like an intuitive planner app.
                    </p>
                  </CardBody>
                </Card>
              </div>
              <div className="flex mr-4 min-w-0">
                <Card className="w-full flex flex-col bg-white p-6 rounded-2xl">
                  <CardHeader className="flex flex-row items-center">
                    <img
                      className="rounded-full inline h-12 w-12"
                      src="https://source.unsplash.com/HrfZ1yOQw_E/400x400"
                      alt="James Doe"
                    />
                    <div className="flex flex-col ml-4">
                      <div>
                        <h2 className="font-semibold text-[#030647]">James Doe</h2>
                        <p className="text-gray-500 text-base">Developer</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardBody>
                    <p className="pt-4 mt-2 text-gray-600 leading-relaxed">
                      I absolutely love the features provided, and that I can create notes to each
                      task also. It really helped streamline my workflow, I would definitely
                      recommend it!
                    </p>
                  </CardBody>
                </Card>
              </div>
            </div>
          </div>

          <div className="hidden lg:block py-10 overflow-auto md:overflow-clip">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-6">
              <div className="flex mr-4 min-w-0">
                <Card className="w-full flex flex-col bg-white p-6 rounded-2xl">
                  <CardHeader className="flex flex-row items-center">
                    <img
                      className="rounded-full inline h-12 w-12"
                      src="https://source.unsplash.com/KIPqvvTOC1s/400x400"
                      alt="John Doe"
                    />
                    <div className="flex flex-col ml-4">
                      <div>
                        <h2 className="font-semibold text-[#030647]">John Doe</h2>
                        <p className="text-gray-500 text-base">Founder</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardBody>
                    <p className="pt-4 mt-2 text-gray-600 leading-relaxed">
                      I'm a huge fan of this app, I've found it to be incredibly intuitive overall.
                      Would definitely recommend this if you're looking for an app to make planning
                      that bit easier.
                    </p>
                  </CardBody>
                </Card>
              </div>
              <div className="flex mr-4 min-w-0">
                <Card className="w-full flex flex-col bg-white p-6 rounded-2xl">
                  <CardHeader className="flex flex-row items-center">
                    <img
                      className="rounded-full inline h-12 w-12"
                      src="https://source.unsplash.com/rDEOVtE7vOs/450x450"
                      alt="Emma Doe"
                    />
                    <div className="flex flex-col ml-4">
                      <div>
                        <h2 className="font-semibold text-[#030647]">Emma Doe</h2>
                        <p className="text-gray-500 text-base">Founder</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardBody>
                    <p className="pt-4 mt-2 text-gray-600 leading-relaxed">
                      This app has been pivotal for helping our team collaborate on tasks and new
                      plans, I’d definitely recommend this if you’d like an intuitive planner app.
                    </p>
                  </CardBody>
                </Card>
              </div>
              <div className="flex mr-4 min-w-0">
                <Card className="w-full flex flex-col bg-white p-6 rounded-2xl">
                  <CardHeader className="flex flex-row items-center">
                    <img
                      className="rounded-full inline h-12 w-12"
                      src="https://source.unsplash.com/HrfZ1yOQw_E/400x400"
                      alt="James Doe"
                    />
                    <div className="flex flex-col ml-4">
                      <div>
                        <h2 className="font-semibold text-[#030647]">James Doe</h2>
                        <p className="text-gray-500 text-base">Developer</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardBody>
                    <p className="pt-4 mt-2 text-gray-600 leading-relaxed">
                      I absolutely love the features provided, and that I can create notes to each
                      task also. It really helped streamline my workflow, I would definitely
                      recommend it!
                    </p>
                  </CardBody>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Reviews
