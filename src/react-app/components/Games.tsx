import { motion } from 'framer-motion';
import { Gamepad2, Puzzle, Sparkles, Trophy } from 'lucide-react';

const games = [
  {
    icon: Gamepad2,
    title: 'Memory Matrix',
    description: 'Train your visual-spatial working memory with progressively challenging pattern recognition.',
    difficulty: 'Beginner',
    time: '10 min',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Puzzle,
    title: 'Focus Flow',
    description: 'Improve sustained attention and task-switching with this adaptive cognitive training game.',
    difficulty: 'Intermediate',
    time: '15 min',
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: Sparkles,
    title: 'Speed Sort',
    description: 'Enhance processing speed and decision-making under time pressure with categorization challenges.',
    difficulty: 'Advanced',
    time: '8 min',
    color: 'from-orange-500 to-red-500',
  },
  {
    icon: Trophy,
    title: 'Attention Arena',
    description: 'Master selective attention and impulse control in this gamified executive function trainer.',
    difficulty: 'Expert',
    time: '12 min',
    color: 'from-green-500 to-emerald-500',
  },
];

export default function GamesSection() {
  return (
    <section id="games" className="py-24 bg-gradient-to-br from-gray-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 text-balance">
            Brain Training{' '}
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Games
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto text-balance">
            Make cognitive training enjoyable with engaging games designed to strengthen 
            executive functions while keeping you motivated.
          </p>
        </motion.div>

        {/* Games Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {games.map((game, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
              className="group"
            >
              <div className="h-full bg-white rounded-2xl p-6 border-2 border-gray-200 hover:border-indigo-300 hover:shadow-2xl transition-all duration-300">
                <div className="flex items-start gap-4">
                  {/* Icon */}
                  <div className={`flex-shrink-0 w-16 h-16 bg-gradient-to-br ${game.color} rounded-xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 shadow-lg`}>
                    <game.icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors">
                      {game.title}
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {game.description}
                    </p>

                    {/* Meta Info */}
                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                      <span className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full font-medium">
                        {game.difficulty}
                      </span>
                      <span className="flex items-center gap-1">
                        ⏱ {game.time}
                      </span>
                    </div>

                    {/* CTA */}
                    <button className="text-indigo-600 font-semibold hover:text-indigo-700 flex items-center gap-2 group-hover:gap-3 transition-all">
                      Play Now
                      <span className="text-xl">→</span>
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Feature Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="bg-white rounded-2xl p-8 border-2 border-indigo-200 shadow-xl"
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
      </div>
    </section>
  );
}
