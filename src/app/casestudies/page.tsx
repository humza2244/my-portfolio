'use client'
import { useState } from 'react'
import Navbar from '../components/navbar'
import ParticlesComponent from '../components/particles'
import BottomNavbar from '../components/bottomnavbar'
import { ShootingStars } from '../components/ShootingStars'
import { motion } from 'framer-motion'
import Image from 'next/image'

const caseStudies = [
  {
    id: 1,
    title: "STELLAR UX Case Study",
    subtitle: "Mobile-First Crypto Trading Revolution",
    category: "Mobile App Design",
    tags: ["UX/UI Design", "Mobile-First", "Crypto", "WebSocket", "Real-time"],
    overview: "STELLAR is a mobile-first crypto trading app built specifically for trading of memecoins on the Solana blockchain that makes the entire workflow of finding, keeping track of, and snipping new token releases fast, convenient, and accessible. It has been designed specifically to facilitate high-speed trading decisions in fast-changing markets, with an emphasis on minimalist design, lower-friction navigation, and real-time delivery of on-chain data.",
    problem: "Previously, users were required to switch between a series of applications to accomplish simple things such as charting, wallet tracking, or token sniping. There were slow, buggy, and not mobile-optimized tools out there. Data was behind real-time, trending tokens were not surfaced reliably, and WebSocket connections were flaky — frustrating both new users and power users.",
    research: "I contacted more than 300 cryptocurrency traders both on Telegram and Discord to confirm areas of pain. I held informal conversations, collected polls, and analyzed discussion threads to further enrich my insights. Many users cited slow app response times, inaccurate chart data, clunky UI/UX, and fragmented workflows as major issues. My analysis was further guided by existing apps like Dex Screener, whose shortcomings on mobile were frequently mentioned, and Phantom Wallet, which served as a good model of mobile friendliness. I complemented user research with personal hands-on experience as an active meme coin trader, understanding where existing solutions fall short under real trading pressure. This combined user-centered and experiential approach shaped the clear, performance-focused vision behind STELLAR.",
    wireframes: "I first drew early wireframes by hand, then built Figma prototypes. Version 1 was too large and color-balance-challenged, so I refined with softer glow treatments, clearer spacing, and a left-right taskbar flow that mirrored actual trader behavior: Wallet → Explore/Search → Charting → Settings. It made navigation intuitive.",
    finalDesigns: "Each of Home, Trending, Advanced Charts, Buy/Sell, Wallet, and even Settings was painstakingly handcrafted. It has a radiant dark color scheme, silky haptic input, and silky smooth animations. Startup founders and engineers described STELLAR as having one of the cleanest, most intuitive UIs they've ever encountered in their careers.",
    reflection: "I'm pleased that our final experience feels so immersive, fast, and intuitive. Working on STELLAR, I learned hands-on UX validation, real-time WebSocket data troubleshooting, and design performance optimization. In next steps, we'll be adding more chain support and streamlining server costs as we find investment to continue growing development.",
    images: ["stellar1.jpg", "stellar2.jpg", "stellar3.jpg"],
    wireframeImage: "oldfigmadesign.png",
    gradient: "from-purple-500 to-pink-600"
  },
  {
    id: 2,
    title: "Portfolio Website UX Case Study",
    subtitle: "Personal Brand & Developer Identity",
    category: "Web Design",
    tags: ["Personal Branding", "Web Design", "Next.js", "Tailwind", "Animation"],
    overview: "My personal portfolio was designed to highlight my skills, creativity, and identity through a clean, minimalist interface. Built for recruiters, peers, and friends, it proves that simplicity, polish, and personality can make a powerful impression without complex overdesign.",
    problem: "Many portfolios are either too sparse and plain — or overwhelmingly technical and busy. I wanted to balance minimalism with engagement: enough life to feel creative, but clean enough to emphasize my work and skills.",
    research: "I studied portfolios across Reddit, gathered feedback from friends and peers, and focused on how developers and recruiters interact with sites. Visual clarity, fast navigation, and personality were the winning elements users valued most.",
    wireframes: "Using Figma and sketches, I iterated on different homepage layouts, tech stack sections, and nav designs. The design evolved naturally, balancing structure and creative freestyling to achieve a layout that felt welcoming and logical.",
    finalDesigns: "My final portfolio features a constellation particle background, glowing hover effects, a responsive layout, and a typewriter intro animation. The experience feels dynamic yet focused, with every interaction reinforcing simplicity and polish.",
    reflection: "This project dramatically leveled up my skills with Tailwind CSS, React, and UX design thinking. I'm proud of how fluid and personal the final experience feels. Next, I plan to add scroll animations and even tighter navbar behaviors to make the site even more dynamic.",
    images: [],
    wireframeImage: "",
    gradient: "from-blue-500 to-purple-600"
  }
]

