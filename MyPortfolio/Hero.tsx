import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { Github, Instagram, Facebook, Mail, ArrowRight, Download, Code2, Database, Terminal } from 'lucide-react';

const phrases = [
  "I build Java backend systems.",
  "I design clean SQL databases.",
  "I work with Spring Boot & MongoDB.",
  "I solve problems on LeetCode daily.",
  "I version everything with Git & GitHub.",
  "I'm a CS student who ships real code.",
];

export default function Hero() {
  const [text, setText] = useState('');
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    const handleType = () => {
      const currentPhrase = phrases[phraseIndex];
      if (isDeleting) {
        setText(currentPhrase.substring(0, text.length - 1));
        setTypingSpeed(50);
      } else {
        setText(currentPhrase.substring(0, text.length + 1));
        setTypingSpeed(100);
      }

      if (!isDeleting && text === currentPhrase) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setPhraseIndex((prev) => (prev + 1) % phrases.length);
      }
    };

    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, phraseIndex, typingSpeed]);

  const socialLinks = [
    { icon: <Github size={20} />, href: "https://github.com/pawan-poudel-dev", label: "GitHub" },
    { icon: <Code2 size={20} />, href: "https://leetcode.com/u/pawan-poudel-dev/", label: "LeetCode" },
    { icon: <Terminal size={20} />, href: "https://www.hackerrank.com/profile/poudelpawan770", label: "HackerRank" },
    { icon: <Instagram size={20} />, href: "https://www.instagram.com/poudelpawan778/", label: "Instagram" },
    { icon: <Facebook size={20} />, href: "https://www.facebook.com/pawan.poudel.461015", label: "Facebook" },
    { icon: <Mail size={20} />, href: "mailto:poudelpawan770@gmail.com", label: "Email" },
  ];

  return (
    <section id="home" className="min-h-screen flex flex-col justify-center relative overflow-hidden pt-20">
      {/* Background Atmosphere */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-[var(--accent)] opacity-[0.05] blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-[var(--accent-warm)] opacity-[0.05] blur-[120px]" />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.03]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-12 items-center">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[var(--border)] bg-[var(--surface)] mb-6"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--accent)] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--accent)]"></span>
            </span>
            <span className="text-xs font-medium text-[var(--muted)]">
              BSc Computing Student — Informatics College Pokhara
            </span>
          </motion.div>

          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="block text-[var(--muted)] font-mono text-xs uppercase tracking-[0.2em] mb-2"
          >
            Java Backend Engineer
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-6xl md:text-8xl font-display font-extrabold tracking-tighter leading-[0.9] mb-6"
          >
            <span className="text-[var(--accent)]">Pawan</span> <br />
            <span className="text-[var(--text)]">Poudel</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="h-8 mb-6"
          >
            <p className="text-xl md:text-2xl font-medium text-[var(--text)]">
              {text}
              <span className="inline-block w-[2px] h-[1em] bg-[var(--accent)] ml-1 animate-pulse align-middle" />
            </p>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-[var(--muted)] text-lg max-w-lg mb-8 leading-relaxed"
          >
            2nd year BSc Computing student at Informatics College Pokhara,
            building real-world Java applications and growing every single day.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="flex flex-wrap gap-4 mb-10"
          >
            <a href="#projects" className="btn-primary flex items-center gap-2">
              View My Projects <ArrowRight size={18} />
            </a>
            <a href="#" className="btn-secondary flex items-center gap-2">
              Download Resume <Download size={18} />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="flex items-center gap-4"
          >
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-[var(--border)] flex items-center justify-center text-[var(--muted)] hover:text-[var(--accent)] hover:border-[var(--accent)] transition-all hover:-translate-y-1"
                aria-label={link.label}
              >
                {link.icon}
              </a>
            ))}
          </motion.div>
        </motion.div>

        {/* Right Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="relative flex justify-center lg:justify-end"
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80">
            {/* Profile Frame */}
            <div className="absolute inset-0 rounded-full border-2 border-dashed border-[var(--accent)] animate-[spin_20s_linear_infinite] opacity-30" />
            <div className="absolute inset-4 rounded-full overflow-hidden border-4 border-[var(--surface)] shadow-2xl">
              <img
                src="https://picsum.photos/seed/pawan/800/800"
                alt="Pawan Poudel"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Floating Skill Badges */}
            <FloatingBadge icon={<Code2 size={14} />} text="Java" className="top-0 -left-4" delay={0} />
            <FloatingBadge icon={<Terminal size={14} />} text="Spring" className="top-1/4 -right-8" delay={1} />
            <FloatingBadge icon={<Database size={14} />} text="SQL" className="bottom-0 left-0" delay={2} />
            <FloatingBadge icon={<Github size={14} />} text="Git" className="bottom-1/4 -right-4" delay={3} />
          </div>

          {/* Background Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[var(--accent)] opacity-10 blur-[100px] -z-10" />
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[var(--muted)] text-[10px] uppercase tracking-widest">Scroll to explore</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-0.5 h-8 bg-gradient-to-b from-[var(--accent)] to-transparent rounded-full"
        />
      </motion.div>
    </section>
  );
}

function FloatingBadge({ icon, text, className, delay }: { icon: any, text: string, className: string, delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        y: [0, -10, 0],
      }}
      transition={{
        opacity: { delay: 1 + delay * 0.2 },
        y: { duration: 3, repeat: Infinity, ease: "easeInOut", delay: delay }
      }}
      className={`absolute z-10 flex items-center gap-2 px-3 py-1.5 rounded-full glass text-xs font-bold ${className}`}
    >
      <span className="text-[var(--accent)]">{icon}</span>
      <span>{text}</span>
    </motion.div>
  );
}
