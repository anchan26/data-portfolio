import { useState, useEffect } from 'react';

export default function LiveStatus() {
  const [londonTime, setLondonTime] = useState('');
  const [localTime, setLocalTime] = useState('');
  const [isOnline, setIsOnline] = useState(typeof navigator !== 'undefined' ? navigator.onLine : true);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      
      // 1. Fixed London Time (HQ)
      const londonOptions: Intl.DateTimeFormatOptions = {
        timeZone: 'Europe/London',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
      };
      setLondonTime(new Intl.DateTimeFormat('en-GB', londonOptions).format(now));

      // 2. Dynamic Local Time (Visitor's Timezone)
      const localOptions: Intl.DateTimeFormatOptions = {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
      };
      setLocalTime(new Intl.DateTimeFormat('en-GB', localOptions).format(now));
    };

    updateTime();
    const timer = setInterval(updateTime, 1000);

    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      clearInterval(timer);
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  return (
    <div className="flex flex-wrap items-center gap-3 md:gap-4 font-mono text-xs md:text-sm tracking-widest text-foreground/70 uppercase mb-6 bg-[#111] w-fit px-4 py-2 md:py-3 rounded-full border border-[#333]">
      
      {/* SYSTEM STATUS */}
      <div className="flex items-center gap-2">
        <span className="relative flex h-3 w-3">
          {isOnline && <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00ff41] opacity-75"></span>}
          <span className={`relative inline-flex rounded-full h-3 w-3 ${isOnline ? 'bg-[#00ff41]' : 'bg-red-500'}`}></span>
        </span>
        <span className={`font-bold ${isOnline ? 'text-[#00ff41]' : 'text-red-500'}`}>
          System: {isOnline ? 'Active' : 'Offline'}
        </span>
      </div>

      <span className="text-subtle/40 hidden sm:block">|</span>

      {/* DUAL CLOCKS */}
      <div className="flex items-center gap-3 md:gap-4">
        <span>LDN: <span className="text-white font-bold">{londonTime}</span></span>
        <span className="text-subtle/40">|</span>
        <span>LOCAL: <span className="text-white font-bold">{localTime}</span></span>
      </div>

    </div>
  );
}