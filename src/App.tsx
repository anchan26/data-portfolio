import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// --- THIS MUST BE NAMED 'App' TO MATCH YOUR main.tsx ---
export default function App() {
  const [chatAnswer, setChatAnswer] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  // --- YOUR UPDATED EXPERIENCE & DATA ---
  const myInfo = {
    who: "I'm Akhil Anchan, a Data Engineer based in London. I specialize in building high-scale data pipelines and am currently deep-diving into AI Engineering and LLM production.",
    experience: "Currently, I work as a Data Engineer managing Snowflake warehouses and automated ETL. Previously, I was a Data Analyst optimizing SQL and building predictive models.",
    stack: "My core stack includes Snowflake, AWS, Airflow, dbt, and Python. For AI, I'm using OpenAI, LangChain, and Pinecone.",
    sports: "I build trading strategies and cricket win-probability models. I'm also active on Strava and follow football/MMA closely."
  };

  const handleQuery = (query: string) => {
    setIsTyping(true);
    setChatAnswer(""); 
    setTimeout(() => {
      setIsTyping(false);
      if (query.includes("Who")) setChatAnswer(myInfo.who);
      else if (query.includes("experience") || query.includes("studies")) setChatAnswer(myInfo.experience);
      else if (query.includes("stack")) setChatAnswer(myInfo.stack);
      else if (query.includes("Cricket") || query.includes("MMA")) setChatAnswer(myInfo.sports);
      else setChatAnswer("I'm trained on Akhil's profile. Ask me about his data engineering work, his AI interests, or his sports models!");
    }, 600);
  };

  return (
    <div className="min-h-screen bg-[#FDFCF0] text-[#1a1a1a] font-sans pb-20">
      
      {/* 1. HERO */}
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

      {/* 2. THE INTERACTIVE ASSISTANT (Ignacio Style) */}
      <section className="max-w-3xl mx-auto px-6 mb-32">
        <div className="bg-white border border-gray-200 rounded-[2.5rem] p-10 shadow-[0_8px_30px_rgb(0,0,0,0.02)]">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-3">Ask about Akhil</h2>
            <p className="text-gray-500 text-sm">I'm Akhil's virtual assistant. Ask me anything about his career or interests.</p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {["Who is Akhil?", "Work experience?", "What stack does he use?", "Cricket & MMA?"].map((chip) => (
              <button 
                key={chip} 
                onClick={() => handleQuery(chip)}
                className="px-5 py-2.5 bg-white border border-gray-200 rounded-full text-xs font-semibold text-gray-700 hover:border-gray-800 transition-all"
              >
                {chip}
              </button>
            ))}
          </div>

          <div className="min-h-[80px] mb-6 flex items-center justify-center text-center px-4">
            <AnimatePresence mode="wait">
              {isTyping ? (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="text-gray-400 text-sm italic animate-pulse">
                  Analyzing request...
                </motion.div>
              ) : chatAnswer ? (
                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="text-gray-800 text-sm leading-relaxed font-medium">
                  {chatAnswer}
                </motion.div>
              ) : null}
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

      {/* 3. STACK (With Simple Icons Logos) */}
      <section className="max-w-4xl mx-auto px-6 mb-32">
        <h3 className="text-sm font-bold text-gray-400 uppercase tracking-[0.2em] mb-12">Stack</h3>
        <div className="space-y-12">
          {[
            { label: "Data Engineering", items: [{n:'Snowflake',s:'snowflake'},{n:'AWS',s:'amazonaws'},{n:'Airflow',s:'apacheairflow'},{n:'dbt',s:'dbt'},{n:'Kafka',s:'apachekafka'}] },
            { label: "AI & LLM Production", items: [{n:'OpenAI',s:'openai'},{n:'LangChain',s:'chainlink'},{n:'HuggingFace',s:'huggingface'},{n:'Pinecone',s:'pinecone'}] },
            { label: "Analytics", items: [{n:'Python',s:'python'},{n:'PostgreSQL',s:'postgresql'},{n:'Pandas',s:'pandas'},{n:'Tableau',s:'tableau'}] }
          ].map((cat) => (
            <div key={cat.label}>
              <h4 className="text-xs font-bold text-gray-800 mb-6 uppercase tracking-wider">{cat.label}</h4>
              <div className="flex flex-wrap gap-3">
                {cat.items.map((item) => (
                  <div key={item.n} className="flex items-center gap-3 bg-white border border-gray-200 px-4 py-2 rounded-full shadow-sm hover:border-gray-400 transition-all">
                    <img src={`https://cdn.simpleicons.org/${item.s}/1a1a1a`} className="w-4 h-4" alt="" />
                    <span className="text-sm font-medium">{item.n}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="max-w-4xl mx-auto pt-12 text-center border-t border-gray-100 text-[10px] text-gray-400 uppercase tracking-widest">
        © 2026 Akhil Anchan // Running on Next.js
      </footer>
    </div>
  );
}