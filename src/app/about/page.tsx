'use client'
import { useEffect, useState } from 'react'
import { Typewriter } from 'react-simple-typewriter'
import Navbar from '../components/navbar'
import BottomNavbar from '../components/bottomnavbar'
import ParticlesComponent from '../components/particles'
import { ShootingStars } from '../components/ShootingStars'
import Image from 'next/image'

const skills = [
  'Python', 'JavaScript', 'TypeScript', 'React.js', 'Node.js', 'Next.js',
  'HTML/CSS', 'SQL', 'Firebase', 'Git', 'Figma', 'UX/UI Design',
  'Mobile Development', 'Blockchain', 'Solana', 'WebSocket APIs'
]

export default function AboutPage() {
  const [skillIndex, setSkillIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setSkillIndex((prev) => (prev + 1) % skills.length)
    }, 150)
    return () => clearInterval(interval)
  }, [])

  return (
    <>
      <Navbar />
      <BottomNavbar />
      <ParticlesComponent id="particles" />
      <ShootingStars quantity={30} />

      <div className="relative min-h-screen bg-gradient-to-br from-black via-purple-950/20 to-black">
        {/* floating background elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-20 left-20 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-40 right-20 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
          <div className="absolute top-1/2 left-1/3 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }} />
        </div>

        <div className="relative w-full min-h-screen px-6 py-32 sm:py-40 max-w-6xl mx-auto text-white pb-32">
          
          {/* main header */}
          <div className="text-center mb-16">
            <h1 className="text-6xl sm:text-7xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600 bg-clip-text text-transparent mb-6">
              About Me
            </h1>
            <p className="text-purple-300 font-mono text-xl">
              <Typewriter
                words={['Software Engineer', 'UX/UI Designer', 'Mobile Developer', 'Blockchain Enthusiast']}
                loop={0}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={2000}
              />
            </p>
          </div>

          {/* main content grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            
            {/* left: image and intro */}
            <div className="space-y-8">
              
              {/* profile image */}
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-purple-500/30 to-pink-500/30 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500" />
                <div className="relative bg-black/40 backdrop-blur-xl border border-purple-500/30 rounded-3xl p-8 group-hover:border-purple-400/60 transition-all duration-500">
                  <div className="flex justify-center mb-6">
                    <div className="relative">
                      <div className="absolute -inset-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur opacity-75 animate-pulse" />
                      <Image
                        src="/myself.jpg?v=2"
                        alt="Humza Baig"
                        width={200}
                        height={200}
                        className="relative rounded-full border-4 border-purple-500/50"
                        priority
                        unoptimized
                      />
                    </div>
                  </div>
                  <h2 className="text-3xl font-bold text-center mb-4 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
                    Humza Baig
                  </h2>
                  <p className="text-purple-300 font-mono text-center text-lg">
                    Computer Science Student • Software Engineer • Designer
                  </p>
                </div>
              </div>

              {/* quick facts */}
              <div className="bg-black/40 backdrop-blur-xl border border-purple-500/30 rounded-3xl p-8 hover:border-purple-400/60 transition-all duration-500">
                <h3 className="text-2xl font-semibold mb-6 text-purple-300">Quick Facts</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-purple-500 rounded-full animate-pulse" />
                    <span className="font-mono">Located in Ontario, Canada</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-pink-500 rounded-full animate-pulse" />
                    <span className="font-mono">Computer Science @ Wilfrid Laurier University</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse" />
                    <span className="font-mono">Experience @ Martinrea International</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                    <span className="font-mono">Building STELLAR - Crypto Trading App</span>
                  </div>
                </div>
              </div>
            </div>

            {/* right: detailed info */}
            <div className="space-y-8">
              
              {/* about me text */}
              <div className="bg-black/40 backdrop-blur-xl border border-purple-500/30 rounded-3xl p-8 hover:border-purple-400/60 transition-all duration-500">
                <h3 className="text-2xl font-semibold mb-6 text-purple-300">My Story</h3>
                <div className="space-y-4 font-mono text-base leading-relaxed">
                  <p>
                    Hey there! I'm <span className="text-purple-400 font-bold">Humza</span>, I'm a proud Computer Science student at 
                    <span className="text-pink-400"> Wilfrid Laurier University</span>. I enjoy building things that positively impact people's lives.
                  </p>
                  <p>
                    Right now, I'm pouring my heart into <span className="text-purple-400 font-bold">STELLAR</span> - a mobile-first crypto trading app 
                    for the Solana blockchain. The project is all about speed, simplicity, and beautiful design. I love this project because I believe 
                    crypto trading should never be complicated or ugly. 
                  </p>
                  <p>
                  When I am not coding, I enjoy sketching UI mockups, exploring the latest blockchain innovations, or gaming while thinking 
                  of my next idea.
                  </p>
                  <p>
                    I'm a firm believer that <span className="text-pink-400">beautiful code</span> and <span className="text-purple-400">stunning design</span> 
                    go hand in hand. There is magic in creating products that people don't simply use, they enjoy using.
                  </p>
                </div>
              </div>

              {/* current focus */}
              <div className="bg-black/40 backdrop-blur-xl border border-purple-500/30 rounded-3xl p-8 hover:border-purple-400/60 transition-all duration-500">
                <h3 className="text-2xl font-semibold mb-6 text-purple-300">What I'm Up To</h3>
                <div className="space-y-4 font-mono">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl"></span>
                    <div>
                      <p className="font-bold text-purple-400">Building STELLAR</p>
                      <p className="text-sm opacity-80">My flagship mobile-first crypto trading app for Solana. It's going to change everything.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-2xl"></span>
                    <div>
                      <p className="font-bold text-pink-400">Studying Computer Science</p>
                      <p className="text-sm opacity-80">Diving deep into software engineering and mobile development at Laurier.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-2xl"></span>
                    <div>
                      <p className="font-bold text-blue-400">Working at Martinrea</p>
                      <p className="text-sm opacity-80">Application Support Specialist in the IT Department, solving real-world problems.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* goals */}
              <div className="bg-black/40 backdrop-blur-xl border border-purple-500/30 rounded-3xl p-8 hover:border-purple-400/60 transition-all duration-500">
                <h3 className="text-2xl font-semibold mb-6 text-purple-300">Dreams & Ambitions</h3>
                <div className="space-y-3 font-mono">
                  <p>Launch STELLAR and revolutionize how people trade crypto on mobile</p>
                  <p>Land an incredible software engineering role at a company that values innovation</p>
                  <p>Build products that genuinely impact millions of users worldwide</p>
                  <p>Become a React Native expert and master mobile development</p>
                  <p>Keep pushing the boundaries of what's possible in UX/UI design</p>
                </div>
              </div>
            </div>
          </div>

          {/* skills section */}
          <div className="bg-black/40 backdrop-blur-xl border border-purple-500/30 rounded-3xl p-8 mb-16 hover:border-purple-400/60 transition-all duration-500">
            <h3 className="text-3xl font-semibold mb-8 text-center bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
              Skills & Technologies
            </h3>
            
            {/* animated skill display */}
            <div className="text-center mb-8">
              <div className="text-2xl font-mono text-purple-300 min-h-[40px] flex items-center justify-center">
                Currently highlighting: <span className="text-white ml-2 font-bold">{skills[skillIndex]}</span>
              </div>
            </div>

            {/* skills grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {skills.map((skill, index) => (
                <div
                  key={skill}
                  className={`bg-black/30 border rounded-xl p-4 text-center font-mono text-sm transition-all duration-300 hover:scale-105 cursor-pointer ${
                    index === skillIndex 
                      ? 'border-purple-400 text-purple-300 shadow-lg shadow-purple-500/20' 
                      : 'border-purple-500/30 hover:border-purple-400/60'
                  }`}
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>

          {/* contact cta */}
          <div className="text-center mb-20">
            <div className="bg-black/40 backdrop-blur-xl border border-purple-500/30 rounded-3xl p-12 hover:border-purple-400/60 transition-all duration-500">
              <h3 className="text-3xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
                Let's Connect!
              </h3>
              <p className="text-purple-300 font-mono text-lg mb-8 max-w-2xl mx-auto">
                I'm always excited to discuss new opportunities, collaborate on cool projects, 
                or just chat about the latest in tech and design. Don't be a stranger!
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <a
                  href="/projects"
                  className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl text-white font-mono text-lg hover:from-purple-500 hover:to-pink-500 transition-all duration-300 shadow-lg shadow-purple-500/25 hover:scale-105"
                >
                  <span>View My Projects</span>
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </a>
                
                <a
                  href="/workexperience"
                  className="group inline-flex items-center gap-3 px-8 py-4 bg-black/40 backdrop-blur-sm border border-purple-500/30 rounded-2xl text-white font-mono text-lg hover:border-purple-400/60 hover:bg-black/50 transition-all duration-300 hover:scale-105"
                >
                  <span>My Experience</span>
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0H8m8 0v2a2 2 0 01-2 2H10a2 2 0 01-2-2V6" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}