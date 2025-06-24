import React from 'react'

const Homepage = () => {
  return (
    <div>
        <div className="text-center fle pt-[30vh] pb-[30vh]" style={{ color: '#286167' }}>
            <p className='lg:text-8xl font text-6xl mt-2'>Stories that matter</p>
            <p className='lg:w-[50%] xl:w-[30%] w-[50%] mt-10 text-2xl mx-auto'>EcoInsider brings clarity and depth to the environmental stories shaping Africa's climate, communities, and future.</p>
           <button className="mt-5 w-full">
<a 
  href="#" 
  className="inline-flex items-center justify-center mt-6 text-white p-2 px-6 text-xl rounded-3xl transition-colors duration-200 relative overflow-hidden"
  style={{ 
    backgroundColor: '#286167',
    boxShadow: '-5px 0 4px 4px #4a9ca6'
  }}
>
  <span className="relative z-10">Explore Insight</span>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="ml-2 w-6 h-6 text-white relative z-10"
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