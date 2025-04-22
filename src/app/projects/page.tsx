'use client'
import Navbar from '../components/navbar'
import ExperienceCard from '../components/ExperienceCard'
import ParticlesComponent from '../components/particles'
import { ShootingStars } from '../components/ShootingStars'
import BottomNavbar from '../components/bottomnavbar'


export default function ExperiencePage() {
  return (
    <>
      <Navbar />
      <ParticlesComponent id="particles" />
      <ShootingStars quantity={30} />
      <BottomNavbar />

      <div className="pt-30 pb-25 p-10 max-w-4xl mx-auto text-white">
        <h1 className="text-4xl font-bold mb-8">Projects</h1>

        <ExperienceCard
          title="STELLAR – Cross-Chain Mobile Fintech Application"
          company="STELLAR"
          duration="Jan 2025 – Present"
          summary="Designed and developed STELLAR, a mobile-first Solana fintech app integrating Phantom wallet 
          features, live DEX charting, and real-time portfolio tracking using WebSockets and Bitquery's API."

          details="STELLAR is a mobile-first fintech application purpose-built for the Solana blockchain, 
          designed as an all-in-one solution integrating Phantom wallet functionality, DEX screening, real-time 
          charting, and on-chain portfolio tracking. I developed the full application architecture, including the 
          front-end UI and back-end data flow, with a focus on delivering performant, responsive, and data-rich 
          mobile experiences tailored to active DeFi users. The platform features a real-time data infrastructure 
          powered by WebSockets and Bitquery’s Solana API, enabling live streaming of token prices, transaction 
          data, and liquidity metrics. I designed and implemented a high-fidelity UI system with dynamic chart 
          rendering, token detail views, and fluid navigation to support real-time asset management and price 
          analysis directly from mobile devices. Security and accuracy were core to the build—wallet integration 
          was handled with secure interaction patterns, and all asset tracking features were built to support 
          real-time filtering, red-flag detection, and portfolio breakdowns. The app emphasizes modularity, 
          responsiveness, and clean state management, allowing for smooth performance even under rapid data 
          updates. STELLAR is currently in development and showcases a deep integration of blockchain data 
          pipelines, financial analytics, and mobile-first UX design within the Solana ecosystem. FOR A DEMO, 
          PLEASE DO NOT HESITATE TO REACH OUT"

          imageSrcs={["/stellar1.jpg", "/stellar2.jpg", "/stellar3.jpg", "stellar4.jpg", "stellar5.jpg"]}
        />

        <ExperienceCard
          title="Auto Sniper Solana Trading Bot"
          company="Hawk Hacks: Laurier"
          duration="May 2024 – May 2024 (3 days)"
          summary="Created an automated Solana trading bot using TypeScript to detect new liquidity pools 
          and execute high-speed token snipes with a live Electron-based UI."
          
          details="Developed a high-frequency automated trading bot for the Solana blockchain designed to detect and interact 
          with newly created token liquidity pools in real time. Built using TypeScript, Node.js, and Electron, the application 
          features a custom UI and back-end engine for sniping tokens at launch with configurable speed, slippage tolerance, and 
          filtering criteria. The bot leverages WebSocket connections to subscribe to live Solana on-chain events and integrates
           with Solana RPC endpoints and DEX APIs to execute rapid buy/sell orders based on liquidity injection events. It supports 
           real-time token scanning, user-defined token allow/block lists, and automated transaction signing and submission. The 
           system includes custom-built logic to minimize MEV risk and increase execution reliability in volatile, time-sensitive 
           market conditions. Key components include a modular architecture for future upgradeability, live UI tracking for trade 
           logs and price feeds, and tight integration with token metadata and swap routing logic. Designed for low-latency performance, 
           STELLAR Auto-Sniper provides traders with a powerful edge in detecting and acting on early token opportunities in the Solana 
           DeFi ecosystem."
          
          skills = ""
        />
      </div>
    </>
  )
}


