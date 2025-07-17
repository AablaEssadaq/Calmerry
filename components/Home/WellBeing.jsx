import React from 'react'
import Image from 'next/image'

const WellBeing = () => {
  return (
    <>
    <div className='mt-30 mb-10 text-center flex flex-col justify-center items-center'>
      <h1 className='text-dark-blue font-nunito font-bold text-3xl md:text-4xl text-center mb-3'>Enhancing Well-being</h1>
      <p className='text-dark-blue font-nunito font-medium text-center w-full md:w-3/5'>Experience the power of self-reflection and emotional awareness with our range of free digital tools.</p>
    </div>
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-5 max-w-[1200px] mx-auto px-4'>
    {tools.map((tool, index) => (
        <div key={index} className='flex flex-col items-center md:items-start gap-2 max-w-[280px] mx-auto md:mx-0'>
             <div className="relative w-full aspect-square overflow-hidden rounded-3xl mb-1">
                <Image 
                  src={tool.img} 
                  alt={tool.name} 
                  fill
                  className='object-cover hover:scale-105 transform transition-all duration-300'
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  priority={index === 0}
                />
             </div>
             <p className='capitalize text-dark-blue font-nunito font-bold text-xl md:text-lg'>{tool.name}</p>
             <p className='text-dark-blue font-nunito font-base'>{tool.description}</p>
             <a href="#" className='underline underline-offset-4 text-dark-blue font-nunito font-extrabold mt-2 hover:-translate-y-1 transition-all duration-300'>Download</a>
        </div>    
    ))}
    </div>
    </>
  )
}

const tools = [
    { img : "/tools/télécharger-(2).jpeg",
      name: "Mood tracker",
      description:"Our user-friendly interface helps you record and monitor emotions, identify trends, and make positive changes.",
    },
    { img : "/tools/télécharger-(3).jpeg",
      name: "Journaling companion",
      description:"Explore therapeutic benefits, express yourself, and foster personal growth. Write, organize, and reflect with ease.",
    },
    { img : "/tools/télécharger-(4).jpeg",
      name: "Guided meditations",
      description:"Find stress relief, improved focus, and better sleep. Soothing audio sessions to nourish mind, body, and soul.",
    },
    { img : "/tools/télécharger-(5).jpeg",
      name: "Self-Care planner",
      description:"Organize activities for body, mind, and spirit. Empower yourself to establish healthy routines and maintain balance. ",
    },
]

export default WellBeing