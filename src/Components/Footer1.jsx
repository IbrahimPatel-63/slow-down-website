import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

function Footer1() {
  return (
    <div className='h-260 w-full bg-[#D8CEDF] md:flex md:h-135 '>
        <div className='h-[50%] w-full  px-4 py-15 md:h-full md:w-[50%]'>
            <div className=' h-full w-full  md:flex   gap-6 lg:pl-8 xl:gap-25'>
            <div className='underline flex flex-col gap-4 text-[14px] whitespace-nowrap tracking-widest cursor-pointer '>
            <p>Contact Us</p>
            <p>How to Hang a Blanket</p>
            <p>Slowdown Slow Jams Playlist</p>
            <p>Slowdown Journal</p>
            <div className='h-[.5px] w-[99%] bg-black sm:mt-5 md:hidden'></div>
          </div>
          <div className='underline flex flex-col gap-4 py-5 md:py-0 text-[14px]  tracking-widest cursor-pointer '>
            <p>About us</p>
            <p>Wholesale</p>
            <p>Find Us In Stores</p>
            <p>Shipping & Returns</p>
            <p>International Customs & Duties</p>
            <p>Reviews</p>
             <div className='h-[.5px] w-[99%] bg-black mt-12 md:hidden'></div>
          </div>
            </div>
        </div>
         <div className='h-[50%] w-full bg-[#D8CEDF] flex items-center justify-center  md:h-full md:w-[50%]'>
            <div className='h-[95%] w-[80%]   flex flex-col gap-5 sm:items-center xl:pl-50 2xl:pl-80 md:pt-12 lg:pt-18 '>
            <h1 className='font-black text-center'>Sign up to get email updates</h1>
            <p className='text-center text-[14px] sm:w-70'>Slow down with us. We deliver art into your inbox and 10% off your first order</p>
            <input className='border-1 border-black rounded-sm h-10 w-70 pl-4 ' type="text" placeholder='First Name' />
            <input className='border-1 border-black rounded-sm h-10 w-70 pl-4' type="text" placeholder='Email' />
            <p className='font-semibold text-[14px] '>Are you an artist?</p>
            <div className='flex gap-2 text-[14px]'>
             <input  type="radio"  /> Yes!
             <input type="radio" /> Nope,just shopping
            </div>
             <button className='h-12 w-70 bg-[#7B9DDA] rounded-full uppercase font-semibold text-white tracking-widest cursor-pointer'>sign up</button>
             <div className='flex gap-4 text-xl '>
              <div className='h-10 w-10  flex items-center justify-center rounded-full hover:bg-black hover:text-white transition ease-in duration-500 cursor-pointer'><FaFacebookF /></div>
              <div className='h-10 w-10  flex items-center justify-center rounded-full hover:bg-black hover:text-white transition ease-in duration-500 cursor-pointer'><FaPinterestP /></div>
              <div className='h-10 w-10  flex items-center justify-center rounded-full hover:bg-black hover:text-white transition ease-in duration-500 cursor-pointer'> <FaTwitter /></div>
             </div>
               <div className='h-[.5px] w-full bg-black mt-5 md:hidden  '></div>
            </div>
      
         </div>
      
    </div>
  )
}

export default Footer1
