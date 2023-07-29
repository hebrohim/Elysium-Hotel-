import React from 'react'
import instagram from "../images/instagram.png"
import facebook from "../images/facebook.png"
import twitter from "../images/twitter.png"
const Footer = () => {
  return (
    <div className=' px-4 py-10 '>
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

        <div className='bg-[#374558] h-[1px]'>

        </div>
        

        <section className='mt-7 flex justify-center items-center'>
             
                <img src= {instagram} className='mr-6'/>
                <img src= {facebook} className='mr-6'/>
                <img src= {twitter} className=''/>

            
        </section>
        
    </div>
  )
}

export default Footer