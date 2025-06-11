import React, { useState } from 'react'
import { Phone, FolderOpenDot, Atom, User, Menu, X, CodeXml } from 'lucide-react'
// import { BsPen  } from "react-icons/bs";
import { AnimatePresence, motion, useScroll } from 'motion/react'


const Header = () => {
    const dropdownVariants = {
        hidden: {
            opacity: 0,
            y: -20,
            scale: 0.95,
            transition: {
                duration: 0.2,
                ease: 'easeInOut',
            },
        },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                duration: 0.25,
                ease: 'easeOut',
            },
        },
        exit: {
            opacity: 0,
            y: -20,
            scale: 0.95,
            transition: {
                duration: 0.2,
                ease: 'easeInOut',
            },
        },
    };




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

    const scroll = useScroll().scrollYProgress

    return (
        <>
            <motion.div
                style={{
                    scaleX: scroll
                }}
                className='w-full fixed top-0 origin-left z-10 h-0.5 bg-white'></motion.div>
            <header className=" rounded-2xl text-[#bbbab5] flex items-center justify-between md:p-0 p-4 md:mx-8 mx-0 md:h-25 relative">
                <h1 className='text-color text-3xl md:text-[50px] font-bold ml-4 md:ml-20'>Portfolio</h1>


                <nav className="hidden md:block">
                    <ul className='flex gap-8 text-xl items-center mr-20' data-aos="fade-left"
                        data-aos-duration="2000">
                        <li><a className='flex items-center gap-3 pb-2 md:hover:border-b-3 transition-all border-[#bbbab5]' href="#About"><User />About Me</a></li>
                        <li><a className='flex items-center gap-3 pb-2 md:hover:border-b-3 transition-all border-[#bbbab5]' href="#Skills"><CodeXml />Skills</a></li>
                        <li><a className='flex items-center gap-3 pb-2 md:hover:border-b-3 transition-all border-[#bbbab5]' href="#Projects"><FolderOpenDot />Projects</a></li>
                        <li><a className='flex items-center gap-3 pb-2 md:hover:border-b-3 transition-all border-[#bbbab5]' href="#Footer"><Phone />Contact</a></li>
                    </ul>
                </nav>

                <button
                    className="md:hidden p-2 cursor-pointer"
                    onClick={toggleMenu}
                    aria-label="Toggle menu"
                >
                    {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>

                {/* Mobile Dropdown Menu */}
                {isMobile && isMenuOpen && (
                    <AnimatePresence>
                        <motion.div className="absolute top-full left-0 right-0 backdrop-blur-lg border-b-2 border-black shadow-lg z-10"
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            variants={dropdownVariants}>
                            <ul className="flex flex-col gap-4 p-7 text-xl text-gray-200">
                                <li data-aos="fade-right"
                                    data-aos-duration="500"
                                    data-aos-delay="100"><a className='flex items-center gap-3 hover:text-red-400 transition-all'  href="#About" onClick={toggleMenu}><User className='text-blue-600' />About Me</a></li>
                                <li data-aos="fade-right"
                                    data-aos-duration="500"
                                    data-aos-delay="200"><a className='flex items-center gap-3 hover:text-red-400 transition-all' href="#Skills" onClick={toggleMenu}><Atom className='text-blue-600' />Skills</a></li>
                                <li data-aos="fade-right"
                                    data-aos-duration="500"
                                    data-aos-delay="300"><a className='flex items-center gap-3 hover:text-red-400 transition-all' href="#Projects" onClick={toggleMenu}><FolderOpenDot className='text-blue-600' />Projects</a></li>
                                <li data-aos="fade-right"
                                    data-aos-duration="500"
                                    data-aos-delay="400"><a className='flex items-center gap-3 hover:text-red-400 transition-all' href="#Footer" onClick={toggleMenu}><Phone className='text-blue-600' />Contact</a></li>
                            </ul>
                        </motion.div>
                    </AnimatePresence>

                )}
            </header>
        </>
    )
}

export default Header
