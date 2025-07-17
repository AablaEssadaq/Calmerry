'use client'

import { CircleCheckBig } from 'lucide-react'
import React from 'react'

const Cards = () => {

  const cards = [
    {
      type: "BASIC",
      price: "Free",
      description: "Perfect for getting started with your mental wellness journey",
      Features: ["Access to 50+ self-care articles", "Basic mood tracking tools", "Community forum access", "Weekly wellness newsletter"],
      firstButton: "Get Started",
      secondButton: "Learn More"
    },
    {
      type: "PRO",
      price: "$19.99/Month",
      description: "Comprehensive support for your mental wellness goals",
      Features: ["Everything in Basic plan", "Unlimited article access", "Advanced mood & habit tracking", "Monthly group therapy sessions", "Personalized wellness plans", "Priority community support"],
      firstButton: "Get Started",
      secondButton: "Start 14 days free trial"
    },
    {
      type: "EXPERT",
      price: "$49.99/Month",
      description: "Complete mental wellness support with 1-on-1 guidance",
      Features: ["Everything in Pro plan", "4 individual therapy sessions/month", "24/7 crisis support hotline", "Dedicated wellness coach", "Custom meditation programs", "Family support resources"],
      firstButton: "Get Started",
      secondButton: "Schedule Consultation"
    }
  ]


  return (
    <>
      <section className='mt-18'>
        <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6'>
          {cards.map((value, index) => {
            return (
              <div key={index} className='relative bg-dark-blue rounded-4xl flex flex-col items-start gap-5 px-7 py-12 overflow-hidden shadow-custom-dark-blue hover:scale-105 hover:cursor-pointer transition-all duration-500 ease-out max-sm:mx-4 max-md:mx-10'>
                {/* Ribbon pour la carte du milieu */}
                {index === 1 && (
                  <div className="absolute top-4 -right-12 w-40 z-10 transform rotate-45">
                    <span className="block w-full bg-blue-secondary text-dark-blue font-bold text-[11px] text-center py-1 shadow-lg">
                      POPULAR
                    </span>
                  </div>
                )}
                <div className='bg-blue-secondary rounded-full w-18 py-1.5 flex justify-center items-center'>
                  <p className='font-nunito text-dark-blue font-bold text-xs'>{value.type}</p>
                </div>
                <h3 className='font-nunito text-background text-3xl font-bold'>{value.price}</h3>
                <p className='text-background font-nunito text-sm font-extralight'>{value.description}</p>
                <h6 className='text-background font-nunito text-sm font-semibold uppercase'>Features</h6>
                <div className='flex flex-col gap-3.5'>
                  {value.Features.map((feature, index) => {
                    return (
                      <li key={index} className='custom-bullet text-background font-nunito text-sm font-extralight'>{feature}</li>
                    )
                  })}
                </div>
                <button className='text-dark-blue bg-blue-secondary hover:cursor-pointer hover:shadow-custom-light-blue hover:scale-105 transition-all duration-500 ease-out font-nunito font-bold w-full py-2.5 mt-4 rounded-full'>
                  {value.firstButton}
                </button>
                <button className='text-background border-background border-[1.5px] hover:cursor-pointer hover:shadow-custom-light-blue hover:scale-105 transition-all duration-500 ease-out font-nunito font-bold w-full py-2.5 mt-2 rounded-full'>
                  {value.secondButton}
                </button>
              </div>
            )
          })}
        </div>

        <div className='mt-14 w-full flex flex-col items-center gap-4'>
          <p className='text-sm font-nunito text-dark-blue font-bold'>All plans include a 30-day money-back guarantee</p>
          <div className='flex flex-col sm:flex-row max-sm:items-start items-center max-sm:justify-start justify-center gap-4 sm:gap-14 w-full'>
            <div className='flex items-center justify-center gap-3'>
              <CircleCheckBig className='text-dark-blue' />
              <p className='text-dark-blue font-nunito font-bold text-sm'>Cancel anytime</p>
            </div>
            <div className='flex items-center justify-center gap-3'>
              <CircleCheckBig className='text-dark-blue' />
              <p className='text-dark-blue font-nunito font-bold text-sm'>No hidden fees</p>
            </div>
            <div className='flex items-center justify-center gap-3'>
              <CircleCheckBig className='text-dark-blue' />
              <p className='text-dark-blue font-nunito font-bold text-sm'>Secure payment processing</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Cards