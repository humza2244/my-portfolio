'use client'
import Navbar from '../components/navbar'
import ParticlesComponent from '../components/particles'
import TypeWriterEffect from 'react-typewriter-effect'
import BottomNavbar from '../components/bottomnavbar'
import Image from 'next/image'


export default function AboutPage() {
  return (
    <>
      <Navbar />
      <ParticlesComponent id="particles" />
      <BottomNavbar/>

      {/* Image container with glowing animated border */}
      <div className="fixed top-[30%] left-[8%] w-[18%] h-[50%] rounded-xl border-4 border-purple-500 shadow-[0_0_25px_5px_rgba(128,0,128,0.5)] overflow-hidden animate-float z-50">
        <Image
          src="/myself.jpg"
          alt="Humza"
          width={200}
          height={200}
          className="object-cover w-full h-full"
        />
      </div>

      {/* Typewriter text on the right */}
      <span className="fixed w-[50%] h-[20%] top-[34%] left-[35%] whitespace-pre-line animate-float">

      <TypeWriterEffect
        textStyle={{
          fontFamily: 'monospace',
          fontSize: '1.35rem',
          color: 'white',
        }}
        startDelay={100}
        cursorColor="white"
        text="Hi there, I'm Humza Baig — I'm a computer science student at Wilfrid Laurier University 
        who loves creativity, coding, and keeping up with the latest technologies. I'm all about creating awesome stuff, 
        be it stylish mobile apps, clean UI/UX, or going head-first into the realm of iOS development 
        and web3. Crypto? Bring it on — Solana, Ethereum, Bitcoin — I'm all about discovering the future 
        of decentralized tech. When I'm not surrounded by code, I'm either making my 3D models real with 
        my printer, drawing up interfaces, or conceptualizing my next grand design. Offline, you can find me 
        outdoors playing soccer, motorcycling, playing cricket, or gaming in rainy weather. I'm constantly 
        seeking challenging experiences, new skills, and methods of leveling up — both technologically and personally!"

        typeSpeed={40}
        hideCursorAfterText={true}
      />

      </span>

    </>
  )
}
