'use client'
import React from 'react'
import { Heart, Users, BookOpen, Award } from 'lucide-react'

const Values = () => {

    const valuesData = [
        {
          title: "Compassion",
          description:
            "We approach every interaction with empathy, understanding, and genuine care for each person's unique journey.",
          icon: Heart,
        },
        {
          title: "Community",
          description:
            "Building supportive connections and fostering a sense of belonging where everyone feels heard and valued.",
          icon: Users,
        },
        {
          title: "Education",
          description:
            "Providing evidence-based information and practical tools to empower informed decisions about mental health.",
          icon: BookOpen,
        },
        {
          title: "Excellence",
          description:
            "Maintaining the highest standards in content quality, professional expertise, and user experience.",
          icon: Award,
        },
      ];


  return (
    <>
    <div className='w-full bg-blue-secondary rounded-[30px] flex flex-col justify-center items-center gap-2 max-md:px-5'>
     <h1 className='text-dark-blue font-nunito font-extrabold text-3xl md:text-4xl mt-12'>Our Values</h1>
     <p className='text-dark-blue font-nunito font-medium text-sm text-center'>These principles guide everything we do and shape how we serve our community</p>
     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mx-8 my-9">
                {valuesData.map((value, index) => {
                  const IconComponent = value.icon;
                  return (
                    <div
                      key={index}
                      className="flex flex-col items-center text-center"
                    >
                      <div className="w-18 h-18 bg-light-blue rounded-full flex items-center justify-center mb-3">
                        <IconComponent className="w-7 h-7 text-dark-blue" />
                      </div>
                      <h3 className="font-bold text-dark-blue text-lg tracking-[0] leading-[1.4] mb-2 font-nunito">
                        {value.title}
                      </h3>
                      <p className="font-normal text-dark-blue text-sm text-center tracking-[0] leading-normal font-nunito">
                        {value.description}
                      </p>
                    </div>
                  );
                })}
              </div>
    </div>
    </>
  )
}

export default Values