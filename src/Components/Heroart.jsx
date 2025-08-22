import React from 'react'
import heroart from './images/heroart.webp'

function Heroart() {
  return (
    <div className='h-screen w-full md:h-[85vh]  md:flex'>
        <div className='h-[60%] w-full md:h-full md:w-[50%] '>
            <img className='h-full w-full object-fit' src={heroart} alt="" loading='lazy' />
        </div>
        <div className='h-[40%] w-full bg-[#FAF1FF] pl-4 pt-8 md:h-full md:w-[50%] md:flex md:justify-center md:items-left md:flex-col md:px-12 md:pb-18 lg:px-18'>
            <h1 className='text-2xl font-black tracking-wider md:text-4xl md:w-70 md:leading-12 lg:w-90'>Calling All Artists</h1>
            <p className='text-[18px] pt-5 pb-2 md:text-xl md:w-65 lg:w-90'>The <b>Slowdown Art Comp</b> is officially back, and is kicking off on June 1st, 2025.</p>
            <h2 className='text-[18px] pb-6 text-[#000000a3] md:text-xl lg:pb-8'>Artwork by @darren.shaddick</h2>
            <button className='h-[46px] w-90 border-0 bg-[#7B9CDA] rounded-4xl text-white font-semibold tracking-[4px] text-[14px] sm:w-60 cursor-pointer' >LEARN MORE</button>
        </div>
        
      
    </div>
  )
}

export default Heroart
