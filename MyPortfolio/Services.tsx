import { motion } from 'motion/react';
import { Code, Database, Server, Github, GraduationCap, Bug } from 'lucide-react';

const services = [
  {
    title: 'Java Application Development',
    description: 'OOP systems, console apps, business logic, and data handling tailored to specific requirements.',
    icon: <Code size={32} />,
    features: ['OOP Principles', 'Clean Architecture', 'Modular Design']
  },
  {
    title: 'Database Design & Management',
    description: 'MySQL schema design, complex SQL queries, and MongoDB collections for robust data storage.',
    icon: <Database size={32} />,
    features: ['Schema Optimization', 'Query Tuning', 'NoSQL Integration']
  },
  {
    title: 'Spring Boot REST APIs',
    description: 'Backend API development, endpoint design, and integration for modern web applications.',
    icon: <Server size={32} />,
    features: ['RESTful Services', 'JSON Processing', 'API Documentation']
  },
  {
    title: 'Git & GitHub Project Setup',
    description: 'Repo setup, branching strategy, and version control workflow for collaborative development.',
    icon: <Github size={32} />,
    features: ['Repo Organization', 'Branching Strategy', 'PR Workflows']
  },
  {
    title: 'Student Project Assistance',
    description: 'Java and Database coursework help for fellow CS students looking for guidance and support.',
    icon: <GraduationCap size={32} />,
    features: ['Code Explanation', 'Logic Building', 'Debugging Help']
  },
  {
    title: 'Code Review & Debugging',
    description: 'Review Java code, fix bugs, and improve structure and efficiency for better performance.',
    icon: <Bug size={32} />,
    features: ['Bug Fixing', 'Performance Tuning', 'Refactoring']
  }
];

export default function Services() {
  return (
    <section id="services" className="section-padding bg-[var(--surface)]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-[var(--accent)] font-mono text-sm font-bold uppercase tracking-widest mb-4 block"
          >
            What I Can Do For You
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-display font-bold mb-6"
          >
            Affordable, quality work <br />
            <span className="text-[var(--muted)]">from a dedicated CS student.</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 rounded-2xl border border-[var(--border)] bg-[var(--card)] hover:border-[var(--accent)] transition-all group"
            >
              <div className="w-16 h-16 rounded-xl bg-[var(--surface)] flex items-center justify-center text-[var(--accent)] mb-8 group-hover:scale-110 transition-transform duration-500">
                {service.icon}
              </div>

              <h3 className="text-xl font-display font-bold mb-4 group-hover:text-[var(--accent)] transition-colors">
                {service.title}
              </h3>
              <p className="text-[var(--muted)] text-sm mb-6 leading-relaxed">
                {service.description}
              </p>

              <ul className="space-y-3 mb-8">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-xs font-medium text-[var(--text)]">
                    <div className="w-1 h-1 rounded-full bg-[var(--accent)]" />
                    {feature}
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className="text-xs font-bold uppercase tracking-widest text-[var(--accent)] hover:underline flex items-center gap-2"
              >
                Get in Touch <div className="w-4 h-px bg-[var(--accent)]" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
