import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function AttentionArena() {
  const [targets, setTargets] = useState<{id: number, color: string, pos: number}[]>([]);
  const [arenaColor, setArenaColor] = useState('bg-indigo-500');
  const colors = ['bg-indigo-500', 'bg-rose-500', 'bg-amber-500'];

  useEffect(() => {
    const int = setInterval(() => {
      setTargets(prev => [...prev, {
        id: Date.now(),
        color: colors[Math.floor(Math.random()*3)],
        pos: Math.floor(Math.random() * 360)
      }].slice(-5));
      if(Math.random() > 0.7) setArenaColor(colors[Math.floor(Math.random()*3)]);
    }, 1200);
    return () => clearInterval(int);
  }, [arenaColor]);

  return (
    <div className="relative w-full h-[350px] bg-slate-50 rounded-[3rem] flex items-center justify-center overflow-hidden border-2 border-slate-200">
      <div className={`w-20 h-20 rounded-full ${arenaColor} shadow-xl z-10`} />
      {targets.map(t => (
        <motion.div
          key={t.id}
          onClick={() => t.color === arenaColor ? setTargets(prev => prev.filter(x => x.id !== t.id)) : alert('Impulsive!')}
          initial={{ scale: 0 }} animate={{ scale: 1 }}
          className={`absolute w-12 h-12 rounded-full cursor-pointer ${t.color}`}
          style={{ transform: `rotate(${t.pos}deg) translate(110px) rotate(-${t.pos}deg)` }}
        />
      ))}
    </div>
  );
}