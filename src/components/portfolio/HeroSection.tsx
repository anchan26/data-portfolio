import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function HeroSection() {
  const [isLoading, setIsLoading] = useState(true);
  const [displayText, setDisplayText] = useState("Akhil Anchan");
  
  const finalName = "Akhil Anchan";
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&*";

  // 1. Loading Screen Timer
  useEffect(() => {
    // Wait 2.2 seconds, then hide loader and trigger the hacker text
    const timer = setTimeout(() => {
      setIsLoading(false);
      startScramble();
    }, 2200);
    return () => clearTimeout(timer);
  }, []);

  // 2. Hacker Text Scramble Effect
  const startScramble = () => {
    let iterations = 0;
    const interval = setInterval(() => {
      setDisplayText(
        finalName.split("")
          .map((letter, index) => {
            if (letter === " ") return " ";
            if (index < iterations) return finalName[index];
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join("")
      );
      
      // Stop when it finishes spelling your name
      if (iterations >= finalName.length) clearInterval(interval);
      
      // Speed of the decode (higher is slower)
      iterations += 1 / 3; 
    }, 30);
  };

  return (
    <>
      {/* --- TERMINAL MATRIX PRELOADER --- */}
      <AnimatePresence>
        {isLoading && (
          <motion.div 
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="fixed inset-0 z-50 bg-[#0a0a0a] flex flex-col items-center justify-center font-mono text-primary text-sm md:text-base p-6"
          >
            <div className="flex flex-col gap-2 w-full max-w-md">
              <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>&gt; INITIALIZING SECURE CONNECTION...</motion.p>
              <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }}>&gt; BYPASSING MAINFRAME...</motion.p>
              <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }}>&gt; FETCHING DATA ENGINEER PROFILE...</motion.p>
              <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.7 }} className="text-white">&gt; ACCESS GRANTED.</motion.p>
              <motion.div animate={{ opacity: [1, 0] }} transition={{ repeat: Infinity, duration: 0.8 }} className="mt-2 w-3 h-5 bg-primary"></motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* --- MAIN HERO SECTION --- */}
      <section id="hero" className="min-h-screen flex flex-col justify-center relative py-20">
        
        {/* Name with Hover Trigger */}
        <h1 
          onMouseEnter={startScramble}
          className="text-6xl md:text-8xl font-bold text-heading mb-6 tracking-tight cursor-crosshair w-fit"
        >
          {displayText}
        </h1> 
        
        {/* Role */}
        <h2 className="text-xl md:text-2xl text-primary font-mono mb-16">
          Data Engineer
        </h2> 

        {/* Tagline */}
        <div className="flex items-center gap-6 mb-16">
          <div className="w-16 h-[1px] bg-subtle"></div>
          <p className="font-mono text-sm md:text-base text-foreground/80">
            Building scalable data systems across regulated environments.
          </p>
        </div>

        {/* Location & Map */}
        <div className="flex flex-col gap-4 font-mono">
          <p className="text-xs text-foreground/80">
            London, United Kingdom <span className="text-subtle ml-4 hidden md:inline-block">51.5173° N, 0.0813° W</span>
          </p>
          <p className="text-xs text-subtle md:hidden mb-2">51.5173° N, 0.0813° W</p>
          
          <div className="w-full max-w-md h-40 rounded border border-subtle overflow-hidden opacity-80 hover:opacity-100 transition-opacity duration-500 pointer-events-none">
            <iframe 
              width="100%" height="100%" frameBorder="0" scrolling="no" marginHeight={0} marginWidth={0} 
              src="https://www.openstreetmap.org/export/embed.html?bbox=-0.0865%2C51.5165%2C-0.0795%2C51.5185&amp;layer=mapnik&amp;marker=51.5173%2C-0.0813"
              className="filter grayscale invert contrast-125 brightness-90 w-full h-full"
              title="Map of Liverpool Street, London"
            ></iframe>
          </div>
        </div>

        {/* Shapes */}
        <div className="absolute bottom-10 left-0 flex gap-4 text-subtle/20 text-xl">
          <span>◆</span>
          <span>●</span>
          <span>▲</span>
        </div>

      </section>
    </>
  );
}