import React from 'react'

const Footer = () => {
  return (
    <div className="px-4 sm:px-10 md:px-20 xl:px-60 py-8 flex flex-col md:flex-row justify-between items-center text-center md:text-left space-y-4 md:space-y-0 footer">

      {/* Left Section */}
      <div className="relative w-full md:w-auto">
        {/* Horizontal Line only on medium and larger screens */}
        <div className="hidden md:block absolute -top-3 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-gray-400 to-transparent w-full md:w-[20rem] xl:w-[43rem] mx-auto"></div>

        <p className="text-base sm:text-lg text-gray-400">
          © 2025 ecoinsider limited
        </p>
      </div>

      {/* Right Section */}
      <div>
        <p className="text-base sm:text-lg text-gray-400">
          info@readecoinsider.com
        </p>
      </div>
    </div>

  )
}

export default Footer