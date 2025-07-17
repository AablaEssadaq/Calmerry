'use client'
import React from 'react'

const Hero = () => {
  return (
    <>
    <div className='flex flex-col md:flex-row gap-2 w-full my-8 md:my-20'>
      <div className='w-full md:w-1/2 md:pr-3 lg:pr-6 order-2 md:order-1'>
        <img src="/télécharger.jpeg" alt="hero" className='w-full h-80 md:h-90 lg:h-full object-cover' />    
      </div>
      <div className='w-full md:w-1/2 flex flex-col justify-start gap-3 pt-4 md:pl-6 order-1 md:order-2 text-center md:text-left max-sm:px-2' >
         <h6 className='text-dark-blue font-nunito font-bold text-sm underline underline-offset-1'>About Us</h6>
         <h1 className='text-dark-blue font-nunito font-extrabold text-2xl lg:text-3xl'>We Believe Everyone Deserves Mental Wellness</h1>
         <p className='text-dark-blue font-nunito font-medium text-sm lg:mt-2'>Calmerry is a mental health platform that blends evidence-based therapy with modern technology to provide accessible, understandable, and actionable support. Founded by licensed professionals and wellness advocates, Calmerry offers a range of resources—from self-care tools to professional therapy—tailored to support individuals at every stage of their wellness journey.</p>
         <div className='lg:my-4 md:my-2 my-5'>
           <button className='bg-blue-secondary text-dark-blue font-nunito font-bold px-14 py-2.5 rounded-full text-sm w-full md:w-auto hover:shadow-custom-light-blue hover:cursor-pointer hover:scale-105 transition-all duration-500 ease-out'>
            Contact Us
           </button>
         </div>
      </div>
    </div>
    </>
  )
}

export default Hero