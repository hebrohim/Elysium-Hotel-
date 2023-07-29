import React from 'react'
import instagram from "../images/instagram.png"
import facebook from "../images/facebook.png"
import twitter from "../images/twitter.png"
import Logo from"../images/Logo.png"
const Footer = () => {
  return (
    <footer className='text-sm lg:text-base lg:px-20'>
    <div className=' px-4 py-10 lg:flex lg:justify-between'>
        <div className='hidden lg:block'>
<img src={Logo}/>
        </div>

        <div className='lg:flex lg:justify-between lg:w-1/2'>
        <section className='font-bold mb-8'>
            <h3 className='mb-2'>Explore</h3>
            <p className='font-medium text-[#374558] mb-1'>Destinations</p>
            <p className='font-medium text-[#374558] mb-1'>Local Attractions</p>
            <p className='font-medium text-[#374558] mb-1'>Nearby Restaurants</p>
        </section>
        
        <section className='font-bold mb-8'>
            <h3>Information</h3>
            <p className='font-medium text-[#374558] '>Information</p>
            <p className='font-medium text-[#374558] '>Contact Us</p>
            <p className='font-medium text-[#374558] '>Privacy Policy</p>
            <p className='font-medium text-[#374558] '>Terms and Conditions</p>
        </section>


        <section className='font-bold mb-8'>
            <h3>Connect</h3>
            <p className='font-medium text-[#374558] '>Blog</p>
            <p className='font-medium text-[#374558] '>Newsletter</p>
            
        </section>

        
        </div>
    </div>


    <div className='bg-[#374558] h-[1px]'>

</div>


<section className='m-7 flex justify-center items-center'>
     
        <img src= {instagram} className='mr-6'/>
        <img src= {facebook} className='mr-6'/>
        <img src= {twitter} className=''/>

    
</section>  
    </footer>
  )
}

export default Footer