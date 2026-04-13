import { motion } from 'framer-motion';

const skillCategories = [
  { 
    label: "DATA ENGINEERING", 
    items: [
      { n: 'Snowflake', s: 'snowflake' },
      { n: 'AWS', img: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg' },
      { n: 'Airflow', s: 'apacheairflow' },
      { n: 'dbt', img: 'https://cdn.worldvectorlogo.com/logos/dbt-bit.svg' },
      { n: 'Kafka', s: 'apachekafka' },
      { n: 'PostgreSQL', s: 'postgresql' }
    ] 
  },
  { 
    label: "AI, COPILOTS & SDKS", 
    items: [
      { n: 'OpenAI', s: 'openai' },
      { n: 'Claude', s: 'anthropic' },
      { n: 'Ollama', s: 'ollama' },
      { n: 'Perplexity', s: 'perplexity' },
      { n: 'Cursor', s: 'cursor' }
      
    ] 
  },
  { 
    label: "ANALYTICS & INTELLIGENCE", 
    items: [
      { n: 'Python', s: 'python' },
      { n: 'Pandas', s: 'pandas' },
      { n: 'Tableau', img: '/tableau.png' },
      { n: 'Power BI', img: '/powerbi.png' }
    ] 
  },

    { 
      label: "ANALYTICS & INTELLIGENCE", 
      items: [
        { n: 'Python', s: 'python' },
        { n: 'Pandas', s: 'pandas' },
        { n: 'Tableau', img: 'https://upload.wikimedia.org/wikipedia/commons/4/4b/Tableau_Logo.png' },
        { n: 'Power BI', img: 'https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg' }
      ] 
    }
];

export default function SkillsSection() {
  return (
    <section id="skills" className="py-24 border-b border-subtle/20">
      <motion.h2 
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="text-3xl font-bold text-heading mb-12"
      >
        Stack
      </motion.h2>

      <div className="space-y-12">
        {skillCategories.map((cat, idx) => (
          <motion.div 
            key={cat.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
          >
            <h3 className="text-sm font-mono text-primary uppercase tracking-widest mb-6">
              {cat.label}
            </h3>
            <div className="flex flex-wrap gap-3">
              {cat.items.map((item) => (
                <div 
                  key={item.n} 
                  className="flex items-center gap-3 bg-[#111] border border-[#333] px-4 py-2 rounded-full shadow-sm hover:border-primary/50 transition-colors cursor-default"
                >
                  <img 
                    src={`https://cdn.simpleicons.org/${item.s}`} 
                    className="w-4 h-4 object-contain" 
                    alt={`${item.n} logo`} 
                    loading="lazy"
                  />
                  <span className="text-sm font-medium text-foreground/90">{item.n}</span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}