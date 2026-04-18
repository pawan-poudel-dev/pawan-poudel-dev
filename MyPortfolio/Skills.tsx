import { motion } from 'motion/react';
import { Server, Database, GitBranch, Layout, Code } from 'lucide-react';

const mainSkills = [
  { name: 'Java', level: 80, label: 'Advanced', color: '#f89820' },
  { name: 'Spring Boot', level: 72, label: 'Intermediate', color: '#6db33f' },
  { name: 'MySQL / SQL', level: 75, label: 'Intermediate', color: '#00758f' },
  { name: 'MongoDB', level: 65, label: 'Intermediate', color: '#47a248' },
  { name: 'Git', level: 78, label: 'Intermediate', color: '#f05032' },
  { name: 'GitHub', level: 78, label: 'Intermediate', color: '#ffffff' },
];

const basicSkills = [
  { name: 'HTML5', level: 60, label: 'Learning', color: '#e34f26' },
  { name: 'CSS3', level: 55, label: 'Learning', color: '#1572b6' },
  { name: 'JavaScript', level: 50, label: 'Learning', color: '#f7df1e' },
];

const categories = [
  {
    title: 'Backend',
    icon: <Server size={24} />,
    skills: ['Java', 'Spring Boot', 'REST APIs', 'OOP'],
  },
  {
    title: 'Database',
    icon: <Database size={24} />,
    skills: ['MySQL', 'SQL Queries', 'MongoDB', 'Schema Design'],
  },
  {
    title: 'Version Control',
    icon: <GitBranch size={24} />,
    skills: ['Git', 'GitHub', 'Branching', 'Pull Requests'],
  },
  {
    title: 'Frontend',
    icon: <Layout size={24} />,
    skills: ['HTML5', 'CSS3', 'JavaScript (basics)'],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="section-padding relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-[var(--accent)] font-mono text-sm font-bold uppercase tracking-widest mb-4 block"
          >
            My Tech Stack
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-display font-bold mb-6"
          >
            Technologies I work with <br />
            <span className="text-[var(--muted)]">and skills I'm building.</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Left Panel - Progress Bars */}
          <div className="space-y-12">
            <div>
              <h3 className="text-xl font-display font-bold mb-8 flex items-center gap-2">
                <Code className="text-[var(--accent)]" size={20} /> Main Skills
              </h3>
              <div className="space-y-6">
                {mainSkills.map((skill, i) => (
                  <div key={skill.name}>
                    <SkillBar skill={skill} index={i} />
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-display font-bold mb-8 flex items-center gap-2">
                <Layout className="text-[var(--accent)]" size={20} /> Basics / Learning
              </h3>
              <div className="space-y-6">
                {basicSkills.map((skill, i) => (
                  <div key={skill.name}>
                    <SkillBar skill={skill} index={i} />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Panel - Category Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 content-start">
            {categories.map((cat, i) => (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 rounded-2xl border border-[var(--border)] bg-[var(--card)] hover:border-[var(--accent)] transition-all hover:-translate-y-2 group"
              >
                <div className="w-12 h-12 rounded-xl bg-[var(--surface)] flex items-center justify-center text-[var(--accent)] mb-6 group-hover:scale-110 transition-transform">
                  {cat.icon}
                </div>
                <h4 className="text-xl font-display font-bold mb-4">{cat.title}</h4>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((s) => (
                    <span
                      key={s}
                      className="px-3 py-1 rounded-full bg-[var(--surface)] text-[var(--muted)] text-xs font-medium border border-[var(--border)]"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}

            {/* Decorative Card */}
            <div className="sm:col-span-2 p-8 rounded-2xl bg-gradient-to-br from-[var(--accent)] to-[var(--accent-warm)] text-[var(--bg)] flex flex-col justify-center items-center text-center">
              <h4 className="text-2xl font-display font-bold mb-2">Always Growing</h4>
              <p className="font-medium opacity-80">
                I spend at least 2 hours every day learning new concepts and solving problems.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

interface Skill {
  name: string;
  level: number;
  label: string;
  color: string;
}

function SkillBar({ skill, index }: { skill: Skill, index: number }) {
  return (
    <div className="space-y-2">
      <div className="flex justify-between items-end">
        <span className="font-bold text-[var(--text)]">{skill.name}</span>
        <span className="text-xs font-mono text-[var(--muted)] uppercase tracking-tighter">
          {skill.label} — {skill.level}%
        </span>
      </div>
      <div className="h-2 w-full bg-[var(--dim)] rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: index * 0.1, ease: "easeOut" }}
          className="h-full bg-[var(--accent)] rounded-full relative"
        >
          <div className="absolute top-0 right-0 w-2 h-full bg-white/20" />
        </motion.div>
      </div>
    </div>
  );
}
