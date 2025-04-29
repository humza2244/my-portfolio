'use client'

import Navbar from '../components/navbar'
import ParticlesComponent from '../components/particles'
import BottomNavbar from '../components/bottomnavbar'
import { ShootingStars } from '../components/ShootingStars'
import Image from 'next/image'

export default function StellarCaseStudy() {
  return (
    <>
      <Navbar />
      <ParticlesComponent id="particles" />
      <ShootingStars quantity={30} />
      <BottomNavbar />

      {/* Floating Nav */}
      <div className="fixed left-8 top-[35%] z-50 hidden font-mono sm:flex flex-col gap-4 text-sm text-purple-300">
        <a href="#stellar" className="hover:text-white transition duration-500 hover:scale-105">STELLAR</a>
        <a href="#portfolio" className="hover:text-white transition duration-500 hover:scale-105">Portfolio</a>
      </div>

      <div className="relative w-full min-h-screen px-6 py-32 sm:py-40 max-w-6xl mx-auto text-white scroll-smooth">
        {/* STELLAR Case Study */}
        <section id="stellar" className="scroll-mt-32">
          <h1 className="text-5xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
            STELLAR UX Case Study
          </h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
            <div className="bg-white/5 p-6 rounded-2xl border border-purple-700 shadow-lg backdrop-blur-md duration-500 hover:scale-102">
              <h2 className="text-2xl font-semibold mb-4 text-purple-300">Overview</h2>
              <p className="text-base leading-relaxed">
                STELLAR is a mobile-first crypto trading app built specifically for trading of memecoins on the Solana blockchain that makes the entire workflow of finding, keeping track of, and snipping new token releases fast, convenient, and accessible. It has been designed specifically to facilitate high-speed trading decisions in fast-changing markets, with an emphasis on minimalist design, lower-friction navigation, and real-time delivery of on-chain data.
              </p>
            </div>

            <div className="bg-white/5 p-6 rounded-2xl border border-purple-700 shadow-lg backdrop-blur-md duration-500 hover:scale-102">
              <h2 className="text-2xl font-semibold mb-4 text-purple-300">Problem</h2>
              <p className="text-base leading-relaxed">
                Previously, users were required to switch between a series of applications to accomplish simple things such as charting, wallet tracking, or token sniping. There were slow, buggy, and not mobile-optimized tools out there. Data was behind real-time, trending tokens were not surfaced reliably, and WebSocket connections were flaky — frustrating both new users and power users.
              </p>
            </div>

            <div className="bg-white/5 p-6 rounded-2xl border border-purple-700 shadow-lg backdrop-blur-md duration-500 hover:scale-102">
              <h2 className="text-2xl font-semibold mb-4 text-purple-300">Research</h2>
              <p className="text-base leading-relaxed">
                I contacted more than 300 cryptocurrency traders both on Telegram and Discord to confirm areas of pain. I held informal conversations, collected polls, and analyzed discussion threads to further enrich my insights. Many users cited slow app response times, inaccurate chart data, clunky UI/UX, and fragmented workflows as major issues. My analysis was further guided by existing apps like Dex Screener, whose shortcomings on mobile were frequently mentioned, and Phantom Wallet, which served as a good model of mobile friendliness. I complemented user research with personal hands-on experience as an active meme coin trader, understanding where existing solutions fall short under real trading pressure. This combined user-centered and experiential approach shaped the clear, performance-focused vision behind STELLAR.
              </p>
            </div>

            <div className="bg-white/5 p-6 flex flex-col rounded-2xl border border-purple-700 shadow-lg backdrop-blur-md duration-500 hover:scale-102">
              <h2 className="text-2xl font-semibold mb-4 text-purple-300">Wireframes</h2>
              <p className="text-base leading-relaxed mb-4">
                I first drew early wireframes by hand, then built Figma prototypes. Version 1 was too large and color-balance-challenged, so I refined with softer glow treatments, clearer spacing, and a left-right taskbar flow that mirrored actual trader behavior: Wallet → Explore/Search → Charting → Settings. It made navigation intuitive.
              </p>
              <div className="w-full flex justify-center">
                <Image
                  src="/oldfigmadesign.png"
                  alt="Wireframe preview"
                  width={200}
                  height={100}
                  className="rounded-xl border border-purple-600"
                />
              </div>
            </div>

            <div className="bg-white/5 p-6 sm:col-span-2 rounded-2xl border border-purple-700 shadow-lg backdrop-blur-md duration-500 hover:scale-102">
              <h2 className="text-2xl font-semibold mb-4 text-purple-300">Final Designs</h2>
              <p className="text-base leading-relaxed mb-6">
                Each of Home, Trending, Advanced Charts, Buy/Sell, Wallet, and even Settings was painstakingly handcrafted. It has a radiant dark color scheme, silky haptic input, and silky smooth animations. Startup founders and engineers described STELLAR as having one of the cleanest, most intuitive UIs they&rsquo;ve ever encountered in their careers.
              </p>
              <div className="flex flex-wrap justify-center gap-6">
                {['stellar1.jpg', 'stellar2.jpg', 'stellar3.jpg'].map((src, idx) => (
                  <Image
                    key={idx}
                    src={`/${src}`}
                    alt={`Final screen ${idx + 1}`}
                    width={250}
                    height={500}
                    className="rounded-xl border border-purple-600"
                  />
                ))}
              </div>
            </div>

            <div className="bg-white/5 p-6 sm:col-span-2 rounded-2xl border border-purple-700 shadow-lg backdrop-blur-md duration-500 hover:scale-102">
              <h2 className="text-2xl font-semibold mb-4 text-purple-300">Reflection</h2>
              <p className="text-base leading-relaxed">
                I&rsquo;m pleased that our final experience feels so immersive, fast, and intuitive. Working on STELLAR, I learned hands-on UX validation, real-time WebSocket data troubleshooting, and design performance optimization. In next steps, we&rsquo;ll be adding more chain support and streamlining server costs as we find investment to continue growing development.
              </p>
            </div>
          </div>
        </section>

        {/* Portfolio Website Case Study */}
        <section id="portfolio" className="scroll-mt-32 mt-32">
          <h1 className="text-5xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
            Portfolio Website UX Case Study
          </h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
            <div className="bg-white/5 p-6 rounded-2xl border border-purple-700 shadow-lg backdrop-blur-md duration-500 hover:scale-102">
              <h2 className="text-2xl font-semibold mb-4 text-purple-300">Overview</h2>
              <p className="text-base leading-relaxed">
                My personal portfolio was designed to highlight my skills, creativity, and identity through a clean, minimalist interface. Built for recruiters, peers, and friends, it proves that simplicity, polish, and personality can make a powerful impression without complex overdesign.
              </p>
            </div>
            <div className="bg-white/5 p-6 rounded-2xl border border-purple-700 shadow-lg backdrop-blur-md duration-500 hover:scale-102">
              <h2 className="text-2xl font-semibold mb-4 text-purple-300">Problem</h2>
              <p className="text-base leading-relaxed">
                Many portfolios are either too sparse and plain — or overwhelmingly technical and busy. I wanted to balance minimalism with engagement: enough life to feel creative, but clean enough to emphasize my work and skills.
              </p>
            </div>
            <div className="bg-white/5 p-6 rounded-2xl border border-purple-700 shadow-lg backdrop-blur-md duration-500 hover:scale-102">
              <h2 className="text-2xl font-semibold mb-4 text-purple-300">Research</h2>
              <p className="text-base leading-relaxed">
                I studied portfolios across Reddit, gathered feedback from friends and peers, and focused on how developers and recruiters interact with sites. Visual clarity, fast navigation, and personality were the winning elements users valued most.
              </p>
            </div>
            <div className="bg-white/5 p-6 rounded-2xl border border-purple-700 shadow-lg backdrop-blur-md duration-500 hover:scale-102">
              <h2 className="text-2xl font-semibold mb-4 text-purple-300">Wireframes</h2>
              <p className="text-base leading-relaxed">
                Using Figma and sketches, I iterated on different homepage layouts, tech stack sections, and nav designs. The design evolved naturally, balancing structure and creative freestyling to achieve a layout that felt welcoming and logical.
              </p>
            </div>
            <div className="bg-white/5 p-6 rounded-2xl border border-purple-700 shadow-lg backdrop-blur-md sm:col-span-2 duration-500 hover:scale-102">
              <h2 className="text-2xl font-semibold mb-4 text-purple-300">Final Designs</h2>
              <p className="text-base leading-relaxed">
                My final portfolio features a constellation particle background, glowing hover effects, a responsive layout, and a typewriter intro animation. The experience feels dynamic yet focused, with every interaction reinforcing simplicity and polish.
              </p>
            </div>
            <div className="bg-white/5 p-6 rounded-2xl border border-purple-700 shadow-lg backdrop-blur-md sm:col-span-2 duration-500 hover:scale-102">
              <h2 className="text-2xl font-semibold mb-4 text-purple-300">Reflection</h2>
              <p className="text-base leading-relaxed">
                This project dramatically leveled up my skills with Tailwind CSS, React, and UX design thinking. I&rsquo;m proud of how fluid and personal the final experience feels. Next, I plan to add scroll animations and even tighter navbar behaviors to make the site even more dynamic.
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
