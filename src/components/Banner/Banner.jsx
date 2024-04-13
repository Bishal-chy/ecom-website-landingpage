import React from 'react'
import BannerIMg from "../../assets/women/women4.avif"
import { GrSecure } from "react-icons/gr"
import { IoFastFood } from "react-icons/io5"
import { GiFoodTruck } from "react-icons/gi"



const Banner = () => {
  return (
    <div className='min-h-[550px]  flex justify-center items-center py-12 sm:py-0  '>
      <div className='container'>
      <div className='grid grid-cols-1 sm:grid-cols-2  items-center   '>
      {/* image section*/}
      <div data-aos="zoom-in  ">
        <img src={BannerIMg} alt='' className='max-w-[500px] h-[350px] w-full mx-auto
        drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)] object-cover '/> 
      </div>
      {/* text detail section*/}
      <div  className=' flex  flex-col mt-10 justify-center gap-6 sm:pt-1 '>
        <h1 data-aos="fade-up" className='text-3xl sm:text-4xl  font-bold'>Winter Sale Upto 50% off</h1>
        <p data-aos="fade-up" className='text-sm text-gray-500 tracking-wide leading-6 '>40% of customers routinely return purchases due to poor product content.
         They thought they were buying one item, and in reality received something different.</p>
       {/* react icons */}
       <div data-aos ="fade-up" className=' flex items-center gap-4'>
        <GrSecure className='navbar-text text-3xl h-12 w-12 shadow-sm rounded-full bg-violet-100
        dark:bg-violet-400' />
        <p>Quality Product</p>
        
       </div>
       <div data-aos ="fade-up" className=' flex items-center gap-4 '>
        <IoFastFood className='navbar-text h-12 w-12 shadow-sm rounded-full bg-orange-100
        dark:bg-orange-400' />
        <p>Gets Offer</p>
       </div>
       <div data-aos ="fade-up" className= ' flex items-center gap-4 '>
        <GiFoodTruck className='navbar-text h-12 w-12 shadow-sm rounded-full bg-green-100
        dark:bg-green-400' />
        <p>Fast Delivery</p>
       </div>
      </div>
       
      </div>

      </div>

    </div>
  )
}

export default Banner
