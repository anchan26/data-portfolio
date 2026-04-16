import { useState, useEffect } from 'react';

export default function LiveStatus() {
  const [time, setTime] = useState('');
  // Native browser API to check if the user is actually online
  const [isOnline, setIsOnline] = useState(typeof navigator !== 'undefined' ? navigator.onLine : true);

  useEffect(() => {
    // 1. Time Logic
    const updateTime = () => {
      const now = new Date();
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

    // 2. Network Status Event Listeners
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
    <div className="flex flex-wrap items-center gap-4 font-mono text-[10px] tracking-[0.2em] text-foreground/50 uppercase mb-4">
      
      {/* ONLINE / OFFLINE STATUS */}
      <div className="flex items-center gap-2">
        <span className="relative flex h-2 w-2">
          {/* Only show the ping animation if we are online */}
          {isOnline && <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00ff41] opacity-75"></span>}
          {/* Dot color changes based on network status */}
          <span className={`relative inline-flex rounded-full h-2 w-2 ${isOnline ? 'bg-[#00ff41]' : 'bg-red-500'}`}></span>
        </span>
        {/* Text color and label change based on network status */}
        <span className={`font-bold ${isOnline ? 'text-[#00ff41]' : 'text-red-500'}`}>
          System: {isOnline ? 'Active' : 'Offline'}
        </span>
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