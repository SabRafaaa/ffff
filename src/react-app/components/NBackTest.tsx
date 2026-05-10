import { useState, useEffect } from 'react';

export default function NBackTest({ onComplete }: { onComplete: (s: number, t: number) => void }) {
  const [history, setHistory] = useState<string[]>([]);
  const [round, setRound] = useState(0);
  const [score, setScore] = useState(0);
  const [current, setCurrent] = useState("");
  const LETTERS = "ABCDFGH";

  useEffect(() => {
    if (round < 15) {
      const char = LETTERS[Math.floor(Math.random() * LETTERS.length)];
      setCurrent(char);
      const timer = setTimeout(() => {
        setHistory(prev => [...prev, char]);
        setRound(r => r + 1);
      }, 2000);
      return () => clearTimeout(timer);
    } else {
      onComplete(score, 15);
    }
  }, [round]);

  const handleMatch = () => {
    const isMatch = history.length >= 2 && current === history[history.length - 2];
    if (isMatch) setScore(s => s + 1);
    else setScore(s => s - 1);
  };

  return (
    <div className="text-center">
      <p className="text-indigo-500 font-bold mb-4">2-BACK TASK</p>
      <div className="text-8xl font-black mb-12 h-24">{current}</div>
      <button 
        onClick={handleMatch}
        className="px-12 py-4 bg-indigo-600 text-white rounded-2xl font-bold text-xl hover:scale-105 active:scale-95 transition-all"
      >
        MATCH
      </button>
      <p className="mt-8 text-gray-400 text-sm">Click if the letter matches the one shown 2 steps ago.</p>
    </div>
  );
}