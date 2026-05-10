import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type GameState = 'idle' | 'displaying' | 'playing' | 'gameover';

export default function MemoryMatrix() {
  const [gridSize, setGridSize] = useState(3);
  const [sequence, setSequence] = useState<number[]>([]);
  const [userSelection, setUserSelection] = useState<number[]>([]);
  const [gameState, setGameState] = useState<GameState>('idle');
  const [level, setLevel] = useState(1);
  const [wrongSelection, setWrongSelection] = useState<number | null>(null);

  const startLevel = (nextLevel: number, nextGridSize: number) => {
    setGameState('displaying');
    setUserSelection([]);
    setWrongSelection(null);
    setGridSize(nextGridSize);
    setLevel(nextLevel);

    const count = 2 + Math.floor(nextLevel / 2);
    const newSeq: number[] = [];
    while (newSeq.length < count) {
      const r = Math.floor(Math.random() * (nextGridSize * nextGridSize));
      if (!newSeq.includes(r)) newSeq.push(r);
    }
    setSequence(newSeq);

    setTimeout(() => setGameState('playing'), 1500);
  };

  const handleTileClick = (idx: number) => {
    if (gameState !== 'playing') return;

    if (sequence.includes(idx)) {
      if (!userSelection.includes(idx)) {
        const next = [...userSelection, idx];
        setUserSelection(next);

        if (next.length === sequence.length) {
          setGameState('idle');
          const nextLevel = level + 1;
          const targetGridSize = Math.min(3 + Math.floor((nextLevel - 1) / 3), 6);

          setTimeout(() => startLevel(nextLevel, targetGridSize), 1000);
        }
      }
    } else {
      setWrongSelection(idx);
      setGameState('gameover');
    }
  };

  const startGame = () => {
    startLevel(1, 3);
  };

  return (
    <div className="bg-slate-900 p-8 rounded-[3rem] text-center border-4 border-indigo-500/30 max-w-lg w-full mx-auto relative overflow-hidden shadow-[0_0_50px_-12px_rgba(99,102,241,0.3)]">
      <div className="flex justify-between items-center mb-6 text-indigo-400 font-black text-xs tracking-widest">
        <span className="bg-indigo-950/50 px-3 py-1 rounded-full border border-indigo-500/30">LEVEL {level}</span>
        <span className="bg-slate-800/50 px-3 py-1 rounded-full border border-slate-700">{gridSize}x{gridSize} MATRIX</span>
      </div>

      <div className="grid gap-3 mb-8" style={{ gridTemplateColumns: `repeat(${gridSize}, 1fr)` }}>
        <AnimatePresence>
          {Array.from({ length: gridSize * gridSize }).map((_, i) => {
            const isTarget = sequence.includes(i);
            const isSelected = userSelection.includes(i);

            let tileStyles = 'bg-slate-800 border-slate-700';
            let shadowStyle = '';

            if (gameState === 'displaying' && isTarget) {
              tileStyles = 'bg-indigo-400 border-indigo-300';
              shadowStyle = '0 0 25px rgba(129,140,248,0.8)';
            } else if ((gameState === 'playing' || gameState === 'idle') && isSelected) {
              tileStyles = 'bg-emerald-400 border-emerald-300';
              shadowStyle = '0 0 20px rgba(52,211,153,0.6)';
            } else if (gameState === 'gameover') {
              if (i === wrongSelection) {
                tileStyles = 'bg-rose-500 border-rose-400';
                shadowStyle = '0 0 25px rgba(244,63,94,0.8)';
              } else if (isTarget && isSelected) {
                tileStyles = 'bg-emerald-500 border-emerald-400 opacity-60';
              } else if (isTarget && !isSelected) {
                tileStyles = 'bg-indigo-400/60 border-indigo-400/50';
              } else {
                tileStyles = 'bg-slate-800/40 border-slate-800/50';
              }
            } else {
              tileStyles = 'bg-slate-800 hover:bg-slate-700/80 border-slate-700/50';
            }

            return (
              <motion.div
                key={i}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1, boxShadow: shadowStyle }}
                transition={{ duration: 0.3, delay: i * 0.02 }}
                whileTap={gameState === 'playing' ? { scale: 0.85 } : {}}
                onClick={() => handleTileClick(i)}
                className={`aspect-square rounded-2xl cursor-pointer transition-colors duration-300 border-2 ${tileStyles} ${gameState !== 'playing' ? 'cursor-default' : ''}`}
              />
            );
          })}
        </AnimatePresence>
      </div>

      <div className="min-h-[4rem] flex flex-col justify-center">
        <AnimatePresence mode="wait">
          {gameState === 'idle' && level === 1 && sequence.length === 0 && (
            <motion.button
              key="start"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              onClick={startGame}
              className="bg-indigo-600 hover:bg-indigo-500 transition-colors text-white px-8 py-4 rounded-2xl font-black uppercase tracking-[0.2em] w-full shadow-lg shadow-indigo-500/20"
            >
              Begin Training
            </motion.button>
          )}
          {gameState === 'gameover' && (
            <motion.div
              key="gameover"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              className="flex flex-col items-center"
            >
              <div className="text-rose-400 font-black mb-3 uppercase tracking-[0.3em] text-sm animate-pulse">System Failure</div>
              <button
                onClick={startGame}
                className="bg-rose-600 hover:bg-rose-500 transition-colors text-white px-8 py-3 rounded-2xl font-bold uppercase tracking-widest w-full shadow-lg shadow-rose-500/20"
              >
                Restart Sequence
              </button>
            </motion.div>
          )}
          {gameState === 'idle' && level > 1 && sequence.length !== 0 && (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              className="flex flex-col items-center"
            >
              <div className="text-emerald-400 font-extrabold uppercase tracking-[0.3em] text-lg">LEVEL CLEARED</div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}