import React from 'react'
import { projects } from '../../constants'
const Work = () => {
  return (
    <section id='work' 
    className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[16vw] font-sans bg-skills-gradient "
    >
{/* Section title */}
<div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">Project</h2>
        <div className="w-32 h-1 bg-[#8245ec] mx-auto mt-4" />
        <p className="text-gray-400 mt-4 text-lg font-semibold">
        A portfolio of projects I’ve worked on, demonstrating my skills and experience as a beginner.
        </p>
      </div>

      {/* Project grid */}
      
      <div className='grid gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>

      {projects.map((project) => {
        <div
        key={project.id}
        className='border border-white bg-gray-900 backdrop-blur-md rounded-2xl shadow-2xl overflow-hidden cursor-pointer hover:shadow-purple-500/50 hover:-translate-y-2 transition-transform duration-300'
        >
<div>
  <img src={project.image} alt={project.title}
  className='w-full width-48 object-cover rounded-xl' />
  
</div>

        </div>
      })}

      </div>

    </section>

  )
  }

export default Work
