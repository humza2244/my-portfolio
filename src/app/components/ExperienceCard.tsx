import Image from 'next/image'

interface ExperienceCardProps {
    title: string
    company: string
    duration: string
    summary: string
    details: string
    skills?: string
    imageSrcs?: string[] 
  }
  
  export default function ExperienceCard({
    title,
    company,
    duration,
    summary,
    details,
    skills,
    imageSrcs, 
  }: ExperienceCardProps) {
    return (
      <div className="bg-[#1a1a1a] text-white p-5 rounded-xl shadow-lg border border-purple-600 mb-6 transition-all duration-300 ease-in-out">
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="text-sm text-purple-300">{company}</p>
        <p className="text-xs text-gray-400">{duration}</p>
        <p className="mt-2 text-sm">{summary}</p>
  
        <p className="mt-3 text-sm text-gray-300">{details}</p>
        {skills && <p className="mt-3 text-sm text-gray-300">{skills}</p>}
  
        {/*Left-aligned image section */}
        {imageSrcs && imageSrcs.length > 0 && (
        <div className="w-full mt-4 !text-left">
            <div className="flex flex-wrap gap-3 justify-start items-start !text-left !mx-0 !px-0">
            {imageSrcs.map((src, index) => (
                <Image
                key={index}
                src={src}
                alt={`${title} Screenshot ${index + 1}`}
                width={128}
                height={96}
                className="w-32 h-auto rounded-md border border-gray-700"
                />
            ))}
            </div>
        </div>
        )}

      </div>
    )
  }
  