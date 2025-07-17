import { faFacebookF, faInstagram, faLinkedinIn, faTiktok, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faCoffee, faExclamationCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <>
    <div className='my-22 flex flex-col lg:flex-row gap-4 w-full max-w-[1400px] mx-auto px-4'>
      <div className='bg-dark-blue rounded-3xl flex flex-col gap-4 px-4 py-10 w-full lg:w-1/3 text-center text-background'>
        <h1 className='font-nunito font-bold text-2xl lg:text-3xl capitalize'>Unlock efficency : <br/> download survey</h1>
        <p className='font-nunito font-bold text-sm px-4 lg:px-7'>Get our survey to learn how companies increased their efficiecy with Calmerry</p>
        <button className='bg-background text-dark-blue font-nunito rounded-full font-bold py-2 text-sm mx-4 lg:mx-10 my-3 hover:bg-dark-blue hover:border-[1.5px] hover:border-background hover:text-background cursor-pointer'>Donwload</button>
      </div>
      <div className='bg-dark-blue rounded-3xl flex flex-col items-start gap-4 px-4 lg:px-6 py-6 w-full lg:w-2/3 text-background'>
        <div className='flex flex-col lg:flex-row justify-between w-full gap-6 lg:gap-0'>
          <div>
            <div className='flex items-center'>
              <div className="relative w-13 h-13">
                <Image 
                  src="/logo.svg" 
                  alt="logo" 
                  fill
                  className='brightness-0 invert object-contain'
                  priority
                />
              </div>
              <h4 className='text-background font-[900] font-nunito text-2xl'>Calmerry</h4>
            </div>
            <p className='px-4 py-1 text-sm font-nunito'>1 (844) 740-2144 | toll-free</p>
            <p className='px-4 text-sm font-nunito'>team@calmerry.com</p>
          </div>
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-5 font-nunito'>
            <ul className='p-2'>
              <li className='py-1'><a href='/' className='hover:underline underline-offset-4 decoration-background hover:decoration-background transition-all duration-300'>Home</a></li>
              <li className='py-1'><a href='/AboutUs' className='hover:underline underline-offset-4 decoration-background hover:decoration-background transition-all duration-300'>About us</a></li>
              <li className='py-1'><a href='/Pricing' className='hover:underline underline-offset-4 decoration-background hover:decoration-background transition-all duration-300'>Pricing</a></li>
              <li className='py-1'><a href='/Contacts' className='hover:underline underline-offset-4 decoration-background hover:decoration-background transition-all duration-300'>Contacts</a></li>
            </ul>
            <ul className='p-2'>
              <li className='py-1'><a href='#' className='hover:underline underline-offset-4 decoration-background hover:decoration-background transition-all duration-300'>Careers</a></li>
              <li className='py-1'><a href='#' className='hover:underline underline-offset-4 decoration-background hover:decoration-background transition-all duration-300'>Blog</a></li>
              <li className='py-1'><a href='#' className='hover:underline underline-offset-4 decoration-background hover:decoration-background transition-all duration-300'>Privacy Policy</a></li>
            </ul>
          </div>
        </div>
        <div className='flex gap-3 px-4'>
          <div className='w-8 h-8 rounded-full bg-background flex justify-center items-center cursor-pointer p-2 hover:shadow-custom-background transition-all duration-300 ease-out'>
            <FontAwesomeIcon icon={faInstagram} className='text-dark-blue w-4 h-4' />
          </div>
          <div className='w-8 h-8 rounded-full bg-background flex justify-center items-center cursor-pointer p-2 hover:shadow-custom-background transition-all duration-300 ease-out'>
            <FontAwesomeIcon icon={faFacebookF} className='text-dark-blue w-4 h-4' />
          </div>
          <div className='w-8 h-8 rounded-full bg-background flex justify-center items-center cursor-pointer p-2 hover:shadow-custom-background transition-all duration-300 ease-out'>
            <FontAwesomeIcon icon={faTwitter} className='text-dark-blue w-4 h-4' />
          </div>
          <div className='w-8 h-8 rounded-full bg-background flex justify-center items-center cursor-pointer p-2 hover:shadow-custom-background transition-all duration-300 ease-out'>
            <FontAwesomeIcon icon={faLinkedinIn} className='text-dark-blue w-4 h-4' />
          </div>
          <div className='w-8 h-8 rounded-full bg-background flex justify-center items-center cursor-pointer p-2 hover:shadow-custom-background transition-all duration-300 ease-out'>
            <FontAwesomeIcon icon={faTiktok} className='text-dark-blue w-4 h-4' />
          </div>
        </div>
        <div className='mt-8 px-4 flex items-center gap-3 w-full md:w-2/3'>
          <FontAwesomeIcon icon={faExclamationCircle} className='text-background' />
          <p className='font-nunito text-sm'>If you are in a life-threatening situation, don't use this site. Call +1 (800) 273-8255 to get immediate help.</p>
        </div>
      </div>
    </div>
    </>
  )
}

export default Footer