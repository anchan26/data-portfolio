import { motion } from 'framer-motion';
// We use Io5 and Fa because they are extremely stable and rarely cause build errors
import { FaAws, FaPython, FaDocker, FaGithub, FaGitAlt, FaDatabase } from 'react-icons/fa';
import { SiSnowflake, SiOpenai, SiVercel, SiDbt } from 'react-icons/si';
import { IoAnalyticsOutline, IoStatsChartOutline, IoBarChartOutline, IoTerminalOutline, IoHardwareChipOutline } from 'react-icons/io5';

const skillCategories = [
  { 
    label: "DATA ENGINEERING", 
    items: [
      { n: 'Snowflake', icon: <SiSnowflake className="w-4 h-4 text-[#29B5E8]" /> },
      { n: 'AWS', icon: <FaAws className="w-5 h-5 text-white" /> }, 
      { n: 'dbt', icon: <IoHardwareChipOutline className="w-4 h-4 text-[#FF694B]" /> } 
    ] 
  },
  { 
    label: "AI, COPILOTS & SDKS", 
    items: [
      { n: 'OpenAI', icon: <SiOpenai className="w-4 h-4 text-white" /> },
      { n: 'Claude', icon: <IoTerminalOutline className="w-4 h-4 text-[#D97757]" /> },
      { n: 'Ollama', icon: <IoTerminalOutline className="w-4 h-4 text-white" /> },
      { n: 'Perplexity', icon: <IoAnalyticsOutline className="w-4 h-4 text-[#22B8CD]" /> },
      { n: 'Cursor', icon: <IoTerminalOutline className="w-4 h-4 text-white" /> }
    ] 
  },
  { 
    label: "ANALYTICS & INTELLIGENCE", 
    items: [
      { n: 'Python', icon: <FaPython className="w-4 h-4 text-[#3776AB]" /> },
      { n: 'SQL', icon: <FaDatabase className="w-4 h-4 text-white" /> }, 
      { n: 'Pandas', icon: <IoAnalyticsOutline className="w-4 h-4 text-white" /> },
      { n: 'Tableau', icon: <IoStatsChartOutline className="w-4 h-4 text-[#E97627]" /> },
      { n: 'Power BI', icon: <IoBarChartOutline className="w-4 h-4 text-[#F2C811]" /> }
    ] 
  },
  { 
    label: "TOOLS & EXTRAS", 
    items: [
      { n: 'Git', icon: <FaGitAlt className="w-4 h-4 text-[#F05032]" /> },
      { n: 'GitHub', icon: <FaGithub className="w-4 h-4 text-white" /> },
      { n: 'Docker', icon: <FaDocker className="w-4 h-4 text-[#2496ED]" /> },
      { n: 'Vercel', icon: <SiVercel className="w-4 h-4 text-white" /> }
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
                  {item.icon}
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