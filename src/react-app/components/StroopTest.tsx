import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const OPTIONS = [
  { label: 'Red', color: 'text-red-600', bg: 'bg-red-600' },
  { label: 'Blue', color: 'text-blue-600', bg: 'bg-blue-600' },
  { label: 'Green', color: 'text-green-600', bg: 'bg-green-600' },
  { label: 'Purple', color: 'text-purple-600', bg: 'bg-purple-600' },
];

export default function StroopTest({ onComplete }: { onComplete: (s: number, t: number) => void }) {
  const [round, setRound] = useState(0);
  const [score, setScore] = useState(0);
  const [current, setCurrent] = useState({ word: '', ink: '' });

  const nextRound = () => {
    const wordIdx = Math.floor(Math.random() * OPTIONS.length);
    const inkIdx = Math.floor(Math.random() * OPTIONS.length);
    setCurrent({ word: OPTIONS[wordIdx].label, ink: OPTIONS[inkIdx].color });
  };

  useEffect(() => { nextRound(); }, []);

  const handleChoice = (label: string) => {
    const correctLabel = OPTIONS.find(o => o.color === current.ink)?.label;
    const newScore = label === correctLabel ? score + 1 : score;
    
    if (round + 1 >= 10) {
      onComplete(newScore, 10);
    } else {
      setScore(newScore);
      setRound(round + 1);
      nextRound();
    }
  };

  return (
    <div className="text-center">
      <p className="text-sm font-bold text-indigo-500 mb-4 uppercase tracking-widest">Question {round + 1}/10</p>
      <h3 className="text-xl text-gray-600 mb-8 font-medium">Click the <span className="font-bold text-gray-900 underline">Ink Color</span></h3>
      <motion.div key={round} initial={{ scale: 0.5 }} animate={{ scale: 1 }} className={`text-6xl font-black mb-12 ${current.ink}`}>
        {current.word}
      </motion.div>
      <div className="grid grid-cols-2 gap-4">
        {OPTIONS.map(opt => (
          <button key={opt.label} onClick={() => handleChoice(opt.label)} className="p-4 border-2 border-gray-100 rounded-2xl font-bold hover:border-indigo-500 hover:bg-indigo-50 transition-all text-gray-700">
            {opt.label}
          </button>
        ))}
      </div>
    </div>
  );
}