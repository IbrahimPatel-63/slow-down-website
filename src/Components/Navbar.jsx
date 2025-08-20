import React from 'react'
import { RiMenu2Line } from "react-icons/ri";
import { CiSearch } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import slowdown from './images/slowdown.avif';
import { CiUser } from "react-icons/ci";
import { IoEarthOutline } from "react-icons/io5";
import { MdKeyboardArrowDown } from "react-icons/md";

function Navbar() {
  return (
    <div className='h-20 w-full bg-white flex items-center justify-between px-2.5 md:px-12 md:h-23 ' >
        <RiMenu2Line className='text-2xl md:text-[28px] lg:hidden cursor-pointer' />
        <img className='h-[76px] w-[76px]' src={slowdown} alt="logo" />
        <div className='hidden uppercase text-[12px] gap-8 tracking-[2px] lg:flex xl:pr-15'>
            <p className='cursor-pointer'>shop all</p>
            <p className='cursor-pointer'>bestsellers</p>
            <p className='cursor-pointer'>gift cards</p>
            <p className='cursor-pointer'>about us</p>
        </div>

        <div className='flex gap-6 xl:pr-12'>
                  <div className='hidden gap-5 items-center justify-center lg:flex'>
            <div className='flex items-center gap-2 uppercase'>
                <IoEarthOutline className='text-xl ' />
                <p className='text-[12px] tracking-[2px] cursor-pointer'>english</p>
                <MdKeyboardArrowDown  className='cursor-pointer'/>
            </div>
             <div className='flex items-center uppercase gap-2'>
                
                <p className='text-[12px] tracking-[2px] cursor-pointer'>india (inr)</p>
                 <MdKeyboardArrowDown className='cursor-pointer' />
            </div>
        </div>
        <div className='flex gap-5 xl:gap-7'>
            <CiSearch  className='text-2xl cursor-pointer'/>
            <CiUser className='text-2xl hidden md:block lg:hidden xl:block cursor-pointer' />
            <CiShoppingCart className='text-2xl lg:hidden xl:block cursor-pointer' />
        </div>
        </div>
  

      
    </div>
  )
}

export default Navbar
