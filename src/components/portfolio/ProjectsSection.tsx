import { motion } from 'framer-motion';

const projects = [
  { title: 'Enterprise ETL Pipeline', desc: 'Centralized 10TB+ monthly communications data from 3rd-party platforms.', tech: ['AWS', 'Snowflake', 'SQL'] }, /*  */
  { title: 'Real-Time Compliance Engine', desc: 'Reduced data processing latency from 6 hours to 90 minutes for trading desks.', tech: ['Snowpipe', 'Streams', 'Tasks'] }, /*  */
  { title: 'Multi-Pillar Governance Dashboards', desc: 'Automated retention monitoring and data integrity validation for senior stakeholders.', tech: ['PowerBI', 'SQL'] }, /* [cite: 9] */
  { title: 'Claims Cost Forecasting', desc: 'Built regression models improving risk analysis prediction accuracy by 25%.', tech: ['Zoho Analytics', 'Tableau', 'R'] }, /*  */
  { title: 'Underwriting Automation', desc: 'Streamlined operational workflows reducing process errors by 20%.', tech: ['Power Automate', 'CRM'] }, /* [cite: 19, 21] */
  { title: 'Data Science Academic Modelling', desc: 'Advanced modeling of experimental data and computational finance.', tech: ['Python', 'Decision Making'] }, /* [cite: 28, 29] */
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-24 border-t border-subtle">
      <h2 className="text-3xl mb-12">Featured Engineering Work</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="group relative bg-surface border border-subtle p-6 rounded-lg hover:border-primary transition-colors cursor-pointer overflow-hidden flex flex-col h-full"
          >
            <h3 className="text-xl mb-3">{project.title}</h3>
            <p className="text-sm mb-8 flex-grow">{project.desc}</p>
            
            <div className="relative h-6 mt-auto">
              <div className="absolute inset-0 flex gap-2 text-foreground group-hover:opacity-0 transition-opacity duration-300">
                <span>■</span><span>●</span><span>▲</span>
              </div>
              <div className="absolute inset-0 text-primary text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
                {project.tech.join(' • ')}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}