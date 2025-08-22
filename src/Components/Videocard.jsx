import React from 'react'



function Videocard({video,name,price,image}) {
  return (
    <div className='h-80 w-45 bg-white relative shrink-0 sm:h-130 sm:w-74 md:h-100 md:w-58 lg:h-78 lg:w-46 xl:h-100 xl:w-59'>
         <div className='h-full w-full bg-[#00000028] absolute flex items-end justify-left gap-2 pb-2 pl-2.5 '>
            <div className='h-14 w-14 bg-white rounded-2xl flex items-center justify-center  '>
                <img className='h-[80%] w-[80%] object-cover' src={image} alt="Shelly1" loading='lazy' />
            </div>
            <div className='text-white'>
                <p className='font-semibold text-[14px] pb-2 '>{name}</p>
                <p className='font-semibold text-[14px] pb-1 '>{price}</p>
            </div>
         </div>




        <video className='h-full w-full object-cover ' src={video} autoPlay muted loop preload='none'></video>
       
      
    </div>
  )
}

export default Videocard
