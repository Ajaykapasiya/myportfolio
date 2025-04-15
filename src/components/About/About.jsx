import React from 'react'

const About = () => {
  return (
   <section
   id='about'
   className='py-4 px-[7vw] md:px-[20vw] lg:px-[20vw] font-sans mt-16 md:mt-24 lg:mt-32'
   >
    <div className='flex flex-col-reverse md:flex-row justify-between items-center'>
      {/* left side */ }
      
      <div className='md:w-1/2 text-center md:text-left mt-8 md:mt-0'></div>

      {/* Greeting */ }
      <h1 className='text-3xl sm:text-5xl md:text-6xl font-bold text-white'>
        Hi, I am
      </h1>
    </div>

   </section>
  )
}

export default About
