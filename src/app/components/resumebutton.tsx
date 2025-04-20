

export default function ResumeButton() {
    return(

        <div className="flex justify-center items-center bg-black fixed w-[10%] h-14 top-[3%] left-5/6 overflow-hidden 
        z-[80] rounded-br-4xl rounded-bl-4xl border-3 border-purple-500 rounded-tr-4xl rounded-tl-4xl duration-500 
        hover:scale-105">
            <a className="text-white text-md font-mono"
                href="/resume.pdf"
                download
            >
                Resume
            </a>

        </div>

    )

}
