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
      <div id="Footer" className='flex flex-col md:flex-row items-center justify-center mt-20 text-white bg-neutral-700 min-h-[24rem] py-8'>
        <div className='w-full md:w-4/7 flex items-center justify-center p-4'>
          <div className='w-full md:w-3/4 h-auto text-gray-700 bg-[#bbbab5]  p-4 md:p-7 rounded-xl'>
            <h1 className='text-2xl md:text-4xl font-bold flex justify-center'>Contact</h1>
            <p className='text-base md:text-xl mt-4 md:mt-8 flex items-center gap-3'><MdLocalPhone />Phone: +91 9520410011</p>
            <p className='text-base md:text-xl mt-2 flex items-center gap-3'><IoIosMail />E-mail: sh.sumit2004@gmail.com</p>

            <div id="contact" className='mt-8 md:mt-16 text-xl md:text-3xl flex items-center justify-center gap-4 md:gap-10'>
              <h2><a className='hover:text-zinc-900' href="https://github.com/Sumit-004"><FaGithub /></a></h2>
              <h2><a className='hover:text-red-600' href="https://www.instagram.com/im_sumit004?igsh=azJxcjl5NWlraDRt"><FaInstagram /></a></h2>
              <h2><a className='hover:text-zinc-900' href=""><FaXTwitter /></a></h2>
              <h2><a className='hover:text-sky-700' href=""><FaLinkedin /></a></h2>
            </div>
          </div>
        </div>

        <div id="form" className='p-4 w-full md:w-3/7 mt-8 md:mt-0 md:border-l-3'>
          <div className='h-auto w-full md:w-2/3 bg-[#bbbab5]  text-neutral-900 md:ml-12 rounded-2xl p-4 md:p-6 mx-auto'>

            <form action='https://formspree.io/f/mgvarbgy' method='POST' className="space-y-4">
              <div className='flex flex-col md:flex-row md:gap-4 space-y-4 md:space-y-0'>
                <input
                  className='w-full p-3 rounded-lg border border-gray-400 focus:outline-none focus:ring-2 focus:ring-sky-600'
                  required
                  type="text"
                  placeholder='Enter Your Name...'
                  name='username' />
                <input
                  className='w-full p-3 rounded-lg border border-gray-400 focus:outline-none focus:ring-2 focus:ring-sky-600'
                  required
                  type="email"
                  placeholder='xyz@gmail.com'
                  name='email' />
              </div>
              <textarea
                className='w-full p-3 rounded-lg border border-gray-400 focus:outline-none focus:ring-2 focus:ring-sky-600 min-h-[120px]'
                required
                name="messeage"
                placeholder='Message'></textarea>
              <div className="flex justify-center">
                <button
                  className='px-6 py-2 bg-sky-800 hover:bg-sky-700 text-white rounded-full transition-colors cursor-pointer duration-300'
                  type="submit">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
        <p className='fixed md:bottom-20 bottom-10 md:right-14 right-1.5 text-4xl text-white'>

          <h2 className='hover:text-gray-400 transition-all cursor-pointer' onClick={scrollToTop}><IoIosArrowDropupCircle /></h2>

        </p>
      </div>
      <div className='text-white bg-neutral-700 flex items-center justify-center p-4 text-sm md:text-base text-center'><p>Copyright 2004-2025 by Sumit. All Rights Reserved. This Portfolio is Powered by Sumit.</p></div>

    </>
  )
}

export default Footer
