import React from 'react'
import BlaBlaLogo from '../assets/blabla-logo.png'
import ProfileLogo from '../assets/profile.png'
import { AiOutlineSearch, AiOutlinePlusCircle, AiOutlineDown } from "react-icons/ai";


export const Navbar = () => {
  return (
    // div for sticky navbar with tailwindcss for jsx
    <div className="sticky top-0 z-50 flex items-center justify-between w-full h-16 px-8 py-4 bg-white shadow-md">
        <div className="flex items-center ml-20">
            <img className="h-8 mr-2" src={BlaBlaLogo} alt="blablago logo"/>
        </div>
        <div className="flex items-center w-[400px] mr-10">
            <div className='flex'>
                <div className='flex mx-1'>
                  <AiOutlineSearch size={30} className='text-[#66c9e5] mx-2 mt-1'/>
                  <span className='text-[#66c9e5] font-bold text-[17px] font-sans mx-2 mt-1'>Search</span>
                </div>
                <div className='flex mx-1'>
                  <AiOutlinePlusCircle size={30} className='text-[#66c9e5] mx-2 mt-1'/>
                  <span className='text-[#66c9e5] font-bold text-[17px] font-sans mx-2 mt-1'>Publish a Ride</span>
                </div>
                <div className='flex text-gray-500 '>
                  <img className="h-10 ml-4" src={ProfileLogo} alt="profile logo"/>
                  <AiOutlineDown size={18} className='mt-2 ml-2'/> 
                </div>
            </div>
        </div>
    </div>

  )
}
