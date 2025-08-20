import React from 'react'
import Products from './Products'
import { ImEarth } from "react-icons/im";
import { FaSnowman } from "react-icons/fa";
import { FaRecycle } from "react-icons/fa6";
import { TbFiretruck } from "react-icons/tb";

function Productinfo() {
  return (
    <div className='h-95 w-full bg-[#E1EBFF] flex gap-8 overflow-auto pb-25  px-4 sm:pb-10 sm:h-80 sm:gap-17 md:h-82 md:gap-20 md:px-15 lg:h-78  lg:pb-10 lg:gap-5 lg:px-5 lg:overflow-hidden xl:px-10 xl:gap-8 xl:flex  justify-between '>
       
        <Products name='Sustainable & Ethical Production' image={<ImEarth className='text-7xl lg:text-6xl'/>} description='Our textiles are proudly made in the USA by family-run mills, using recycled yarns where possible.'/>
        <Products name='limited edition,made to last' image={<FaSnowman className='text-7xl lg:text-6xl'/>} description='We offer individuality and longevity, as we produce limited edition runs of well made and easy to care for goods.'/>    
        <Products name='Plastic-Free Shipping' image={<FaRecycle className='text-7xl lg:text-6xl'/>} description='We ship using 100% recyclable packaging, with all textiles protected by reusable cotton dustbags.' />
        <Products name='30 Day Returns' image={<TbFiretruck className='text-7xl lg:text-6xl'/>} description='We understand that your home might need to try on our products so we offer a risk-free 30 day return policy.' />
      
    </div>
  )
}

export default Productinfo
