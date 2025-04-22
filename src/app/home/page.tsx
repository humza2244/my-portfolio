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
  { top: '33%', left: '49%' },
  { top: '40%', left: '80%' },
  { top: '40%', left: '13%' },
  { top: '64%', left: '63%' },
  { top: '64%', left: '30%' }
]

export default function Home() {
  return (
    <>
      <Navbar />
      <BottomNavbar />

      

      <ShootingStars quantity={40} />

      <div className="relative w-full min-h-screen overflow-hidden">
        <ParticlesComponent id="particles" />

        {/* Typewriter Centered */}
        <div className="absolute top-1/2 left-1/2 sm:left-1/3 transform -translate-x-1/2 -translate-y-1/2 text-3xl sm:text-5xl font-mono z-50 text-white px-4 text-center sm:text-left">
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
            delaySpeed={1000}
          />
        </div>

        {/* Floating Icons */}
        {icons.map((icon, index) => (
          <img
            key={index}
            src={icon.src}
            alt={icon.name}
            className="absolute w-[40px] h-[40px] sm:w-[60px] sm:h-[60px] transition-transform duration-500 hover:scale-110 drop-shadow-[0_0_12px_rgba(255,255,255,0.7)] animate-float"
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
