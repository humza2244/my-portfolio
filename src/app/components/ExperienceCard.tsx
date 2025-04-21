'use client'

interface ExperienceCardProps {
  title: string
  company: string
  duration: string
  summary: string
  details: string
  skills: string
}

export default function ExperienceCard({
  title,
  company,
  duration,
  summary,
  details,
  skills,
}: ExperienceCardProps) {
  return (
    <div className="bg-[#1a1a1a] text-white p-6 rounded-xl shadow-lg border border-purple-600 mb-6 transition-all duration-300 ease-in-out min-h-[200px]">
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="text-sm text-purple-300">{company}</p>
      <p className="text-xs text-gray-400">{duration}</p>
      <p className="mt-3 text-sm">{summary}</p>
      <p className="mt-3 text-sm text-gray-300">{details}</p>
      <p className="mt-3 text-sm text-gray-300 font-bold">{skills}SKILLS:</p>
    </div>
  )
}
