import React from 'react'
import img from '../assets/avatar.avif'
import TextChange from './TextChange'
import { FaGithub } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const style = {
    backgroundColor: "#bbbab5",
}

const Menu = () => {
    return (
        <>
            <div style={style} className='my-4 min-h-[400px] md:min-h-[500px] mx-4 md:m-[2rem] md:mr-8 rounded-2xl flex flex-col md:flex-row justify-center md:justify-evenly items-center p-4 gap-8 md:gap-4'>
                <div className='w-full md:w-1/2 lg:w-1/3 text-zinc-800 order-2 md:order-1'>
                    <h1 className='text-4xl sm:text-5xl md:text-6xl font-bold'>
                        <TextChange />
                    </h1>
                    <p className='mt-4 md:mt-8 text-lg sm:text-xl md:text-2xl'>
                        This Is My Portfolio. I Am React Web Developer. This Portfolio Represents My Projects And Skills.
                    </p>
                </div>
                
                <div className='w-3/4 sm:w-1/2 md:w-1/3 flex justify-center order-1 md:order-2'>
                    <img 
                        src={img} 
                        alt="Profile" 
                        className='object-cover w-full max-w-[300px] h-auto rounded-full border-4 border-white shadow-lg'
                    />
                </div>
                
                <div className='w-full md:w-auto flex md:items-center justify-center md:justify-end order-3'>
                    <div id="contact" className='text-3xl md:text-4xl flex flex-row md:flex-col gap-6 md:gap-10'>
                        <h2><a className='hover:text-gray-700' href="https://github.com/Sumit-004"><FaGithub /></a></h2>
                        <h2><a className='hover:text-gray-700' href="https://www.instagram.com/im_sumit004?igsh=azJxcjl5NWlraDRt"><FaInstagram /></a></h2>
                        <h2><a className='hover:text-gray-700' href=""><FaXTwitter /></a></h2>
                        <h2><a className='hover:text-gray-700' href=""><FaLinkedin /></a></h2>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Menu
