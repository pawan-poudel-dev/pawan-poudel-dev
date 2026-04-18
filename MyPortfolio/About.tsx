import { motion } from 'motion/react';
import { CheckCircle2, Award, BookOpen, Rocket } from 'lucide-react';

const stats = [
  { label: 'Projects Shipped', value: '4+', icon: <Rocket size={20} /> },
  { label: 'Java Challenge', value: '366 Days', icon: <Award size={20} /> },
  { label: 'BSc Student', value: '2nd Year', icon: <BookOpen size={20} /> },
  { label: 'Tech Stack', value: '7+', icon: <CheckCircle2 size={20} /> },
];

export default function About() {
  return (
    <section id="about" className="section-padding bg-[var(--surface)] relative overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left Column - Visuals */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl rotate-[-3deg] border-8 border-[var(--card)]">
            <img
              src="https://picsum.photos/seed/pawan-about/600/800"
              alt="Pawan Poudel"
              className="w-full h-auto"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Floating Cards */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-6 -right-6 z-20 glass p-4 rounded-xl shadow-xl max-w-[180px]"
          >
            <p className="text-sm font-bold text-[var(--accent)] mb-1">Java Backend Focus 🔥</p>
            <p className="text-[10px] text-[var(--muted)]">Deep diving into Spring Boot & SQL</p>
          </motion.div>

          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute -bottom-6 -left-6 z-20 glass p-4 rounded-xl shadow-xl"
          >
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <p className="text-xs font-bold">Open to Internships ✅</p>
            </div>
          </motion.div>

          {/* Background Elements */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-[var(--border)] rounded-full -z-10 opacity-20" />
        </motion.div>

        {/* Right Column - Text */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-[var(--accent)] font-mono text-sm font-bold uppercase tracking-widest mb-4 block">
            About Me
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-8 leading-tight">
            A CS student who <br />
            <span className="text-[var(--muted)]">writes real code.</span>
          </h2>

          <div className="space-y-6 text-[var(--muted)] text-lg leading-relaxed mb-10">
            <p>
              I'm <span className="text-[var(--text)] font-semibold">Pawan Poudel</span>, a 2nd year BSc (Hons) Computing student
              at Informatics College Pokhara — a UK-affiliated institution
              in the heart of Nepal. My primary focus is Java backend
              engineering, where I'm building a strong foundation through
              daily practice and real projects.
            </p>
            <p>
              I work with Java, Spring Boot, SQL, MongoDB, Git, and GitHub
              to build backend systems and APIs. I also have basic knowledge
              of HTML, CSS, and JavaScript, and I'm continuously learning.
              I stay sharp through daily practice on LeetCode and HackerRank.
            </p>
            <p>
              I'm actively looking for internships, freelance opportunities,
              and collaborative projects where I can apply my skills, learn
              from professionals, and contribute meaningfully.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-4 rounded-xl border border-[var(--border)] bg-[var(--card)] hover:border-[var(--accent)] transition-colors group"
              >
                <div className="text-[var(--accent)] mb-2 group-hover:scale-110 transition-transform">
                  {stat.icon}
                </div>
                <p className="text-2xl font-display font-bold text-[var(--text)]">{stat.value}</p>
                <p className="text-xs text-[var(--muted)] uppercase tracking-wider">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
