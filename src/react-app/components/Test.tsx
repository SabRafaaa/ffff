import { motion } from 'framer-motion';
import { Brain, Timer, Target, Zap, Hash, ListOrdered } from 'lucide-react';

const tests = [
  {
    icon: Brain,
    title: 'N-Back Working Memory Test',
    description: 'Measure and train your working memory capacity with this scientifically validated cognitive assessment.',
    color: 'from-indigo-500 to-purple-500',
  },
  {
    icon: Target,
    title: 'Stroop Color-Word Interference Test',
    description: 'Evaluate your cognitive interference control and selective attention processing abilities.',
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: Timer,
    title: 'Continuous Performance Test (CPT)',
    description: 'Assess sustained attention and response inhibition through timed visual stimulus recognition.',
    color: 'from-pink-500 to-rose-500',
  },
  {
    icon: Zap,
    title: 'Go/No-Go Response Inhibition',
    description: 'Test your ability to inhibit automatic responses and control impulsive behaviors.',
    color: 'from-rose-500 to-orange-500',
  },
  {
    icon: Hash,
    title: 'Digit Span Test',
    description: 'Evaluate both forward and backward digit recall to measure short-term memory capacity.',
    color: 'from-orange-500 to-amber-500',
  },
  {
    icon: ListOrdered,
    title: 'Working Memory Span Test',
    description: 'Comprehensive assessment of working memory storage and processing capabilities.',
    color: 'from-amber-500 to-yellow-500',
  },
];

export default function TestsSection() {
  return (
    <section id="tests" className="py-24 bg-white">
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
            Scientifically Validated{' '}
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Cognitive Tests
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto text-balance">
            Assess your cognitive abilities with research-backed tests designed specifically 
            for adults with ADHD. Track your progress and identify areas for improvement.
          </p>
        </motion.div>

        {/* Tests Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tests.map((test, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group"
            >
              <div className="h-full bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-6 border border-gray-200 hover:border-indigo-300 hover:shadow-xl transition-all duration-300">
                {/* Icon */}
                <div className={`w-14 h-14 bg-gradient-to-br ${test.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <test.icon className="w-7 h-7 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors">
                  {test.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {test.description}
                </p>

                {/* CTA */}
                <button className="text-indigo-600 font-medium hover:text-indigo-700 flex items-center gap-2 group-hover:gap-3 transition-all">
                  Start Test
                  <span className="text-xl">→</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="text-center mt-12"
        >
          <p className="text-gray-600 mb-4">
            All tests are free and take 5-15 minutes to complete
          </p>
          <button className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-full hover:from-indigo-700 hover:to-purple-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1">
            View All Tests
          </button>
        </motion.div>
      </div>
    </section>
  );
}
