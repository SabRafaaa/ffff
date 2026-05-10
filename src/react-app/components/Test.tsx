import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Brain, Timer, Target, Zap, Hash, ListOrdered, ArrowLeft, RotateCcw, CheckCircle2, Trophy, BarChart3, LayoutGrid } from 'lucide-react';

// Import the test components
import StroopTest from './StroopTest';
import DigitSpanTest from './DigitSpanTest';
import NBackTest from './NBackTest';
import CPTTest from './CPTTest';
import GoNoGoTest from './GoNoGoTest';
import WorkingMemoryTest from './WorkingMemoryTest';

const testData = [
  { id: 'n-back', icon: Brain, title: 'N-Back Memory', color: 'from-indigo-500 to-purple-500', description: 'Measure and train your working memory.' },
  { id: 'stroop', icon: Target, title: 'Stroop Test', color: 'from-purple-500 to-pink-500', description: 'Evaluate cognitive interference control.' },
  { id: 'cpt', icon: Timer, title: 'CPT Test', color: 'from-pink-500 to-rose-500', description: 'Assess sustained attention via visual stimulus.' },
  { id: 'go-no-go', icon: Zap, title: 'Go/No-Go', color: 'from-rose-500 to-orange-500', description: 'Test your ability to inhibit automatic responses.' },
  { id: 'digit-span', icon: Hash, title: 'Digit Span', color: 'from-orange-500 to-amber-500', description: 'Evaluate short-term digit recall capacity.' },
  { id: 'working-memory', icon: ListOrdered, title: 'Memory Span', color: 'from-amber-500 to-yellow-500', description: 'Assessment of memory storage and processing.' },
];

