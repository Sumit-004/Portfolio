import React from 'react'
import { FaGithub } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdLocalPhone } from "react-icons/md";
import { IoIosMail } from "react-icons/io";
import { IoIosArrowDropupCircle } from "react-icons/io";


const Footer = () => {
  return (
    <>
      <div id="Footer" className='flex flex-col md:flex-row items-center justify-center mt-20 text-white bg-neutral-700 min-h-[24rem] py-8'>
        <div className='w-full md:w-4/7 flex items-center justify-center p-4'>
          <div className='w-full md:w-3/4 h-auto text-gray-700 bg-gray-300 p-4 md:p-7 rounded-xl'>
            <h1 className='text-2xl md:text-4xl font-bold flex justify-center'>Contact</h1>
            <p className='text-base md:text-xl mt-4 md:mt-8 flex items-center gap-3'><MdLocalPhone />Phone: +91 9520410011</p>
            <p className='text-base md:text-xl mt-2 flex items-center gap-3'><IoIosMail />E-mail: sh.sumit2004@gmail.com</p>
            
            <div id="contact" className='mt-8 md:mt-16 text-xl md:text-3xl flex items-center justify-center gap-4 md:gap-10'>
              <h2><a className='hover:text-gray-900' href="https://github.com/Sumit-004"><FaGithub /></a></h2>
              <h2><a className='hover:text-gray-900' href="https://www.instagram.com/im_sumit004?igsh=azJxcjl5NWlraDRt"><FaInstagram /></a></h2>
              <h2><a className='hover:text-gray-900' href=""><FaXTwitter /></a></h2>
              <h2><a className='hover:text-gray-900' href=""><FaLinkedin /></a></h2>
            </div>
          </div>
        </div>
        
        <div className='w-full md:w-3/7 mt-8 md:mt-0 md:border-l-3'>
          <div className='h-auto w-full md:w-2/3 bg-gray-300 text-neutral-900 md:ml-12 rounded-2xl p-4 md:p-6 mx-auto'>
            <textarea placeholder="Leave a comment..." id="comment" className='overflow-hidden p-3 w-full min-h-[120px]'></textarea>
            <button type='button' className='flex items-center justify-center px-4 py-2 mt-3 rounded-2xl bg-violet-700 text-base md:text-xl text-white hover:bg-violet-500 cursor-pointer'>Send</button>
          </div>
        </div>
        <p className='fixed bottom-20 right-14 text-4xl text-white'>
        <a className='hover:text-amber-200' href="Arrow"><IoIosArrowDropupCircle /></a>
      </p>
      </div>
      <div className='text-white bg-neutral-700 flex items-center justify-center p-4 text-sm md:text-base text-center'><p>Copyright 2004-2025 by Sumit. All Rights Reserved. This Portfolio is Powered by Sumit.</p></div>
      
    </>
  )
}

export default Footer
