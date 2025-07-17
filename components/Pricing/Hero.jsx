'use client'

import { BookOpen, Heart, Users, Video } from 'lucide-react'
import React from 'react'

const Hero = () => {

    const perks = [
        {   icon: BookOpen,
            name: "Self-Care Resources"
        },
        {   icon: Users,  
            name: "Community Access"
        },
        {   icon: Heart,
            name: "Wellness Tracking"
        },
        {   icon: Video,
            name: "Expert Sessions"
        }
    ]
  return (
    <>
    <section className='flex flex-col items-center gap-4 mt-15'>
      <h1 className='text-dark-blue font-nunito font-extrabold text-4xl md:text-[42px] text-center'>Pricing</h1>
      <p className='text-dark-blue font-nunito font-medium text-base text-center px-3 md:px-10 lg:px-40'>Choose the perfect plan for your mental wellness journey. All plans include access to our supportive community and evidence-based resources.</p>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4 w-full mt-4 sm:mt-8 justify-center justify-items-center'>
      {perks.map((value, index) => {
            const IconComponent = value.icon;
            return (
                <div className='flex flex-col items-center justify-center gap-2 sm:flex-row sm:gap-3.5 sm:items-center max-lg:w-1/2' key={index}>
                    <div className='bg-blue-secondary w-13 h-13 rounded-xl flex justify-center items-center flex-shrink-0'>
                        <IconComponent className="w-6 h-6 text-dark-blue" />
                    </div>
                    <p className='text-dark-blue font-nunito font-semibold text-base max-sm:text-center sm:flex-1 sm:leading-tight'>{value.name}</p>
                </div>
            );
        })}
      </div>
    </section>
    </>
  )
}

export default Hero