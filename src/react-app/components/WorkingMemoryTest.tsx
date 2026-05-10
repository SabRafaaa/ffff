import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function WorkingMemoryTest({ onComplete }: { onComplete: (s: number, t: number) => void }) {
  const [step, setStep] = useState(0);
  const [phase, setPhase] = useState<'math' | 'memo' | 'recall'>('math');
  const [equation, setEquation] = useState({ q: "2 + 3 = 5", a: true });
  const [letters, setLetters] = useState<string[]>([]);
  const [userInput, setUserInput] = useState("");
  const [mathScore, setMathScore] = useState(0);

  const TOTAL_STEPS = 4; // Number of items to remember

  // Generate a new math problem
  const generateMath = () => {
    const a = Math.floor(Math.random() * 9) + 1;
    const b = Math.floor(Math.random() * 9) + 1;
    const result = a + b;
    const isCorrect = Math.random() > 0.5;
    const displayResult = isCorrect ? result : result + (Math.random() > 0.5 ? 1 : -1);
    setEquation({ q: `${a} + ${b} = ${displayResult}`, a: isCorrect });
  };

  useEffect(() => {
    generateMath();
  }, []);

  const handleMathAnswer = (answer: boolean) => {
    if (answer === equation.a) setMathScore(s => s + 1);
    setPhase('memo'); // Move to memory phase
    const newLetter = "BCDFGHJKLMNPQRSTVWXYZ"[Math.floor(Math.random() * 21)];
    setLetters(prev => [...prev, newLetter]);
  };

  const nextStep = () => {
    if (step + 1 < TOTAL_STEPS) {
      setStep(s => s + 1);
      generateMath();
      setPhase('math');
    } else {
      setPhase('recall');
    }
  };

  // Auto-advance the memory letter after 1.5 seconds
  useEffect(() => {
    if (phase === 'memo') {
      const timer = setTimeout(nextStep, 1500);
      return () => clearTimeout(timer);
    }
  }, [phase]);

  const handleRecall = (e: React.FormEvent) => {
    e.preventDefault();
    const isCorrect = userInput.toUpperCase() === letters.join("");
    // Final score is 1 if they got all letters in order, else 0
    onComplete(isCorrect ? 1 : 0, 1);
  };

  return (
    <div className="text-center max-w-sm mx-auto">
      <AnimatePresence mode="wait">
        {phase === 'math' && (
          <motion.div key="math" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <p className="text-indigo-500 font-bold mb-2">Step {step + 1} of {TOTAL_STEPS}</p>
            <h3 className="text-3xl font-bold mb-8">{equation.q}</h3>
            <div className="flex gap-4">
              <button onClick={() => handleMathAnswer(true)} className="flex-1 py-4 bg-green-500 text-white rounded-2xl font-bold">True</button>
              <button onClick={() => handleMathAnswer(false)} className="flex-1 py-4 bg-red-500 text-white rounded-2xl font-bold">False</button>
            </div>
          </motion.div>
        )}

        {phase === 'memo' && (
          <motion.div key="memo" initial={{ scale: 0.5, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="py-10">
            <p className="text-slate-400 mb-4">Remember this letter:</p>
            <div className="text-8xl font-black text-indigo-600">
              {letters[letters.length - 1]}
            </div>
          </motion.div>
        )}

        {phase === 'recall' && (
          <motion.div key="recall" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <h3 className="text-2xl font-bold mb-6">Enter the letters in order</h3>
            <form onSubmit={handleRecall} className="space-y-6">
              <input 
                autoFocus
                className="w-full text-4xl text-center border-b-4 border-indigo-500 uppercase outline-none py-2 tracking-widest"
                value={userInput}
                onChange={e => setUserInput(e.target.value)}
                placeholder="????"
              />
              <button className="w-full py-4 bg-indigo-600 text-white rounded-2xl font-bold">Submit Recall</button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}