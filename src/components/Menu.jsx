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
            <div style={style} className='h-140 m-[2rem] mr-8 rounded-2xl flex justify-evenly items-center'>
                <div className=' w-120 h-80 text-zinc-800'>
                    <h1 className='text-6xl font-bold sm:text-3xl lg:w-6xl'>
                        <TextChange />
                    </h1>
                    <p className='mt-8 text-2xl '>This Is My Portfolio. I Am React Web Developer. This Portfolio Represents My Projects And Skills.</p>
                </div>
                <div className='h-90 w-90'>
                    <img src={img} alt="" className='object-cover' />
                </div>
                <div className='h-140 text-gray-900 flex items-center'>
                    <div id="contact" className='text-4xl flex flex-col gap-10'>
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
