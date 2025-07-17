'use client'

import React from 'react'
import Progress from './ProgressBar';

const Expertise = () => {

  const expertiseData = [
    { title: "Anxiety & Stress Management", percentage: 95 },
    { title: "Depression Support", percentage: 90 },
    { title: "Mindfulness & Meditation", percentage: 88 },
    { title: "Relationship Wellness", percentage: 85 },
  ];

  const statsData = [
    { value: "20+", label: "Lives Touched" },
    { value: "1,200+", label: "Articles Published" },
    { value: "25+", label: "Expert Contributors" },
    { value: "98%", label: "Satisfaction Rate" },
  ];

  return (
    <>
    <div className='flex flex-col md:flex-row max-md:gap-15 md:gap-2 w-full max-md:mt-16 mb-20'>
      <div className='w-full max-sm:px-2 max-md:px-7 md:w-1/2 flex flex-col justify-start gap-2 text-center md:text-left'>
        <h1 className='text-dark-blue font-nunito font-extrabold text-2xl lg:text-3xl'>Our Expertise</h1>
        <p className='text-dark-blue font-nunito font-medium text-sm'>Our team specializes in various aspects of mental health and wellness, ensuring comprehensive support for our community.</p>
          <div className="mt-6 space-y-5">
                {expertiseData.map((item, index) => (
                  <div key={index} className="space-y-1">
                    <div className="font-bold text-[#053247] max-md:text-sm text-xs tracking-[0] leading-normal font-nunito">
                        {item.title}
                    </div>
                    <div className="relative">
                      <Progress
                        value={item.percentage}
                      />
                      <span
                        className={`absolute -top-6 font-bold text-dark-blue text-xs tracking-[0] leading-normal font-nunito`}
                        style={{ left: `${item.percentage}%`, transform: 'translateX(-50%)' }}
                      >
                        {item.percentage}%
                      </span>
                    </div>
                  </div>
                ))}
          </div>
      </div>
      <div className='w-full md:w-1/2 flex items-center justify-center'>
        <div className='grid grid-cols-2 md:gap-5 max-md:gap-15 items-center w-full h-full'>
          {statsData.map((item,index) => (
            <div key={index} className="text-center">
              <h1 className="text-dark-blue font-nunito font-extrabold text-3xl lg:text-4xl">{item.value}</h1>
              <p className="text-dark-blue font-nunito font-semibold text-sm">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
    </>
  )
}

export default Expertise