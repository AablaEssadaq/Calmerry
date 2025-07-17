import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { LucidePlay, Play, PlayCircle, PlayIcon, ChevronLeft, ChevronRight } from 'lucide-react'
import Image from 'next/image'

const VideoCard = ({ thumbnail, title, videoId, host }) => {
  return (
    <div className="relative rounded-3xl overflow-hidden shadow-lg cursor-pointer group h-[430px]">
      <div className="relative w-full h-full">
        <Image 
          src={thumbnail} 
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 280px, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
          priority={videoId === "VIDEO_ID_1"}
        />
      </div>
      <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
        <div className="absolute top-0 left-0 right-0 py-6 px-3 text-center">
          <h3 className="font-nunito font-semibold text-sm text-white line-clamp-2 mb-1">{title}</h3>
          <p className="font-nunito font-medium text-white text-xs">{host}</p>
        </div>
      </div>
      <div className="absolute inset-0 flex items-center justify-center opacity-100 transition-opacity">
        <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
          <LucidePlay className="w-4 h-4 text-dark-blue" fill='#053247'/>
        </div>
      </div>
    </div>
  )
}

const Insights = () => {
  const videos = [
    {
      id: 1,
      title: "Ways to improve productivity ?",
      thumbnail: "/insights/_Man-Posing-In-Office_ by-Stocksy-Contributor _Studio-Firma_.jpeg",
      videoId: "VIDEO_ID_1",
      host:  "Dr Jared Stewart"
    },
    {
      id: 2,
      title: "Top 10 tips to reduce Stress ",
      thumbnail: "/insights/HET-MEESTE-HALEN-UIT-DE-HEADSHOTS-VAN-JE-PERSONEEL.jpeg",
      videoId: "VIDEO_ID_2",
      host:  "Dr David Jacobsen"

    },
    {
      id: 3,
      title: "Interview with CEO Olffi",
      thumbnail: "/insights/Portfolio-Personal-Branding-Photography--Bruna-Rico-Photography.jpeg",
      videoId: "VIDEO_ID_3",
      host:  "Calmerry"

    },
    {
      id: 4,
      title: "How to choose a therapist ?",
      thumbnail: "/insights/télécharger.jpeg",
      videoId: "VIDEO_ID_4",
      host:  "Calmerry"

    },
    {
      id: 5,
      title: "Building Mental Resilience in the Workplace",
      thumbnail: "/insights/télécharger-1.jpeg",
      videoId: "VIDEO_ID_5",
      host: "Dr Jeff Raymond"
    },
    {
      id: 6,
      title: "The Science Behind Better Sleep",
      thumbnail: "/insights/télécharger-2.jpeg",
      videoId: "VIDEO_ID_6",
      host: "Dr Mark Evans"
    }
    
  ]

  return (
    <div className='my-20'>
      <h1 className='text-dark-blue font-nunito font-bold text-3xl md:text-4xl text-center mb-14'>
        Mental health insights
      </h1>
      
      <div className="relative max-sm:w-[280px] max-w-[1400px] mx-auto">
        <Swiper
          modules={[Navigation]}
          spaceBetween={20}
          slidesPerView={1}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
            1280: {
              slidesPerView: 4,
            },
          }}
          className="pb-12"
        >
          <div className="swiper-button-prev !w-6 !h-6 !bg-white !rounded-full !flex !items-center !justify-center !shadow-lg after:!content-none">
            <ChevronLeft className="w-4 h-4 text-dark-blue" />
          </div>
          <div className="swiper-button-next !w-6 !h-6 !bg-white !rounded-full !flex !items-center !justify-center !shadow-lg after:!content-none">
            <ChevronRight className="w-4 h-4 text-dark-blue" />
          </div>
          {videos.map((video) => (
            <SwiperSlide key={video.id}>
              <VideoCard
                thumbnail={video.thumbnail}
                title={video.title}
                videoId={video.videoId}
                host={video.host}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className='flex justify-center items-center mt-10'>
          <button className='border-dark-blue text-dark-blue hover:bg-dark-blue hover:text-background hover:cursor-pointer transition-all duration-300 border-[1.5px] font-nunito font-bold max-sm:px-15 px-30 py-2 rounded-full'>
            View more
          </button>
        </div>
    </div>
  )
}

export default Insights