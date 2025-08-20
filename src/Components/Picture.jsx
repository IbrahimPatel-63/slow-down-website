import React from 'react'


function Picture({image}) {
  return (
    <div className='h-90 w-90 sm:h-72 sm:w-72 md:h-50 md:w-50 lg:h-72 lg:w-72 xl:h-92 xl:w-92 2xl:h-115 2xl:w-112 overflow-hidden  '>
        <img className='h-full w-full object-fit hover:scale-[1.05] transition ease-in duration-600' src={image} alt="Products" />
      
    </div>
  )
}

export default Picture
