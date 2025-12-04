import { motion } from 'framer-motion';

export default function Header() {
  const menuItems = ['Home', 'About', 'Tests', 'Games', 'Premium', 'Reviews', 'FAQs', 'Contact'];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 100, damping: 20 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-200/50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Left: Logo + Name */}
          <div className="flex items-center gap-3">
            <img 
              src="https://mocha-cdn.com/019abc4c-26fb-732b-a9aa-088117316abc/logo.png" 
              alt="FocusMind Logo" 
              className="w-10 h-10 rounded-lg"
            />
            <span className="text-xl font-semibold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              FocusMind
            </span>
          </div>

          {/* Center: Menu (hidden on mobile) */}
          <nav className="hidden lg:flex items-center gap-8">
            {menuItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm font-medium text-gray-700 hover:text-indigo-600 transition-colors duration-200"
              >
                {item}
              </a>
            ))}
          </nav>

          {/* Right: Buttons */}
          <div className="flex items-center gap-3">
            <button className="hidden sm:block px-4 py-2 text-sm font-medium text-indigo-600 hover:text-indigo-700 transition-colors duration-200">
              Sign Up
            </button>
            <a 
              href="https://www.amazon.com/dp/placeholder" 
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all duration-200 shadow-md hover:shadow-lg"
            >
              Shop Now
            </a>
          </div>
        </div>
      </div>
    </motion.header>
  );
}
