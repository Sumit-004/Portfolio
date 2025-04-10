import React from 'react'
import img from '../assets/mypic.png'


const style = {
  backgroundColor: "#bbbab5",
}

const About = () => {
  return (
   

    <section style={style} className="min-h-[400px] md:min-h-[500px] mx-4 my-4 md:m-[2rem] md:mr-8 rounded-2xl p-4 gap-8 md:gap-4" id="About">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold mb-6 text-gray-800">About Me</h2>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="w-full h-full">
            <img
              src= {img} // Replace with your image path
              alt="Profile"
              className="rounded-2xl shadow-lg w-full h-auto"
            />
          </div>
          <div>
            <p className="text-lg text-gray-600 mb-4">
              Hi! I'm <span className="font-semibold text-gray-800">Sumit</span>— a frontend web developer passionate about crafting clean, interactive, and accessible web experiences. I specialize in building responsive interfaces using React, HTML, CSS, and JavaScript.
            </p>
            <ul className="text-gray-700 space-y-2">
              <li>**Frontend Development** <br />
                - HTML5, CSS3 (Flexbox, Grid), JavaScript (ES6+), React (Hooks, Context API)</li>
              <li>**Tools & Technologies** <br />
                - Git & GitHub, npm/yarn, VS Code, Chrome DevTools, Responsive Design
              </li>

            </ul>
            <ul className="text-gray-700 space-y-2 mt-4">
              <li>💻 Tech Stack: React, Tailwind, JavaScript</li>
              <li>🎯 Interests: UI/UX Design, Open Source, Dev Tools</li>
              <li>📍 Location: Ballabgarh ,Faridabad</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

  )
}

export default About
