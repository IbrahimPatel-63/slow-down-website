import React from 'react'

import fivestar from './images/fivestar2.jpg'

function Singlebigcard({name,description,image}) {
  return (
    <div className='h-[80%] w-[90%] bg-white rounded-2xl overflow-hidden relative shadow-xl shadow-gray-400 shrink-0 cursor-pointer sm:w-72 md:w-80 lg:w-75 '>
        <div className='h-[52%] w-full '><img className='h-full w-full object-fit' src={image} alt="" /></div>
        <div className='h-12 w-full bg-white flex items-center justify-between px-4'>
            <img className='w-35 ' src={fivestar} alt="stars" />
            <p className='text-[18px] text-[#0000007a]'>1 month ago</p>
        </div>
        <p className='w-[98%] px-4 text-[17px]'>{description}</p>
        <p className='text-[17px] font-semibold absolute bottom-5 left-4 text-[#000000ad]'>{name}</p>


      
    </div>
  )
}

export default Singlebigcard
