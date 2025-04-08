import React from 'react'
import { FaGithub } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdLocalPhone } from "react-icons/md";
import { IoIosMail } from "react-icons/io";

const Footer = () => {
  return (
    <>
      <div id="Footer" className='flex items-center justify-center mt-20 text-white bg-neutral-700 h-96' >
        <div className='h-96 w-4/7 flex items-center justify-center'>
          <div className='w-3/4 h-80 text-gray-700 bg-gray-300 p-7 rounded-xl'>
            <h1 className='text-4xl font-bold flex justify-center'>Contact</h1>
            <p className='text-xl mt-8 flex items-center gap-3'><MdLocalPhone />Phone: +91 9520410011</p>
            <p className='text-xl mt-2 flex items-center gap-3'><IoIosMail />E-mail: sh.sumit2004@gmail.com</p>
            

            <div id="contact" className='mt-16 text-3xl flex items-center justify-center gap-10'>
              <h2><a className='hover:text-gray-900' href="https://github.com/Sumit-004"><FaGithub /></a></h2>
              <h2><a className='hover:text-gray-900' href="https://www.instagram.com/im_sumit004?igsh=azJxcjl5NWlraDRt"><FaInstagram /></a></h2>
              <h2><a className='hover:text-gray-900' href=""><FaXTwitter /></a></h2>
              <h2><a className='hover:text-gray-900' href=""><FaLinkedin /></a></h2>
            </div>
          </div>
        </div>


        <div className='h-80 w-3/7 border-l-3'>
          <div className='h-52 w-2/3 bg-gray-300 text-neutral-900 ml-12 rounded-2xl p-6'>
            <textarea placeholder="Leave a comment..." id="comment" className=' overflow-hidden p-3 w-full h-2/3'></textarea>
            <button type='button' className='flex items-center justify-center px-5 py-2 mt-3 rounded-2xl bg-violet-700 text-xl text-white hover:bg-violet-500 cursor-pointer'>Send</button>
          </div>
        </div>
      </div>
      <div className='text-white bg-neutral-700 flex items-center justify-center p-4'><p>Copyright 2004-2025 by Sumit. All Rights Reserved. This Portfolio is Powered by Sumit.</p></div>
    </>
  )
}

export default Footer
