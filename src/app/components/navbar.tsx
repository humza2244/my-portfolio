import Image from 'next/image'

export default function Navbar() {
  return (
    // Rainbow border wrapper
    <div className="p-[2px] fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-red-500 via-yellow-400 to-purple-500 rounded-bl-2xl rounded-br-2xl drop-shadow-2xl">
      
      {/* Actual navbar */}
      <div className="grid grid-cols-3 items-center w-full h-16 px-3 bg-black text-white rounded-bl-2xl rounded-br-2xl">

        {/* Left - Logo */}
        <div className="flex items-center space-x-2">
          <Image src="/hblogo.png" alt="hb logo" width={60} height={60} />
          <div className="text-left font-mono font-bold text-lg">Humza Baig</div>
        </div>

        {/* Center - Nav Links */}
        <div className="justify-self-center font-mono flex items-center space-x-10 h-full">
          <a href="#about" className="hover:text-green-500 hover:scale-105 transition duration-200">About Mee</a>
          <a href="#workexperience" className="hover:text-green-500 hover:scale-105 transition duration-200">Work Experience</a>
          <a href="#projects" className="hover:text-green-400 hover:scale-105 transition duration-200">Projects</a>
          <a href="#links" className="hover:text-green-400 hover:scale-105 transition duration-200">Links</a>
        </div>

        {/* Right - Placeholder (with height for balance) */}
        <div className="text-right h-full"></div>
      </div>
    </div>
  );
}
