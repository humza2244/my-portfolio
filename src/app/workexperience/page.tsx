'use client'
import { useState } from 'react'
import Navbar from '../components/navbar'
import ParticlesComponent from '../components/particles'
import { ShootingStars } from '../components/ShootingStars'
import BottomNavbar from '../components/bottomnavbar'
import { motion } from 'framer-motion'

const experiences = [
  {
    id: 1,
    title: "UI/UX Designer and Web Application Developer",
    company: "Martinrea International",
    duration: "Apr 2024 – Sep 2024 (6 Months)",
    category: "Co-op",
    location: "Vaughan, ON",
    tags: ["HTML", "CSS", "JavaScript", "Joget", "Security Testing", "UI/UX"],
    summary: "Contributed to the front-end development, testing, and security validation of a banking software solution using HTML, CSS, JavaScript, and Joget within an agile, low-code enterprise environment.",
    details: "As part of the development team for an enterprise-grade banking software solution, I was responsible for contributing to both the implementation and validation of front-end components using HTML, CSS, JavaScript, and the Joget low-code platform. My role focused heavily on building secure, responsive, and intuitive user interfaces that aligned with financial compliance requirements and industry usability standards. Within Joget's environment, I collaborated on the design and customization of dynamic workflows tailored to complex banking processes, ensuring smooth user navigation and real-time feedback during critical actions such as form submissions and transaction tracking. I conducted extensive UI testing across a wide range of interactive forms and user-facing views, ensuring proper data flow, validation behavior, conditional logic, and consistent visual rendering across platforms. This included simulating real user interactions to verify that every form field, dropdown, button, and transition performed as expected under normal and edge-case conditions. I documented test results, flagged bugs, and proposed interface refinements to improve clarity, responsiveness, and accessibility, particularly in data-sensitive workflows such as account creation, approvals, and transaction reporting. Beyond UI development and testing, I actively participated in debugging issues across devices and browsers, identifying layout inconsistencies, fixing component rendering bugs, and enhancing input validation logic to prevent client-side errors. I also contributed to functional and security testing, working to simulate real-world usage scenarios—including edge cases—to expose hidden flaws or vulnerabilities before deployment. A key focus of my contribution was in strengthening application security. I supported the implementation and testing of safeguards against common web-based attack vectors, including PHP injection, cross-site scripting (XSS), and form tampering. This involved writing and executing targeted test cases, reviewing code for exposure points, and assisting in the creation of logic paths that handle invalid or malicious input gracefully. I also contributed to refining the platform's escalation protocols in the event of anomalous behavior, supporting proactive monitoring and incident response readiness. Throughout the project, I worked within an agile development framework, attending sprint meetings, tracking task progress in collaborative tools, and regularly delivering updates on feature completion and testing outcomes. This experience gave me practical insight into secure software development lifecycles, compliance-sensitive design thinking, and the use of low-code platforms to rapidly prototype and deploy scalable solutions in the fintech domain.",
    gradient: "from-blue-500 to-purple-600",
    icon: "💻"
  },
  {
    id: 2,
    title: "Power Platform Developer",
    company: "Martinrea International",
    duration: "Apr 2023 – September 2023 (6 Months)",
    category: "Co-op",
    location: "Vaughan, ON",
    tags: ["Power BI", "Power Query", "Excel", "VBA", "Data Analytics", "Dashboard Design"],
    summary: "Built a dynamic Power BI dashboard with Power Query, Excel, and VBA to track automotive program status, incorporating stakeholder feedback through weekly meetings.",
    details: "As part of the Corporate Program Management Office at Martinrea International, I was responsible for designing, developing, and deploying a scalable program tracking dashboard to support the end-to-end lifecycle of automotive vehicle programs—including RFQ, Design, Validation, Launch, and Production phases. My work involved architecting a robust data pipeline using Power Query to ingest, normalize, and clean multi-source program data. I then visualized this data using Power BI, creating a highly interactive dashboard with advanced filtering and segmentation capabilities to enable real-time tracking of program phases, deadlines, and escalation-priority items. To accommodate hybrid workflows and offline access, I also developed an Excel-based replica of the dashboard using PivotTables and custom VBA automation scripts, allowing non-technical stakeholders to generate live reports and perform secure, rule-driven calculations within their existing tools. This solution helped surface critical red items—flagged for executive escalation—while improving visibility into high-priority deadlines and dependencies across dozens of concurrent vehicle programs. In addition to technical development, I worked closely with program managers and stakeholders, actively participating in weekly progress meetings to gather feedback, refine feature sets, and align the dashboard with operational goals. I incorporated iterative recommendations to improve usability, speed, and decision-making clarity—ensuring the tool met the fast-paced, compliance-heavy demands of automotive program execution. This experience deepened my expertise in data-driven application design, business intelligence tooling, stakeholder collaboration, and agile iteration within a high-stakes enterprise environment.",
    gradient: "from-orange-500 to-red-600",
    icon: "📊"
  },
  {
    id: 3,
    title: "Software Engineer",
    company: "Martinrea International",
    duration: "Apr 2022 – Sep 2022 (6 Months)",
    category: "Co-op",
    location: "Vaughan, ON",
    tags: ["HTML5", "CSS", "Adobe Illustrator", "Web Development", "Version Control"],
    summary: "Built a dynamic Power BI dashboard with Power Query, Excel, and VBA to track automotive program status, incorporating stakeholder feedback through weekly meetings.",
    details: "At Martinrea International, I contributed to the redevelopment of the company's internal corporate website by designing scalable vector icons in Adobe Illustrator and integrating them into the front-end architecture using semantic HTML5 and modular CSS. I played a key role in the migration process, refactoring legacy assets, reorganizing directory structures, and transferring critical resources from the old intranet system to the new platform. The updated site, deployed to the corporate server and currently in production, now supports thousands of employees. My responsibilities also included version control, asset optimization, and ensuring cross-browser compatibility and responsive design adherence within the internal network.",
    gradient: "from-green-500 to-teal-600",
    icon: "🌐"
  }
]

