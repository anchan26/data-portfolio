import { useState } from 'react';
import { motion } from 'framer-motion';

const projects = [
  { 
    title: 'Voice Data Pipeline', 
    desc: 'Scalable ETL pipelines on AWS centralising 10TB+ monthly voice and communications data from Teams, Cisco, and WhatsApp into Snowflake.', 
    tech: ['AWS', 'Snowflake', 'Python'] 
  },
  { 
    title: 'Real-Time Compliance Engine', 
    desc: 'Optimised Snowflake SQL workflows with streams, tasks, and Snowpipe — reducing processing latency from 6 hours to 90 minutes.', 
    tech: ['Snowflake', 'SQL', 'Snowpipe'] 
  },
  { 
    title: 'Governance Dashboards', 
    desc: 'Power BI dashboards spanning multi-pillar governance metrics including user reconciliation, data integrity validation, and retention monitoring.', 
    tech: ['Power BI', 'SQL', 'Python'] 
  },
  { 
    title: 'Claims Forecasting Models', 
    desc: 'Regression models in Zoho Analytics and Power BI/Tableau dashboards for insurance claims cost forecasting, improving accuracy by 25%.', 
    tech: ['Zoho', 'Tableau', 'R'] 
  },
  { 
    title: 'KNIME Analytics Workflows', 
    desc: 'Automated data processing and reporting workflows using KNIME and Alteryx for streamlined analytics operations.', 
    tech: ['KNIME', 'Alteryx', 'Python'] 
  },
  { 
    title: 'Operational Automation', 
    desc: 'Streamlined workflows using Power Automate across Underwriting, Claims, and Customer Service teams, reducing errors by 20%.', 
    tech: ['Automate', 'CRM', 'SOPs'] 
  },
];

// We create a dedicated component for the card so it can cleanly track its own hover state
function ProjectCard({ project, idx }: { project: any, idx: number }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: idx * 0.1 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative bg-surface border p-8 pb-28 rounded-sm cursor-pointer transition-colors duration-300 flex flex-col h-full ${
        isHovered ? 'border-primary' : 'border-subtle/50'
      }`}
    >
      <h3 className="text-xl font-bold text-heading mb-4">{project.title}</h3>
      <p className="font-mono text-sm text-foreground/70 leading-relaxed">
        {project.desc}
      </p>
      
      <div className="absolute bottom-6 right-6 flex items-end gap-5">
        
        {/* Square */}
        <div className="flex flex-col items-center gap-2">
          <div className={`w-8 h-8 border-[1.5px] transition-colors duration-300 ${isHovered ? 'border-primary' : 'border-subtle/20'}`}></div>
          <span className={`font-mono text-[10px] transition-all duration-300 transform ${isHovered ? 'opacity-100 text-primary translate-y-0' : 'opacity-0 translate-y-2'}`}>
            {project.tech[0]}
          </span>
        </div>

        {/* Circle */}
        <div className="flex flex-col items-center gap-2">
          <div className={`w-8 h-8 rounded-full border-[1.5px] transition-colors duration-300 ${isHovered ? 'border-primary' : 'border-subtle/20'}`}></div>
          <span className={`font-mono text-[10px] transition-all duration-300 transform ${isHovered ? 'opacity-100 text-primary translate-y-0' : 'opacity-0 translate-y-2'}`}>
            {project.tech[1]}
          </span>
        </div>

        {/* Triangle */}
        <div className="flex flex-col items-center gap-2">
          <svg className={`w-9 h-9 mb-[-2px] transition-colors duration-300 ${isHovered ? 'text-primary' : 'text-subtle/20'}`} viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2L23 21H1L12 2Z" />
          </svg>
          <span className={`font-mono text-[10px] transition-all duration-300 transform ${isHovered ? 'opacity-100 text-primary translate-y-0' : 'opacity-0 translate-y-2'}`}>
            {project.tech[2]}
          </span>
        </div>

      </div>
    </motion.div>
  );
}

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-24 border-t border-subtle">
      <h2 className="text-3xl mb-12 font-bold text-heading">Projects</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, idx) => (
          <ProjectCard key={idx} project={project} idx={idx} />
        ))}
      </div>
    </section>
  );
}