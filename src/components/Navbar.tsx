import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Über uns', href: '#about' },
    { name: 'Menü', href: '#menu' },
    { name: 'Galerie', href: '#gallery' },
    { name: 'Standort', href: '#location' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#" className={`text-2xl font-bold font-serif tracking-tighter ${isScrolled ? 'text-primary' : 'text-white'}`}>
          MAY FOOD
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-sm font-medium uppercase tracking-wider hover:text-primary transition-colors ${
                isScrolled ? 'text-text' : 'text-white/90'
              }`}
            >
              {link.name}
            </a>
          ))}
          <a
            href="https://www.lieferando.de/speisekarte/may-food-kln"
            target="_blank"
            rel="noopener noreferrer"
            className={`px-6 py-2 rounded-full text-sm font-semibold uppercase tracking-wider transition-all ${
              isScrolled
                ? 'bg-primary text-white hover:bg-primary-dark'
                : 'bg-white text-primary hover:bg-gray-100'
            }`}
          >
            Bestellen
          </a>
        </div>

        {/* Mobile Nav Toggle */}
        <button
          className="md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className={isScrolled ? 'text-text' : 'text-white'} />
          ) : (
            <Menu className={isScrolled ? 'text-text' : 'text-white'} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white shadow-lg py-4 px-6 md:hidden flex flex-col space-y-4"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-text font-medium uppercase tracking-wider hover:text-primary"
              >
                {link.name}
              </a>
            ))}
            <a
              href="https://www.lieferando.de/speisekarte/may-food-kln"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMobileMenuOpen(false)}
              className="px-6 py-3 bg-primary text-white text-center rounded-full font-semibold uppercase tracking-wider"
            >
              Bestellen
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
