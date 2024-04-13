import React from 'react'
import Img1 from "../../assets/Topproduct/reimg1.png"
import Img2 from "../../assets/Topproduct/reimg2.png"
import Img3 from "../../assets/Topproduct/reimg3.png"
import { FaStar } from 'react-icons/fa6';

const ProductsData =[
    {
        id:1,
        img: Img1,
        title:"Women Ethnic",
        rating: 5.7,
        description:"You've done everything right Luxury and classic brands should consider ",
        aosDelay:"0",


    },
    {
        id:2,
        img: Img2,
        title:"Women Western",
        rating: 5.3,
        description:"You've done everything right Luxury and classic brands should consider",
        aosDelay:"200",


    },
    {
        id:3,
        img: Img3,
        title:"Goggles",
        rating: 4.7,
        description:"You've done everything right Luxury and classic brands should consider",
        aosDelay:"400",


    },
];
const TopProducts = ({handleOrderPopup}) => {
  return (
    <div className='flex justify-center items-center'>
      <div className='container '>
      {/* Header section*/}
      <div className='text-left mb-24'>
           <p data-aos ="fade-up" className='text-sm text-purple-400'>Top Rated Products for you</p>
            <h1 data-aos ="fade-up" className='text-3xl font-bold'>Best Products</h1>
            <p data-aos ="fade-up"  className='text-xs text-gray-400'>Shopping was a time to feel the blessings that came our way,
             to bring home the food that sunlight, soil and the loving  hand produced.</p>
        </div>
      {/* Body Section*/}
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3
      gap-28 sm:gap-24   md:gap-5   place-items-center  '>
        {
            ProductsData.map((data)=>(
                <div data-aos ="zoom-in" key={data.id} className='rounded-2xl bg-white  dark:bg-gray-800
                hover:bg-black/80 dark:hover:bg-purple-400 hover:text-white
                relative shadow-xl duration-high group max-w-[500px]'>
                    {/* image section */}
                    <div className='h-[100px] w-[400px] mx-auto ' >
                    <img src={data.img} alt='' className='max-w-[180px] block mx-auto 
                    transform -translate-y-20 group-hover:scale-105 duration-300 drop-shadow-md' />
                    </div>
                    {/* details section*/}
                    <div className='p-4 text-center'>
                      {/* Star rating*/}
                      <div className='flex w-full items-center justify-center gap-1'>
                        <FaStar className='text-yellow-500' />
                        <FaStar className='text-yellow-500'/>
                        <FaStar className='text-yellow-500'/>
                        <FaStar className='text-yellow-500'/>

                      </div>
                      <h1 className='text-xl font-bold'>{data.title}</h1>
                      <p className='text-gray-500 group-hover:text-white
                      duration-300 text-sm line-clamp-2 '>{data.description}</p>
                      <button className='bg-gradient-to-r from-orange-400 to-red-300 
            hover:scale-105 duration-200 text-white py-1 px-4 rounded-full mt-4
            group-hover:bg-white group-hover:text-black' onClick ={handleOrderPopup}>Order Now</button>
          
                    </div>
                </div>
            ))}
        
      </div>

      </div>
    </div>
  );
};

export default TopProducts;
