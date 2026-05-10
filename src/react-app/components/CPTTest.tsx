import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function CPTTest({ onComplete }: { onComplete: (s: number, t: number) => void }) {
  const [currentLetter, setCurrentLetter] = useState("");
  const [round, setRound] = useState(0);
  const [score, setScore] = useState(0);
  const totalRounds = 20;
  const letters = "ABCDEFGHJKLMNPQRSTUV";

  useEffect(() => {
    if (round < totalRounds) {
      const isX = Math.random() < 0.25; // 25% chance of getting an X
      setCurrentLetter(isX ? "X" : letters[Math.floor(Math.random() * letters.length)]);
      
      const timer = setTimeout(() => {
        setRound(r => r + 1);
      }, 1200); // Letter stays for 1.2 seconds
      return () => clearTimeout(timer);
    } else {
      onComplete(score, totalRounds);
    }
  }, [round]);

  const handleInteraction = () => {
    if (currentLetter !== "X") setScore(s => s + 1);
    else setScore(s => Math.max(0, s - 1)); // Penalty for clicking X
  };

  return (
    <div className="text-center">
      <h3 className="text-xl font-bold mb-4">Click for every letter EXCEPT "X"</h3>
      <motion.div key={round} initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-9xl font-black mb-12 text-slate-800">
        {currentLetter}
      </motion.div>
      <button onClick={handleInteraction} className="w-full py-6 bg-rose-500 text-white rounded-2xl font-black text-2xl shadow-lg active:scale-95 transition-transform">
        HIT!
      </button>
    </div>
  );
}