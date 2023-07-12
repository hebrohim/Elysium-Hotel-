import React from 'react'
import Logo from"../images/Logo.png"
import menu from"../images/menuIcon.png"
const NavBar = () => {
  return (
    
        <nav className='bg-white text-lg flex justify-between p-4 md:p-6 lg:py-8 lg:px-24'>

            <div className='w-1/4 leftNavigationLinks hidden lg:flex justify-between '>
                <a>Home</a>
                <a>Rooms</a>
                <a>About</a>

            </div>

            <div className='logo'>
                <img src ={Logo}/>

            </div>

            <div className='menu lg:hidden'>
            <img src ={menu}/>

            </div>


            <div className='w-1/4 rightNavigationLinks hidden lg:flex justify-between'>
                <a>Amenities</a>
                <a>Offers</a>
                <a>Contact</a>

            </div>

        </nav>
   
  )
}

export default NavBar