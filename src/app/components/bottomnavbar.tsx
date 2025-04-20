'use client'
import Navbar from '../components/navbar'
import ParticlesComponent from '../components/particles'
import Image from 'next/image'



export default function BottomNavbar() {
    return (
        <div className="fixed bottom-[5%] left-1/2 -translate-x-1/2 w-[300px] h-12 bg-black text-white whitespace-nowrap flex justify-center items-center rounded-br-4xl rounded-bl-4xl rounded-tr-4xl rounded-tl-4xl border-2 border-purple-500 z-50">
            <div className="flex gap-x-5 hover:scale-105">
                <a href='https://www.linkedin.com/in/humza-baig-639a2321a/'>
                    <Image
                        src="/linkedin.png"
                        alt="Humza"
                        width={30}
                        height={30}
                        className="object-cover w-full h-full"
                    />
                </a>

                <a href='https://github.com/humza2244'>
                    <Image
                        src="/github.png"
                        alt="Humza"
                        width={30}
                        height={30}
                        className="object-cover w-full h-full"
                    />
                </a>
            </div>
        </div>
    )
}