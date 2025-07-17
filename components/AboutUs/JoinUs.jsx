'use client'
import React from 'react'

function useIsMobile(breakpoint = 768) {
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth < breakpoint);
    }
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [breakpoint]);

  return isMobile;
}

const JoinUs = () => {
  const isMobile = useIsMobile();

  return (
    <>
      <div
        style={
          isMobile
            ? { minHeight: "400px", width: "100%", margin: "65px 0px 0px" }
            : { backgroundImage: "url('/youssef-naddam-iJ2IG8ckCpA-unsplash 1.png')", backgroundSize: "cover", backgroundPosition: "center", minHeight: "400px", width: "100%", margin: "65px 0px 0px" }
        }
        className="flex flex-col items-center text-center gap-3 py-15 max-md:px-4 bg-light-blue"
      >
        <h3 className='text-dark-blue font-nunito font-extrabold text-base md:text-xl'>Join Our Community</h3>
        <h1 className='text-dark-blue font-nunito font-extrabold text-3xl lg:text-4xl mt-1'>Ready To Start Your Wellness Journey?</h1>
        <p className='text-dark-blue font-nunito font-semibold text-sm text-center'>Discover resources, connect with experts, and take the first step toward better mental health today.</p>
        <div className='lg:my-4 md:my-2 my-5'>
          <button
          style={
            isMobile
            ? { backgroundColor: '#053247', color: '#F8F8F6' }
            : { backgroundColor: '#F8F8F6',  color: '#053247'}
          }
          className='font-nunito font-bold px-14 py-2.5 mt-2 rounded-full text-sm w-full md:w-auto hover:shadow-custom-background hover:cursor-pointer hover:scale-105 transition-all duration-500 ease-out'>
            Contact Us
          </button>
        </div>
      </div>
    </>
  )
}

export default JoinUs