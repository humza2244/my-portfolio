'use client'
import Image from 'next/image'



export default function BottomNavbar() {
    return (
        <div className="fixed bottom-[5%] left-1/2 -translate-x-1/2 w-[300px] shadow-[0px_4px_32px_0_rgba(106,27,154,.70)] h-12 bg-black text-white whitespace-nowrap flex justify-center items-center rounded-br-4xl rounded-bl-4xl rounded-tr-4xl rounded-tl-4xl border-2 border-purple-500 z-50">
            <div className="flex gap-x-5">
                <div className="duration-500 hover:scale-110">
                    <a href='https://www.linkedin.com/in/humza-baig-639a2321a/'>
                        <Image
                            src="/linkedin.png"
                            alt="Humza"
                            width={30}
                            height={30}
                            className="object-cover w-full h-full"
                        />
                    </a>
                </div>
            
                <div className="duration-500 hover:scale-110">
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

                <div className="duration-500 hover:scale-110">
                    <a href='https://discord.com/users/676560525886226433'>
                        <Image
                            src="/discord.png"
                            alt="Humza"
                            width={30}
                            height={30}
                            className="object-cover w-full h-full"
                        />
                    </a>
                </div>
            </div>
        </div>
    )
}