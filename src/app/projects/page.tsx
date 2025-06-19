'use client'
import { useState } from 'react'
import Navbar from '../components/navbar'
import ParticlesComponent from '../components/particles'
import BottomNavbar from '../components/bottomnavbar'
import { ShootingStars } from '../components/ShootingStars'
import Image from 'next/image'

const projects = [
  {
    id: 1,
    title: "STELLAR",
    subtitle: "Mobile-First Crypto Trading App",
    description: "A revolutionary mobile-first crypto trading application built specifically for trading memecoins on the Solana blockchain. STELLAR makes finding, tracking, and sniping new token releases fast, convenient, and accessible.",
    longDescription: "STELLAR is my flagship project - a comprehensive mobile-first crypto trading app designed specifically for the Solana blockchain. The app focuses on high-speed trading decisions in fast-changing markets, with an emphasis on minimalist design, lower-friction navigation, and real-time delivery of on-chain data. Built with React Native, WebSocket connections for real-time data, and integrating with Solana's blockchain infrastructure.",
    tech: ["React Native", "TypeScript", "Solana Web3.js", "WebSocket", "Figma", "Firebase"],
    images: ["stellar1.jpg", "stellar2.jpg", "stellar3.jpg", "stellar4.jpg", "stellar5.jpg"],
    features: [
      "Real-time token tracking and price monitoring",
      "Advanced charting with technical indicators", 
      "Token sniping with customizable parameters",
      "Portfolio management and P&L tracking",
      "Mobile-first design optimized for trading",
      "WebSocket integration for instant updates"
    ],
    status: "In Development",
    github: null,
    live: null,
    color: "from-purple-500 to-pink-600"
  },
  {
    id: 2,
    title: "Auto Sniper Bot",
    subtitle: "Automated Crypto Trading Bot",
    description: "A sophisticated automated trading bot for cryptocurrency markets, capable of executing trades based on predefined strategies and market conditions.",
    longDescription: "An advanced automated trading system I developed for cryptocurrency markets. The bot uses various technical indicators and market analysis to make trading decisions autonomously. Features include risk management, backtesting capabilities, and real-time market monitoring.",
    tech: ["Python", "ccxt", "pandas", "numpy", "API Integration"],
    images: [],
    features: [
      "Automated trading execution",
      "Multiple exchange support",
      "Technical analysis integration",
      "Risk management systems",
      "Backtesting capabilities",
      "Real-time monitoring dashboard"
    ],
    status: "Completed",
    github: "https://github.com/humza2244",
    live: null,
    color: "from-blue-500 to-purple-600"
  },
  {
    id: 3,
    title: "Portfolio Website",
    subtitle: "Personal Brand & Developer Identity",
    description: "My personal portfolio website showcasing my skills, projects, and experience. Built with Next.js, featuring modern animations and responsive design.",
    longDescription: "This very website you're viewing! Built from scratch using Next.js, Tailwind CSS, and Framer Motion. Features include particle backgrounds, smooth animations, responsive design, and optimized performance. The site showcases my work and provides insight into my development process.",
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion", "Vercel"],
    images: [],
    features: [
      "Responsive design for all devices",
      "Interactive particle background",
      "Smooth animations and transitions",
      "Optimized performance",
      "SEO friendly",
      "Modern UI/UX design"
    ],
    status: "Live",
    github: "https://github.com/humza2244/my-portfolio",
    live: "https://humzabaig.com",
    color: "from-green-500 to-blue-600"
  }
]

