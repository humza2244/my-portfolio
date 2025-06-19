'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import Navbar from '../components/navbar'
import { Typewriter } from 'react-simple-typewriter'
import ParticlesComponent from '../components/particles'
import BottomNavbar from '../components/bottomnavbar'
import { ShootingStars } from '../components/ShootingStars'

const techStack = [
  { name: 'Python', src: '/python.png' },
  { name: 'JavaScript', src: '/javascript.png' },
  { name: 'CSS', src: '/CSS.png' },
  { name: 'HTML', src: '/html.png' },
  { name: 'React.js', src: '/react.png' }
]



export default function Home() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const [hoveredTech, setHoveredTech] = useState<number | null>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <>
      <Navbar />
      <BottomNavbar />
      <ShootingStars quantity={50} />

      <div className="relative w-full min-h-screen overflow-hidden bg-gradient-to-br from-black via-purple-950/20 to-black">
        <ParticlesComponent id="particles" />

        {/* floating orb that follows mouse */}
        <div 
          className="fixed w-96 h-96 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl pointer-events-none z-10"
          style={{
            left: mousePos.x - 192,
            top: mousePos.y - 192,
            transition: 'all 0.3s ease-out'
          }}
        />

        {/* main content - added proper padding to avoid navbar overlap */}
        <div className="relative z-20 flex flex-col items-center justify-center min-h-screen px-4 pt-32 pb-32">
          
          {/* typewriter section */}
          <div className="text-center mb-16">
            <div className="text-4xl sm:text-6xl font-mono text-white mb-6 min-h-[80px] flex items-center justify-center">
              <span className="text-white">
                <Typewriter
                  words={[
                    'Software Engineer?',
                    'UX/UI Designer?', 
                    'Mobile Developer?',
                    'Meet: Humza Baig'
                  ]}
                  loop={false}
                  cursor
                  cursorStyle="|"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1500}
                />
              </span>
            </div>
            
            <p className="text-purple-300 text-lg font-mono max-w-2xl mx-auto opacity-90">
              Building the future, one line of code at a time ✨
            </p>
          </div>

          {/* tech stack - now properly spaced */}
          <div className="w-full max-w-5xl mx-auto mb-16">
            <h3 className="text-2xl font-bold text-center mb-8 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              Tech Stack
            </h3>
            
            {/* Desktop layout */}
            <div className="hidden md:flex justify-center items-center gap-12 flex-wrap">
              {techStack.map((tech, index) => (
                <div
                  key={tech.name}
                  className="group cursor-pointer"
                  onMouseEnter={() => setHoveredTech(index)}
                  onMouseLeave={() => setHoveredTech(null)}
                >
                  <div className="relative">
                    {/* glow effect */}
                    <div className="absolute -inset-6 bg-gradient-to-r from-purple-500/30 to-pink-500/30 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500" />
                    
                    {/* tech icon */}
                    <div className="relative bg-black/40 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-6 group-hover:border-purple-400/60 transition-all duration-300 group-hover:scale-110">
                      <Image
                        src={tech.src}
                        alt={tech.name}
                        width={64}
                        height={64}
                        className="w-16 h-16 drop-shadow-lg"
                      />
                    </div>
                    
                    {/* tech name popup */}
                    {hoveredTech === index && (
                      <div className="absolute -bottom-14 left-1/2 transform -translate-x-1/2 bg-black/80 backdrop-blur-sm border border-purple-500/50 px-4 py-2 rounded-lg text-white text-sm font-mono whitespace-nowrap z-50">
                        {tech.name}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Mobile layout */}
            <div className="md:hidden grid grid-cols-2 gap-8 max-w-sm mx-auto">
              {techStack.map((tech, index) => (
                <div
                  key={tech.name}
                  className="group cursor-pointer"
                  onMouseEnter={() => setHoveredTech(index)}
                  onMouseLeave={() => setHoveredTech(null)}
                >
                  <div className="relative">
                    {/* glow effect */}
                    <div className="absolute -inset-4 bg-gradient-to-r from-purple-500/30 to-pink-500/30 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500" />
                    
                    {/* tech icon */}
                    <div className="relative bg-black/40 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-4 group-hover:border-purple-400/60 transition-all duration-300 group-hover:scale-110 flex flex-col items-center">
                      <Image
                        src={tech.src}
                        alt={tech.name}
                        width={48}
                        height={48}
                        className="w-12 h-12 drop-shadow-lg mb-2"
                      />
                      <span className="text-white text-xs font-mono">{tech.name}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* about preview section */}
          <div className="bg-black/40 backdrop-blur-xl border border-purple-500/30 rounded-3xl p-8 max-w-4xl mx-auto mb-12 hover:border-purple-400/60 transition-all duration-500">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent mb-6 text-center">
              Who Am I? 🚀
            </h2>
            <p className="text-white font-mono text-lg leading-relaxed text-center">
              I&apos;m a <span className="text-purple-400 font-bold">Computer Science student</span> at Wilfrid Laurier University passionate about 
              <span className="text-pink-400"> blockchain technology</span>, <span className="text-purple-400">mobile development</span>, and 
              <span className="text-pink-400"> UI/UX design</span>. Currently building STELLAR - a mobile-first crypto trading app for Solana! 
            </p>
          </div>

          {/* call to action - added margin bottom to avoid bottom navbar overlap */}
          <div className="flex flex-col sm:flex-row gap-6 items-center mb-20">
            <a
              href="/about"
              className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl text-white font-mono text-lg hover:from-purple-500 hover:to-pink-500 transition-all duration-300 shadow-lg shadow-purple-500/25 hover:scale-105"
            >
              <span>Learn More About Me</span>
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
            
            <a
              href="/projects"
              className="group inline-flex items-center gap-3 px-8 py-4 bg-black/40 backdrop-blur-sm border border-purple-500/30 rounded-2xl text-white font-mono text-lg hover:border-purple-400/60 hover:bg-black/50 transition-all duration-300 hover:scale-105"
            >
              <span>View My Projects</span>
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
            </a>
          </div>
        </div>

        {/* floating animation rings */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-32 h-32 border border-purple-500/20 rounded-full animate-pulse" />
          <div className="absolute top-3/4 right-1/4 w-24 h-24 border border-pink-500/20 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="absolute top-1/2 right-1/3 w-16 h-16 border border-purple-400/20 rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
        </div>
      </div>
    </>
  )
}
