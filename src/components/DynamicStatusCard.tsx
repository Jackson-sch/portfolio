import React, { useState, useEffect } from 'react';
import { MapPin, Clock } from 'lucide-react';

export default function DynamicStatusCard() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const timeString = time.toLocaleTimeString('es-ES', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: true
  });

  return (
    <div className="flex flex-col justify-between h-full">
      <div className="flex items-center gap-2 text-zinc-500">
        <MapPin size={14} className="text-blue-500" />
        <span className="text-[10px] font-mono tracking-widest uppercase">Perú, Lima</span>
      </div>

      <div className="flex flex-col gap-1 mt-auto">
        <div className="flex items-center gap-2">
          <Clock size={16} className="text-zinc-600 dark:text-zinc-400" />
          <span className="text-3xl font-black text-white light:text-zinc-900 tabular-nums tracking-tighter">
            {timeString}
          </span>
        </div>
        <p className="text-[10px] text-zinc-600 dark:text-zinc-400 font-mono">Hora Local</p>
      </div>
    </div>
  );
}
