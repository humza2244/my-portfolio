import Navbar from './components/navbar'

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="relative w-full min-h-[50vh] transform-gpu">

        {/*Diagonal Effect*/}
        <div className="w-5 h-5 bg-black rotate-45 absolute top-[12%] left-[3.1%] z-1"></div>
        <div className="w-5 h-5 bg-white rotate-45 absolute top-[160%] left-[40%] z-1"></div>

        {/*Top Vertical*/}
        <div className="bg-gradient-to-b from-red-500 via-yellow-400 to-purple-500 w-1 h-155 bg-purple-500 absolute top-[15%] left-[3%]"></div>
        <div className="bg-gradient-to-b from-red-500 via-yellow-400 to-purple-500 w-1 h-154 bg-purple-500 absolute top-[15%] left-[3.4%]"></div>

        {/*diagonal rainbow*/}
        <div className="bg-gradient-to-b from-red-500 via-yellow-400 to-purple-500 w-[0.2%] h-[24.2%] rotate-135 bg-purple-500 absolute bottom-[-69.5%] left-[5.4%]"></div>
        <div className="bg-gradient-to-b from-red-500 via-yellow-400 to-purple-500 w-[0.2%] h-[26.2%] rotate-135 bg-purple-500 absolute bottom-[-72%] left-[5.2%]"></div>

        {/*bottom left horizontal*/}
        <div className="bg-gradient-to-r from-red-500 via-yellow-400 to-purple-500 w-[30%] h-[1%] bg-purple-500 absolute top-[167%] left-[7.5%]"></div>
        <div className="bg-gradient-to-r from-red-500 via-yellow-400 to-purple-500 w-[30%] h-[1%] bg-purple-500 absolute top-[165%] left-[7.5%]"></div>
      </div>
    </>
  )
  
}