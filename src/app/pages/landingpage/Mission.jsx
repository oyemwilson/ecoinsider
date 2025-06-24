import React from 'react'

const Mission = () => {
    return (
        <>
        <div className="mx-[10%] py-20">
<div>
                <h1 className='mx-auto text-center text-[#286167] text-5xl w-[100%]'>We go deeper than climate headlines,<br /> uncovering the people, projects, and ideas across <br /> Africa that are reshaping our plane</h1>
            </div>
            <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-10 p-10 bg-white">

                {/* Text Content */}
                <div className="max-w-xl">
                    <h2 className="text-2xl font-bold text-[#286167] mb-4">Why We Exist</h2>

                    <p className="text-lg text-gray-700 mb-6 w-[90%]">
                            “Climate conversations about Africa too often arrive as afterthoughts or single-paragraph footnotes. The
                            continent’s 1.4 billion people deserve insights that treat their environmental reality as the main story, not
                            the sidebar.”
                    </p>

                    {/* Author Info */}
                    <div className="flex items-center mb-6">
                        <img
                            src="https://placehold.co/48x48" // Replace with actual image URL
                            alt="Victor Eyo Andrew"
                            className="w-12 h-12 rounded-full mr-3"
                        />
                        <div>
                            <p className="font-bold text-sm">VICTOR EYO ANDREW</p>
                            <p className="text-sm italic text-gray-500">Editor-in-chief <span className="italic">Ecoinsider</span></p>
                        </div>
                    </div>

                    {/* CTA */}
                    <a href="#" className="text-[#286167] font-semibold text-lg flex items-center hover:underline">
                        Explore Insights
                        <span className="ml-2">→</span>
                    </a>
                </div>

                {/* Image Section */}
                <div className="w-full lg:w-[50%] max-w-2xl shadow-lg rounded-xl overflow-hidden">
                    <img
                        src="/assets/images/herobanner.png"
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