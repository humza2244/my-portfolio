'use client'
import Navbar from '../components/navbar'
import { Typewriter } from 'react-simple-typewriter'
import ParticlesComponent from '../components/particles'
import BottomNavbar from '../components/bottomnavbar'
import { ShootingStars } from '../components/ShootingStars'
import ResumeButton from '../components/newbutton'


const icons = [
  { name: 'Python', src: '/python.png' },
  { name: 'JavaScript', src: '/javascript.png' },
  { name: 'CSS', src: '/CSS.png' },
  { name: 'HTML', src: '/html.png' },
  { name: 'React.js', src: '/react.png' }
]

const iconPositions = [
  { top: '31%', left: '59%' },
  { top: '31%', left: '78%' },
  { top: '66%', left: '83%' },
  { top: '64%', left: '69%' },
  { top: '64%', left: '55%' }
]

export default function Home() {
  return (
    <>
      <Navbar />
      <BottomNavbar/>
      <ShootingStars quantity={40} />
      <ResumeButton/>
      

      <div className="relative w-full h-screen overflow-hidden">
        <ParticlesComponent id="particles" />

        {/* TYPEWRITER CENTERED LEFT */}
        <div className="absolute top-1/2 left-1/4 transform -translate-x-1/2 -translate-y-1/2 text-5xl font-mono z-50 text-white">
          <Typewriter
            words={[
              'Software Engineer',
              'UX/UI Designer',
              'IOS Developer',
              'Meet: Humza Baig'
            ]}
            loop={false}
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </div>

        {/* FLOATING LANGUAGE ICONS */}
        {icons.map((icon, index) => (
          <img
            key={index}
            src={icon.src}
            alt={icon.name}
            className="w-25 h-25 absolute transition-transform duration-500 hover:scale-110 drop-shadow-[0_0_12px_rgba(255,255,255,0.7)] animate-float"
            style={{
              top: iconPositions[index].top,
              left: iconPositions[index].left,
              animationDelay: `${index * 0.4}s`,
              zIndex: 60
            }}
          />
        ))}
      </div>
    </>
  )
}
