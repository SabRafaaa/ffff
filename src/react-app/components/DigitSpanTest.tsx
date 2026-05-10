import { useState, useEffect } from 'react';

export default function DigitSpanTest({ onComplete }: { onComplete: (s: number, t: number) => void }) {
  const [level, setLevel] = useState(3);
  const [sequence, setSequence] = useState<number[]>([]);
  const [showing, setShowing] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [input, setInput] = useState("");

  useEffect(() => {
    const seq = Array.from({ length: level }, () => Math.floor(Math.random() * 10));
    setSequence(seq);
    setShowing(true);
    setCurrentIndex(0);
    setInput("");

    const interval = setInterval(() => {
      setCurrentIndex(prev => {
        if (prev >= level - 1) {
          clearInterval(interval);
          setTimeout(() => setShowing(false), 1000);
          return prev;
        }
        return prev + 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [level]);

  const check = (e: React.FormEvent) => {
    e.preventDefault();
    if (input === sequence.join("")) {
      if (level === 7) onComplete(7, 7);
      else setLevel(level + 1);
    } else {
      onComplete(level - 1, 7);
    }
  };

  return (
    <div className="text-center">
      <h3 className="text-xl font-bold mb-10">Memorize the Sequence</h3>
      {showing ? (
        <div className="text-8xl font-black text-indigo-600">{sequence[currentIndex]}</div>
      ) : (
        <form onSubmit={check} className="space-y-6">
          <input 
            autoFocus 
            className="text-4xl text-center w-full border-b-4 border-indigo-500 outline-none p-2"
            value={input}
            onChange={e => setInput(e.target.value)}
          />
          <button className="w-full bg-indigo-600 text-white py-4 rounded-2xl font-bold">Submit</button>
        </form>
      )}
    </div>
  );
}