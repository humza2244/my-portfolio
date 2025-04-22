'use client'
import Navbar from '../components/navbar'
import ParticlesComponent from '../components/particles'
import BottomNavbar from '../components/bottomnavbar'
import Image from 'next/image'
import { ShootingStars } from '../components/ShootingStars'
import ResumeButton from '../components/newbutton'
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
              text={`Hi there, I'm Humza Baig — I'm a computer science student at Wilfrid Laurier University 
who loves creativity, coding, and keeping up with the latest technologies. I'm all about creating awesome stuff, 
be it stylish mobile apps, clean UI/UX, or going head-first into the realm of iOS development and web3. 
Crypto? Bring it on — Solana, Ethereum, Bitcoin — I'm all about discovering the future of decentralized tech. 
When I'm not surrounded by code, I'm either making my 3D models real with my printer, drawing up interfaces, 
or conceptualizing my next grand design. Offline, you can find me outdoors playing soccer, motorcycling, 
playing cricket, or gaming in rainy weather. I'm constantly seeking challenging experiences, new skills, 
and methods of leveling up — both technologically and personally!`}
              typeSpeed={40}
              hideCursorAfterText={true}
            />
          </div>
        </div>
      </div>
    </>
  )
}
