import React from 'react'
import { FaGithub } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdLocalPhone } from "react-icons/md";
import { IoIosMail } from "react-icons/io";
import { IoIosArrowDropupCircle } from "react-icons/io";


const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
};


const Footer = () => {
  return (
    <>
      {/* Contact Section */}
      <div id="Footer" className='flex flex-col md:flex-row items-center justify-center mt-20 text-white bg-neutral-700 min-h-[24rem] py-8'>
        <div className='w-full md:w-4/7 flex items-center justify-center p-4'>

          <div className="w-full md:w-3/4 bg-gray-900 bg-opacity-70 rounded-3xl shadow-lg p-8 md:p-12 text-left border border-gray-700 backdrop-blur-sm">
            <h1 className="text-3xl md:text-4xl font-bold mb-6 tracking-wide">
              Get in Touch
            </h1>
            <p className="text-lg flex items-center gap-4 justify-start mb-4">
              <MdLocalPhone className="text-sky-400 text-3xl" />
              <span className="hover:text-sky-400 transition duration-300 cursor-pointer">
                +91 9520410011
              </span>
            </p>
            <p className="text-lg flex items-center gap-4 justify-start mb-6">
              <IoIosMail className="text-sky-400 text-3xl" />
              <span className="hover:text-sky-400 transition duration-300 cursor-pointer">
                sh.sumit2004@gmail.com
              </span>
            </p>

            <div
              id="contact"
              className="flex justify-center md:justify-start gap-8 text-3xl md:text-4xl mt-8"
            >
              <a
                href="https://github.com/Sumit-004"
                className="text-gray-400 hover:text-white transition-colors duration-300"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.instagram.com/im_sumit004?igsh=azJxcjl5NWlraDRt"
                className="text-pink-500 hover:text-red-700 transition-colors duration-300"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
              <a
                href="#"
                className="text-blue-400 hover:text-blue-700 transition-colors duration-300"
                aria-label="X Twitter"
              >
                <FaXTwitter />
              </a>
              <a
                href="#"
                className="text-sky-500 hover:text-sky-600 transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>


        {/* Mail Section */}
        <div id="form" className='p-4 w-full md:w-3/7 mt-2 md:mt-0 md:border-l-3'>
          <div className='h-auto w-full md:w-2/3 bg-gray-900  text-neutral-100 md:ml-12 rounded-2xl p-4 md:p-6 mx-auto'>

            <form action='https://formspree.io/f/mgvarbgy' method='POST' className="space-y-4">
              <div className='flex flex-col md:flex-row md:gap-4 space-y-2 md:space-y-0'>
                <input
                  className='w-full md:p-3 p-2 rounded-lg border border-gray-400 focus:outline-none focus:ring-2 focus:ring-sky-600'
                  required
                  type="text"
                  placeholder='Enter Your Name...'
                  name='username' />
                <input
                  className='w-full md:p-3 p-2 rounded-lg border border-gray-400 focus:outline-none focus:ring-2 focus:ring-sky-600'
                  required
                  type="email"
                  placeholder='xyz@gmail.com'
                  name='email' />
              </div>
              <textarea
                className='w-full md:p-3 p-2 rounded-lg border border-gray-400 focus:outline-none focus:ring-2 focus:ring-sky-600 min-h-[120px]'
                required
                name="message"
                placeholder='Message'></textarea>
              <div className="flex justify-center">
                <button
                  className='px-6 py-2 bg-purple-800 hover:bg-purple-600 text-white rounded-full transition-colors cursor-pointer duration-300'
                  type="submit">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
        <span className='fixed md:bottom-20 bottom-10 md:right-14 right-1.5 text-4xl text-white z-100'>
          <h2 className='hover:text-gray-400 transition-all cursor-pointer' onClick={scrollToTop}><IoIosArrowDropupCircle /></h2>
        </span>
      </div>
      <div className='text-white bg-neutral-700 flex items-center justify-center p-4 text-sm md:text-base text-center'><p>Copyright 2004-2025 by Sumit. All Rights Reserved. This Portfolio is Powered by Sumit.</p></div>

    </>
  )
}

export default Footer
