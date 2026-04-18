import { motion, AnimatePresence } from 'motion/react';
import { Github, Instagram, Facebook, Mail, Terminal, Code2, ArrowUp } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Footer() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    { icon: <Github size={20} />, href: "https://github.com/pawan-poudel-dev", label: "GitHub" },
    { icon: <Code2 size={20} />, href: "https://leetcode.com/u/pawan-poudel-dev/", label: "LeetCode" },
    { icon: <Terminal size={20} />, href: "https://www.hackerrank.com/profile/poudelpawan770", label: "HackerRank" },
    { icon: <Instagram size={20} />, href: "https://www.instagram.com/poudelpawan778/", label: "Instagram" },
    { icon: <Facebook size={20} />, href: "https://www.facebook.com/pawan.poudel.461015", label: "Facebook" },
    { icon: <Mail size={20} />, href: "mailto:poudelpawan770@gmail.com", label: "Email" },
  ];

  return (
    <footer className="bg-[var(--bg)] border-t border-[var(--border)] pt-20 pb-10 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 mb-20">
        {/* Brand */}
        <div>
          <a href="#home" className="text-3xl font-display font-bold tracking-tighter flex items-center mb-6">
            Pawan Poudel<span className="text-[var(--accent)] ml-0.5">.</span>
          </a>
          <p className="text-[var(--muted)] text-sm mb-2">CS Student. Java Engineer. Problem Solver.</p>
          <p className="text-[var(--muted)] text-xs">Informatics College Pokhara, Nepal 🇳🇵</p>
        </div>

        {/* Links */}
        <div className="flex flex-col gap-4">
          <h4 className="text-sm font-bold uppercase tracking-widest text-[var(--text)] mb-2">Quick Links</h4>
          <div className="grid grid-cols-2 gap-2">
            <a href="#home" className="text-[var(--muted)] hover:text-[var(--accent)] text-sm transition-colors">Home</a>
            <a href="#about" className="text-[var(--muted)] hover:text-[var(--accent)] text-sm transition-colors">About</a>
            <a href="#skills" className="text-[var(--muted)] hover:text-[var(--accent)] text-sm transition-colors">Skills</a>
            <a href="#projects" className="text-[var(--muted)] hover:text-[var(--accent)] text-sm transition-colors">Projects</a>
            <a href="#coding" className="text-[var(--muted)] hover:text-[var(--accent)] text-sm transition-colors">Coding</a>
            <a href="#services" className="text-[var(--muted)] hover:text-[var(--accent)] text-sm transition-colors">Services</a>
            <a href="#contact" className="text-[var(--muted)] hover:text-[var(--accent)] text-sm transition-colors">Contact</a>
          </div>
        </div>

        {/* Socials */}
        <div>
          <h4 className="text-sm font-bold uppercase tracking-widest text-[var(--text)] mb-6">Connect With Me</h4>
          <div className="flex flex-wrap gap-3">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl border border-[var(--border)] bg-[var(--card)] flex items-center justify-center text-[var(--muted)] hover:text-[var(--accent)] hover:border-[var(--accent)] transition-all"
                aria-label={link.label}
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto pt-10 border-t border-[var(--border)] flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-[var(--muted)] text-xs text-center md:text-left">
          © {new Date().getFullYear()} Pawan Poudel. All rights reserved.
        </p>
        <p className="text-[var(--muted)] text-xs flex items-center gap-2">
          Built with <span className="text-red-500">☕</span> & Java passion
        </p>
      </div>

      {/* Back to Top */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5, y: 20 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 w-12 h-12 rounded-full bg-[var(--accent)] text-[var(--bg)] flex items-center justify-center shadow-2xl z-40 hover:scale-110 active:scale-90 transition-transform"
            aria-label="Back to top"
          >
            <ArrowUp size={24} />
          </motion.button>
        )}
      </AnimatePresence>
    </footer>
  );
}