export default function ProjectsPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [expandedProject, setExpandedProject] = useState<number | null>(null)

  return (
    <>
      <Navbar />
      <ParticlesComponent id="particles" />
      <ShootingStars quantity={40} />
      <BottomNavbar />

      <div className="relative min-h-screen bg-gradient-to-br from-black via-purple-950/20 to-black">
        {/* floating background elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-20 left-20 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-40 right-20 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
          <div className="absolute top-1/2 left-1/3 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }} />
        </div>

        <div className="relative w-full min-h-screen px-6 py-32 sm:py-40 max-w-6xl mx-auto text-white">
          
          {/* main header */}
          <div className="text-center mb-20">
            <h1 className="text-6xl sm:text-7xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600 bg-clip-text text-transparent mb-6">
              My Projects
            </h1>
            <p className="text-purple-300 font-mono text-xl max-w-3xl mx-auto">
              Building the future through code, design, and innovation ✨
            </p>
          </div>

          {/* projects grid */}
          <div className="space-y-16">
            {projects.map((project) => (
              <div
                key={project.id}
                className="bg-black/40 backdrop-blur-xl border border-purple-500/30 rounded-3xl p-8 hover:border-purple-400/60 transition-all duration-500"
              >
                {/* project header */}
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-8">
                  <div className="mb-4 lg:mb-0">
                    <div className="flex items-center gap-4 mb-4">
                      <div className={`w-4 h-4 rounded-full bg-gradient-to-r ${project.color} animate-pulse`} />
                      <span className={`px-3 py-1 rounded-full text-xs font-mono border ${
                        project.status === 'Live' ? 'bg-green-500/20 border-green-500/50 text-green-300' :
                        project.status === 'In Development' ? 'bg-yellow-500/20 border-yellow-500/50 text-yellow-300' :
                        'bg-blue-500/20 border-blue-500/50 text-blue-300'
                      }`}>
                        {project.status}
                      </span>
                    </div>
                    <h2 className={`text-4xl font-bold mb-2 bg-gradient-to-r ${project.color} bg-clip-text text-transparent`}>
                      {project.title}
                    </h2>
                    <p className="text-purple-300 font-mono text-xl">{project.subtitle}</p>
                  </div>
                  
                  {/* action buttons */}
                  <div className="flex gap-4">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-black/50 border border-purple-500/30 rounded-xl text-white font-mono hover:border-purple-400/60 transition-all duration-300 hover:scale-105"
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                        </svg>
                        GitHub
                      </a>
                    )}
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r ${project.color} rounded-xl text-white font-mono hover:scale-105 transition-all duration-300 shadow-lg`}
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>

                {/* project description */}
                <p className="text-white font-mono text-lg leading-relaxed mb-8">
                  {expandedProject === project.id ? project.longDescription : project.description}
                </p>

                {/* expand/collapse button */}
                <button
                  onClick={() => setExpandedProject(expandedProject === project.id ? null : project.id)}
                  className="mb-8 text-purple-400 hover:text-purple-300 font-mono text-sm transition-colors duration-300"
                >
                  {expandedProject === project.id ? '▼ Show Less' : '▶ Read More'}
                </button>

                {/* features (shown when expanded) */}
                {expandedProject === project.id && (
                  <div className="mb-8">
                    <h3 className="text-xl font-semibold mb-4 text-purple-300">Key Features</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {project.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0" />
                          <span className="font-mono text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* tech stack */}
                <div className="mb-8">
                  <h3 className="text-lg font-semibold mb-4 text-purple-300">Tech Stack</h3>
                  <div className="flex flex-wrap gap-3">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-4 py-2 bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-purple-500/30 rounded-full text-purple-300 font-mono text-sm hover:border-purple-400/50 hover:scale-105 transition-all duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* project images */}
                {project.images.length > 0 && (
                  <div>
                    <h3 className="text-lg font-semibold mb-4 text-purple-300">Screenshots</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                      {project.images.map((src, idx) => (
                        <div
                          key={idx}
                          className="cursor-pointer group"
                          onClick={() => setSelectedImage(`/${src}`)}
                        >
                          <div className="relative overflow-hidden rounded-xl border border-purple-600/50 hover:border-purple-400 transition-all duration-300 group-hover:scale-105">
                            <Image
                              src={`/${src}`}
                              alt={`${project.title} screenshot ${idx + 1}`}
                              width={300}
                              height={500}
                              className="object-cover w-full h-64 group-hover:scale-110 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                              </svg>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* call to action */}
          <div className="text-center mt-20">
            <div className="bg-black/40 backdrop-blur-xl border border-purple-500/30 rounded-3xl p-12 hover:border-purple-400/60 transition-all duration-500">
              <h3 className="text-3xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
                Let&apos;s Build Something Amazing! 🚀
              </h3>
              <p className="text-purple-300 font-mono text-lg mb-8 max-w-2xl mx-auto">
                I&apos;m always excited to work on new projects and collaborate with fellow developers and designers.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <a
                  href="https://github.com/humza2244"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl text-white font-mono text-lg hover:from-purple-500 hover:to-pink-500 transition-all duration-300 shadow-lg shadow-purple-500/25 hover:scale-105"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                  </svg>
                  <span>View More on GitHub</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* image modal */}
        {selectedImage && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setSelectedImage(null)}
          >
            <div
              className="relative max-w-4xl max-h-[90vh] rounded-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={selectedImage}
                alt="Project screenshot"
                width={1200}
                height={800}
                className="object-contain"
              />
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 w-10 h-10 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-all duration-300"
              >
                ✕
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  )
}


