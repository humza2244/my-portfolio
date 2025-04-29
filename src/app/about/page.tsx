'use client'

import Navbar from '../components/navbar'
import ParticlesComponent from '../components/particles'
import BottomNavbar from '../components/bottomnavbar'
import Image from 'next/image'
import { ShootingStars } from '../components/ShootingStars'
import dynamic from 'next/dynamic'

const TypeWriterEffect = dynamic(() => import('react-typewriter-effect'), {
  ssr: false
})

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <ParticlesComponent id="particles" />
      <ShootingStars quantity={30} />
      <BottomNavbar />

      {/* Scrollable container on mobile, full height on desktop */}
      <div className="relative w-full h-screen sm:h-screen overflow-y-scroll sm:overflow-hidden pt-[8rem] pb-[6rem] px-4 sm:px-0">
        {/* Fixed Image on all views */}
        <div className="absolute sm:top-[25%] sm:left-[6%] top-[20%] left-1/2 transform -translate-x-1/2 sm:translate-x-0 w-[55vw] sm:w-[20vw] h-[40vh] sm:h-[55vh] rounded-xl border-4 border-purple-500 shadow-[0_0_25px_5px_rgba(128,0,128,0.5)] overflow-hidden animate-float z-40">
          <Image
            src="/myself.jpg"
            alt="Humza"
            width={200}
            height={200}
            className="object-cover w-full h-full"
          />
        </div>

        {/* Text container */}
        <div className="sm:h-full w-full flex items-start justify-center sm:justify-start sm:items-center">
          <div className="text-white text-[1.05rem] sm:text-2xl font-mono w-full sm:w-[50%] mt-[50vh] sm:mt-0 sm:ml-[35%] whitespace-pre-line z-30">
            <TypeWriterEffect
              textStyle={{
                fontFamily: 'monospace',
                fontSize: '1.15rem',
                color: 'white',
              }}
              startDelay={200}
              cursorColor="white"
              text={`Hi, I'm Humza Baig — a Computer Science student at Wilfrid Laurier University with a passion for crafting clean, intuitive digital experiences. I specialize in blending creative design with technical execution, whether that's building sleek mobile apps, designing modern UI/UX systems, or diving into innovative blockchain technologies.

I'm deeply inspired by the worlds of Solana, Ethereum, and decentralized tech, and I love translating complex ideas into simple, beautiful interfaces. When I'm not designing or coding, I'm exploring new creative outlets — from 3D modeling to conceptualizing product ideas — always with a mindset of continuous growth, both technically and personally.

Let's build experiences that don't just work — they inspire.`}
              typeSpeed={20}
              hideCursorAfterText={true}
            />
          </div>
        </div>
      </div>
    </>
  )
}