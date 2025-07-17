import React from 'react'

const Hero = ({ activeFilter, setActiveFilter }) => {
  return (
    <>
      <section className='flex flex-col items-center gap-3 my-5'>
        <h1 className='text-dark-blue text-center font-nunito max-sm:text-3xl md:text-4xl font-bold mt-5'>Calmerry Blog</h1>
        <p className='text-dark-blue text-center font-nunito font-medium'>All the latest news, updates, and announcements from us </p>
         
        <div className='flex flex-col lg:flex-row justify-between items-center gap-4 mt-8'>
           {/* Version mobile */}
           <div className='flex flex-col items-center gap-4 lg:hidden w-full'>
             <button 
               onClick={() => setActiveFilter('all')}
               className={`px-10 py-1 ${activeFilter === 'all' ? 'bg-dark-blue text-white' : 'bg-white text-dark-blue'} font-nunito font-bold rounded-full cursor-pointer hover:border-dark-blue hover:border-[1.5px]`}
             >
               All
             </button>
             <div className='flex flex-wrap justify-center gap-4'>
               {filters.map((filter, index) => (
                 <button
                   key={index}
                   onClick={() => setActiveFilter(filter.toLowerCase())}
                   className={`px-4 md:px-5 py-1 border-dark-blue ${activeFilter === filter.toLowerCase() ? 'bg-dark-blue text-white' : 'text-dark-blue'} font-nunito font-bold rounded-full border-[1.5px] whitespace-nowrap cursor-pointer hover:bg-dark-blue hover:text-background`}
                 >
                   {filter}
                 </button>
               ))}
             </div>
             <button
             onClick={() => setActiveFilter('all')}
             className='text-dark-blue font-nunito font-bold whitespace-nowrap cursor-pointer'>
               See all
             </button>
           </div>

           {/* Version desktop */}
           <div className='hidden lg:flex justify-between items-center gap-4 w-full'>
             <button 
               onClick={() => setActiveFilter('all')}
               className={`px-10 py-1 ${activeFilter === 'all' ? 'bg-dark-blue text-white' : 'bg-white text-dark-blue'} font-nunito font-bold rounded-full cursor-pointer hover:border-dark-blue hover:border-[1.5px]`}
             >
               All
             </button>
             <div className='flex flex-wrap lg:flex-nowrap gap-4 justify-center lg:justify-start'>
               {filters.map((filter, index) => (
                 <button
                   key={index}
                   onClick={() => setActiveFilter(filter.toLowerCase())}
                   className={`px-4 md:px-5 py-1 border-dark-blue ${activeFilter === filter.toLowerCase() ? 'bg-dark-blue text-white' : 'text-dark-blue'} font-nunito font-bold rounded-full border-[1.5px] whitespace-nowrap cursor-pointer hover:bg-dark-blue hover:text-background`}
                 >
                   {filter}
                 </button>
               ))}
             </div>
             <button 
             onClick={() => setActiveFilter('all')}
             className='text-dark-blue font-nunito font-bold whitespace-nowrap cursor-pointer'>
               See all
             </button>
           </div>
        </div>
      </section>
    </>
  )
}

const filters = [
    "Burnout",
    "Self-care",
    "Therapy",
    "Well-being"
]

export default Hero