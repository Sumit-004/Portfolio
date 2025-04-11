import React, { useState } from 'react'
import {Phone, FolderOpenDot, Atom, User, Menu, X,CodeXml} from 'lucide-react'
// import { BsPen  } from "react-icons/bs";


const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768)

    React.useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768)
            if (window.innerWidth >= 768) {
                setIsMenuOpen(false)
            }
        }

        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    return (
        <header id="Arrow" className="bg-[#bbbab5] rounded-2xl text-zinc-800 flex items-center justify-between p-4 md:p-0 mx-8 md:h-25 relative">
            <h1 className='text-2xl md:text-4xl font-bold ml-4 md:ml-20'>Portfolio</h1>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:block">
                <ul className='flex gap-8 text-xl items-center mr-20'>
                    <li><a className='flex items-center gap-3 hover:text-gray-600' href="#About"><User />About Me</a></li>
                    <li><a className='flex items-center gap-3 hover:text-gray-600' href="#Skills"><CodeXml />Skills</a></li>
                    <li><a className='flex items-center gap-3 hover:text-gray-600' href="#Projects"><FolderOpenDot />Projects</a></li>
                    <li><a className='flex items-center gap-3 hover:text-gray-600' href="#Footer"><Phone />Contact</a></li>
                </ul>
            </nav>

            {/* Mobile Menu Button */}
            <button 
                className="md:hidden p-2"
                onClick={toggleMenu}
                aria-label="Toggle menu"
            >
                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>

            {/* Mobile Dropdown Menu */}
            {isMobile && isMenuOpen && (
                <div className="absolute top-full left-0 right-0 bg-[#bbbab5] rounded-b-2xl shadow-lg z-10">
                    <ul className="flex flex-col gap-4 p-4 text-xl">
                        <li><a className='flex items-center gap-3 hover:text-gray-600' href="" onClick={toggleMenu}><User />About Me</a></li>
                        <li><a className='flex items-center gap-3 hover:text-gray-600' href="#Skills" onClick={toggleMenu}><Atom />Skills</a></li>
                        <li><a className='flex items-center gap-3 hover:text-gray-600' href="" onClick={toggleMenu}><FolderOpenDot />Projects</a></li>
                        <li><a className='flex items-center gap-3 hover:text-gray-600' href="#Footer" onClick={toggleMenu}><Phone />Contact</a></li>
                    </ul>
                </div>
            )}
        </header>
    )
}

export default Header