export default function WorkExperiencePage() {
  const [expandedExperience, setExpandedExperience] = useState<number | null>(null)

  return (
    <>
      <Navbar />
      <ParticlesComponent id="particles" />
      <ShootingStars quantity={50} />
      <BottomNavbar />

      <div className="relative min-h-screen bg-gradient-to-br from-black via-purple-950/20 to-black">
        {/* floating background elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-32 left-16 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-32 right-16 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '3s' }} />
          <div className="absolute top-1/2 left-1/3 w-72 h-72 bg-pink-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '6s' }} />
        </div>

        <div className="relative z-10 container mx-auto px-6 py-32">
          {/* header section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center mb-20"
          >
            <h1 className="text-6xl sm:text-7xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-600 bg-clip-text text-transparent mb-6">
              Work Experience
            </h1>
            <p className="text-purple-300 font-mono text-xl max-w-3xl mx-auto">
              Transforming ideas into reality through collaborative development and innovative solutions
            </p>
          
            <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2, duration: 1 }}
            className="mt-32"
          >
            <div className="bg-black/40 backdrop-blur-xl border border-purple-500/30 rounded-3xl p-12 hover:border-purple-400/60 transition-all duration-500">
              <h3 className="text-3xl font-bold text-white mb-8 text-center">
                Career Highlights
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent mb-2">
                    18+
                  </div>
                  <p className="text-purple-300 font-mono">Months of Experience</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-2">
                    3
                  </div>
                  <p className="text-purple-300 font-mono">Co-op Terms</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent mb-2">
                    1
                  </div>
                  <p className="text-purple-300 font-mono">Enterprise Company</p>
                </div>
              </div>
            </div>
          </motion.div>



          </motion.div>

          {/* timeline */}
          <div className="relative">
            {/* timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 via-pink-500 to-purple-500 hidden lg:block" />

            <div className="space-y-16">
              {experiences.map((experience, index) => (
                <motion.div
                  key={experience.id}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.3 }}
                  className={`relative lg:flex lg:items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
                >
                  {/* timeline dot */}
                  <div className="absolute left-6 w-5 h-5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full border-4 border-black z-20 hidden lg:block" />
                  
                  {/* experience card */}
                  <div className={`lg:w-1/2 ${index % 2 === 0 ? 'lg:pr-16' : 'lg:pl-16'}`}>
                    <div className="bg-black/40 backdrop-blur-xl border border-purple-500/30 rounded-3xl p-8 hover:border-purple-400/60 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-purple-500/20 group">
                      
                      {/* experience header */}
                      <div className="flex items-start justify-between mb-6">
                        <div className="flex items-center gap-4">
                          <div className="text-4xl">{experience.icon}</div>
                          <div>
                            <div className="flex items-center gap-3 mb-2">
                              <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${experience.gradient} animate-pulse`} />
                              <span className="text-purple-300 font-mono text-sm">{experience.category}</span>
                              <span className="text-gray-500 font-mono text-sm">{experience.location}</span>
                            </div>
                          </div>
                        </div>
                        <span className="text-gray-400 font-mono text-sm">{experience.duration}</span>
                      </div>

                      <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors duration-300">
                        {experience.title}
                      </h2>
                      
                      <p className="text-purple-400 font-mono text-xl mb-6">
                        {experience.company}
                      </p>

                      {/* tags */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {experience.tags.map((tag, tagIndex) => (
                          <motion.span
                            key={tag}
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 1 + index * 0.3 + tagIndex * 0.1 }}
                            className="px-3 py-1 bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-purple-500/30 rounded-full text-purple-300 font-mono text-xs hover:border-purple-400/50 hover:scale-105 transition-all duration-300"
                          >
                            {tag}
                          </motion.span>
                        ))}
                      </div>

                      {/* summary */}
                      <div className="bg-black/30 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-6 mb-6">
                        <p className="text-white font-mono leading-relaxed">
                          {experience.summary}
                        </p>
                      </div>

                      {/* expand button */}
                      <div className="flex justify-center">
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => setExpandedExperience(expandedExperience === experience.id ? null : experience.id)}
                          className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl text-white font-mono text-sm hover:from-purple-500 hover:to-pink-500 transition-all duration-300 shadow-lg shadow-purple-500/25"
                        >
                          {expandedExperience === experience.id ? 'Show Less' : 'View Details'}
                        </motion.button>
                      </div>

                      {/* expanded details */}
                      {expandedExperience === experience.id && (
                        <motion.div
                          initial={{ opacity: 0, height: 0, marginTop: 0 }}
                          animate={{ opacity: 1, height: 'auto', marginTop: 24 }}
                          exit={{ opacity: 0, height: 0, marginTop: 0 }}
                          transition={{ duration: 0.5 }}
                          className="border-t border-purple-500/20 pt-6"
                        >
                          <h3 className="text-xl font-bold text-purple-300 mb-4 font-mono">
                            Detailed Experience
                          </h3>
                          <div className="bg-black/30 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-6">
                            <p className="text-white font-mono leading-relaxed text-sm">
                              {experience.details}
                            </p>
                          </div>
                        </motion.div>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* career stats */}
          
        </div>
      </div>
    </>
  )
}


