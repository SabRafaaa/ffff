import { motion } from 'framer-motion';
import { Crown, Calendar, Target, FileText, CheckCircle2, Sparkles } from 'lucide-react';

const premiumFeatures = [
  {
    icon: Calendar,
    title: 'ADHD-Optimized Planners',
    description: 'Time-blocking templates with built-in break reminders and dopamine-reward systems.',
  },
  {
    icon: Target,
    title: 'Executive Function Exercises',
    description: 'Daily cognitive workouts to strengthen planning, prioritization, and task initiation.',
  },
  {
    icon: FileText,
    title: 'Productivity Templates',
    description: 'Pre-structured workflows for common tasks that eliminate decision fatigue.',
  },
  {
    icon: CheckCircle2,
    title: 'Guided Worksheets',
    description: 'Step-by-step tools for goal-setting, habit tracking, and emotional regulation.',
  },
];

export default function PremiumSection() {
  return (
    <section id="premium" className="py-24 bg-gradient-to-br from-white via-indigo-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Card: Premium Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 rounded-3xl p-8 lg:p-12 text-white shadow-2xl relative overflow-hidden"
          >
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
            
            <div className="relative z-10">
              {/* Icon */}
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                whileInView={{ scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
                className="inline-block mb-6"
              >
                <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-xl">
                  <Crown className="w-10 h-10 text-white" />
                </div>
              </motion.div>

              {/* Title */}
              <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-balance">
                Unlock Premium Content
              </h2>
              
              {/* Description */}
              <p className="text-lg text-indigo-100 mb-8 leading-relaxed text-balance">
                Go deeper with our comprehensive collection of ADHD resources. 
                Science-based tools designed by neuroscientists and ADHD coaches 
                to help you build sustainable systems that work with your brain, not against it.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                  <div className="text-2xl font-bold mb-1">100+</div>
                  <div className="text-sm text-indigo-100">Resources</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                  <div className="text-2xl font-bold mb-1">Weekly</div>
                  <div className="text-sm text-indigo-100">Updates</div>
                </div>
              </div>

              {/* CTA */}
              <motion.a
                href="https://www.amazon.com/dp/placeholder"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-indigo-600 font-semibold rounded-full hover:bg-indigo-50 transition-all shadow-xl"
              >
                <Sparkles className="w-5 h-5" />
                Get Premium Access
              </motion.a>
            </div>
          </motion.div>

          {/* Right Card: What You Get */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-3xl p-8 lg:p-12 shadow-xl border-2 border-gray-200"
          >
            {/* Title */}
            <h3 className="text-3xl font-bold text-gray-900 mb-8 text-balance">
              What You Get
            </h3>

            {/* Features List */}
            <div className="space-y-6">
              {premiumFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="flex gap-4"
                >
                  {/* Icon */}
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-xl flex items-center justify-center">
                      <feature.icon className="w-6 h-6 text-indigo-600" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h4 className="text-xl font-semibold text-gray-900 mb-2">
                      {feature.title}
                    </h4>
                    <p className="text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Bottom CTA */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="mt-10 p-6 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl border border-indigo-200"
            >
              <p className="text-center text-gray-700 font-medium">
                One-time payment • Lifetime access • No subscription required
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
