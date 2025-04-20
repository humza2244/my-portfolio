'use client'
import BottomNavbar from '../components/bottomnavbar'
import Navbar from '../components/navbar'
import ParticlesComponent from '../components/particles'
import ResumeButton from '../components/resumebutton'

export default function AboutPage() {
    return (
        <>
            <Navbar />
            <ParticlesComponent id="particles" />
            <BottomNavbar/>
            <ResumeButton/>
        </>
    )
}