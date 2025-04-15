import React from 'react'
import pro1 from '../assets/qrproject.png'
import pro2 from '../assets/gIcon.png'
import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const projects = [
    {
      title: "QR Code Generator",
      description: "This Website generates a QR code based on the inputted text or URL.",
      tags: ["React", "API", "JavaScript"],
      github: "https://github.com/Sumit-004/QR-Generator",
      demo: "https://yourportfolio.com",
      image: pro1,
    },
    {
      title: "Rock, Paper, Scissors Game",
      description: "This is a simple Rock , Paper , Scissors game made with React",
      tags: ["React", "API", "Tailwind"],
      github: "https://github.com/Sumit-004/Rock-Paper-Scissor-Game",
      demo: "https://weather-demo.com",
      image: pro2,
    },
    // Add more projects here
  ];
  
const style = {
    backgroundColor: "#bbbab5",
}


const Projects = () => {
    return (

        // <section style={style} id='Projects' className="min-h-[400px] md:min-h-[500px] mx-4 my-4 md:m-[2rem] md:mr-8 rounded-2xl p-4 gap-8 md:gap-4 flex justify-center items-center" >
        //     <div className='w-1/2 min-h-full bg-pink-400'>

        //     </div>
        //     <div className='w-1/2 h-full bg-amber-500'>

        //     </div>
        // </section>
        <section style={style} className="my-4 min-h-[400px] md:min-h-[500px] mx-4 md:m-[2rem] md:mr-8 rounded-2xl" id="Projects">
        <div className="max-w-7xl mx-auto mt-8">
          <h2 className="text-4xl font-bold mb-8 text-center text-gray-800 dark:text-zinc-800">
            🚀 Projects
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className="bg-white dark:bg-zinc-800 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow flex items-center"
                whileHover={{ scale: 1.03 }}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-fit h-48 ml-3.5"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 my-2">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 my-4">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="text-xs bg-indigo-100 dark:bg-indigo-700 text-indigo-600 dark:text-white px-2 py-1 rounded-full"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4 mt-4">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition"
                      >
                        <FaGithub size={20} />
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition"
                      >
                        <FaExternalLinkAlt size={18} />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    )
}

export default Projects
