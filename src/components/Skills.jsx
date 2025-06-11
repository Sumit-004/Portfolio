import React from 'react'
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { FaJs } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa";
import { FaLaptopCode } from "react-icons/fa";
import { FaTools } from "react-icons/fa";



const skill = [{
  icon: <FaHtml5 className='md:text-4xl text-2xl text-red-700' />,
  title: "HTML",
},
{
  icon: <FaCss3 className='md:text-4xl text-2xl text-blue-700' />,
  title: "CSS",
},
{
  icon: <FaJs className='md:text-4xl text-2xl text-yellow-500' />,
  title: "JAVASCRIPT",
},
{
  icon: <SiTailwindcss className='md:text-4xl text-2xl text-blue-500' />,
  title: "TAILWIND",
},
{
  icon: <FaBootstrap className='md:text-4xl text-2xl text-purple-700' />,
  title: "BOOTSTRAP",
},
{
  icon: <FaReact className='md:text-4xl text-2xl text-blue-400' />,
  title: "REACT",
}
];



const Skills = () => {
  return (

    <div id="Skills" className='m-[1rem] flex flex-col md:flex-col items-center justify-center md:h-dvh h-auto md:ml-8 md:m-[2rem] p-4'>
      <h2 className="md:text-4xl text-3xl font-bold mb-12 md:mb-18 text-zinc-200">Technical Skills</h2>
      <div className="w-full md:w-1/2 md:h-dvh flex justify-center">
        <div className='grid md:grid-cols-3 md:grid-rows-2  grid-cols-2 grid-rows-3 md:gap-x-20 gap-x-5 md:gap-y-8 gap-y-5'>

          {skill.map((skill, index) => (
            <div key={index}
              data-aos="fade-up"
              data-aos-duration="800"
              className='bg-slate-800 h-[60px] w-[130px] md:h-[90px] md:w-[220px] rounded-xl md:rounded-2xl md:text-2xl text-[15px] flex md:gap-4 gap-1 items-center justify-center text-white hover:scale-105 duration-300 transition-all cursor-pointer'>{skill.icon}{skill.title}</div>
          ))}
        </div>
      </div>
      <div className='w-full md:w-fit p-8 rounded-2xl md:h-dvh flex justify-center my-5 md:mt-0  bg-slate-700'>
        <div className='flex flex-col  gap-3 text-gray-200'>
          {/* <ul className="text-slate-100 text-[1.2rem] md:text-[1.5rem] space-y-2"> */}
          <h1 className='flex gap-4 items-center md:text-3xl text-2xl font-semibold text-gray-900'><FaLaptopCode className=' md:text-3xl text-3xl'/> Frontend Development </h1>
          <p className='md:text-xl text-[15px] text-center'>- HTML5, CSS3 (Flexbox, Grid), JavaScript (ES6+), React (Hooks, Context API)</p>
          <h1 className='flex gap-4 items-center md:text-3xl text-2xl font-semibold text-gray-900'><FaTools className=' md:text-3xl text-3xl'/>Tools & Technologies</h1>
          <p className='md:text-xl text-[15px] text-center'>- Git & GitHub, npm/yarn, VS Code, Chrome DevTools, Responsive Design</p>

        </div>
      </div>
    </div>

  )
}

export default Skills
