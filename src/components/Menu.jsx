import React from 'react'
import img from '../assets/avatar.avif'
import TextChange from './TextChange'
import AnimatedText from './AnimatedText';
import { FaGithub } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";


    const scrollToBottom=()=>{
        window.scrollTo({
            top: document.body.scrollHeight,
            behavior:"smooth"
        });
    };


const Menu = () => {


    return (
        <>
            <div className=' my-4 min-h-[400px] md:min-h-[500px] mx-4 md:m-[2rem] md:mr-8 rounded-2xl flex flex-col md:flex-row justify-center md:justify-evenly items-center p-4 gap-8 md:gap-4'>
                <div className='w-full md:w-1/2 lg:w-1/3 text-[#bbbab5] order-2 md:order-1' data-aos="fade-right"
                    data-aos-duration="2000">
                    <h1 className="inline-flex items-center gap-2 px-4 py-1 my-5 text-sm font-semibold text-green-200 bg-green-800 rounded-full shadow-lg animate-pulse hover:animate-none hover:scale-105 transition-transform duration-300 cursor-pointer" onClick={scrollToBottom}>
                        <span className="relative flex h-3 w-3">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-300 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-3 w-3 bg-green-400"></span>
                        </span>
                        Available For Hire
                    </h1>
                    <h1 className='text-3xl md:text-6xl font-bold'>
                        <AnimatedText />
                    </h1>
                    <p className='mt-4 md:mt-8 text-lg sm:text-xl md:text-2xl'>
                        This Is My Portfolio. I Am React Web Developer. This Portfolio Represents My Projects And Skills.
                    </p>
                </div>

                <div className='w-3/4 sm:w-1/2 md:w-1/3 flex justify-center order-1 md:order-2' data-aos="fade-left"
                    data-aos-duration="2000">

                    <img
                        // 33,83,244
                        src={img}
                        alt="Profile"
                        className='object-cover w-full max-w-[300px] h-auto rounded-full border-4 border-white filter hover:drop-shadow-[0px_10px_24px_rgba(118,121,129,2)] transition-all duration-300'
                    />
                </div>

                <div className='w-full md:w-auto flex md:items-center justify-center md:justify-end order-3'>
                    <div id="contact" className='text-3xl text-[#bbbab5] md:text-4xl flex flex-row md:flex-col gap-6 md:gap-10'>
                        <h2><a className='hover:text-black transition-all duration-300' href="https://github.com/Sumit-004"><FaGithub /></a></h2>
                        <h2><a className='hover:text-red-600 transition-all duration-300' href="https://www.instagram.com/im_sumit004?igsh=azJxcjl5NWlraDRt"><FaInstagram /></a></h2>
                        <h2><a className='hover:text-black transition-all duration-300' href=""><FaXTwitter /></a></h2>
                        <h2><a className='hover:text-blue-800 transition-all duration-300' href=""><FaLinkedin /></a></h2>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Menu
