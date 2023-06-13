import React, { useState } from 'react';
import { useMediaQuery } from '../util/useMediaQuery';
import { motion } from "framer-motion"




export default function Navbar() {
    const [toggle, setToggle] = useState(false)
    const matches = useMediaQuery("(min-width:780px)")
    return (
        <nav className="Nav flex items-center justify-between flex-wrap bg-teal-500 p-6">
            <div className="flex items-center flex-shrink-0 text-white mr-6 mt-4">
            <svg
            className="fill-current h-8 w-8 mr-2"
            width="54"
            height="54"
            viewBox="0 0 54 54"
            xmlns="http://www.w3.org/2000/svg"
            ><path
                d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z"
            ></path></svg>
        
            <span className="font-semibold text-xl tracking-tight">Tailwind CSS</span>
        
            </div>
            {/* isMobile */}
        {matches && (
            <div className='flex gap-12 px-8 mt-4'>
                <a className='text-white' href="">Home</a>
                <a className='text-white' href="/services">About</a>
                <a className='text-white' href="/contact">Contact</a>
            </div>
        )}

        {!matches && (
            <div onClick={() => setToggle(toggle => !toggle)} className='space-y-1 cursor-pointer mt-4 z-50'>
                <span className='block h-0.5 w-8 bg-white'></span>
                <span className='block h-0.5 w-6 bg-white'></span>
                <span className='block h-0.5 w-4 bg-white'></span>
            </div>
        )}


        {toggle && !matches &&(
            <motion.div 
                animate={{opacity: 1 , y: 0}}
                initial={{opacity: 0, y:-25}}
            className='fixed flex bg-teal-500 bottom-0 left-0 w-full h-screen items-center justify-center'>
                <div className='flex flex-col gap-24 text-lg text-center '>
                <span className="font-semibold text-xl tracking-tight text-white">Tailwind CSS</span>
                    <a className='text-white' href="">Home</a>
                    <a className='text-white' href="/services">About</a>
                    <a className='text-white' href="/contact">Contact</a>
                </div>
            </motion.div>
        )}

    
        </nav>
    );
}