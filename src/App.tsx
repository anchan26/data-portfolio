import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// --- STACK DATA ---
const stack = {
  dataEngineering: ['Snowflake', 'AWS', 'Airflow', 'dbt', 'PostgreSQL', 'Terraform'],
  analytics: ['SQL', 'Python', 'R', 'Power BI', 'Tableau', 'Looker'],
  aiAndLLMs: ['OpenAI', 'LangChain', 'Pinecone', 'HuggingFace', 'LlamaIndex'],
  tools: ['Git', 'Docker', 'Kubernetes', 'Jira']
};

export default function PersonalWebsite() {
  const [chatInput, setChatInput] = useState("");

  return (
    <div className="min-h-screen bg-[#FDFCF0] text-[#1a1a1a] font-sans selection:bg-primary/20">
      
      {/* 1. HERO SECTION */}
      <section className="max-w-4xl mx-auto pt-32 pb-20 px-6 text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-6xl font-bold tracking-tight mb-8"
        >
          Hi, I'm Akhil Anchan
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
          className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto"
        >
          I’m a <span className="text-black font-semibold">Data Engineer</span> dedicated to architecting high-performance pipelines that turn raw complexity into actionable intelligence. 
          Currently, I'm bridging the gap between data and <span className="text-black font-semibold">AI Engineering</span>—exploring how to move LLMs from experimental prototypes into robust, real-world production systems.
        </motion.p>
      </section>

      {/* 2. VIRTUAL ASSISTANT (The Ignacio Look) */}
      <section className="max-w-3xl mx-auto px-6 mb-32">
        <div className="bg-white/50 backdrop-blur-sm border border-gray-200 rounded-3xl p-8 shadow-sm">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold mb-2">Ask about Akhil</h2>
            <p className="text-sm text-gray-500">I'm Akhil's virtual assistant. Feel free to ask me anything about his work or interests.</p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {["Who is Akhil?", "Current Projects?", "What's his stack?", "Cricket & MMA?"].map((chip) => (
              <button key={chip} className="px-4 py-2 bg-white border border-gray-100 rounded-full text-xs font-medium text-gray-600 hover:border-gray-300 transition-all shadow-sm">
                {chip}
              </button>
            ))}
          </div>

          <div className="relative">
            <input 
              type="text" 
              placeholder="What's your question?" 
              className="w-full bg-white border border-gray-200 rounded-2xl py-4 px-6 focus:outline-none focus:ring-2 focus:ring-gray-100 transition-all shadow-inner"
            />
            <button className="absolute right-3 top-1/2 -translate-y-1/2 bg-gray-100 p-2 rounded-xl hover:bg-gray-200 transition-colors">
              <span className="text-gray-400">↑</span>
            </button>
          </div>
          <p className="text-center text-[10px] text-gray-400 mt-4">Running on Next.js + Gemini 3 Flash Image</p>
        </div>
      </section>

      {/* 3. STACK (The Image Layout) */}
      <section className="max-w-5xl mx-auto px-6 mb-32">
        <h3 className="text-2xl font-bold mb-2">Stack</h3>
        <p className="text-sm text-gray-500 mb-8">Technologies I work with and focus on the most.</p>
        
        <div className="space-y-10">
          {[
            { label: "Data Engineering", items: stack.dataEngineering },
            { label: "Analytics & Intelligence", items: stack.analytics },
            { label: "AI, LLMs & SDKs", items: stack.aiAndLLMs },
            { label: "Tools & Cloud", items: stack.tools }
          ].map((cat) => (
            <div key={cat.label}>
              <h4 className="text-sm font-mono text-gray-400 uppercase tracking-widest mb-4">{cat.label}</h4>
              <div className="flex flex-wrap gap-3">
                {cat.items.map((item) => (
                  <div key={item} className="flex items-center gap-2 bg-white border border-gray-100 px-4 py-2 rounded-full shadow-sm">
                    <div className="w-4 h-4 bg-gray-100 rounded-sm"></div> {/* Placeholder for actual icons */}
                    <span className="text-sm font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. LIFE & PERFORMANCE GRID (Cricket, MMA, Spotify) */}
      <section className="max-w-5xl mx-auto px-6 pb-32">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Cricket Card */}
          <div className="bg-white border border-gray-100 p-6 rounded-3xl shadow-sm">
            <h4 className="text-xs font-bold text-gray-400 uppercase mb-4">Cricket_Analysis</h4>
            <div className="flex items-center justify-between mb-4">
              <span className="text-2xl font-bold">IPL 2026</span>
              <span className="text-[10px] text-green-500 font-bold uppercase tracking-tighter">Live Odds</span>
            </div>
            <div className="text-sm text-gray-600">Developing Poisson models to identify market inefficiencies in T20 match outcomes.</div>
          </div>

          {/* MMA Card */}
          <div className="bg-white border border-gray-100 p-6 rounded-3xl shadow-sm">
            <h4 className="text-xs font-bold text-gray-400 uppercase mb-4">Combat_Sports</h4>
            <div className="flex items-center gap-4 py-4">
              <div className="text-center flex-1">
                <p className="text-xs text-gray-400 uppercase">Next_UFC</p>
                <p className="font-bold">UFC 310</p>
              </div>
              <div className="w-[1px] h-10 bg-gray-100"></div>
              <div className="text-center flex-1">
                <p className="text-xs text-gray-400 uppercase">Training</p>
                <p className="font-bold">Muay Thai</p>
              </div>
            </div>
          </div>

          {/* Spotify Card */}
          <div className="bg-[#1DB954]/5 border border-[#1DB954]/10 p-6 rounded-3xl flex flex-col justify-center">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-[#1DB954] rounded-full flex items-center justify-center animate-spin-slow">
                <span className="text-black">♫</span>
              </div>
              <div>
                <p className="text-[10px] text-gray-400 uppercase">Spotify_Live</p>
                <p className="text-sm font-bold truncate">Starboy</p>
                <p className="text-[10px] text-gray-500">The Weeknd</p>
              </div>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}