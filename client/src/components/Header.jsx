import React, { useState } from 'react'
import { Link } from 'react-scroll'

import {BiMenuAltLeft } from 'react-icons/bi'
import {AiOutlineClose } from 'react-icons/ai'
const Header = () => {

    
    
    let Links = [
        { name: 'Home', link: 'home'},
        { name: 'About me', link: 'about'},
        {name: 'Projects', link: 'projects'},
        {name: 'Contact', link: 'contact'},
    ]
    const [open, setOpen] = useState(false);
    return (
    <div className='w-full max-w-7xl'>
        <div className='md:flex  justify-between items-center py-4 md:px-10 px-7  '>
            {/* Logo Section */}
            <div className='font-semibold text-2xl cursor-pointer flex items-center gap-1'>
                <span className='text-purple-600 hover:text-white'>Shafy Ali</span>
            </div>

            {/* Menu Icons */}
            <div onClick={ ()=> setOpen(!open)

            } className='cursor-pointer absolute right-8 top-6  md:hidden'>
                {open ? <AiOutlineClose size={25} />: <BiMenuAltLeft size={30}/>}
            </div>

            {/* nav link */}
            <ul className={`md:flex md:items-center absolute md:static md:z-auto z-10 left-0 w-full md:w-auto mt-4 md:mt-0 md:pl-0 pl-9 bg-slate-400 sm:bg-transparent transition-all duration-500 ease-in ${open ? "top-12" : "top-[-490px]"}`}>
                {
                    Links.map(link => <li key={link.name} className='md:ml-8 md:my-8 my-7 font-semibold cursor-pointer'>
                        <Link to={link.link} spy={true} smooth={true}  activeClass="active" className='text-white hover:text-purple-600 transiton-all   duration-500'  >{link.name}</Link>
                    </li>)
                }
            </ul>

        </div>
    </div>
  )
}

export default Header