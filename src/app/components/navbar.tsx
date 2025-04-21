'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Navbar() {
  return (
    <motion.div
      className="p-[2px] fixed top-[2%] left-1/2 transform -translate-x-1/2 w-[60%] z-50 bg-purple-500 rounded-2xl drop-shadow-2xl"
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
      <div className="w-full flex justify-center bg-transparent rounded-2xl">
        <div className="flex justify-between items-center w-full h-16 px-6 bg-gradient-to-b from-black to-purple-900 text-white rounded-2xl">
          {/* Left - Logo */}
          <div className="flex items-center space-x-2">
            <Image src="/hblogo.png" alt="hb logo" width={60} height={60} />
            <p className="font-bold font-mono">Humza Baig</p>
          </div>

          {/* Center - Nav Links */}
          <div className="justify-self-center font-mono flex items-center space-x-10">
            <a href="/home" className="hover:text-purple-500 hover:scale-105 transition duration-200">
              Home
            </a>
            <a href="/about" className="hover:text-purple-500 hover:scale-105 transition duration-200">
              About Me
            </a>
            <a href="/workexperience" className="hover:text-purple-500 hover:scale-105 transition duration-200">
              Work Experience
            </a>
            <a href="/projects" className="hover:text-purple-400 hover:scale-105 transition duration-200">
              Projects
            </a>
          </div>

          {/* Right - Empty for spacing */}
          <div className="text-right"></div>
        </div>
      </div>
    </motion.div>
  )
}
