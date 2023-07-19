import React from 'react'
// import f from"../images/aboutImg.png"
import welcome from "../images/welcome.png"
import { BsArrowRight } from "react-icons/bs";
const HeroSection = () => {
  return (
//     <div className=' bg-hero-image bg-cover bg-no-repeat heroSection h-[290px]  md:h-screen '>
//  cac
//     </div>

<div className='text-white px-4 py-16 flex justify-center items-center bg-[linear-gradient(to_bottom,rgba(85,66,8,0.60),rgba(0,0,0,0.40),rgba(85,66,8,0.60)),url("./images/HeroSectionImage.png")] bg-cover bg-no-repeat heroSection h-[290px]  md:h-screen '>
<section className='flex flex-col py-5 items-center'>
    <div className='mb-3 '>
        <img src={welcome} style={{rotate:"360deg"}} className='lg:w-[600px]'/>
    </div>
    <p className='mb-3 lg:text-[28px]'>Discover the Perfect Hotel Experience</p>
    <button className='p-4 border border-[#F2911B] rounded-lg flex items-center justify-center hover:bg-[#F2911B]'>
        Explore Hotel <BsArrowRight className='ml-4'/>
    </button>
</section>
   </div>
  )
}
// background: var(--background-1, linear-gradient(0deg, rgba(0, 0, 0, 0.40) 0%, rgba(0, 0, 0, 0.40) 100%), linear-gradient(134deg, rgba(85, 66, 8, 0.60) 0%, rgba(85, 66, 8, 0.60) 100%));
export default HeroSection