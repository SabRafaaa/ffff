import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function GoNoGoTest({ onComplete }: { onComplete: (s: number, t: number) => void }) {
  const [type, setType] = useState<'go' | 'nogo' | 'wait' | 'feedback'>('wait');
  const [feedback, setFeedback] = useState<'correct' | 'error' | null>(null);
  const [round, setRound] = useState(0);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  
  const totalRounds = 15;
  const hasResponded = useRef(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const isStopped = useRef(false);

  const clearTimers = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
  };

  // MAIN ENGINE: This function handles the logic for a single round
  const runCycle = (currentRound: number) => {
    if (isStopped.current || currentRound >= totalRounds) return;

    // 1. Reset for new round
    setType('wait');
    setFeedback(null);
    hasResponded.current = false;

    // 2. Wait Phase (Fixation)
    const waitTime = Math.random() * 1000 + 800;
    timerRef.current = setTimeout(() => {
      if (isStopped.current) return;

      // 3. Show Stimulus
      const isGo = Math.random() > 0.3; // 70% Go
      setType(isGo ? 'go' : 'nogo');

      // 4. Response Window (700ms)
      timerRef.current = setTimeout(() => {
        if (!hasResponded.current && !isStopped.current) {
          // If they didn't click and it was a Red (No-Go), they get a point
          if (!isGo) setScore(prev => prev + 1);
          handleRoundEnd(currentRound);
        }
      }, 700);
    }, waitTime);
  };

  const handleClick = () => {
    if (isStopped.current || hasResponded.current || (type !== 'go' && type !== 'nogo')) return;
    
    clearTimers();
    hasResponded.current = true;

    if (type === 'go') {
      setScore(prev => prev + 1);
      setFeedback('correct');
    } else {
      setFeedback('error');
    }

    setType('feedback');
    // Brief feedback then move to next
    timerRef.current = setTimeout(() => handleRoundEnd(round), 400);
  };

  const handleRoundEnd = (completedRound: number) => {
    const nextRound = completedRound + 1;
    
    if (nextRound >= totalRounds) {
      // THE END
      isStopped.current = true;
      clearTimers();
      setIsFinished(true);
      onComplete(score, totalRounds);
    } else {
      setRound(nextRound);
      runCycle(nextRound); // Manually trigger next round
    }
  };

  // INITIAL START: Only runs once when component mounts
  useEffect(() => {
    isStopped.current = false;
    runCycle(0); 
    
    return () => {
      isStopped.current = true;
      clearTimers();
    };
  }, []);

  // Hard stop UI
  if (isFinished) return null;

  return (
    <div className="text-center w-full select-none">
      <div className="mb-8">
        <p className="text-xs font-black text-indigo-500 uppercase tracking-widest mb-2">
          Assessment {round + 1} / {totalRounds}
        </p>
        <h3 className="text-2xl font-bold text-slate-800">
          Tap <span className="text-green-500">Green</span> Circles
        </h3>
      </div>

      <div className="h-64 flex items-center justify-center relative">
        <AnimatePresence mode="wait">
          {type === 'wait' && (
            <motion.div 
              key="wait" 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              className="text-5xl text-slate-200 font-light"
            >
              +
            </motion.div>
          )}

          {(type === 'go' || type === 'nogo') && (
            <motion.div
              key="stim"
              onPointerDown={handleClick}
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ opacity: 0 }}
              className={`w-44 h-44 rounded-full cursor-pointer shadow-2xl transition-transform active:scale-95 ${
                type === 'go' ? 'bg-green-500 shadow-green-100' : 'bg-red-500 shadow-red-100'
              }`}
            />
          )}

          {type === 'feedback' && (
            <motion.div 
              key="feed" 
              className={`text-3xl font-black ${feedback === 'correct' ? 'text-green-600' : 'text-red-600'}`}
            >
              {feedback === 'correct' ? 'HIT!' : 'MISS!'}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <p className="mt-8 text-slate-400 font-medium italic">Avoid Red. React fast to Green.</p>
    </div>
  );
}