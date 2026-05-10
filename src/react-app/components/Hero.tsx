import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <header className="relative min-h-screen overflow-hidden text-white">
      {/* BACKGROUND VIDEO */}
<div className="absolute inset-0 z-0 flex items-center justify-center">
  <video
    autoPlay
    loop
    muted
    playsInline
    className="
      w-[110%] 
      h-[110%] 
      object-cover 
      scale-50
      md:scale-75
    "
  >
    <source
      src="https://raw.githubusercontent.com/SabRafaaa/GrokVid/main/Firefly change the background to white 118205 (1).mp4"
      type="video/mp4"
    />
  </video>

  {/* Stronger overlay for readability */}
  <div className="absolute inset-0 bg-emerald-800/65" />
</div>


      {/* HERO CONTENT */}
      <div className="relative z-10 flex items-center min-h-screen">
        <div className="w-full max-w-7xl mx-auto px-6 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
            className="max-w-3xl space-y-8"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl leading-tight">
  <span className="font-sans font-bold tracking-tight">
    Strengthen Your Focus
  </span>
  <br />
  <span className="font-serif italic font-medium text-white/90">
    Reclaim Your Potential
  </span>
</h1>


            <p className="max-w-xl text-lg text-emerald-300 leading-relaxed font-light">
  You're not broken. Your brain just works differently.
  Science-backed tools designed specifically for ADHD adults to overcome
  working memory challenges and cognitive overload.
</p>


            <div className="flex flex-wrap items-center gap-6 pt-4">
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 rounded-full border border-white/30 hover:border-white transition"
              >
                Reach out to us
              </a>

              <a
                href="#home-intro"
                className="text-sm text-white/70 hover:text-white transition"
              >
                Scroll to explore
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </header>
  );
}


