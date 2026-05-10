import { useState } from 'react';

export default function FocusFlow() {
  const [score, setScore] = useState(0);
  const [rule, setRule] = useState<'Color' | 'Shape'>('Color');
  const [item, setItem] = useState({ color: 'red', shape: 'circle' });

  const next = (correct: boolean) => {
    if (correct) setScore(s => s + 1);
    const colors = ['red', 'yellow'];
    const shapes = ['circle', 'square'];
    setItem({ color: colors[Math.floor(Math.random()*2)], shape: shapes[Math.floor(Math.random()*2)] });
    setRule(Math.random() > 0.6 ? (rule === 'Color' ? 'Shape' : 'Color') : rule);
  };

  return (
    <div className={`p-10 rounded-[3rem] transition-colors duration-500 ${rule === 'Color' ? 'bg-blue-600' : 'bg-purple-600'} text-white text-center`}>
      <p className="font-black uppercase tracking-widest text-xs opacity-70 mb-2">Rule</p>
      <h2 className="text-4xl font-black mb-8">Match {rule}</h2>
      <div className={`w-24 h-24 mx-auto mb-10 shadow-2xl bg-${item.color}-400 ${item.shape === 'circle' ? 'rounded-full' : ''}`} 
           style={{backgroundColor: item.color}} />
      <div className="flex gap-4">
        <button onClick={() => next(rule === 'Color' ? item.color === 'red' : item.shape === 'circle')} className="flex-1 bg-white/20 p-4 rounded-2xl backdrop-blur-lg font-bold">
          {rule === 'Color' ? 'RED' : 'CIRCLE'}
        </button>
        <button onClick={() => next(rule === 'Color' ? item.color === 'yellow' : item.shape === 'square')} className="flex-1 bg-white/20 p-4 rounded-2xl backdrop-blur-lg font-bold">
          {rule === 'Color' ? 'YELLOW' : 'SQUARE'}
        </button>
      </div>
    </div>
  );
}