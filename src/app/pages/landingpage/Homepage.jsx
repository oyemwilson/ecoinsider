import React from 'react'

const Homepage = () => {
  return (
    <div>
      <div className="text-center fle pt-[16vh] md:pt-[30vh] md:pb-[30vh] pb-[22vh]" style={{ color: '#0F4F57' }}>
        <p className="text-6xl sm:text-6xl md:text-6xl lg:text-8xl  md:mt-4 text-center">
          Stories that matter
        </p>
        <p className="mt-6 sm:mt-8 md:mt-10 text-md  sm:text-xl md:text-2xl mx-auto text-center w-fit">
          EcoInsider brings clarity and depth to the <br />
          environmental stories shaping Africa's climate,<br />
          communities, and future.
        </p>


        <button className="mt-5 sm-w-full w-">
          <a
            href="#"
            className="inline-flex items-center justify-center mt-6 text-white p-2 px-3 sm:px-6 py-3 text-sm sm:text-xl rounded-3xl transition-colors duration-200 relative overflow-hidden"
            style={{
              backgroundColor: '#286167',
              boxShadow: '-5px 0px 0 2px #C0dadb'


            }}
          >
            <span className="relative z-10">Explore Insight</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="sm:ml-2 w-6 h-4 text-white relative z-10"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
            </svg>
          </a>
        </button>
      </div>
    </div>
  )
}

export default Homepage