'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Navbar() {
  return (
    <motion.div
      className="p-[2px] fixed top-[2%] left-1/2 transform -translate-x-1/2 w-[60%] z-50 bg-purple-500 rounded-2xl drop-shadow-2xl whitespace-nowrap"
      initial={{ boxShadow: '0 0 0 0 rgba(0, 0, 0, 0.8)' }}
      animate={{
        boxShadow: [
          '0 0 0 0 rgba(255,255,255,0.8)',
          '0 0 10px 4px rgba(255,255,255,0)',
          '0 0 0 0 rgba(255,255,255,0.8)',
        ],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    >
      {/* Actual navbar */}
      <div className="w-full flex justify-center bg-transparent z-50">
        <div className="grid grid-cols-[3fr_2fr_1fr] items-center w-full h-16 px-6 bg-black text-white rounded-bl-2xl rounded-br-2xl">
          {/* Left - Logo */}
          <div className="flex items-center space-x-2">
            <Image src="/hblogo.png" alt="hb logo" width={60} height={60} />
            <a 
            href = "/"
            className="text-left font-mono font-bold text-lg hover:text-purple-500 hover:scale-105 transition duration-200">
              Humza Baig
            </a>
          </div>



          {/* Center - Nav Links */}
          <div className="justify-self-center font-mono flex items-center space-x-10 h-full">
            <a
              href="home"
              className="hover:text-purple-500 hover:scale-105 transition duration-200"
            >
              Home
            </a>
            <a
              href="about"
              className="hover:text-purple-500 hover:scale-105 transition duration-200"
            >
              About Me
            </a>
            <a
              href="workexperience"
              className="hover:text-purple-500 hover:scale-105 transition duration-200"
            >
              Work Experience
            </a>
            <a
              href="projects"
              className="hover:text-purple-400 hover:scale-105 transition duration-200"
            >
              Projects
            </a>
          </div>

          {/* Right - Placeholder (with height for balance) */}
          <div className="text-right h-full"></div>
        </div>
        </div>
      
    </motion.div>


  )
}
