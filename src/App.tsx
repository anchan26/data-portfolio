import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function App() {
  const [chatAnswer, setChatAnswer] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  // --- FULL DATA SOURCE ---
  const myInfo = {
    who: "I'm Akhil Anchan, a Data Engineer based in London. I specialize in building high-scale data pipelines and am currently deep-diving into AI Engineering—specifically moving LLMs from experimental notebooks into robust production environments.",
    experience: `
      • Citycom Solutions (Jun 2024 — Present): Data Engineer in London/NY. Architecting 10TB+ monthly pipelines on AWS/Snowflake and reducing latency from 6hrs to 90mins.
      • Nova Benefits (Mar 2022 — Aug 2022): Data & Operations Analyst. Built regression models and dashboards, improving prediction accuracy by 25%.
      • SmartCal (Oct 2021 — Mar 2022): Field Service Engineer in UAE. Focused on ISO compliance and calibration of biomedical instruments.
    `,
    education: "• MSc Data Science: University of Essex (Nov 2023) | • BEng Biomedical Engineering: Manipal Institute of Technology (Dec 2020).",
    stack: "Data: Snowflake, AWS, Airflow, dbt, Kafka. AI: OpenAI, Claude, Gemini, Perplexity, Cursor, LangChain. Analytics: Python, SQL, Pandas, Tableau.",
    sports: "Cricket: Building Poisson-based win-probability models. Trading: Developing mean-reversion strategies. Fitness: Active on Strava, following MMA and Football closely."
  };

  const handleQuery = (query: string) => {
    setIsTyping(true);
    setChatAnswer(""); 
    setTimeout(() => {
      setIsTyping(false);
      const q = query.toLowerCase();
      if (q.includes("who")) setChatAnswer(myInfo.who);
      else if (q.includes("experience") || q.includes("work")) setChatAnswer(myInfo.experience);
      else if (q.includes("education") || q.includes("studies")) setChatAnswer(myInfo.education);
      else if (q.includes("stack") || q.includes("use")) setChatAnswer(myInfo.stack);
      else if (q.includes("cricket") || q.includes("mma") || q.includes("sports")) setChatAnswer(myInfo.sports);
      else setChatAnswer("I'm trained on Akhil's profile. Ask me about his Citycom experience, his MSc at Essex, or his Data/AI stack!");
    }, 600);
  };

  return (
    <div className="min-h-screen bg-[#FDFCF0] text-[#1a1a1a] font-sans pb-20 selection:bg-black/5">
      
      {/* 1. HERO SECTION */}
      <section className="max-w-4xl mx-auto pt-32 pb-16 px-6">
        <motion.h1 
          initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
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

      {/* 2. INTERACTIVE ASSISTANT */}
      <section className="max-w-3xl mx-auto px-6 mb-32">
        <div className="bg-white border border-gray-200 rounded-[2.5rem] p-10 shadow-[0_8px_30px_rgb(0,0,0,0.02)]">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-3 tracking-tight">Ask about Akhil</h2>
            <p className="text-gray-500 text-sm">Akhil's virtual assistant. Ask about his career, studies, or interests.</p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {["Who is Akhil?", "Work experience?", "Education?", "What stack does he use?"].map((chip) => (
              <button 
                key={chip} 
                onClick={() => handleQuery(chip)}
                className="px-5 py-2.5 bg-white border border-gray-200 rounded-full text-xs font-semibold text-gray-700 hover:border-gray-800 transition-all shadow-sm"
              >
                {chip}
              </button>
            ))}
          </div>

          <div className="min-h-[120px] mb-6 flex items-center justify-center text-center px-4">
            <AnimatePresence mode="wait">
              {isTyping ? (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="text-gray-400 text-sm italic animate-pulse">
                  Searching documentation...
                </motion.div>
              ) : chatAnswer ? (
                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="text-gray-800 text-sm leading-relaxed font-medium whitespace-pre-line">
                  {chatAnswer}
                </motion.div>
              ) : (
                <div className="text-gray-300 text-xs uppercase tracking-widest text-center">Awaiting Command</div>
              )}
            </AnimatePresence>
          </div>

          <div className="relative">
            <input 
              type="text" 
              placeholder="What's your question?" 
              onKeyDown={(e) => e.key === 'Enter' && handleQuery(e.currentTarget.value)}
              className="w-full bg-[#F9F9F9] border border-gray-100 rounded-2xl py-5 px-6 focus:outline-none focus:ring-2 focus:ring-black/5 transition-all text-sm"
            />
            <button className="absolute right-4 top-1/2 -translate-y-1/2 bg-white border border-gray-200 p-2 rounded-xl text-gray-400">↑</button>
          </div>
        </div>
      </section>

      {/* 3. COLORED STACK (Exact Logo Match) */}
      <section className="max-w-4xl mx-auto px-6 mb-32">
        <h3 className="text-sm font-bold text-gray-400 uppercase tracking-[0.2em] mb-12 font-mono">Stack</h3>
        <div className="space-y-14">
          {[
            { 
              label: "Data Engineering", 
              items: [
                {n:'Snowflake',s:'snowflake'},
                {n:'AWS',s:'amazonaws'},
                {n:'Airflow',s:'apacheairflow'},
                {n:'dbt',s:'dbt'},
                {n:'Kafka',s:'apachekafka'},
                {n:'PostgreSQL',s:'postgresql'}
              ] 
            },
            { 
              label: "AI, Copilots & SDKs", 
              items: [
                {n:'OpenAI',s:'openai'},
                {n:'Claude',s:'anthropic'},
                {n:'Gemini',s:'google-gemini'},
                {n:'Perplexity',s:'perplexity'},
                {n:'Cursor',s:'cursor'},
                {n:'LangChain',s:'chainlink'}
              ] 
            },
            { 
              label: "Analytics & Intelligence", 
              items: [
                {n:'Python',s:'python'},
                {n:'Pandas',s:'pandas'},
                {n:'Tableau',s:'tableau'},
                {n:'Power BI',s:'powerbi'}
              ] 
            },
            { 
              label: "Tools & Extras", 
              items: [
                {n:'Git',s:'git'},
                {n:'GitHub',s:'github'},
                {n:'Docker',s:'docker'},
                {n:'Vercel',s:'vercel'}
              ] 
            }
          ].map((cat) => (
            <div key={cat.label}>
              <h4 className="text-xs font-bold text-gray-800 mb-6 uppercase tracking-wider font-mono">{cat.label}</h4>
              <div className="flex flex-wrap gap-3">
                {cat.items.map((item) => (
                  <div key={item.n} className="flex items-center gap-3 bg-white border border-gray-100 px-4 py-2 rounded-full shadow-sm hover:border-gray-300 transition-all cursor-default">
                    <img 
                      src={`https://cdn.simpleicons.org/${item.s}`} 
                      className="w-4 h-4 object-contain" 
                      alt="" 
                    />
                    <span className="text-sm font-medium">{item.n}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. PERFORMANCE & LIFE GRID */}
      <section className="max-w-4xl mx-auto px-6 pb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white border border-gray-200 p-8 rounded-[2rem] shadow-sm">
            <h4 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-6 font-mono">Quant & Strategy</h4>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="font-bold">Cricket Engine</span>
                <span className="text-xs font-mono bg-green-50 text-green-600 px-2 py-1 rounded">+1.82 EV</span>
              </div>
              <p className="text-xs text-gray-500 leading-relaxed">Applying Poisson distribution to cricket markets to identify inefficiencies and value-based opportunities.</p>
            </div>
          </div>

          <div className="bg-[#1DB954]/5 border border-[#1DB954]/10 p-8 rounded-[2rem] flex flex-col justify-between">
            <div className="flex justify-between items-start">
              <h4 className="text-[10px] font-bold text-[#1DB954] uppercase tracking-widest font-mono">Spotify Live</h4>
              <div className="flex gap-1">
                {[1,2,3].map(i => <motion.div key={i} animate={{ scaleY: [1, 2, 1] }} transition={{ repeat: Infinity, duration: 0.8, delay: i*0.2 }} className="w-1 h-3 bg-[#1DB954] rounded-full" />)}
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-[#1DB954] rounded-lg flex items-center justify-center text-white shadow-lg shadow-[#1DB954]/20 font-mono">▶</div>
              <div>
                <p className="font-bold text-sm">Starboy</p>
                <p className="text-xs text-gray-500">The Weeknd</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="max-w-4xl mx-auto pt-12 text-center border-t border-gray-100 text-[10px] text-gray-400 uppercase tracking-[0.3em] font-mono">
        © 2026 Akhil Anchan // London & New York // Engineered on Next.js
      </footer>

    </div>
  );
}