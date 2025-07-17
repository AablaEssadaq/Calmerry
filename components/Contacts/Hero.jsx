'use client'

import { Mail, MapPin, Phone } from 'lucide-react'
import React from 'react'
import Footer from '../Footer'

const Hero = () => {

    const infos = [
        {icon: Phone,
         value: "1 (844) 740-2144"   
        },
        {icon: Mail,
         value: "team@calmerry.com"   
        },
        {icon: MapPin,
        value: "California, USA"   
        },   
    ]
  return (
    <>
    <section className='absolute top-0 left-0 w-full h-[75vh] -z-10 bg-light-blue flex flex-col items-center gap-4 py-30'>
    <h1 className='text-dark-blue font-nunito font-extrabold text-4xl md:text-[42px] text-center'>Get In Touch</h1>
    <p className='text-dark-blue font-nunito font-medium text-base text-center px-8 md:px-10 lg:px-40'>Thanks for stopping by! Whether you have a question, comment, or just want to say hi, don’t be a stranger. We’re here to help, and we love connecting with  our community.</p>
    <div className="max-sm:mx-6 w-[80vw] md:w-[80vw] bg-white rounded-2xl flex flex-col lg:flex-row p-2 gap-6 mt-6 z-20 shadow-md">
    {/* Info Column */}
    <div className="relative overflow-hidden w-full lg:w-1/3 bg-blue-secondary rounded-xl flex flex-col justify-start py-8 px-4 md:py-10 md:px-6 mb-4 md:mb-0">
      <h1 className="font-nunito text-dark-blue font-extrabold text-lg md:text-xl">Contact Information</h1>
      <p className="text-dark-blue font-nunito font-medium text-sm mt-2">Drop us a line or use the contact form below to get in touch</p>
      <div className="mt-6">
        {infos.map((info, index) => {
          const IconComponent = info.icon;
          return (
            <div key={index} className="flex gap-3 justify-start items-center my-4">
              <IconComponent className="w-5 h-5 text-dark-blue" />
              <p className="font-nunito text-dark-blue font-bold text-sm">{info.value}</p>
            </div>
          );
        })}
      </div>
      <div className="absolute -right-8 -bottom-7 h-24 w-24 md:h-35 md:w-35 rounded-full bg-gradient-to-r from-white from-0% to-blue-secondary to-100% rotate-[-34] opacity-70"></div>
    </div>
    <div className="w-full md:w-[90%] lg:w-2/3 flex justify-center mx-2 md:mx-7 lg:mx-12 my-6 md:my-10 gap-4">
      <form action="/" className="w-full flex flex-col gap-6">
        <div className="flex flex-col md:flex-row w-full gap-4  md:gap-x-10">
          <div className="flex flex-col gap-1 w-[95%] md:w-1/2">
            <label htmlFor="name" className="font-nunito text-dark-blue opacity-60 font-extrabold text-sm">Your Name</label>
            <input type="text" name="name" id="name" className="border-b-2 border-b-[#D9D9D9] focus:outline-none" />
          </div>
          <div className="flex flex-col gap-1 w-[95%] md:w-1/2">
            <label htmlFor="email" className="font-nunito text-dark-blue opacity-60 font-extrabold text-sm">Your Email</label>
            <input type="text" name="email" id="email" className="border-b-2 border-b-[#D9D9D9] focus:outline-none" />
          </div>
        </div>
        <div className="flex flex-col gap-1 w-full max-md:w-[95%]">
          <label htmlFor="subject" className="font-nunito text-dark-blue opacity-60 font-extrabold text-sm">Subject</label>
          <input type="text" name="subject" id="subject" className="border-b-2 border-b-[#D9D9D9] focus:outline-none" />
        </div>
        <div className="flex flex-col gap-1 w-full max-md:w-[95%]">
          <label htmlFor="message" className="font-nunito text-dark-blue opacity-60 font-extrabold text-sm">Message</label>
          <textarea
            name="message"
            id="message"
            rows={3}
            className="border-b-2 border-b-[#D9D9D9] font-nunito font-bold text-gray-500 text-sm p-3 resize-none w-full px-0 focus:outline-none"
            placeholder="Write here your message"
          />
        </div>
        <div className='max-lg:flex max-lg:justify-center'>
          <button type="submit" className="text-dark-blue bg-blue-secondary hover:cursor-pointer hover:shadow-custom-light-blue hover:scale-105 transition-all duration-500 ease-out font-nunito font-bold px-9 py-2.5 rounded-full text-sm">
            Send Message
          </button>
        </div>
      </form>
    </div>
    </div>
      <div className='mx-6 max-sm:my-1 my-9 md:mx-15 lg:mx-25 md:mt-1 md:mb-6'>
      <Footer/>
      </div>
    </section>
    </>
  )
}

export default Hero