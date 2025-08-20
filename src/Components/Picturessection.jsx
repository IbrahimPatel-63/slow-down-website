import React from 'react'
import Picture from './Picture'
import product1 from './images/product1.webp'
import product2 from './images/product2.webp'
import product3 from './images/product3.webp'
import product4 from './images/product4.webp'
import product5 from './images/product5.webp'
import product6 from './images/product6.webp'

function Picturessection() {
  return (
    <div className='min-h-110 w-full bg-white px-4 py-5 flex gap-5 items-center justify-around flex-wrap md:px-12 md:gap-6'>
       
        <Picture image={product1} />
        <Picture image={product2} />
        <Picture image={product3} />
        <Picture image={product4} />
        <Picture image={product5} />
        <Picture image={product6} />

      
    </div>
  )
}

export default Picturessection
