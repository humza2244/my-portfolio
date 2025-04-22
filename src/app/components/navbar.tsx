'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768)
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <motion.div
      className="fixed top-[2%] left-1/2 transform -translate-x-1/2 z-[999] p-[2px] w-[95%] sm:w-[60%] rounded-2xl bg-purple-500 drop-shadow-2xl"
      initial={{ boxShadow: '0 0 0 0 rgba(128,0,128,0.0)' }}
      animate={{
        boxShadow: [
          '0 0 0 0 rgba(128,0,128,0.0)',
          '0 0 20px 6px rgba(128,0,128,0.7)',
          '0 0 0 0 rgba(128,0,128,0.0)',
        ],
      }}
      transition={{
        duration: 2.5,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    >

      <div
        className={`w-full bg-gradient-to-b from-black to-purple-900 text-white px-4 py-3 sm:py-4 flex items-center justify-between rounded-2xl transition-all duration-500 ${
          isMobile && isOpen ? 'rounded-b-none' : ''
        }`}
      >
        <div className="flex items-center space-x-3 font-mono text-sm">
          <Image src="/hblogo.png" alt="HB" width={40} height={40} />
          <span className="font-bold">Humza Baig</span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden sm:flex space-x-8 font-mono text-sm">
          <Link href="/home" className="hover:text-purple-400">Home</Link>
          <Link href="/about" className="hover:text-purple-400">About Me</Link>
          <Link href="/workexperience" className="hover:text-purple-400">Work Experience</Link>
          <Link href="/projects" className="hover:text-purple-400">Projects</Link>
        </div>

        {/* Resume Button (DESKTOP only) */}
        <div className="hidden sm:block">
          <a href="/resume.pdf" download>
            <button className="w-[150px] cursor-pointer bg-gradient-to-b from-black to-purple-900 shadow-[0px_4px_32px_0_rgba(106,27,154,.70)] px-6 py-3 rounded-xl border-[2px] border-slate-500 text-white font-medium group">
              <div className="relative overflow-hidden w-full text-center">
                <p className="group-hover:-translate-y-7 duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)]">
                  Resumé
                </p>
                <p className="absolute top-7 left-0 w-full group-hover:top-0 duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)]">
                  Download
                </p>
              </div>
            </button>
          </a>
        </div>

        {/* Hamburger (MOBILE) */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="sm:hidden focus:outline-none text-white"
        >
          {isOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile Dropdown */}
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{
          opacity: isOpen ? 1 : 0,
          height: isOpen ? 'auto' : 0,
        }}
        transition={{ duration: 0.4 }}
        className="sm:hidden bg-black text-white font-mono rounded-b-xl overflow-hidden px-6"
      >
        {isOpen && (
          <div className="flex flex-col space-y-4 text-sm py-4">
            <Link href="/home" onClick={() => setIsOpen(false)}>Home</Link>
            <Link href="/about" onClick={() => setIsOpen(false)}>About Me</Link>
            <Link href="/workexperience" onClick={() => setIsOpen(false)}>Work Experience</Link>
            <Link href="/projects" onClick={() => setIsOpen(false)}>Projects</Link>
            {/* Mobile Resume Button */}
            <a href="/resume.pdf" download className="pt-2">
              <button className="w-full cursor-pointer bg-gradient-to-b from-black to-purple-900 shadow-[0px_4px_32px_0_rgba(106,27,154,.70)] px-6 py-3 rounded-xl border-[2px] border-slate-500 text-white font-medium group">
                <div className="relative overflow-hidden w-full text-center">
                  <p className="group-hover:-translate-y-7 duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)]">
                    Resumé
                  </p>
                  <p className="absolute top-7 left-0 w-full group-hover:top-0 duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)]">
                    Download
                  </p>
                </div>
              </button>
            </a>
          </div>
        )}
      </motion.div>
    </motion.div>
  )
}
