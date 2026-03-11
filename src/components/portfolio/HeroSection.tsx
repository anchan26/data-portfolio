import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center relative py-20">
      
      {/* Flickering / Glitching Name */}
      <motion.h1 
        className="text-6xl md:text-8xl font-bold text-heading mb-6 tracking-tight"
        animate={{ 
          // Opacity drops down to 0.3 randomly, and X-axis jitters left/right slightly
          opacity: [1, 1, 0.4, 1, 0.8, 1, 1, 0.3, 1, 0.9, 1],
          x: [0, 0, -2, 2, -1, 0, 0, 2, -2, 1, 0]
        }}
        transition={{ 
          duration: 3.5, 
          repeat: Infinity, 
          ease: "linear",
          // The 'times' array controls exactly when the glitch happens during the 3.5 seconds
          times: [0, 0.2, 0.22, 0.25, 0.27, 0.3, 0.7, 0.72, 0.75, 0.77, 1]
        }}
      >
        Akhil Anchan
      </motion.h1> 
      
      {/* Role */}
      <h2 className="text-xl md:text-2xl text-primary font-mono mb-16">
        Data Engineer
      </h2> 

      {/* Tagline with horizontal line */}
      <div className="flex items-center gap-6 mb-16">
        <div className="w-16 h-[1px] bg-subtle"></div>
        <p className="font-mono text-sm md:text-base text-foreground/80">
          Building scalable data systems across regulated environments.
        </p>
      </div>

      {/* Location, Coordinates, and Map */}
      <div className="flex flex-col gap-4 font-mono">
        <p className="text-xs text-foreground/80">
          London, United Kingdom <span className="text-subtle ml-4 hidden md:inline-block">51.5173° N, 0.0813° W</span>
        </p>
        <p className="text-xs text-subtle md:hidden mb-2">51.5173° N, 0.0813° W</p>
        
        {/* Dark Mode Stylized Map Container */}
        <div className="w-full max-w-md h-40 rounded border border-subtle overflow-hidden opacity-80 hover:opacity-100 transition-opacity duration-500 pointer-events-none">
          <iframe 
            width="100%" 
            height="100%" 
            frameBorder="0" 
            scrolling="no" 
            marginHeight={0} 
            marginWidth={0} 
            src="https://www.openstreetmap.org/export/embed.html?bbox=-0.0865%2C51.5165%2C-0.0795%2C51.5185&amp;layer=mapnik&amp;marker=51.5173%2C-0.0813"
            className="filter grayscale invert contrast-125 brightness-90 w-full h-full"
            title="Map of Liverpool Street, London"
          ></iframe>
        </div>
      </div>

      {/* Bottom Left Geometric Shapes */}
      <div className="absolute bottom-10 left-0 flex gap-4 text-subtle/20 text-xl">
        <span>◆</span>
        <span>●</span>
        <span>▲</span>
      </div>

    </section>
  );
}