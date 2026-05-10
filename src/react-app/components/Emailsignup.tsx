import { motion, useReducedMotion } from 'framer-motion';
import { Mail, ArrowRight } from 'lucide-react';
import { useState } from 'react';
import Lottie from 'lottie-react';


export default function EmailSignup() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section
      id="email-signup"
      className="relative py-24 overflow-hidden bg-linear-to-br from-cyan-600 via-blue-300 to-yellow-900 text-white"
    >
      
      {/* Ambient floating elements */}
<div className="absolute inset-0 z-20 pointer-events-none">
  <motion.div
    animate={{ y: [0, -20, 0] }}
    transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
    className="absolute top-24 left-20 w-32 h-32 rounded-full blur-3xl"
  />

  <motion.div
    animate={{ y: [0, 20, 0] }}
    transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
    className="absolute bottom-32 right-32 w-40 h-40 rounded-full blur-3xl"
  />
</div>


      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          className="text-center"
        >
          {/* Icon */}
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, type: 'spring', stiffness: 160 }}
            className="inline-block mb-6"
          >
            <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
              <Mail className="w-8 h-8 text-white" />
            </div>
          </motion.div>

          {/* Headline */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-amber-100 drop-shadow-lg mb-6 leading-tight text-balance">
            Start Your Cognitive Journey Today
          </h2>

          <p className="text-lg sm:text-xl font-Dosis font-extralight text-white/90 mb-12 max-w-2xl mx-auto leading-relaxed text-balance">
            Get exclusive early access to our premium ADHD tools, scientifically-validated tests,
            and personalized training programs designed for your success.
          </p>

          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="max-w-md mx-auto"
          >
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="
                  flex-1 px-6 py-4 rounded-full text-gray-900
                  placeholder-gray-500
                  focus:outline-none focus:ring-4 focus:ring-white/30
                  transition-shadow
                "
              />

              <motion.button
                type="submit"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                transition={{ duration: 0.2 }}
                className="
                  px-8 py-4 bg-white text-indigo-600 font-semibold
                  rounded-full hover:bg-indigo-50
                  transition-all flex items-center justify-center gap-2
                  shadow-lg
                "
              >
                Get Access
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </div>

            {/* Success feedback */}
            {submitted && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-6 flex justify-center"
              >
                
              </motion.div>
            )}
          </motion.form>

          {/* Trust Indicators */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.4 } },
            }}
            className="mt-12 flex flex-wrap items-center justify-center gap-6 text-indigo-100 text-sm"
          >
            {[
              'Science-backed methods',
              'Privacy protected',
              'No spam, ever',
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={{
                  hidden: { opacity: 0, y: 8 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                className="flex items-center gap-2"
              >
                <div className="w-2 h-2 bg-green-400 rounded-full" />
                {item}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
