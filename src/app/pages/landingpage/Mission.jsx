import React from 'react'

const Mission = () => {
    return (
        <>
            <div className="px-[10%] py-20 bg-white " id='missions'>
                <div className="x lg:mb-20 w-[90%] md:w-[80%] text-center  mx-auto">
                    <h1 className="mx-auto text-center text-[#286167] text-3xl md:text-4xl xl:text-5xl leading-snug sm:leading-normal">
                        We go deeper than climate headlines,
                        uncovering the people, projects, and ideas across
                        Africa that are reshaping our planet
                    </h1>
                </div>
                {/* <div className='hidden xl:block'>
                <h1 className="mx-auto text-center text-[#286167] text-3xl md:text-4xl xl:text-4xl leading-snug sm:leading-normal">
                    We go deeper than climate headlines,
                </h1>
                <h1 className="mx-auto text-center text-[#286167] text-3xl md:text-4xl xl:text-4xl leading-snug sm:leading-normal">
                    uncovering the people, projects, and ideas across
                </h1>
                <h1 className="mx-auto text-center text-[#286167] text-3xl md:text-4xl xl:text-4xl leading-snug sm:leading-normal">
                    Africa that are reshaping our planet
                </h1>
                </div> */}



                <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-10 p-10 bg-white">

                    {/* Text Content */}
                    <div className="max-w-xl flex-1 text-center lg:text-left">
                        <h2 className="text-2xl font-bold text-[#286167] mb-4">
                            Why We Exist
                        </h2>

                        <p className="text-lg text-gray-700 mb-6 w-[90%] mx-auto lg:mx-0">
                            “Climate conversations about Africa too often arrive as afterthoughts or single-paragraph footnotes. The
                            continent’s 1.4 billion people deserve insights that treat their environmental reality as the main story, not
                            the sidebar.”
                        </p>

                        {/* Author Info */}
                        <div className="flex  flex-row items-center justify-center lg:justify-start mb-6  gap-0">
                            <img
                                src="/assets/images/editor.jpg"
                                alt="Victor Eyo Andrew"
                                className="w-12 h-12 rounded-full object-cover object-center scale-110 mx-0"
                            />

                            <div className="ml-2 text-center text-left">
                                <p className="font-bold text-sm text-black">VICTOR EYO ANDREW</p>
                                <p className="text-sm text-gray-900">Editor-in-chief <span className="italic font-thin text-gray-600">Ecoinsider</span></p>
                            </div>
                        </div>

                        {/* CTA */}
                        <a href="https://open.substack.com/pub/ecoinsider/p/coming-soon?r=5dblai&utm_campaign=post&utm_medium=web&showWelcomeOnShare=false" className="text-[#286167] font-semibold text-lg flex justify-center lg:justify-start items-center hover:underline">
                            Explore Insights
                            <span className="ml-2">→</span>
                        </a>
                    </div>

                    {/* Image Section */}
                    <div className="w-[90vw] lg:w-[50%] flex-shrink-0 max-w-2xl rounded-xl overflow-hidden">
                        <img
                            src="/assets/images/frame.png"
                            alt="African Market Illustration"
                            className="w-full h-auto object-cover"
                        />
                    </div>

                </div>

            </div>

        </>
    )
}

export default Mission