import { useState, useEffect } from 'react';

export default function LiveStatus() {
  const [time, setTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      // This forces the clock to always show London time regardless of where the user is
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'Europe/London',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
      };
      setTime(new Intl.DateTimeFormat('en-GB', options).format(now));
    };

    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-wrap items-center gap-4 font-mono text-[10px] tracking-[0.2em] text-foreground/50 uppercase mb-4">
      
      {/* ONLINE STATUS */}
      <div className="flex items-center gap-2">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
        </span>
        <span className="text-primary font-bold">System: Active</span>
      </div>

      <span className="text-subtle/30 hidden sm:block">|</span>

      {/* LONDON TIME */}
      <div className="flex items-center gap-2">
        <span>London: <span className="text-foreground/80">{time} GMT</span></span>
      </div>

      <span className="text-subtle/30 hidden sm:block">|</span>

      {/* DATE */}
      <div className="hidden sm:flex items-center gap-2">
        <span>{new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}</span>
      </div>

    </div>
  );
}