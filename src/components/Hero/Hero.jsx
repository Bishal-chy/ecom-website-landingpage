import React from 'react';
import Image1 from '../../assets/website/hero/offer 2.png';
import Image2 from '../../assets/website/hero/1nq3ZZ-shopping-png 1.png';
import Image3 from '../../assets/website/hero/replace1img 1.png'
import Slider from "react-slick";

const ImageList =[
  {
    id:1,
    img:Image1,
    title:"Up to 50% off on all Men'S Wear",
    description:"Shopping was a time to feel the blessings that came our way, to bring home the food that sunlight, soil and the loving farmer's hand produced."
  },
  {
    id:2,
    img:Image2,
    title:"Up to 50% off on all Men'S Wear",
    description:"Shopping was a time to feel the blessings that came our way, to bring home the food that sunlight, soil and the loving farmer's hand produced."
  },
  {
    id:3,
    img:Image3,
    title:"Up to 50% off on all Men'S Wear",
    description:"Shopping was a time to feel the blessings that came our way, to bring home the food that sunlight, soil and the loving farmer's hand produced."
  },
];

const Hero = ({handleOrderPopup}) => {
  var settings ={
    dots:false,
    arrows:false,
    infinite:true,
    speed:800,
    slidesToScroll:1,
    autoplay:true,
    autoplaySpeed:4000,
    cssEase:"ease-in-out",
    pauseOnHover:false,
    pauseOnFocus:true,
  };
  return (
    <div className='relative   min-h-[550px]  -z-40 flex justify-center items-center overflow-hidden'>
      {/* background pattern*/}
      <div className='h-[650px] w-[700px] bg-gradient-to-r from-purple-400 to-red-300 absolute -top-1/2 right-0
      rounded-3xl rotate-45 -z-10 '>

      </div>
      {/* hero section*/}
      <div className='container pd-8 sm:pb-0  '>
      <Slider{...settings}  >
      {ImageList.map((data)=>(
      
      



      
      <div key={data.id}>
        <div className='grid grid-cols-1 sm:grid-cols-2'>
        {/* text section*/}
        <div className='flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center
        sm:text-left order-2 relative z-10'>
          <h1 data-aos="zoom-out"
              data-aos-duration="500"
              data-aos-once="true" className='text-5xl sm:text-6xl lg:text-7xl font-bold'>
          {data.title}
          </h1>
          <p data-aos="fade-up"
              data-aos-duration="500"
              data-aos-delay="100" className='text-sm'>
          {data.description}
          </p>
          <div data-aos="fade-up"
              data-aos-duration="500"
              data-aos-delay="300" >
            <button className='bg-gradient-to-r from-orange-400 to-red-300 
            hover:scale-105 duration-200 text-white py-2 px-4 rounded-full' onClick={handleOrderPopup}>Order Now</button>
          </div>
        </div>
        {/* image section*/}
        <div className='order-1 sm:order-2'>
          <div data-aos="zoom-in"
               data-aos-once="true"
                className='relative z-10'>
            <img src={data.img} alt=''
            className='w-[300px] h-[300px] sm:h-[450px] sm:w-[450px]
             sm:scale-125 lg:scale-125 object-contain mx-auto' />
          </div>
        </div>
        </div>
      </div>
      ))}
      </Slider>
      </div>
    </div>
  );
};

export default Hero;