export default function TestsSection() {
  const [activeTestId, setActiveTestId] = useState<string | null>(null);
  const [result, setResult] = useState<{ score: number; total: number } | null>(null);
  const [view, setView] = useState<'grid' | 'report'>('grid');
  
  const [progress, setProgress] = useState<Record<string, number>>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('cognitive-lab-progress');
      return saved ? JSON.parse(saved) : {};
    }
    return {};
  });

  useEffect(() => {
    localStorage.setItem('cognitive-lab-progress', JSON.stringify(progress));
  }, [progress]);

  const handleComplete = (score: number, total: number) => {
    const percentage = Math.round((score / total) * 100);
    setResult({ score, total });

    if (activeTestId) {
      setProgress(prev => ({
        ...prev,
        [activeTestId]: Math.max(prev[activeTestId] || 0, percentage)
      }));
    }
  };

  const completedCount = Object.keys(progress).length;
  const overallProgress = Math.round((completedCount / testData.length) * 100);

  return (
    <section id="tests" className="py-24 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatePresence mode="wait">
          {!activeTestId ? (
            /* --- DASHBOARD VIEW --- */
            <motion.div key="dashboard" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              
              <div className="text-center mb-16">
                <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4">
                  Cognitive <span className="text-indigo-600">Lab</span>
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Select a scientifically validated assessment to begin. Each test takes about 2-5 minutes.
                </p>
              </div>

              {/* View Toggler */}
              <div className="flex justify-center mb-10">
                <div className="bg-slate-100 p-1 rounded-2xl flex gap-1">
                  <button 
                    onClick={() => setView('grid')}
                    className={`flex items-center gap-2 px-6 py-2 rounded-xl font-bold transition-all ${view === 'grid' ? 'bg-white shadow-sm text-indigo-600' : 'text-slate-500'}`}
                  >
                    <LayoutGrid size={18} /> Grid View
                  </button>
                  <button 
                    onClick={() => setView('report')}
                    className={`flex items-center gap-2 px-6 py-2 rounded-xl font-bold transition-all ${view === 'report' ? 'bg-white shadow-sm text-indigo-600' : 'text-slate-500'}`}
                  >
                    <BarChart3 size={18} /> Performance Report
                  </button>
                </div>
              </div>

              {view === 'grid' ? (
                /* --- GRID VIEW --- */
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {testData.map((test) => (
                    <motion.div
                      key={test.id}
                      whileHover={{ y: -5 }}
                      onClick={() => setActiveTestId(test.id)}
                      className="cursor-pointer relative group bg-gray-50 p-8 rounded-3xl border border-gray-100 hover:border-indigo-300 hover:bg-white transition-all shadow-sm"
                    >
                      {progress[test.id] !== undefined && (
                        <div className="absolute top-6 right-6 text-green-600 bg-green-50 px-3 py-1 rounded-full text-xs font-bold border border-green-100">
                          {progress[test.id]}%
                        </div>
                      )}
                      <div className={`w-14 h-14 bg-gradient-to-br ${test.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}>
                        <test.icon className="text-white" size={28} />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{test.title}</h3>
                      <p className="text-gray-600 mb-6 line-clamp-2">{test.description}</p>
                      <div className="text-indigo-600 font-bold flex items-center gap-2">Start <Zap size={16} /></div>
                    </motion.div>
                  ))}
                </div>
              ) : (
                /* --- REPORT TABLE VIEW --- */
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-4xl mx-auto bg-white border border-slate-200 rounded-[2rem] overflow-hidden shadow-xl">
                  <table className="w-full text-left">
                    <thead className="bg-slate-50 border-b border-slate-200">
                      <tr>
                        <th className="px-8 py-5 font-bold text-slate-700">Assessment Name</th>
                        <th className="px-8 py-5 font-bold text-slate-700 text-center">Status</th>
                        <th className="px-8 py-5 font-bold text-slate-700 text-right">Best Score</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {testData.map((test) => (
                        <tr key={test.id} className="hover:bg-slate-50/50 transition-colors">
                          <td className="px-8 py-5 flex items-center gap-4">
                            <div className={`p-2 rounded-lg bg-gradient-to-br ${test.color} text-white`}>
                              <test.icon size={18} />
                            </div>
                            <span className="font-semibold text-slate-900">{test.title}</span>
                          </td>
                          <td className="px-8 py-5 text-center">
                            {progress[test.id] !== undefined ? (
                              <span className="inline-flex items-center gap-1 text-green-600 bg-green-50 px-3 py-1 rounded-full text-xs font-bold">
                                <CheckCircle2 size={14} /> Completed
                              </span>
                            ) : (
                              <span className="text-slate-400 text-xs font-bold italic">Not attempted</span>
                            )}
                          </td>
                          <td className="px-8 py-5 text-right">
                            <span className={`text-xl font-black ${progress[test.id] ? 'text-indigo-600' : 'text-slate-200'}`}>
                              {progress[test.id] !== undefined ? `${progress[test.id]}%` : '--'}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  <div className="p-8 bg-slate-50 flex justify-between items-center">
                    <span className="text-slate-500 font-medium">Overall Lab Completion</span>
                    <div className="flex items-center gap-4">
                      <div className="w-48 h-3 bg-slate-200 rounded-full overflow-hidden">
                        <div className="h-full bg-indigo-600 transition-all duration-1000" style={{ width: `${overallProgress}%` }} />
                      </div>
                      <span className="font-black text-indigo-600">{overallProgress}%</span>
                    </div>
                  </div>
                </motion.div>
              )}
            </motion.div>
          ) : (
            /* --- TEST RUNNER (Same as before) --- */
            <motion.div key="active" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="max-w-3xl mx-auto">
              <button onClick={() => { setActiveTestId(null); setResult(null); }} className="flex items-center gap-2 text-gray-400 hover:text-indigo-600 mb-8 font-medium">
                <ArrowLeft size={20} /> Exit to Lab
              </button>

              <div className="bg-white rounded-[2.5rem] p-10 shadow-2xl border border-gray-100 min-h-[500px] flex flex-col justify-center">
                {result ? (
                  <div className="text-center">
                    <Trophy className="mx-auto mb-6 text-amber-400" size={64} />
                    <h2 className="text-4xl font-black mb-2">Test Complete!</h2>
                    <div className="text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 my-8">
                      {Math.round((result.score / result.total) * 100)}%
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <button onClick={() => setResult(null)} className="flex items-center justify-center gap-2 bg-slate-900 text-white px-8 py-4 rounded-2xl font-bold hover:bg-slate-800 transition-all">
                        <RotateCcw size={20} /> Retake Test
                      </button>
                      <button onClick={() => { setActiveTestId(null); setResult(null); setView('report'); }} className="px-8 py-4 border-2 border-slate-200 rounded-2xl font-bold hover:bg-slate-50 transition-all text-slate-700">
                        View Report
                      </button>
                    </div>
                  </div>
                ) : (
                  <TestSwitcher id={activeTestId} onComplete={handleComplete} />
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

function TestSwitcher({ id, onComplete }: { id: string, onComplete: (s: number, t: number) => void }) {
  switch (id) {
    case 'n-back': return <NBackTest onComplete={onComplete} />;
    case 'stroop': return <StroopTest onComplete={onComplete} />;
    case 'cpt': return <CPTTest onComplete={onComplete} />;
    case 'go-no-go': return <GoNoGoTest onComplete={onComplete} />;
    case 'digit-span': return <DigitSpanTest onComplete={onComplete} />;
    case 'working-memory': return <WorkingMemoryTest onComplete={onComplete} />;
    default: return <div>Loading...</div>;
  }
}