'use client'

import { CircleCheckBig } from 'lucide-react'
import React from 'react'

const FreeTrial = () => {
  return (
    <>
    <div className='my-25 max-sm:mx-2 bg-blue-secondary rounded-3xl p-10 flex flex-col items-center justify-center gap-5'>
        <h1 className='text-dark-blue font-nunito font-bold text-3xl md:text-4xl text-center'>Jump in! <br/> Your 14-day free trial awaits</h1>
        <p className='text-dark-blue font-nunito font-medium text-center'>Connect 1 to 3 employees and see how it fits their needs.</p>
        <div className='flex flex-col md:flex-row items-center justify-center gap-4 w-full my-2'>
        <input type='text' placeholder='Type your email' className='bg-white rounded-full px-5 py-3 w-full md:w-1/3 text-sm focus:outline-none' />
        <button className='bg-dark-blue text-white font-nunito font-bold px-10 py-3 rounded-full text-sm w-full md:w-auto hover:cursor-pointer hover:shadow-custom-dark-blue hover:scale-105 transition-all duration-500 ease-out'>
            Get Started
        </button>
        </div>
        <div className='flex flex-col sm:flex-row max-sm:items-start items-center max-sm:justify-start justify-center gap-4 sm:gap-9 w-full'>
            <div className='flex items-center justify-center gap-3'>
            <CircleCheckBig className='text-dark-blue' />
            <p className='text-dark-blue font-nunito font-semibold text-sm'>No contract required</p>
            </div>
            <div className='flex items-center justify-center gap-3'>
            <CircleCheckBig className='text-dark-blue' />
            <p className='text-dark-blue font-nunito font-semibold text-sm'>Cancel anytime</p>
            </div>
            <div className='flex items-center justify-center gap-3'>
            <CircleCheckBig className='text-dark-blue' />
            <p className='text-dark-blue font-nunito font-semibold text-sm'>Full access</p>
            </div>
        </div>
    </div>
    </>
  )
}

export default FreeTrial