import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// --- STACK DATA (From your image) ---
const stack = {
  dataEngineering: ['Snowflake', 'AWS', 'Airflow', 'dbt', 'PostgreSQL', 'Terraform', 'Kafka', 'Spark'],
  analytics: ['SQL', 'Python', 'R', 'Power BI', 'Tableau', 'Looker', 'Pandas'],
  aiAndLLMs: ['OpenAI', 'LangChain', 'Pinecone', 'HuggingFace', 'LlamaIndex', 'AutoGPT', 'Vector DBs'],
  tools: ['Git', 'GitHub', 'Docker', 'Kubernetes', 'Jira', 'Vercel']
};

export default function PersonalWebsite() {
  const [chatInput, setChatInput] = useState("");

  return (
    <div className="min-h-screen bg-[#FDFCF0] text-[#1a1a1a] font-sans selection:bg-black/10">
      
      {/* 1. HERO SECTION */}
      <section className="max-w-4xl mx-auto pt-32 pb-20 px-6">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          className="text-6xl font-bold tracking-tight mb-8"
        >
          Hi, I'm Akhil Anchan
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
          className="text-xl text-gray-600 leading-relaxed max-w-2xl"
        >
          I’m a <span className="text-black font-semibold underline decoration-1 underline-offset-4">Data Engineer</span> focused on architecting scalable, high-integrity data systems. 
          Currently, I am deeply interested in <span className="text-black font-semibold">AI Engineering</span>, exploring how to move LLMs from experimental notebooks into robust, real-world production environments.
        </motion.p>
      </section>

      {/* 2. VIRTUAL ASSISTANT (From your image) */}
      <section className="max-w-3xl mx-auto px-6 mb-32">
        <div className="bg-white border border-gray-200 rounded-[2.5rem] p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-3 tracking-tight">Ask about Akhil</h2>
            <p className="text-gray-500">I'm Akhil's virtual assistant. Ask me about his experience, stack, or sports interests.</p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {["Who is Akhil?", "Current projects?", "Data Stack?", "Recruiter Mode"].map((chip) => (
              <button key={chip} className="px-5 py-2.5 bg-white border border-gray-200 rounded-full text-xs font-semibold text-gray-700 hover:bg-gray-50 hover:border-gray-300 transition-all">
                {chip}
              </button>
            ))}
          </div>

          <div className="relative">
            <input 
              type="text" 
              value={chatInput}
              onChange={(e) => setChatInput(e.target.value)}
              placeholder="What's your question?" 
              className="w-full bg-[#F9F9F9] border border-gray-100 rounded-2xl py-5 px-6 focus:outline-none focus:ring-2 focus:ring-black/5 transition-all text-sm"
            />
            <button className="absolute right-4 top-1/2 -translate-y-1/2 bg-white border border-gray-200 p-2 rounded-xl shadow-sm hover:bg-gray-50 transition-colors">
              <span className="text-gray-400">↑</span>
            </button>
          </div>
          <p className="text-center text-[10px] text-gray-400 mt-6 tracking-widest uppercase">Powered by Gemini 3 Flash • Production Grade</p>
        </div>
      </section>

      {/* 3. EXPERIENCE SECTION */}
      <section className="max-w-4xl mx-auto px-6 mb-32">
        <h3 className="text-sm font-bold text-gray-400 uppercase tracking-[0.2em] mb-12">Experience</h3>
        <div className="space-y-12">
          {[
            { role: "Data Engineer", company: "Confidential", period: "2023 — Present", desc: "Building automated ETL pipelines and managing large-scale Snowflake warehouses." },
            { role: "Data Analyst", company: "Previous Corp", period: "2021 — 2023", desc: "Focused on business intelligence, SQL optimization, and predictive modeling." }
          ].map((job, i) => (
            <div key={i} className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-4 border-b border-gray-100 pb-8">
              <span className="text-sm text-gray-400 font-mono">{job.period}</span>
              <div>
                <h4 className="text-lg font-bold">{job.role} — {job.company}</h4>
                <p className="text-gray-500 mt-2 text-sm leading-relaxed">{job.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. STACK (With Live Logos) */}
<section className="max-w-4xl mx-auto px-6 mb-32">
  <h3 className="text-sm font-bold text-gray-400 uppercase tracking-[0.2em] mb-12">Stack</h3>
  <div className="space-y-16">
    {[
      { 
        label: "Data Engineering", 
        items: [
          { name: 'Snowflake', slug: 'snowflake' },
          { name: 'AWS', slug: 'amazonaws' },
          { name: 'Airflow', slug: 'apacheairflow' },
          { name: 'dbt', slug: 'dbt' },
          { name: 'PostgreSQL', slug: 'postgresql' },
          { name: 'Terraform', slug: 'terraform' },
          { name: 'Kafka', slug: 'apachekafka' }
        ] 
      },
      { 
        label: "Analytics", 
        items: [
          { name: 'Python', slug: 'python' },
          { name: 'Pandas', slug: 'pandas' },
          { name: 'Tableau', slug: 'tableau' },
          { name: 'Power BI', slug: 'powerbi' },
          { name: 'SQL', slug: 'mysql' } // Using MySQL icon for generic SQL
        ] 
      },
      { 
        label: "AI & LLM Production", 
        items: [
          { name: 'OpenAI', slug: 'openai' },
          { name: 'LangChain', slug: 'chainlink' }, // Close approximation
          { name: 'HuggingFace', slug: 'huggingface' },
          { name: 'Pinecone', slug: 'pinecone' },
          { name: 'PyTorch', slug: 'pytorch' }
        ] 
      },
      { 
        label: "Tools", 
        items: [
          { name: 'Git', slug: 'git' },
          { name: 'GitHub', slug: 'github' },
          { name: 'Docker', slug: 'docker' },
          { name: 'Vercel', slug: 'vercel' }
        ] 
      }
    ].map((cat) => (
      <div key={cat.label}>
        <h4 className="text-xs font-bold text-gray-800 mb-6 uppercase tracking-wider">{cat.label}</h4>
        <div className="flex flex-wrap gap-3">
          {cat.items.map((item) => (
            <div key={item.name} className="flex items-center gap-3 bg-white border border-gray-200 px-4 py-2 rounded-full shadow-sm hover:border-gray-400 transition-all cursor-default">
              {/* This img tag fetches the logo automatically */}
              <img 
                src={`https://cdn.simpleicons.org/${item.slug}/1a1a1a`} 
                alt={item.name}
                className="w-4 h-4 object-contain"
                onError={(e) => { e.currentTarget.style.display = 'none'; }} // Hide if icon fails
              />
              <span className="text-sm font-medium">{item.name}</span>
            </div>
          ))}
        </div>
      </div>
    ))}
  </div>
</section>
      {/* 5. LIFE: CRICKET, MMA, SPOTIFY */}
      <section className="max-w-4xl mx-auto px-6 pb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Cricket & Trading Card */}
          <div className="bg-white border border-gray-200 p-8 rounded-[2rem] shadow-sm">
            <h4 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-6">Sports Analytics</h4>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="font-bold">Cricket Strategy</span>
                <span className="text-xs bg-green-50 text-green-600 px-2 py-1 rounded">+1.82 EV</span>
              </div>
              <p className="text-xs text-gray-500">Backtesting trading strategies on IPL and International fixtures using Poisson distribution models.</p>
            </div>
          </div>

          {/* Spotify Card */}
          <div className="bg-[#1DB954]/5 border border-[#1DB954]/10 p-8 rounded-[2rem] flex flex-col justify-between">
            <div className="flex justify-between items-start">
              <h4 className="text-[10px] font-bold text-[#1DB954] uppercase tracking-widest">Spotify Live</h4>
              <div className="flex gap-1">
                {[1,2,3].map(i => <motion.div key={i} animate={{ scaleY: [1, 2, 1] }} transition={{ repeat: Infinity, duration: 0.8, delay: i*0.2 }} className="w-1 h-3 bg-[#1DB954] rounded-full" />)}
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-[#1DB954] rounded-lg flex items-center justify-center text-white text-xl shadow-lg shadow-[#1DB954]/20">▶</div>
              <div>
                <p className="font-bold text-sm">Starboy</p>
                <p className="text-xs text-gray-500">The Weeknd</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="max-w-4xl mx-auto p-12 text-center border-t border-gray-100">
        <p className="text-[10px] text-gray-400 uppercase tracking-[0.3em]">©