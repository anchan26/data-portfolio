import { motion } from 'framer-motion';

const skillCategories = [
  { 
    label: "DATA ENGINEERING", 
    items: [
      { n: 'Snowflake', s: 'snowflake' },
      { n: 'AWS', s: 'amazonaws', c: 'white' }, // Forced white
      { n: 'Airflow', s: 'apacheairflow' },
      { n: 'dbt', s: 'dbt' },
      { n: 'Kafka', s: 'apachekafka' },
      { n: 'PostgreSQL', s: 'postgresql' }
    ] 
  },
  { 
    label: "AI, COPILOTS & SDKS", 
    items: [
      { n: 'OpenAI', s: 'openai', c: 'white' }, // Forced white
      { n: 'Claude', s: 'anthropic' },
      { n: 'Ollama', s: 'ollama', c: 'white' }, // Forced white
      { n: 'Perplexity', s: 'perplexity' },
      { n: 'Cursor', s: 'cursor', c: 'white' }  // Forced white
    ] 
  },
  { 
    label: "ANALYTICS & INTELLIGENCE", 
    items: [
      { n: 'Python', s: 'python' },
      { n: 'Pandas', s: 'pandas' },
      { n: 'Tableau', s: 'tableau' },
      { n: 'Power BI', s: 'powerbi' }
    ] 
  },
  { 
    label: "TOOLS & EXTRAS", 
    items: [
      { n: 'Git', s: 'git' },
      { n: 'GitHub', s: 'github', c: 'white' }, // Forced white
      { n: 'Docker', s: 'docker' },
      { n: 'Vercel', s: 'vercel', c: 'white' }   // Forced white
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
              {cat.items.map((item) => {
                
                // THE FIX: If there is a color 'c', add it. If not, just use the slug. No broken slashes.
                const imageSource = item.c 
                  ? `https://cdn.simpleicons.org/${item.s}/${item.c}` 
                  : `https://cdn.simpleicons.org/${item.s}`;
                
                return (
                  <div 
                    key={item.n} 
                    className="flex items-center gap-3 bg-[#111] border border-[#333] px-4 py-2 rounded-full shadow-sm hover:border-primary/50 transition-colors cursor-default"
                  >
                    <img 
                      src={imageSource} 
                      className="w-4 h-4 object-contain" 
                      alt={`${item.n} logo`} 
                      loading="lazy"
                    />
                    <span className="text-sm font-medium text-foreground/90">{item.n}</span>
                  </div>
                );
              })}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}