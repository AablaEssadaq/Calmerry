import React from 'react'
import Image from 'next/image'

const ArticleCard = ({ photo, title, author, date, category, duration }) => {
  return (
    <>
       <div className='bg-white rounded-2xl p-5 flex flex-col gap-3 hover:cursor-pointer hover:scale-105 transition-all duration-400 ease-out'>
          <div className='relative w-full aspect-[4/3] overflow-hidden rounded-2xl'>
            <Image 
              src={photo} 
              alt="article picture" 
              fill
              className='object-cover hover:scale-105 transform transition-all duration-300'
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
          <h1 className='capitalize text-dark-blue font-nunito font-extrabold'>{title}</h1>
          <div className='flex justify-between items-center'>
            <p className='capitalize text-dark-blue font-nunito font-semibold'>{author}</p>
            <p className='capitalize text-dark-blue font-nunito font-semibold'>{date}</p>
          </div>
          <div className='flex justify-between items-center mt-8'>
            <p className='capitalize text-dark-blue bg-light-blue rounded-full px-6 py-1 font-nunito font-semibold'>{category}</p>
            <p className='text-dark-blue font-nunito font-semibold'>{duration}</p>
          </div>
       </div>
    </>
  )
}

export default ArticleCard