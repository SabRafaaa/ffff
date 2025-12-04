import { motion } from 'framer-motion';
import { Brain, Sparkles, Zap } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-tr from-indigo-500/10 via-transparent to-pink-500/10 pointer-events-none">
      {/* Split Layout Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-72 items-center xl:gap-84">
          
          {/* LEFT SIDE - Content with Stunning Background */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative z-20 space-y-8"
          >
            {/* Animated Background Elements for Left Side */}
            <div className="absolute inset-0 -z-10 overflow-hidden">
              <motion.div
                animate={{ 
                  rotate: [0, 360],
                  scale: [1, 1.2, 1],
                }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                
              />
              <motion.div
                animate={{ 
                  rotate: [360, 0],
                  scale: [1, 1.3, 1],
                }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                
              />
              
              {/* Floating Icons */}
              <motion.div
                animate={{ 
                  y: [0, -20, 0],
                  rotate: [0, 5, 0]
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-20 right-10 text-indigo-300/40"
              >
                <Brain className="w-16 h-16" />
              </motion.div>
              <motion.div
                animate={{ 
                  y: [0, 15, 0],
                  rotate: [0, -5, 0]
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute bottom-32 right-20 text-purple-300/40"
              >
                <Sparkles className="w-12 h-12" />
              </motion.div>
              <motion.div
                animate={{ 
                  y: [0, -15, 0],
                  rotate: [0, 10, 0]
                }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute top-1/2 right-5 text-pink-300/40"
              >
                <Zap className="w-14 h-14" />
              </motion.div>
            </div>

            {/* Logo */}
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ 
                type: 'spring',
                stiffness: 100,
                damping: 15,
                duration: 1,
              }}
              className="inline-block"
            >
              <motion.img
                src="https://mocha-cdn.com/019abc4c-26fb-732b-a9aa-088117316abc/logo.png"
                alt="FocusMind"
                className="w-20 h-20 rounded-2xl shadow-2xl"
                whileHover={{ 
                  scale: 1.1,
                  rotate: 5,
                  transition: { duration: 0.3 }
                }}
              />
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight"
            >
              <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent whitespace-nowrap">
                Strengthen Your Focus
              </span>
              <br />
              <span className="text-gray-800 whitespace-nowrap">
                Reclaim Your Potential
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-lg sm:text-xl text-gray-700 leading-relaxed"
            >
              You're not broken. Your brain just works differently. 
              Science-backed tools designed specifically for ADHD adults to 
              overcome working memory challenges and cognitive overload.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a
                href="#email-signup"
                className="px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-center"
              >
                Get Early Access
              </a>
              <a
                href="#tests"
                className="px-8 py-4 text-lg font-semibold text-indigo-600 bg-white border-2 border-indigo-200 rounded-full hover:border-indigo-300 hover:bg-indigo-50 transition-all duration-300 shadow-md hover:shadow-lg text-center"
              >
                Try Free Tests
              </a>
            </motion.div>
          </motion.div>

          {/* RIGHT SIDE - Video Container */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative h-full flex  items-center justify-end"
          >
           
            {/* Video without Border */}
            <div className="relative w-full">
              <div className="relative" style={{ mixBlendMode: 'multiply' }}>
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover opacity-20"
                  style={{ minHeight: '500px' }}
                >
                  <source src="https://raw.githubusercontent.com/SabRafaaa/GrokVid/main/grok-video-5c784b14-5100-4333-9725-9be71be399e4%20(1).mp4" type="video/mp4" />
                </video>
              </div>
              {/* Subtle overlay for polish */}
              <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/10 via-transparent to-pink-500/10  pointer-events-none rounded-2xl"></div>
            </div>
 
              
            {/* Floating Accent Elements around Video */}
            <motion.div
              animate={{ 
                y: [0, -10, 0],
                rotate: [0, 5, 0]
              }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-yellow-300 to-orange-400 rounded-full opacity-60 blur-xl"
            />
            <motion.div
              animate={{ 
                y: [0, 10, 0],
                rotate: [0, -5, 0]
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-4 -left-4 w-20 h-20 bg-gradient-to-br from-blue-300 to-indigo-400 rounded-full opacity-60 blur-xl"
            />
 
              
            {/* Floating Accent Elements around Video */}
            <motion.div
              animate={{ 
                y: [0, -10, 0],
                rotate: [0, 5, 0]
              }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-yellow-300 to-orange-400 rounded-full opacity-60 blur-xl"
            />
            <motion.div
              animate={{ 
                y: [0, 10, 0],
                rotate: [0, -5, 0]
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-4 -left-4 w-20 h-20 bg-gradient-to-br from-blue-300 to-indigo-400 rounded-full opacity-60 blur-xl"
            />
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ 
          opacity: { delay: 1, duration: 0.5 },
          y: { delay: 1.5, duration: 1.5, repeat: Infinity, ease: 'easeInOut' }
        }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-indigo-400 rounded-full mx-auto flex items-start justify-center p-2">
          <motion.div 
            className="w-1.5 h-1.5 bg-indigo-600 rounded-full"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          />
        </div>
      </motion.div>
    </section>
  );
}
