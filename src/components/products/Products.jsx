import React from 'react'
import Img1 from "../../assets/women/women1.avif";
import Img2 from "../../assets/women/women2.avif";
import Img3 from "../../assets/women/women3.avif";
import Img4 from "../../assets/women/women4.avif";
import Img5 from "../../assets/women/women5.avif";
import { FaStar } from 'react-icons/fa6';

const ProductsData = [
    
    {
        id:1,
        img: Img1,
        title:"Women Ethnic",
        rating: 5.7,
        color:"white",
        aosDelay:"0",


    },
    {
        id:2,
        img: Img2,
        title:"Women Western",
        rating: 5.3,
        color:"Red",
        aosDelay:"200",


    },
    {
        id:3,
        img: Img3,
        title:"Goggles",
        rating: 4.7,
        color:"brown",
        aosDelay:"400",


    },
    {
        id:4,
        img: Img4,
        title:"Printed T-Shirt",
        rating: 5.5,
        color:"yellow",
        aosDelay:"600",


    },
    {
        id:5,
        img: Img5,
        title:"Fashion T-Shirt",
        rating: 4.5,
        color:"Pink",
        aosDelay:"800",


    },
];
const Products = () => {
  return (
    <div className='mt-14 mb-12 flex justify-center items-center'>
      <div>
        {/* Header section*/}
        <div className='text-center mb-10 max-w-[600px] mx-auto'>
           <p data-aos ="fade-up" className='text-sm text-purple-400'>Top Selling Products for you</p>
            <h1 data-aos ="fade-up" className='text-3xl font-bold'>Products</h1>
            <p data-aos ="fade-up"  className='text-xs text-gray-400'>Shopping was a time to feel the blessings that came our way,
             to bring home the food that sunlight, soil and the loving  hand produced.</p>
        </div>
        {/* Body section*/}
        <div className=''>
            <div className='grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5
            place-items-center gap-5'>
            {/* card section*/}
            {ProductsData.map((data) =>(
                <div  data-aos="fade-up" 
                data-aos-delay={data.aosDelay}
                key={data.id} className='space-y-3'>
                    <img src={data.img} alt='' className='h-[220px]
                    w-[250px] mx-auto object-cover rounded-md'/>
                    <div>
                        <h3 className='font-semibold'>{data.title}</h3>
                        <p className='text-sm text-gray-600 '>{data.color} </p>
                        <div className='flex items-center gap-1'>
                            <FaStar className='text-yellow-500' />
                            <span>{data.rating}</span>
                        </div>
                    </div>
                </div>

            ))}


            </div>
            {/* view all button*/}
            <div className='flex justify-center '>
                <button  className='bg-gradient-to-r from-orange-400 to-red-300 
            hover:scale-105 duration-200 text-white py-1 px-4 rounded-full mt-7
            group-hover:bg-white hover:text-black'>
                    View All Products
                </button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Products
