import { useState } from 'react';

export default function SpeedSort() {
  const categories = ['Fruit', 'Tech', 'Tool'];

  const [currentItem, setCurrentItem] = useState({ name: 'Apple', cat: 'Fruit' });
  const [timeLeft, setTimeLeft] = useState(2000);
  const [score, setScore] = useState(0);
  const [feedback, setFeedback] = useState<'correct' | 'wrong' | null>(null);

  const items = [
    {name: '🍌', cat: 'Fruit'}, 
    {name: '💻', cat: 'Tech'}, 
    {name: '🔨', cat: 'Tool'},
    {name: '🍓', cat: 'Fruit'}, 
    {name: '📱', cat: 'Tech'}, 
    {name: '🔧', cat: 'Tool'}
  ];

  const sort = (cat: string) => {
    if (score >= 100) return; // Stop game if already finished

    setScore(prev => {
      let newScore;

      if (cat === currentItem.cat) {
        setFeedback('correct');
        newScore = prev + 10;
      } else {
        setFeedback('wrong');
        newScore = prev - 5;
      }

      if (newScore > 100) return 100;
      if (newScore < 0) return 0;

      return newScore;
    });

    setCurrentItem(items[Math.floor(Math.random() * items.length)]);
    setTimeLeft(2000);

    // Clear feedback after short delay
    setTimeout(() => setFeedback(null), 500);
  };

  const gameOver = score >= 100;

  return (
    <div className="bg-emerald-50 p-8 rounded-[3rem] text-center border-b-8 border-emerald-200">

      {gameOver ? (
        <div className="text-3xl font-black text-emerald-600 mb-6">
          🎉 GAME OVER 🎉
        </div>
      ) : (
        <div
          className={`text-3xl font-black mb-8 transition-colors duration-200
            ${feedback === 'correct' ? 'text-green-600' : ''}
            ${feedback === 'wrong' ? 'text-red-600' : 'text-emerald-600'}
          `}
        >
          {currentItem.name}
        </div>
      )}

      <div className="grid grid-cols-3 gap-2">
        {categories.map(c => (
          <button
            key={c}
            onClick={() => sort(c)}
            disabled={gameOver}
            className={`p-4 rounded-2xl shadow-sm border font-bold transition-colors
              ${gameOver
                ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                : 'bg-white border-emerald-100 text-emerald-800 hover:bg-emerald-500 hover:text-white'
              }
            `}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="mt-6 text-xs font-bold text-emerald-400">
        SCORE: {score}
      </div>
    </div>
  );
}