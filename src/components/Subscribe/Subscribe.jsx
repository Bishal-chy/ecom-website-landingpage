import React from 'react'
import Banner from "../../assets/Topproduct/bnnr.jpeg"

{/* banner img */}
const BannerImg ={
    backgroundImage:`url(${Banner})`,
    backgroundPosition:"center",
    backgroundRepeat:"no-repeat",
    backgroundSize:"cover",
    heigth:"100%",
    width:"100%",
}
const Subscribe = () => {
  return (
    <div data-aos="zoom-in" className= 'bg-gray-100 mb-10 dark:bg-gray-800 text-white flex justify-center items-center'
    style={BannerImg} >
      <div className='container backdrop-blur-sm py-10 px-24'>
     <div  className='space-y-6 max-w-xl mx-auto' >
        <h1 className='text-2xl !text-center sm:text-left sm:text-4xl font-semibold'>Get Notified About New Products</h1>
        <input data-aos ="fade-up" type='text' placeholder='Enter your email'
        className='w-full p-3 rounded-md'/>
     </div>
     <div data-aos ="fade-up" className='flex justify-center items-center mt-5'>
      <button className='bg-gradient-to-r from-orange-400 to-red-300 transition-all duration-300 py-3 px-6
      rounded-full hover:scale-105'>Login</button>
      <div data-aos ="fade-up" className='mx-4 '>
        <a href='#' className='text-2xl hover:text-orange-200  '>
          Create an Account. <hr data-aos ="fade-up"></hr>
        </a>
      </div>
     </div>
      </div>
    </div>
  )
}

export default Subscribe;
