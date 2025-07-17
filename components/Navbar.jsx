'use client'

import React, { useState } from 'react'
import Image from 'next/image'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className='flex justify-between relative max-sm:mr-3'>
        <div className='flex items-center'>
            <div className="relative w-13 h-13">
              <Image 
                src="/logo.svg" 
                alt="logo" 
                fill
                className='object-contain'
                priority
              />
            </div>
            <h4 className='text-dark-blue font-[900] font-nunito text-xl'>Calmerry</h4>
        </div>

        {/* Hamburger Menu Button */}
        <button 
          className='md:hidden z-50 cursor-pointer'
          onClick={toggleMenu}
          aria-label="Menu"
        >
          <div className='w-6 h-5 flex flex-col justify-between'>
            <span className={`w-full h-0.75 rounded-sm bg-dark-blue transform transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`w-full h-0.75 rounded-sm bg-dark-blue transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`}></span>
            <span className={`w-full h-0.75 rounded-sm bg-dark-blue transform transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </div>
        </button>

        {/* Desktop Menu */}
        <ul className='hidden md:flex justify-between items-center gap-8'>
            <li className='text-dark-blue font-nunito font-extrabold text-sm group'><a href='/' className='relative after:absolute after:bottom-[-4px] after:left-0 after:h-0.5 after:w-0 after:bg-dark-blue after:transition-all after:duration-300 hover:after:w-full'>Home</a></li>
            <li className='text-dark-blue font-nunito font-extrabold text-sm group'><a href='/AboutUs' className='relative after:absolute after:bottom-[-4px] after:left-0 after:h-0.5 after:w-0 after:bg-dark-blue after:transition-all after:duration-300 hover:after:w-full'>About us</a></li>
            <li className='text-dark-blue font-nunito font-extrabold text-sm group'><a href='/Pricing' className='relative after:absolute after:bottom-[-4px] after:left-0 after:h-0.5 after:w-0 after:bg-dark-blue after:transition-all after:duration-300 hover:after:w-full'>Pricing</a></li>
            <li className='text-dark-blue font-nunito font-extrabold text-sm group'><a href='/Contacts' className='relative after:absolute after:bottom-[-4px] after:left-0 after:h-0.5 after:w-0 after:bg-dark-blue after:transition-all after:duration-300 hover:after:w-full'>Contacts</a></li>
        </ul>

        {/* Mobile Sidebar */}
        <div className={`fixed top-0 left-0 h-full w-64 bg-light-blue transform transition-transform duration-300 ease-in-out z-40 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
          <div className='pt-20 px-6'>
            <ul className='flex flex-col gap-6'>
              <li className='text-dark-blue font-nunito font-extrabold text-base group'><a href='/' onClick={toggleMenu} className='relative after:absolute after:bottom-[-4px] after:left-0 after:h-0.5 after:w-0 after:bg-dark-blue after:transition-all after:duration-300 hover:after:w-full'>Home</a></li>
              <li className='text-dark-blue font-nunito font-extrabold text-base group'><a href='/AboutUs' onClick={toggleMenu} className='relative after:absolute after:bottom-[-4px] after:left-0 after:h-0.5 after:w-0 after:bg-dark-blue after:transition-all after:duration-300 hover:after:w-full'>About us</a></li>
              <li className='text-dark-blue font-nunito font-extrabold text-base group'><a href='/Pricing' onClick={toggleMenu} className='relative after:absolute after:bottom-[-4px] after:left-0 after:h-0.5 after:w-0 after:bg-dark-blue after:transition-all after:duration-300 hover:after:w-full'>Pricing</a></li>
              <li className='text-dark-blue font-nunito font-extrabold text-base group'><a href='/Contacts' onClick={toggleMenu} className='relative after:absolute after:bottom-[-4px] after:left-0 after:h-0.5 after:w-0 after:bg-dark-blue after:transition-all after:duration-300 hover:after:w-full'>Contacts</a></li>
            </ul>
          </div>
        </div>

        {/* Overlay */}
        {isOpen && (
          <div 
          className="fixed inset-0 rgba(0, 0, 0, 0.79) z-30 md:hidden"
          onClick={toggleMenu}
          ></div>
        )}
      </nav>
    </>
  )
}

export default Navbar
