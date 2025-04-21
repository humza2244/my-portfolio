'use client'
import Navbar from '../components/navbar'
import ExperienceCard from '../components/ExperienceCard'
import ParticlesComponent from '../components/particles'
import { ShootingStars } from '../components/ShootingStars'
import BottomNavbar from '../components/bottomnavbar'
import ResumeButton from '../components/newbutton'


export default function ExperiencePage() {
  return (
    <>
      <Navbar />
      <ParticlesComponent id="particles" />
      <ShootingStars quantity={30} />
      <BottomNavbar />
      <ResumeButton/>

      <div className="p-10 max-w-4xl mx-auto text-white">
        <h1 className="text-4xl font-bold mb-8">Work Experience</h1>

        <ExperienceCard
          title="UI/UX Designer and Web Application Developer"
          company="Martinrea International"
          duration="Apr 2024 – Sep 2024 (6 Months)"
          summary="Contributed to the front-end development, testing, and security validation of a 
          banking software solution using HTML, CSS, JavaScript, and Joget within an agile, low-code 
          enterprise environment."

          details="As part of the development team for an enterprise-grade banking software solution, 
          I was responsible for contributing to both the implementation and validation of front-end 
          components using HTML, CSS, JavaScript, and the Joget low-code platform. My role focused 
          heavily on building secure, responsive, and intuitive user interfaces that aligned with 
          financial compliance requirements and industry usability standards. Within Joget’s environment,
          I collaborated on the design and customization of dynamic workflows tailored to complex 
          banking processes, ensuring smooth user navigation and real-time feedback during critical 
          actions such as form submissions and transaction tracking. I conducted extensive UI testing 
          across a wide range of interactive forms and user-facing views, ensuring proper data flow,
          validation behavior, conditional logic, and consistent visual rendering across platforms. 
          This included simulating real user interactions to verify that every form field, dropdown, 
          button, and transition performed as expected under normal and edge-case conditions. I 
          documented test results, flagged bugs, and proposed interface refinements to improve clarity,
          responsiveness, and accessibility, particularly in data-sensitive workflows such as account 
          creation, approvals, and transaction reporting. Beyond UI development and testing, I actively 
          participated in debugging issues across devices and browsers, identifying layout inconsistencies, 
          fixing component rendering bugs, and enhancing input validation logic to prevent client-side 
          errors. I also contributed to functional and security testing, working to simulate real-world 
          usage scenarios—including edge cases—to expose hidden flaws or vulnerabilities before deployment. 
          A key focus of my contribution was in strengthening application security. I supported the 
          implementation and testing of safeguards against common web-based attack vectors, including PHP 
          injection, cross-site scripting (XSS), and form tampering. This involved writing and executing 
          targeted test cases, reviewing code for exposure points, and assisting in the creation of logic 
          paths that handle invalid or malicious input gracefully. I also contributed to refining the 
          platform’s escalation protocols in the event of anomalous behavior, supporting proactive 
          monitoring and incident response readiness. Throughout the project, I worked within an 
          agile development framework, attending sprint meetings, tracking task progress in collaborative 
          tools, and regularly delivering updates on feature completion and testing outcomes. This 
          experience gave me practical insight into secure software development lifecycles, compliance-sensitive 
          design thinking, and the use of low-code platforms to rapidly prototype and deploy scalable solutions
          in the fintech domain."

          skills = ""
        />

        <ExperienceCard
          title="Power Platform Developer"
          company="Martinrea International"
          duration="Apr 2023 – September 2023 (6 Months)"
          summary="Built a dynamic Power BI dashboard with Power Query, Excel, and VBA to track automotive program 
          status, incorporating stakeholder feedback through weekly meetings."

          details="As part of the Corporate Program Management Office at Martinrea International, I was responsible 
          for designing, developing, and deploying a scalable program tracking dashboard to support the end-to-end 
          lifecycle of automotive vehicle programs—including RFQ, Design, Validation, Launch, and Production phases. 
          My work involved architecting a robust data pipeline using Power Query to ingest, normalize, and clean 
          multi-source program data. I then visualized this data using Power BI, creating a highly interactive dashboard 
          with advanced filtering and segmentation capabilities to enable real-time tracking of program phases, deadlines,
          and escalation-priority items. To accommodate hybrid workflows and offline access, I also developed an Excel-based 
          replica of the dashboard using PivotTables and custom VBA automation scripts, allowing non-technical stakeholders 
          to generate live reports and perform secure, rule-driven calculations within their existing tools. This solution 
          helped surface critical red items—flagged for executive escalation—while improving visibility into high-priority 
          deadlines and dependencies across dozens of concurrent vehicle programs. In addition to technical development, 
          I worked closely with program managers and stakeholders, actively participating in weekly progress meetings to 
          gather feedback, refine feature sets, and align the dashboard with operational goals. I incorporated iterative 
          recommendations to improve usability, speed, and decision-making clarity—ensuring the tool met the fast-paced, 
          compliance-heavy demands of automotive program execution. This experience deepened my expertise in data-driven 
          application design, business intelligence tooling, stakeholder collaboration, and agile iteration within a high-stakes 
          enterprise environment."

          skills = ""
        />

        <ExperienceCard
          title="Business Analyst Assistant"
          company="Loblaw Digital"
          duration="Apr 2022 – Sep 2022 (6 Months)"
          summary="Built a dynamic Power BI dashboard with Power Query, Excel, and VBA to track automotive program status, incorporating stakeholder feedback through weekly meetings."
          details="Created dashboards with Power BI and handled VBA automation tasks. Analyzed workflow metrics and presented findings to stakeholders for operational improvements."
          
          skills = ""
        />
      </div>
    </>
  )
}


