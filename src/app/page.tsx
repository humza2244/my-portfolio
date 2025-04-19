'use client'
import Navbar from './components/navbar'
import { Typewriter } from 'react-simple-typewriter'

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="bg-white h-[5vh] w-[5vw]"></div>
      <div className="relative w-full h-screen bg-black">


      {/* TYPEWRITE EFFECT*/}
      <div className="relative w-full h-screen bg-black">
        {/* TYPEWRITER CENTERED */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-6xl font-mono z-50">
          <Typewriter
            words={['Software Engineer', 'UX/UI Designer', 'Problem Solver', 'Meet: Humza Baig']}
            loop={false}
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </div>

      </div>
        
        {/* VERTICAL LINES LEFT */}

        <div className="absolute left-[5vw] top-[20vh] h-[50vh] w-[0.2vw] bg-gradient-to-b from-red-500 via-yellow-400 to-purple-500"></div>
        <div className="absolute left-[4.6vw] top-[20vh] h-[50vh] w-[0.2vw] bg-gradient-to-b from-red-500 via-yellow-400 to-purple-500"></div>

        <div className="absolute left-[5vw] top-[70vh] h-[14vh] w-[0.2vw] rotate-[320deg] origin-top-left bg-gradient-to-b from-purple-500 via-yellow-400 to-red-500"></div>
        <div className="absolute left-[4.6vw] top-[70vh] h-[14vh] w-[0.2vw] rotate-[320deg] origin-top-left bg-gradient-to-b from-purple-500 via-yellow-400 to-red-500"></div>


        {/* VERTICAL LINES RIGHT */}
        <div className="absolute right-[5vw] top-[20vh] h-[50vh] w-[0.2vw] bg-gradient-to-b from-red-500 via-yellow-400 to-purple-500"></div>
        <div className="absolute right-[4.6vw] top-[20vh] h-[50vh] w-[0.2vw] bg-gradient-to-b from-red-500 via-yellow-400 to-purple-500"></div>

        <div className="absolute right-[5vw] top-[70vh] h-[14vh] w-[0.2vw] rotate-[45deg] origin-top-right bg-gradient-to-b from-purple-500 via-yellow-400 to-red-500"></div>
        <div className="absolute right-[4.6vw] top-[70vh] h-[14vh] w-[0.2vw] rotate-[45deg] origin-top-right bg-gradient-to-b from-purple-500 via-yellow-400 to-red-500"></div>

      </div>
      

      
      


    </>
  ) 
}
