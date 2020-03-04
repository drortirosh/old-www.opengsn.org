import React from 'react'

export const Hero = function() {
  const SVG = () =>
    <svg style={{ width: "30px", height: "20px", verticalAlign: 'middle', horizontalAlign: "middle", margin: "0px 5px" }} viewBox="0 0 21 18">
      <g fill="none">
        <path fill="#ffffff"
              d="M0.554,7.092 L19.117,0.078 C19.737,-0.156 20.429,0.156 20.663,0.776 C20.745,0.994 20.763,1.23 20.713,1.457 L17.513,16.059 C17.351,16.799 16.62,17.268 15.88,17.105 C15.696,17.065 15.523,16.987 15.37,16.877 L8.997,12.271 C8.614,11.994 8.527,11.458 8.805,11.074 C8.835,11.033 8.869,10.994 8.905,10.958 L15.458,4.661 C15.594,4.53 15.598,4.313 15.467,4.176 C15.354,4.059 15.174,4.037 15.036,4.125 L6.104,9.795 C5.575,10.131 4.922,10.207 4.329,10.002 L0.577,8.704 C0.13,8.55 -0.107,8.061 0.047,7.614 C0.131,7.374 0.316,7.182 0.554,7.092 Z">
        </path>
      </g>
    </svg>

  return (
    <div className='pt-10 md:pt-20 pb-12 bg-gray-100'>
      <div className='container'>
        <div className='lg:w-9/12 mx-auto text-center'>
          <h1 className='font-silkaSemiBold text-xl md:text-4xl'>
            GSN is the ultimate onboarding solution for Ethereum applications
          </h1>
          <h2 className='text-sm md:text-md opacity-80 subpixel-antialiased tracking-wide mt-2 mb-4 py-4'>
            Turn your dapps into apps. Free your users. No more gas.
          </h2>
          <div className="m-auto justify-center sm:justify-between flex-row space-between max-w-md">
            <a
              href="https://t.me/joinchat/F_BETUjG0Crb2s6mFx1LWA"
              className='font-silkaSemiBold shadow uppercase rounded tracking-wider bg-blue-500 hover:bg-blue-600 mt-5 text-white hover:text-white p-2 px-4 inline-block trans trans-slow'>
              Reach out on Telegram
            </a>
	  </div>
          <div className="m-auto justify-center flex flex-wrap sm:justify-between flex-row space-between max-w-md">
            <a
              href='https://docs.opengsn.org/learn/'
              className='font-silkaSemiBold shadow uppercase rounded tracking-wider bg-indigo-500 hover:bg-indigo-600 mt-5 text-white hover:text-white p-2 px-4 inline-block trans trans-slow'
            >
              Use GSN in your app
            </a>
            <a
              href='https://github.com/openeth-dev/gsn'
              className='font-silkaSemiBold shadow uppercase rounded tracking-wider bg-blue-500 hover:bg-blue-600 mt-5 text-white hover:text-white p-2 px-4 inline-block trans trans-slow'
            >
              Checkout the Code
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
