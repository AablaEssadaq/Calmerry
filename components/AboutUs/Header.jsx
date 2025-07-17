'use client'
import React from 'react'

const Header = () => {
  return (
    <>
    <div className='flex flex-col items-center justify-center my-8 bg-gradient-to-r from-light-blue to-blue-secondary rounded-2xl pt-8 pb-14 gap-5 max-md:px-10'>
        <h6 className='text-dark-blue font-nunito font-bold text-xs md:text-xs text-center'>Home / About Us</h6>
        <h1 className='text-dark-blue font-nunito font-extrabold text-4xl md:text-4xl text-center'>About Us</h1>
        <p className='text-dark-blue font-nunito font-semibold text-sm text-center'>Empowering minds, nurturing wellness, and building a supportive community for mental health</p>
    </div>
    </>
  )
}

export default Header