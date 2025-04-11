import React from 'react'
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { FaJs } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";




const Skills = () => {
  return (
    
      <div id="Skills" className='bg-[url(./assets/header.png)] object-cover ml-8 h-dvh m-[2rem] rounded-2xl flex items-center justify-center'>
        <div className="w-1/2 h-dvh mt-40">
          <div className=' flex items-center justify-center gap-14'>
            <h4 className='font-bold'><FaHtml5 className='text-red-800 text-7xl' />HTML</h4>
            <h4 className='font-bold'><FaCss3 className='text-blue-800 text-7xl' />CSS</h4>
            <h4 className='font-bold'><FaJs className='text-yellow-500 text-7xl' />JavaScript</h4>
          </div>
          <div className=' flex items-center justify-center gap-14 mt-10'>
            <h4 className='font-bold'><FaReact className='text-blue-400 text-7xl' />ReactJS</h4>
            <h4 className='font-bold'><SiTailwindcss  className='text-blue-600 text-7xl' />TailwindCSS</h4>
          </div>
        </div>
        <div className=' w-1/2 h-dvh'>
          <div>
            
          </div>
        </div>
      </div>
    
  )
}

export default Skills
