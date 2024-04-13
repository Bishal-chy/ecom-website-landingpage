import React from 'react'
import Banner from "../../assets/Topproduct/footerbanner.jpeg"
import { FaInstagram } from 'react-icons/fa6';
import {
    FaFacebook,
    FaLinkedin,
    FaLocationArrow,
    FaMobileAlt,

} from "react-icons/fa";

const BannerImg = {
    backgroundImage:`url(${Banner})`,
    backgroundPosition:"bottom",
    backgroundRepeat:"no-repeat",
    backgroundSize:"cover",
    heigth:"100%",
    width:"100%",
};
const FooterLink = [
    {
        title:"Home",
        link:"/#",
    },
    {
        title:"About",
        link:"/#About",
    },
    {
        title:"Contact",
        link:"/#Contact",
    },
    {
        title:"Blog",
        link:"/#blog",
    },

];
const Footer = () => {
  return (
    <div style={BannerImg} className='text-white flex  justify-center items-center'>
      <div className='container'>
      <div data-aos = "zoom-in" className='grid grid-cols-3 pb-44 pt-5'>
        {/* company details*/}
        <div className='py-5 px-4'>
        <h1 className='sm:text-3xl font-bold sm:text-left text-justify mb-3 flex items-center gap-3'> <img src='https://picsum.photos/id/28/50/50' alt='' className="rounded-full uppercase"/> Godam</h1>
        <p>The increase in online sales during the pandemic saw business owners moving from physical storefronts to digital solutions to sell online, helping to expand their reach and increase revenue.</p>
        </div>
        {/* Footer links*/}
        <div className='grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10'>
            <div>
            <div className='py-8 px-4'>
                <h1 className='sm:text-xl text-gray-200 text-xl font-bold sm:text-left text-justify mb-3'>
                    Important Links
                </h1>
                <ul className='flex flex-col gap-3'>
                    {
                        FooterLink.map((link) =>(
                            <li className='cursor-pointer hover:text-purple-400 hover:translate-x-1 duration-300'
                            key={link.title}>
                            <span>{link.title}</span>

                            </li>
                    ))}
                </ul>
            </div>

            </div>
            <div>
            <div className='py-8 px-4'>
                <h1 className='sm:text-xl text-gray-200 text-xl font-bold sm:text-left text-justify mb-3'>
                     Links
                </h1>
                <ul className='flex flex-col gap-3'>
                    {
                        FooterLink.map((link) =>(
                            <li className='cursor-pointer hover:text-purple-400 hover:translate-x-1 duration-300'
                            key={link.title}>
                            <span>{link.title}</span>

                            </li>
                    ))}
                </ul>
            </div>

            </div>
            {/* social media link*/}
            <div>
                <div className='flex items-center gap-3 mt-6'>
                    <a href='#'>
                        <FaInstagram className='text-3xl bg-red-600 rounded-lg'/>
                    </a>
                    <a href='#'>
                        <FaFacebook className='text-3xl bg-blue-500 rounded-full '/>
                    </a>
                    <a href='#'>
                        <FaLinkedin className='text-3xl bg-blue-700 rounded-lg'/>
                    </a>
                </div>
                <div  className='mt-6'>
                    <div className='flex items-center gap-3'>
                    <FaLocationArrow />
                    <p>Kathmandu, kalanki malpot <span><hr></hr></span></p>
                     
                    </div>
                    <div className='flex items-center gap-3 mt-3'>
                        <FaMobileAlt />
                        <p>+9779811988921 <span><hr></hr></span></p>
                    </div>
                </div>
            </div>
        </div>
      </div>
      {/* horizotnal line*/}
       <div className='mb-24'>
      <hr className=""></hr>
      </div>
     
      </div>
    </div>
  )
}

export default Footer
