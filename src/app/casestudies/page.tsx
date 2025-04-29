'use client'

import Navbar from '../components/navbar'
import ExperienceCard from '../components/ExperienceCard'
import ParticlesComponent from '../components/particles'
import { ShootingStars } from '../components/ShootingStars'
import BottomNavbar from '../components/bottomnavbar'

export default function CaseStudiesPage() {
  return (
    <>
      <Navbar />
      <ParticlesComponent id="particles" />
      <ShootingStars quantity={30} />
      <BottomNavbar />

      <div className="pt-40 pb-16 px-6 max-w-5xl mx-auto text-white">
        <h1 className="text-5xl font-bold mb-14 text-center">Case Studies</h1>

        {/* STELLAR UX Case Study */}
        <ExperienceCard
          title="STELLAR Mobile App – UX Case Study"
          company="Case Study"
          duration="Jan 2025 – Present"
          summary="End-to-end UX process for building a real-time crypto portfolio and DEX tracking app focused on simplicity, speed, and seamless wallet integration."
          details="This case study covers the entire UX lifecycle of STELLAR: from initial user interviews and pain point discovery, to competitive app analysis, wireframe sketching, low and high-fidelity prototyping, user testing, accessibility refinement, and final design delivery. The focus was on reducing cognitive load, improving onboarding flows, and creating an intuitive mobile-first experience for crypto users."
          imageSrcs={["/stellarux1.jpg", "/stellarux2.jpg", "/stellarux3.jpg"]}
        />

        {/* Portfolio Website UX Case Study */}
        <ExperienceCard
          title="Portfolio Website – UX Redesign Case Study"
          company="Case Study"
          duration="Apr 2025 – Present"
          summary="Designing a high-impact, recruiter-friendly portfolio website using user-centered design principles, Figma prototyping, and mobile-first development."
          details="This case study documents my approach to redesigning my portfolio website: identifying original usability flaws, defining user goals (recruiters, hiring managers), creating mobile-first wireframes, building a fully responsive Next.js site, and conducting informal user testing sessions to refine navigation, responsiveness, and accessibility for all devices. Focus areas included clear information hierarchy, minimalistic styling, and fast user interaction pathways."
          imageSrcs={["/portfolio1.jpg", "/portfolio2.jpg", "/portfolio3.jpg"]}
        />
      </div>
    </>
  )
}
