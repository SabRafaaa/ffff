import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const reviews = [
  {
    name: 'Sarah Chen',
    role: 'Product Manager',
    rating: 5,
    text: 'Finally, tools that actually understand how my ADHD brain works. The working memory tests helped me identify my specific challenges, and the games make training feel effortless.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop',
  },
  {
    name: 'Marcus Rodriguez',
    role: 'Software Engineer',
    rating: 5,
    text: 'I\'ve tried countless productivity apps, but FocusMind is different. The science-backed approach and ADHD-specific design made me realize I wasn\'t failing—I just needed the right tools.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
  },
  {
    name: 'Emily Watson',
    role: 'Entrepreneur',
    rating: 5,
    text: 'The premium planners changed my life. I went from constant overwhelm to actually finishing projects. The templates eliminate decision fatigue and keep me on track.',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop',
  },
  {
    name: 'David Kim',
    role: 'Graduate Student',
    rating: 5,
    text: 'As someone diagnosed with ADHD in adulthood, these tools helped me understand my brain better. The N-Back test showed concrete improvements in my working memory over just 6 weeks.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop',
  },
  {
    name: 'Jessica Moore',
    role: 'Teacher',
    rating: 5,
    text: 'I love how the games make cognitive training feel like play rather than work. My focus has improved noticeably, and I actually look forward to my daily training sessions.',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop',
  },
  {
    name: 'Alex Thompson',
    role: 'Creative Director',
    rating: 5,
    text: 'The combination of tests and games is brilliant. I can track my progress objectively while staying engaged. Finally, ADHD support that respects my intelligence.',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop',
  },
];

export default function ReviewsSection() {
  return (
    <section id="reviews" className="py-24 bg-white">
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
            Trusted by{' '}
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              ADHD Adults
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto text-balance">
            Join thousands who've transformed their relationship with focus and productivity
          </p>
        </motion.div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group"
            >
              <div className="h-full bg-gradient-to-br from-gray-50 to-indigo-50 rounded-2xl p-6 border border-gray-200 hover:border-indigo-300 hover:shadow-xl transition-all duration-300 relative">
                {/* Quote Icon */}
                <div className="absolute top-4 right-4 opacity-20 group-hover:opacity-30 transition-opacity">
                  <Quote className="w-12 h-12 text-indigo-600" />
                </div>

                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-gray-700 mb-6 leading-relaxed relative z-10">
                  "{review.text}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <img
                    src={review.image}
                    alt={review.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-md"
                  />
                  <div>
                    <div className="font-semibold text-gray-900">{review.name}</div>
                    <div className="text-sm text-gray-600">{review.role}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-100 to-purple-100 rounded-full">
            <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
            <span className="text-gray-800 font-semibold">4.9/5 average rating from 10,000+ users</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
