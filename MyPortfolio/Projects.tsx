import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Github, ExternalLink, Code2, Database, Terminal, Layers } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'Banking System',
    description: 'Console-based Java banking app with account creation, deposits, withdrawals, and balance queries. Built using OOP principles and clean class structure.',
    tags: ['Java', 'OOP', 'Console App'],
    github: 'https://github.com/pawan-poudel-dev/Workshop-366-days-Challenge-java-pratice-praticeAndPratice/tree/4a050b3f07bf5e9ec3c6411f4fe2e1324923a156/Mini-Projects/BankingSystem',
    category: 'Java',
    icon: <Terminal size={24} />,
    gradient: 'from-blue-500/20 to-cyan-500/20'
  },
  {
    id: 2,
    title: 'Student Management System',
    description: 'Java application to manage student records with full CRUD operations, search, and OOP design patterns. Clean data handling and modular structure.',
    tags: ['Java', 'OOP', 'Data Management'],
    github: 'https://github.com/pawan-poudel-dev/Workshop-366-days-Challenge-java-pratice-praticeAndPratice/tree/4a050b3f07bf5e9ec3c6411f4fe2e1324923a156/Mini-Projects/StudentManagementSystem',
    category: 'Java',
    icon: <Code2 size={24} />,
    gradient: 'from-green-500/20 to-emerald-500/20'
  },
  {
    id: 3,
    title: 'NewBook App',
    description: 'Java-based notebook/newsfeed app built during the 366-day challenge. Focuses on clean architecture and modular data flow for efficient processing.',
    tags: ['Java', 'OOP', 'Application Design'],
    github: 'https://github.com/pawan-poudel-dev/Workshop-366-days-Challenge-java-pratice-praticeAndPratice/tree/4a050b3f07bf5e9ec3c6411f4fe2e1324923a156/Mini-Projects/NewBook',
    category: 'Java',
    icon: <Layers size={24} />,
    gradient: 'from-purple-500/20 to-pink-500/20'
  },
  {
    id: 4,
    title: '366-Day Java Practice',
    description: 'An ongoing daily Java coding journey documenting consistent growth across algorithms, data structures, OOP, and mini-projects. Public repository with all daily commits.',
    tags: ['Java', 'DSA', 'Git', 'GitHub', 'Open Source'],
    github: 'https://github.com/pawan-poudel-dev/Workshop-366-days-Challenge-java-pratice-praticeAndPratice',
    category: 'Java',
    icon: <Github size={24} />,
    gradient: 'from-orange-500/20 to-yellow-500/20'
  }
];

const categories = ['All', 'Java', 'Spring Boot', 'SQL', 'MongoDB', 'OOP'];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter(p => p.tags.includes(activeCategory) || p.category === activeCategory);

  return (
    <section id="projects" className="section-padding bg-[var(--surface)]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-[var(--accent)] font-mono text-sm font-bold uppercase tracking-widest mb-4 block"
          >
            Things I've Built
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-display font-bold mb-6"
          >
            Real projects from my <br />
            <span className="text-[var(--muted)]">366-day Java challenge.</span>
          </motion.h2>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${
                activeCategory === cat
                  ? 'bg-[var(--accent)] text-[var(--bg)]'
                  : 'bg-[var(--card)] text-[var(--muted)] border border-[var(--border)] hover:border-[var(--accent)]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group relative bg-[var(--card)] rounded-2xl border border-[var(--border)] overflow-hidden hover:border-[var(--accent)] transition-all flex flex-col"
              >
                {/* Thumbnail Area */}
                <div className={`h-48 bg-gradient-to-br ${project.gradient} flex items-center justify-center relative overflow-hidden`}>
                  <div className="text-[var(--accent)] group-hover:scale-125 transition-transform duration-500">
                    {project.icon}
                  </div>

                  {/* Tags Overlay */}
                  <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                    {project.tags.slice(0, 2).map(tag => (
                      <span key={tag} className="px-2 py-1 rounded-md glass text-[10px] font-bold uppercase tracking-wider">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 flex-1 flex flex-col">
                  <h3 className="text-2xl font-display font-bold mb-3 group-hover:text-[var(--accent)] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-[var(--muted)] text-sm leading-relaxed mb-6 flex-1">
                    {project.description}
                  </p>

                  <div className="flex items-center gap-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm font-bold text-[var(--accent)] hover:underline"
                    >
                      <Github size={18} /> View on GitHub
                    </a>
                  </div>
                </div>

                {/* Hover Overlay Effect */}
                <div className="absolute inset-0 bg-[var(--accent)] opacity-0 group-hover:opacity-[0.02] pointer-events-none transition-opacity" />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <div className="mt-16 text-center">
          <p className="text-[var(--muted)] font-medium mb-4">
            More projects coming soon — follow my GitHub journey 🚀
          </p>
          <a
            href="https://github.com/pawan-poudel-dev"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary inline-flex items-center gap-2"
          >
            <Github size={18} /> Follow @pawan-poudel-dev
          </a>
        </div>
      </div>
    </section>
  );
}
