import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Gamepad2, Puzzle, Sparkles, Trophy, X, ArrowLeft } from 'lucide-react';

// Import your game components here
import MemoryMatrix from './MemoryMatrix';
import FocusFlow from './FocusFlow';
import SpeedSort from './SpeedSort';
import AttentionArena from './AttentionArena';

const games = [
  {
    id: 'memory-matrix',
    icon: Gamepad2,
    title: 'Memory Matrix',
    description: 'Train your visual-spatial working memory with progressively challenging pattern recognition.',
    difficulty: 'Beginner',
    time: '10 min',
    color: 'from-blue-500 to-cyan-500',
    component: <MemoryMatrix />
  },
  {
    id: 'focus-flow',
    icon: Puzzle,
    title: 'Focus Flow',
    description: 'Improve sustained attention and task-switching with this adaptive cognitive training game.',
    difficulty: 'Intermediate',
    time: '15 min',
    color: 'from-purple-500 to-pink-500',
    component: <FocusFlow />
  },
  {
    id: 'speed-sort',
    icon: Sparkles,
    title: 'Speed Sort',
    description: 'Enhance processing speed and decision-making under time pressure with categorization challenges.',
    difficulty: 'Advanced',
    time: '8 min',
    color: 'from-orange-500 to-red-500',
    component: <SpeedSort />
  },
  {
    id: 'attention-arena',
    icon: Trophy,
    title: 'Attention Arena',
    description: 'Master selective attention and impulse control in this gamified executive function trainer.',
    difficulty: 'Expert',
    time: '12 min',
    color: 'from-green-500 to-emerald-500',
    component: <AttentionArena />
  },
];

export default function GamesSection() {
  const [activeGameId, setActiveGameId] = useState<string | null>(null);

  const activeGame = games.find((g) => g.id === activeGameId);

  return (
    <section id="games" className="py-24 bg-linear-to-br from-gray-50 to-indigo-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <AnimatePresence mode="wait">
          {!activeGameId ? (
            /* --- GAMES LIST VIEW --- */
            <motion.div
              key="list"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, y: -20 }}
            >
              {/* Section Header */}
              <div className="text-center mb-16">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                  Brain Training{' '}
                  <span className="bg-linear-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                    Games
                  </span>
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Make cognitive training enjoyable with engaging games designed to strengthen 
                  executive functions while keeping you motivated.
                </p>
              </div>

              {/* Games Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                {games.map((game, index) => (
                  <motion.div
                    key={game.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    onClick={() => setActiveGameId(game.id)}
                    className="group cursor-pointer"
                  >
                    <div className="h-full bg-white rounded-2xl p-6 border-2 border-gray-200 hover:border-indigo-300 hover:shadow-2xl transition-all duration-300">
                      <div className="flex items-start gap-4">
                        <div className={`shrink-0 w-16 h-16 bg-linear-to-br ${game.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg`}>
                          <game.icon className="w-8 h-8 text-white" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-2xl font-semibold text-gray-900 mb-2 group-hover:text-indigo-600">
                            {game.title}
                          </h3>
                          <p className="text-gray-600 mb-4">{game.description}</p>
                          <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                            <span className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full font-medium">
                              {game.difficulty}
                            </span>
                            <span>⏱ {game.time}</span>
                          </div>
                          <button className="text-indigo-600 font-semibold flex items-center gap-2">
                            Play Now →
                          </button>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ) : (
            /* --- ACTIVE GAME PLAYER VIEW --- */
            <motion.div
              key="player"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="max-w-4xl mx-auto"
            >
              <div className="flex items-center justify-between mb-8">
                <button 
                  onClick={() => setActiveGameId(null)}
                  className="flex items-center gap-2 text-gray-600 hover:text-indigo-600 font-semibold transition-colors"
                >
                  <ArrowLeft size={20} /> Back to Games
                </button>
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-gray-900">{activeGame?.title}</h3>
                  <p className="text-sm text-gray-500">{activeGame?.difficulty} Level</p>
                </div>
                <div className="w-24" /> {/* Spacer for centering */}
              </div>

              <div className="bg-white rounded-[3rem] p-8 shadow-2xl border-4 border-white overflow-hidden relative min-h-[500px] flex items-center justify-center">
                 {activeGame?.component}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Show Stats only on the main menu */}
        {!activeGameId && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="bg-white rounded-2xl p-8 border-2 border-indigo-200 shadow-xl mt-12"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-indigo-600 mb-2">10,000+</div>
                <div className="text-gray-600">Active Players</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-indigo-600 mb-2">85%</div>
                <div className="text-gray-600">Report Improvement</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-indigo-600 mb-2">4.9/5</div>
                <div className="text-gray-600">Average Rating</div>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}