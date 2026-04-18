import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sun, Moon, Menu, X } from 'lucide-react';
import { cn } from '@/src/lib/utils';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Coding', href: '#coding' },
  { name: 'Services', href: '#services' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);

      // Scroll spy
      const sections = navLinks.map(link => link.href.substring(1));
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element && window.scrollY >= element.offsetTop - 100) {
          setActiveSection(section);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('light');
  };

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 w-full z-50 transition-all duration-300 px-6 py-4',
        isScrolled ? 'glass py-3' : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="text-2xl font-display font-bold tracking-tighter flex items-center">
          Pawan Poudel<span className="text-[var(--accent)] ml-0.5">.</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={cn(
                'text-sm font-medium transition-colors hover:text-[var(--accent)] relative group',
                activeSection === link.href.substring(1) ? 'text-[var(--accent)]' : 'text-[var(--muted)]'
              )}
            >
              {link.name}
              <motion.span
                className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[var(--accent)] transition-all group-hover:w-full"
                initial={false}
                animate={{ width: activeSection === link.href.substring(1) ? '100%' : '0%' }}
              />
            </a>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-[var(--surface)] transition-colors text-[var(--text)]"
            aria-label="Toggle theme"
          >
            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          <a href="#contact" className="hidden sm:block btn-primary py-2 px-5 text-sm">
            Hire Me
          </a>

          {/* Mobile Toggle */}
          <button
            className="md:hidden p-2 text-[var(--text)]"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-[var(--surface)] border-b border-[var(--border)] p-6 flex flex-col gap-4 md:hidden"
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={link.name}
                href={link.href}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
                onClick={() => setIsMobileMenuOpen(false)}
                className={cn(
                  'text-lg font-medium py-2',
                  activeSection === link.href.substring(1) ? 'text-[var(--accent)]' : 'text-[var(--text)]'
                )}
              >
                {link.name}
              </motion.a>
            ))}
            <a
              href="#contact"
              className="btn-primary text-center mt-4"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Hire Me
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
