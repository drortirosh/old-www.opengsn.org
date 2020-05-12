import React from 'react'
import Link from 'next/link'

export default () => (
  <footer className='bg-blue-900 text-white'>
    <div className='container pt-6 pb-6 lg:pt-12 lg:pb-32'>

      <nav className='md:flex items-center justify-between flex-wrap py-4'>
        <div
          className='w-full sm:flex flex-grow lg:items-center lg:w-auto'
        >
          <div className='text-sm lg:flex-grow'></div>

          <a href='https://github.com/opengsn/gsn' className='block md:inline-block font-silkaMedium text-bold text-sm text-white pr-6 lg:pr-0 lg:pl-16 pt-1 leading-none mt-4 lg:mt-0'>
            GitHub
          </a>

        </div>
      </nav>

    </div>
  </footer>
)
