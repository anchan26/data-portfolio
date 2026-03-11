import { motion } from 'framer-motion';

const experiences = [
  { 
    year: 'Jun 2024 — Present', 
    role: 'Data Engineer', 
    company: 'Citycom Solutions',
    link: 'https://www.citycomsolutions.com/',
    location: 'London, UK & New York, USA',
    address: 'UK: Regis House, 45 King William St, London EC4R 9AN | USA: 28 Liberty St, 6th Floor, New York, NY 10005',
    desc: [
      'Designed scalable ETL pipelines on AWS to centralise 10TB+ monthly voice and communications data from third-party platforms into Snowflake, ensuring data integrity across 15+ global clients.',
      'Optimised Snowflake SQL workflows using streams, tasks, and Snowpipe to reduce data processing latency from 6 hours to 90 minutes—enabling real-time compliance monitoring across 50+ trading desks.',
      'Partnered with global trading firms across AMER, APAC, and EMEA to design compliance analytics frameworks using Python and SQL, identifying root-cause data issues and reducing regulatory incidents by 30%.',
      'Developed Power BI dashboards spanning multi-pillar governance metrics including user reconciliation, data integrity validation, and audio quality scoring for real-time executive visibility.',
      'Built and managed PostgreSQL-based ETL pipelines using triggers and scheduled functions to ingest structured voice and communications metadata from third-party APIs, ensuring data freshness within a 15-minute SLA',
      'Led technical commercial engagements including RFP responses and contractual documentation, working with Data Owners to define data handling requirements and access management boundaries.'
    ]
  },
  { 
    year: 'Mar 2022 — Aug 2022', 
    role: 'Data & Operations Analyst', 
    company: 'Nova Benefits',
    link: 'https://www.novabenefits.com/',
    location: 'Bengaluru, Karnataka, India',
    address: '3rd Floor, HustleHub H204, 53, 5th Cross Rd, 4th Block, Koramangala, Bengaluru 560034',
    desc: [
      'Built regression models in Zoho Analytics and developed Power BI/Tableau dashboards for claims cost forecasting and risk analysis, improving prediction accuracy by 25% and stakeholder decision-making by 35%.',
      'Managed 50+ client accounts end-to-end, delivering technical onboarding support and CRM integrations that streamlined customer implementation processes.',
      'Streamlined operational workflows using Power Automate and created SOPs across Underwriting, Claims, and Customer Service teams, reducing process errors by 20%.'
    ]
  },
  { 
    year: 'Jan 2021 — Mar 2022', 
    role: 'Field Service Engineer', 
    company: 'SmartCal',
    link: 'https://www.smartcaluae.com/main/',
    location: 'Sharjah, United Arab Emirates',
    address: 'P2 Floor, Al-Falah Tower - Office B & C, AL Khan Corniche St, Al Khan',
    desc: [
      'Executed field testing, calibration, and validation of biomedical instruments and controlled environments in strict compliance with ISO 17025, ISO 17020, and ISO 9001 quality management standards.',
      'Prepared rigorous test and inspection reports, incorporating uncertainty calculations and conducting electrical safety tests for preventive maintenance workflows.',
      'Managed client communications and coordinated with cross-functional service teams to ensure traceable, compliant measurements and the timely collection/delivery of calibrated equipment.'
    ]
  },
];

const education = [
  { 
    year: 'Nov 2023', 
    degree: 'MSc Data Science', 
    uni: 'University of Essex', 
    location: 'Essex, UK',
    link: 'https://www.essex.ac.uk/courses/pg00742/1/msc-data-science'
  },
  { 
    year: 'Dec 2020', 
    degree: 'BEng Biomedical Engineering, Minor in Data Science', 
    uni: 'Manipal Institute of Technology', 
    location: 'Manipal, India',
    link: 'https://www.manipal.edu/mu.html'
  },
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-24 border-t border-subtle">
      {/* Work Experience Block */}
      <h2 className="text-3xl mb-12">Experience</h2>
      <div className="pl-4 border-l border-subtle relative space-y-16 mb-24">
        {experiences.map((exp, idx) => (
          <motion.div 
            key={idx} 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: idx * 0.15 }}
            className="group relative pl-8"
          >
            {/* Timeline Dot */}
            <div className="absolute w-3 h-3 bg-background border-2 border-subtle rounded-full -left-[1.65rem] top-1.5 group-hover:bg-primary group-hover:border-primary transition-colors"></div>
            
            <span className="text-sm text-foreground mb-2 block font-mono">{exp.year}</span>
            <h3 className="text-xl mb-1 text-heading">{exp.role}</h3>
            
            {/* Clickable Company Link */}
            <div className="text-primary mb-2 font-mono text-sm">
              <a href={exp.link} target="_blank" rel="noreferrer" className="hover:underline hover:text-white transition-colors">
                {exp.company}
              </a>
            </div>
            
            {/* Location Data */}
            <div className="mb-6">
              <div className="flex items-center text-foreground text-sm font-medium mb-1">
                <svg className="w-4 h-4 mr-2 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                {exp.location}
              </div>
              <div className="text-xs text-subtle/70 font-mono pl-6">
                {exp.address}
              </div>
            </div>
            
            {/* Render bullet points */}
            <ul className="text-sm max-w-3xl space-y-3 list-none text-foreground">
              {exp.desc.map((bullet, i) => (
                <li key={i} className="flex gap-3 leading-relaxed">
                  <span className="text-primary mt-0.5 opacity-70">▹</span>
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      {/* Education Block */}
      <h2 className="text-3xl mb-12">Education</h2>
      <div className="pl-4 border-l border-subtle relative space-y-12">
        {education.map((edu, idx) => (
          <motion.div 
            key={idx} 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: idx * 0.15 }}
            className="group relative pl-8"
          >
            <div className="absolute w-3 h-3 bg-background border-2 border-subtle rounded-full -left-[1.65rem] top-1.5 group-hover:bg-primary group-hover:border-primary transition-colors"></div>
            
            <span className="text-sm text-foreground mb-2 block font-mono">{edu.year}</span>
            <h3 className="text-xl mb-1">
              <a href={edu.link} target="_blank" rel="noreferrer" className="text-heading hover:text-primary transition-colors">
                {edu.degree}
              </a>
            </h3>
            <div className="text-primary mb-1 font-mono text-sm">
              <a href={edu.link} target="_blank" rel="noreferrer" className="hover:underline hover:text-white transition-colors">
                {edu.uni}
              </a>
            </div>
            
            {/* Standard pin for Education as well */}
            <div className="flex items-center text-sm text-foreground font-mono mt-2">
              <svg className="w-3.5 h-3.5 mr-2 text-primary/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              {edu.location}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}