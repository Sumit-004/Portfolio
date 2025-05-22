import React from 'react'
import pro1 from '../assets/qrproject.png'
import pro2 from '../assets/gIcon.png'
import pro3 from '../assets/logo1.png'
import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const projects = [
    {
      title: "QR Code Generator",
      description: "This Website generates a QR code based on the inputted text or URL.",
      tags: ["React", "API", "JavaScript"],
      github: "https://github.com/Sumit-004/QR-Generator",
      demo: "",
      image: pro1,
    },
    {
      title: "Rock, Paper, Scissors Game",
      description: "This is Rock , Paper , Scissors game made with JS",
      tags: ["React", "API", "Tailwind"],
      github: "https://github.com/Sumit-004/Rock-Paper-Scissor-Game",
      demo: "",
      image: pro2,
    },
    {
      title: "Food Delivery",
      description: "This Website Allows users To Order Food Online",
      tags: ["React", "Redux", "Tailwind"],
      github: "https://github.com/Sumit-004/Food-Delivery",
      demo: "",
      image: pro1,
    },
  
  ];
  


const Projects = () => {
    return (

        
        <section className="bg-[#bbbab5] my-4 min-h-[400px] md:h-[500px] mx-4 md:m-[2rem] md:mr-8 rounded-2xl" id="Projects">
        <div className="md:max-w-7xl max-w-4xl m-2">
          <h2 className="md:text-4xl text-3xl font-bold mb-8 text-center text-gray-800 dark:text-zinc-800">
            🚀 Projects
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white dark:bg-zinc-800 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow flex items-center"
                whileHover={{ scale: 1.03 }}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                data-aos='flip-left'
                data-aos-duration='1500'>
                
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-fit md:h-48 h-38 ml-3.5"
                />
                <div className="p-6">
                  <h3 className="md:text-2xl text-xl font-semibold text-gray-800 dark:text-white">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 md:text-[15px] text-[12px] dark:text-gray-300 my-2">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 my-4">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="md:text-[15px] text-[10px] bg-indigo-100 dark:bg-indigo-700 text-indigo-600 dark:text-white px-2 py-1 rounded-full"
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
                
              </div>
            ))}
          </div>
        </div>
      </section>

    )
}

export default Projects
