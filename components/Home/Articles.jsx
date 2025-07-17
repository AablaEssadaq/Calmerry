import React from 'react'
import ArticleCard from './ArticleCard'

const Articles = ({ activeFilter }) => {
  const articles = [
    {
      photo: "/articles/2570059d538eff2a9bf392feb8a4da18.jpg",
      title: "Workplace mental health : 5 ways to support employee wellness",
      author: "kate skurat",
      date: "sep 11, 2023",
      category: "self-care",
      duration: "7 min"
    },
    {
      photo: "/articles/pexels-alex-green-5699420.jpg",
      title: "Work burnout : what can you do if vacation didn't help",
      author: "maria romaszkan",
      date: "nov 22, 2022",
      category: "burnout",
      duration: "11 min"
    },
    {
      photo: "/articles/pexels-cottonbro-4100666.jpg",
      title: "spotting toxic productivity and breaking the cycle",
      author: "calmerry",
      date: "aug 25, 2023",
      category: "well-being",
      duration: "7 min"
    },
    {
      photo: "/articles/pexels-tima-miroshnichenko-5336896.jpg",
      title: "Integrative therapy : How it works, and when it's used",
      author: "dr. jenni jacobsen",
      date: "sep 20, 2023",
      category: "therapy",
      duration: "5 min"
    },
    {
      photo: "/articles/pexels-cottonbro-4100663.jpg",
      title: "Humanistic therapy : types, techniques, and effectiveness",
      author: "dr. dawn ferrara",
      date: "aug 25, 2023",
      category: "therapy",
      duration: "13 min"
    },
    {
      photo: "/articles/pexels-cottonbro-4098353.jpg",
      title: "how interpersonal therapy works and what to expect",
      author: "dr. sahra jones",
      date: "aug 14, 2023",
      category: "therapy",
      duration: "6 min"
    }
  ]

  const filteredArticles = activeFilter === 'all' 
    ? articles 
    : articles.filter(article => article.category.toLowerCase() === activeFilter)

  return (
    <>
      <div className='my-20 max-sm:mx-2'>
        <h1 className='text-dark-blue font-nunito font-bold text-3xl lg:text-4xl text-center'>Featured articles</h1>
        <div className='mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
          {filteredArticles.map((article, index) => (
            <ArticleCard
              key={index}
              photo={article.photo}
              title={article.title}
              author={article.author}
              date={article.date}
              category={article.category}
              duration={article.duration}
            />
          ))}
        </div>
        <div className='flex justify-center items-center mt-10'>
          <button className='border-dark-blue text-dark-blue hover:bg-dark-blue hover:text-background hover:cursor-pointer transition-all duration-300 border-[1.5px] font-nunito font-bold max-sm:px-15 px-30 py-2 rounded-full'>
            View more
          </button>
        </div>
      </div>
    </>
  )
}

export default Articles