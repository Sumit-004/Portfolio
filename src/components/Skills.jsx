import React from 'react'
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { FaJs } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";




const Skills = () => {
  return (

    <div id="Skills" className='m-[1rem] flex flex-col md:flex-col items-center justify-center md:h-dvh h-auto md:ml-8 md:m-[2rem] p-4'>
      <h2 className="text-4xl font-bold mb-6 text-zinc-200">Skills</h2>
      <div className="w-full md:w-1/2 md:h-dvh mt-20 md:mt-20">
        <div className='flex flex-col md:flex-row md:items-center md:justify-center gap-8 md:gap-14'>
          <h4 className='font-bold text-gray-100 text-4xl md:text-4xl sm:6xl flex items-center gap-2'><FaHtml5 className='text-red-800' />HTML</h4>
          <h4 className='font-bold text-gray-100 text-4xl md:text-4xl sm:6xl flex items-center gap-2'><FaCss3 className='text-blue-800' />CSS</h4>
          <h4 className='font-bold text-gray-100 text-4xl md:text-4xl sm:6xl flex items-center gap-2'><FaJs className='text-yellow-500' />JavaScript</h4>
        </div>
        <div className='flex flex-col md:flex-row md:items-center md:justify-center gap-8 md:gap-14 mt-6 md:mt-10'>
          <h4 className='font-bold text-gray-100 text-4xl md:text-4xl sm:6xl flex items-center gap-2'><FaReact className='text-blue-400' />React</h4>
          <h4 className='font-bold text-gray-100 text-4xl md:text-4xl sm:6xl flex items-center gap-2'><SiTailwindcss className='text-blue-600' />Tailwind</h4>
        </div>
      </div>
      <div className='w-full md:w-1/2 md:h-dvh flex justify-center mt-10 md:mt-0'>
        <div>
          <ul className="text-gray-100 text-[1.2rem] md:text-[1.5rem] space-y-2">
            <li>**Frontend Development** <br />
              - HTML5, CSS3 (Flexbox, Grid), JavaScript (ES6+), React (Hooks, Context API)</li>
            <li>**Tools & Technologies** <br />
              - Git & GitHub, npm/yarn, VS Code, Chrome DevTools, Responsive Design
            </li>
          </ul>
        </div>
      </div>
    </div>

  )
}

export default Skills
