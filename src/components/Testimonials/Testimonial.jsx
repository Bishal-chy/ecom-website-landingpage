import React from 'react'
import Slider from 'react-slick';


const TestimonialData = [
    {
        id:1,
        name:"Bishal",
        text:"Each and every wine in their online catalog is accompanied by customer review not enough for the NakedWines marketing crew. ",
        img:"https://picsum.photos/101/102",
    },
    {
        id:2,
        name:"Bineet",
        text:"Each and every wine in their online catalog is accompanied by customer review not enough for the NakedWines marketing crew. ",
        img:"https://picsum.photos/108/102",
    },
    {
        id:3,
        name:"Nabin",
        text:"Each and every wine in their online catalog is accompanied by customer review not enough for the NakedWines marketing crew. ",
        img:"https://picsum.photos/103/102",
    },
    {
        id:4,
        name:"prateek",
        text:"Each and every wine in their online catalog is accompanied by customer review not enough for the NakedWines marketing crew. ",
        img:"https://picsum.photos/106/102",
    },
    {
        id:5,
        name:"yam",
        text:"Each and every wine in their online catalog is accompanied by customer review not enough for the NakedWines marketing crew. ",
        img:"https://picsum.photos/id/27/101/102",
    },
];
const Testimonial = () => {

    var settings ={
        dots:true,
        arrows:false,
        infinte:true,
        speed:500,
        // slidestoshow:2,
        slidesToScroll:1,
        autoplay:true,
        autoplaySpeed:2000,
        cssEase:"linear",
        pauseOnHover:true,
        pauseOnFocuse:true,
        responsive:[
            {
                breakpoint:10000,
                settings:{
                    slidesToShow:3,
                    slidesToScroll:1,
                    infinte:true,
                },
            },{
                breakpoint:1024,
                settings:{
                    slidesToShow:2,
                    slidesToScroll:1,
                    initialslide:2,

                },
            },{
                breakpoint:640,
                settings:{
                    slidesToShow:1,
                    slidesToScroll:1,
                },
            },
        ],
    };
  return (
    <div className='py-10 mb-10 flex justify-center items-center'>
      <div className='container'>
        {/* header section*/}
        <div className='text-center mb-10 max-w-[600px] mx-auto'>
           <p data-aos ="fade-up" className='text-sm text-purple-400'>What our customers say</p>
            <h1 data-aos ="fade-up" className='text-3xl font-bold'>Testimonial</h1>
            <p data-aos ="fade-up"  className='text-xs text-gray-400'>Shopping was a time to feel the blessings that came our way,
             to bring home the food that sunlight, soil and the loving  hand produced.</p>
        </div>
        {/* Testimonial card*/}
        <div data-aos="zoom-in">
        <Slider {...settings}>{
            TestimonialData.map((data) => (
                <div key={data.id} className='my-6'>
          <div key={data.id} className='flex flex-col gap-4 shadow-lg py-8
          px-6 mx-4 rounded-xl  dark:bg-gray-800 bg-purple-400/25 relative '>
           <div className='mb-4' >
          <img src={data.img} alt='' className='rounded-full w-20 h-20'/>
           </div>
           <div className='flex flex-col items-center gap-4'>
           <div className='space-y-3'>
            <p className='text-xs text-gray-500'>{data.text}</p>
            <h1 className='text-xl font-bold text-black/80 dark:text-light'>{data.name}</h1>
            </div>
           </div>
           <p className='text-black/20 text-9xl font-serif absolute right-0 top-0 '>
           ,,

           </p>
          </div>
          </div>
            ))}
        </Slider>
        </div>
      </div>
    </div>
  )
}

export default Testimonial
