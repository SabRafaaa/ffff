import { Brain, Mail, Twitter, Linkedin, Instagram } from 'lucide-react';

export default function Footer() {
  const footerLinks = {
    Product: ['Tests', 'Games', 'Premium', 'Pricing', 'FAQ'],
    Resources: ['Blog', 'Research', 'Community', 'Support', 'Contact'],
    Company: ['About', 'Team', 'Careers', 'Press', 'Partners'],
    Legal: ['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'Accessibility'],
  };

  const socialLinks = [
    { Icon: Twitter, href: 'https://twitter.com/focusmind', label: 'Twitter' },
    { Icon: Linkedin, href: 'https://linkedin.com/company/focusmind', label: 'LinkedIn' },
    { Icon: Instagram, href: 'https://instagram.com/focusmind', label: 'Instagram' },
    { Icon: Mail, href: 'mailto:hello@focusmind.com', label: 'Email' },
  ];

  return (
    <footer id="contact" className="bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Top Section */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <img 
                src="https://mocha-cdn.com/019abc4c-26fb-732b-a9aa-088117316abc/logo.png" 
                alt="FocusMind Logo" 
                className="w-12 h-12 rounded-lg"
              />
              <span className="text-2xl font-bold">FocusMind</span>
            </div>
            <p className="text-indigo-200 mb-6 leading-relaxed max-w-md">
              Science-based cognitive tools designed specifically for ADHD adults. 
              Build focus, strengthen working memory, and reclaim your potential.
            </p>
            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-semibold text-white mb-4">{category}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}
                      className="text-indigo-200 hover:text-white transition-colors duration-200"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <p className="text-indigo-200 text-sm">
              © 2025 FocusMind. All rights reserved.
            </p>

            {/* Additional Info */}
            <div className="flex items-center gap-6 text-sm text-indigo-200">
              <span className="flex items-center gap-2">
                <Brain className="w-4 h-4" />
                Made for ADHD brains
              </span>
              <span>•</span>
              <span>Backed by neuroscience</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
