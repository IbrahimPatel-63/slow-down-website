import React from 'react'


function Products({name,image,description}) {
  return (
    <div className='flex flex-col items-center justify-center w-55 sm:w-60 md:w-70 mt-10 shrink-0 lg:w-58 xl:w-70 ' >
        {image}
        <h2 className='font-bold text-center mt-5 mb-2.5 capitalize'>{name}</h2>
        <p className='text-center '>{description}</p>
      
    </div>
  )
}

export default Products