export default function CaseStudiesPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [activeStudy, setActiveStudy] = useState<number>(1)

  return (
    <>
      <Navbar />
      <ParticlesComponent id="particles" />
      <ShootingStars quantity={40} />
      <BottomNavbar />

      {/* floating nav */}
      <div className="fixed left-8 top-[35%] z-50 hidden font-mono sm:flex flex-col gap-4 text-sm">
        <motion.a
          href="#stellar"
          className={`hover:text-white transition duration-500 hover:scale-105 ${activeStudy === 1 ? 'text-purple-400' : 'text-purple-300'}`}
          onClick={() => setActiveStudy(1)}
          whileHover={{ x: 5 }}
        >
          STELLAR
        </motion.a>
        <motion.a
          href="#portfolio"
          className={`hover:text-white transition duration-500 hover:scale-105 ${activeStudy === 2 ? 'text-purple-400' : 'text-purple-300'}`}
          onClick={() => setActiveStudy(2)}
          whileHover={{ x: 5 }}
        >
          Portfolio
        </motion.a>
      </div>

      <div className="relative min-h-screen bg-gradient-to-br from-black via-purple-950/20 to-black">
        {/* floating background elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-20 left-20 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-40 right-20 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
          <div className="absolute top-1/2 left-1/3 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }} />
        </div>

        <div className="relative w-full min-h-screen px-6 py-32 sm:py-40 max-w-6xl mx-auto text-white scroll-smooth">
          
          {/* main header */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center mb-20"
          >
            <h1 className="text-6xl sm:text-7xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600 bg-clip-text text-transparent mb-6">
              Case Studies
            </h1>
            <p className="text-purple-300 font-mono text-xl max-w-3xl mx-auto">
              Deep dives into design thinking, user research, and product development
            </p>
          </motion.div>

          {/* case studies */}
          {caseStudies.map((study, studyIndex) => (
            <motion.section
              key={study.id}
              id={study.id === 1 ? "stellar" : "portfolio"}
              className="scroll-mt-32 mb-32"
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: studyIndex * 0.3 }}
            >
              {/* study header */}
              <div className="text-center mb-16">
                <div className="flex items-center justify-center gap-4 mb-6">
                  <div className={`w-4 h-4 rounded-full bg-gradient-to-r ${study.gradient} animate-pulse`} />
                  <span className="text-purple-300 font-mono text-sm">{study.category}</span>
                </div>
                <h2 className="text-4xl sm:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
                  {study.title}
                </h2>
                <p className="text-purple-300 font-mono text-xl">{study.subtitle}</p>
                
                {/* tags */}
                <div className="flex flex-wrap justify-center gap-3 mt-6">
                  {study.tags.map((tag, tagIndex) => (
                    <motion.span
                      key={tag}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 1 + studyIndex * 0.3 + tagIndex * 0.1 }}
                      className="px-4 py-2 bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-purple-500/30 rounded-full text-purple-300 font-mono text-sm hover:border-purple-400/50 hover:scale-105 transition-all duration-300"
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>
              </div>

              {/* study content grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 mb-16">
                
                {/* overview */}
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1, duration: 0.8 }}
                  className="bg-black/40 backdrop-blur-xl border border-purple-500/30 rounded-3xl p-8 hover:border-purple-400/60 transition-all duration-500 hover:scale-[1.02] hover:shadow-xl hover:shadow-purple-500/20"
                >
                  <h3 className="text-2xl font-semibold mb-4 text-purple-300">Overview</h3>
                  <p className="text-base leading-relaxed text-white font-mono">
                    {study.overview}
                  </p>
                </motion.div>

                {/* problem */}
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.2, duration: 0.8 }}
                  className="bg-black/40 backdrop-blur-xl border border-purple-500/30 rounded-3xl p-8 hover:border-purple-400/60 transition-all duration-500 hover:scale-[1.02] hover:shadow-xl hover:shadow-purple-500/20"
                >
                  <h3 className="text-2xl font-semibold mb-4 text-purple-300">Problem</h3>
                  <p className="text-base leading-relaxed text-white font-mono">
                    {study.problem}
                  </p>
                </motion.div>

                {/* research */}
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.4, duration: 0.8 }}
                  className="bg-black/40 backdrop-blur-xl border border-purple-500/30 rounded-3xl p-8 hover:border-purple-400/60 transition-all duration-500 hover:scale-[1.02] hover:shadow-xl hover:shadow-purple-500/20"
                >
                  <h3 className="text-2xl font-semibold mb-4 text-purple-300">Research</h3>
                  <p className="text-base leading-relaxed text-white font-mono">
                    {study.research}
                  </p>
                </motion.div>

                {/* wireframes */}
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.6, duration: 0.8 }}
                  className="bg-black/40 backdrop-blur-xl border border-purple-500/30 rounded-3xl p-8 hover:border-purple-400/60 transition-all duration-500 hover:scale-[1.02] hover:shadow-xl hover:shadow-purple-500/20"
                >
                  <h3 className="text-2xl font-semibold mb-4 text-purple-300">Wireframes</h3>
                  <p className="text-base leading-relaxed mb-4 text-white font-mono">
                    {study.wireframes}
                  </p>
                  {study.wireframeImage && (
                    <div className="w-full flex justify-center">
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="cursor-pointer"
                        onClick={() => setSelectedImage(`/${study.wireframeImage}`)}
                      >
                        <Image
                          src={`/${study.wireframeImage}`}
                          alt="Wireframe preview"
                          width={200}
                          height={100}
                          className="rounded-xl border border-purple-600 hover:border-purple-400 transition-all duration-300"
                        />
                      </motion.div>
                    </div>
                  )}
                </motion.div>
              </div>

              {/* final designs section */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.8, duration: 0.8 }}
                className="bg-black/40 backdrop-blur-xl border border-purple-500/30 rounded-3xl p-8 mb-10 hover:border-purple-400/60 transition-all duration-500"
              >
                <h3 className="text-2xl font-semibold mb-4 text-purple-300">Final Designs</h3>
                <p className="text-base leading-relaxed mb-6 text-white font-mono">
                  {study.finalDesigns}
                </p>
                
                {study.images.length > 0 && (
                  <div className="flex flex-wrap justify-center gap-6">
                    {study.images.map((src, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 2 + idx * 0.2 }}
                        whileHover={{ scale: 1.05 }}
                        className="cursor-pointer"
                        onClick={() => setSelectedImage(`/${src}`)}
                      >
                        <Image
                          src={`/${src}`}
                          alt={`Final screen ${idx + 1}`}
                          width={250}
                          height={500}
                          className="rounded-xl border border-purple-600 hover:border-purple-400 transition-all duration-300 shadow-lg shadow-purple-500/20"
                        />
                      </motion.div>
                    ))}
                  </div>
                )}
              </motion.div>

              {/* reflection */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2.2, duration: 0.8 }}
                className="bg-black/40 backdrop-blur-xl border border-purple-500/30 rounded-3xl p-8 hover:border-purple-400/60 transition-all duration-500"
              >
                <h3 className="text-2xl font-semibold mb-4 text-purple-300">Reflection</h3>
                <p className="text-base leading-relaxed text-white font-mono">
                  {study.reflection}
                </p>
              </motion.div>
            </motion.section>
          ))}
        </div>

        {/* image modal */}
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="relative max-w-4xl max-h-[90vh] rounded-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={selectedImage}
                alt="Case study image"
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
            </motion.div>
          </motion.div>
        )}
      </div>
    </>
  )
}
