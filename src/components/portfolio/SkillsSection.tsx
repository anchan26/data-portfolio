import { motion } from 'framer-motion';

const skillCategories = [
  {
    title: 'LANGUAGES',
    skills: ['Python', 'R', 'SQL']
  },
  {
    title: 'DATABASES & CLOUD',
    skills: ['AWS', 'GCP', 'Azure', 'Snowflake', 'PostgreSQL']
  },
  {
    title: 'ETL & ANALYTICS TOOLS',
    skills: ['Power BI', 'Tableau', 'Qlik', 'Alteryx', 'KNIME']
  }
];

export default function SkillsSection() {
  return (
    <section id="skills" className="py-24 border-t border-subtle">
      <h2 className="text-3xl mb-16 font-bold text-heading">Skills</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
        {skillCategories.map((category, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: idx * 0.15 }}
          >
            {/* Category Header */}
            <h3 className="text-sm font-bold tracking-widest text-heading uppercase mb-8">
              {category.title}
            </h3>
            
            {/* Skills List */}
            <ul className="space-y-4">
              {category.skills.map((skill, i) => (
                <li key={i} className="font-mono text-sm text-foreground/70 hover:text-primary transition-colors cursor-default">
                  {skill}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}