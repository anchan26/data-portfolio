import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// --- HACKER TEXT COMPONENT ---
const ScrambleText = ({ text }: { text: string }) => {
  const [display, setDisplay] = useState(text);
  const chars = "!@#$%^&*()_+NK67";

  useEffect(() => {
    let iteration = 0;
    const interval = setInterval(() => {
      setDisplay(text.split("").map((letter, index) => {
        if (letter === " " || index < iteration) return text[index];
        return chars[Math.floor(Math.random() * chars.length)];
      }).join(""));
      if (iteration >= text.length) clearInterval(interval);
      iteration += 1 / 3;
    }, 30);
    return () => clearInterval(interval);
  }, [text]);

  return <span>{display}</span>;
};

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-foreground p-4 md:p-8 font-mono">
      
      {/* HEADER INFO */}
      <div className="max-w-7xl mx-auto mb-8 flex justify-between items-end border-b border-subtle/20 pb-4">
        <div className="text-[10px] text-primary tracking-[0.4em] uppercase">System_Status: Operational</div>
        <div className="text-[10px] text-subtle uppercase">London_UK // 51.5072° N</div>
      </div>

      {/* --- BENTO GRID START --- */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 md:grid-rows-4 gap-4 auto-rows-fr">
        
        {/* 1. IDENTITY TILE */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          className="md:col-span-2 md:row-span-2 bg-surface border border-subtle/30 p-8 rounded-3xl flex flex-col justify-between"
        >
          <div className="space-y-6">
            <h1 className="text-5xl md:text-7xl font-bold text-heading tracking-tighter">
              <ScrambleText text="Akhil Anchan" />
            </h1>
            <p className="text-foreground/60 max-w-sm text-sm leading-relaxed">
              Data Engineer specializing in high-velocity pipelines and quantitative sports modeling. 
              Currently optimizing value-identification engines for cricket and global markets.
            </p>
          </div>
          <div className="flex gap-4">
            <div className="px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary text-[10px] font-bold">DATA_ENGINEER</div>
            <div className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-subtle text-[10px] font-bold">QUANT_STRAT</div>
          </div>
        </motion.div>

        {/* 2. QUANT LAB: CRICKET & TRADING */}
        <motion.div 
          whileHover={{ scale: 1.01 }}
          className="md:col-span-2 bg-surface border border-subtle/30 p-6 rounded-3xl flex flex-col justify-between group"
        >
          <div className="flex justify-between items-start">
            <h3 className="text-xs font-bold text-subtle uppercase tracking-widest">Quant_Lab</h3>
            <span className="text-primary text-[10px]">[ACTIVE_MODEL]</span>
          </div>
          <div className="grid grid-cols-2 gap-8 py-4">
            <div>
              <p className="text-[10px] text-subtle mb-1 uppercase">Cricket_EV_Index</p>
              <p className="text-3xl font-bold text-heading">+1.82</p>
            </div>
            <div>
              <p className="text-[10px] text-subtle mb-1 uppercase">Algo_Strategy_Alpha</p>
              <p className="text-3xl font-bold text-heading">14.2%</p>
            </div>
          </div>
          {/* Animated Waveform */}
          <div className="h-8 flex items-end gap-1 overflow-hidden">
            {[40, 70, 45, 90, 65, 80, 30, 60, 40, 95, 50, 70].map((h, i) => (
              <motion.div 
                key={i} 
                animate={{ height: [`${h}%`, `${h+10}%`, `${h}%`] }} 
                transition={{ repeat: Infinity, duration: 2, delay: i * 0.1 }}
                className="flex-1 bg-primary/30 rounded-t-sm" 
              />
            ))}
          </div>
        </motion.div>

        {/* 3. FOOTBALL TRACKER */}
        <motion.div 
          whileHover={{ scale: 1.01 }}
          className="md:col-span-1 bg-surface border border-subtle/30 p-6 rounded-3xl flex flex-col justify-between"
        >
          <h3 className="text-xs font-bold text-subtle uppercase">Pitch_Side</h3>
          <div className="text-center py-4">
            <div className="text-[10px] text-subtle mb-2 uppercase">Next_Fixture</div>
            <div className="flex items-center justify-center gap-3 text-xl font-bold text-heading">
              <span>LIV</span>
              <span className="text-xs text-primary">VS</span>
              <span>MCI</span>
            </div>
          </div>
          <div className="text-[10px] text-center text-primary/60">ANFIELD // SUN 16:30</div>
        </motion.div>

        {/* 4. FITNESS / STRAVA */}
        <motion.div 
          whileHover={{ scale: 1.01 }}
          className="md:col-span-1 bg-surface border border-subtle/30 p-6 rounded-3xl flex flex-col justify-between group"
        >
          <h3 className="text-xs font-bold text-subtle uppercase">Fitness_Metrics</h3>
          <div className="space-y-4">
            <div>
              <p className="text-3xl font-bold text-heading tracking-tighter">42.5<span className="text-xs ml-1 text-subtle">KM</span></p>
              <p className="text-[10px] text-subtle uppercase">Weekly_Volume</p>
            </div>
            <div className="w-full bg-white/5 h-1 rounded-full overflow-hidden">
              <motion.div initial={{ width: 0 }} animate={{ width: "70%" }} className="h-full bg-primary" />
            </div>
          </div>
        </motion.div>

        {/* 5. SPOTIFY LIVE */}
        <motion.div 
          whileHover={{ scale: 1.01 }}
          className="md:col-span-3 bg-[#1DB954]/5 border border-[#1DB954]/20 p-6 rounded-3xl flex items-center justify-between"
        >
          <div className="flex items-center gap-5">
            <div className="relative">
              <div className="w-12 h-12 bg-[#1DB954] rounded-full flex items-center justify-center animate-spin-slow">
                <span className="text-black text-xl">●</span>
              </div>
            </div>
            <div>
              <p className="text-xs text-subtle uppercase mb-1">Now_Playing</p>
              <h4 className="text-lg font-bold text-heading leading-none">Starboy</h4>
              <p className="text-xs text-[#1DB954]">The Weeknd</p>
            </div>
          </div>
          <div className="flex gap-1 h-6">
            {[1, 2, 3, 4, 3, 2, 1].map((_, i) => (
              <motion.div key={i} animate={{ scaleY: [1, 2, 1] }} transition={{ repeat: Infinity, duration: 0.6, delay: i * 0.1 }} className="w-1 bg-[#1DB954] rounded-full" />
            ))}
          </div>
        </motion.div>

        {/* 6. CORE STACK */}
        <div className="md:col-span-1 bg-surface border border-subtle/30 p-6 rounded-3xl flex flex-col justify-center items-center">
          <p className="text-[10px] text-subtle uppercase mb-3">Core_Engine</p>
          <div className="flex flex-wrap gap-2 justify-center">
            {['PY', 'SQL', 'AWS', 'SNOW'].map(t => (
              <span key={t} className="px-2 py-1 border border-subtle/20 text-[10px] text-heading font-bold">{t}</span>
            ))}
          </div>
        </div>

      </div>

      {/* FOOTER */}
      <footer className="max-w-7xl mx-auto mt-12 pt-8 border-t border-subtle/10 flex justify-between items-center text-[10px] text-subtle tracking-widest uppercase">
        <div>© 2026 ANCH_DATA_SYSTEMS</div>
        <div className="flex gap-6">
          <a href="#" className="hover:text-primary transition-colors">Github</a>
          <a href="#" className="hover:text-primary transition-colors">LinkedIn</a>
        </div>
      </footer>

    </div>
  );
}