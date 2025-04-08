import React from 'react'
import {Phone} from 'lucide-react'
import {FolderOpenDot} from 'lucide-react'
import { Atom } from 'lucide-react'
import {User} from 'lucide-react'

const style={
    backgroundColor: "#bbbab5",

}

const Header = () => {
    return (
        <header style={style} className='h-25 rounded-2xl text-zinc-800 flex items-center'>
            <h1 className='ml-20 mr-40 inline-block font-bold text-4xl'>Portfolio</h1>
            <div className='ml-40 absolute right-15' >
                <ul className='flex gap-30 text-2xl items-center'>
                    <li><a className='flex items-center gap-3 hover:text-gray-600' href=""><User />About Me</a></li>
                    <li><a className='flex items-center gap-3 hover:text-gray-600' href="#Skills"><Atom />Skills</a></li>
                    <li><a className='flex items-center gap-3 hover:text-gray-600' href=""><FolderOpenDot />Projects</a></li>
                    <li><a className='flex items-center gap-3 hover:text-gray-600' href="#Footer"><Phone />Contact</a></li>
                </ul>
            </div>
        </header>
    )
}

export default Header
