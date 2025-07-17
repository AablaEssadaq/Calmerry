'use client'

import React from 'react'

const FAQ = () => {

    const questions = [
        {
            question: "Can I switch plans anytime ?",
            answer: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect at your next billing cycle."
        },
        {
            question: "Are therapy sessions with licensed professionals ?",
            answer: " Absolutely. All our therapists are licensed mental health professionals with specialized training in their areas of expertise."
        },
        {
            question: "Is my information kept confidential ?",
            answer: "Yes, we follow strict HIPAA guidelines and use end-to-end encryption to protect your privacy and personal information."
        },
        {
            question: "What if I need immediate help ?",
            answer: "Premium members have access to our 24/7 crisis support hotline. All members can access emergency resources in our help center."
        },
        
    ]

    const [openIndex, setOpenIndex] = React.useState(null);

  return (
    <>
    <section className='bg-blue-secondary rounded-2xl flex flex-col items-center gap-3 mt-14 py-10'>
      <h1 className='text-dark-blue font-nunito font-extrabold text-4xl md:text-4xl text-center'>FAQ</h1>
      <p className='text-dark-blue font-nunito font-medium text-base text-center max-sm:px-4'>Get answers to common questions about our mental wellness plans</p>
      <div className='w-5/6 grid md:grid-cols-2 grid-cols-1 gap-4 items-start my-15'>
      {questions.map((item, idx) => (
  <div
    key={idx}
    className="rounded-xl transition-colors duration-300 bg-light-blue self-start hover:cursor-pointer"
  >
    <button
      onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
      className="w-full flex justify-between items-center px-6 py-3 gap-4 focus:outline-none bg-light-blue text-dark-blue rounded-2xl hover:cursor-pointer"
    >
      <span className="font-nunito font-semibold text-sm text-left">{item.question}</span>
      <span
        className={`transition-transform duration-300 text-dark-blue font-nunito text-2xl font-bold ${openIndex === idx ? "rotate-45" : ""}`}
      >
        +
      </span>
    </button>
    <div
      className={`overflow-hidden bg-light-blue rounded-2xl transition-all duration-500 px-6 ${openIndex === idx ? "max-h-40 py-3" : "max-h-0 py-0"}`}
    >
      <p className="text-sm font-semibold font-nunito text-dark-blue">{item.answer}</p>
    </div>
  </div>
))}
      </div>
    </section>
    </>
  )
}

export default FAQ