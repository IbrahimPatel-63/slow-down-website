import React from 'react'
import heroimage from './images/hero1.webp'

function Hero() {
  return (
    <div className='h-[100vh] w-full bg-blue-500 md:flex md:flex-row-reverse md:h-[85vh]' >
        <div className='h-[60%] w-full bg-red-400  md:h-full md:w-[50%]'>
            <img src={heroimage} alt="hero-image" className='h-full w-full' loading='lazy' />
        </div>
        <div className='h-[40%] w-full bg-[#FFE4CF] pt-6 pl-4 md:h-full md:w-[50%] md:flex md:justify-center  md:flex-col md:pl-12 xl:pl-25 xl:pb-25  '>
            <h1 className='text-[26px] font-semibold leading-8 md:text-[38px] md:leading-12 md:w-60 lg:w-100 xl:w-120'>Art-inspired home goods for your everyday</h1>
            <p className='text-[18px] pt-5 pb-5 md:text-xl md:w-60 lg:w-80 lg:pt-8 lg:pb-8 xl:w-120'>At Slowdown Studio, we collaborate with emerging artists worldwide to create home accessories with individuality.</p>
            <button className='px-32 py-2.5 border-1 border-[#7B9CDA] cursor-pointer sm:px-20 bg-[#7B9CDA] rounded-4xl uppercase font-semibold text-white text-[14px] tracking-[2px] md:w-65 lg:py-4 '>shop now</button>
        </div>
      
    </div>
  )
}

export default Hero
