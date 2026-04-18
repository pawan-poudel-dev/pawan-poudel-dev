import { motion } from 'motion/react';
import { Terminal, Code2, ExternalLink } from 'lucide-react';

const profiles = [
  {
    name: 'HackerRank',
    username: 'poudelpawan770',
    url: 'https://www.hackerrank.com/profile/poudelpawan770',
    tagline: 'Java certs, problem solving challenges, and skill badges',
    icon: <Terminal size={40} />,
    color: '#2ec866'
  },
  {
    name: 'LeetCode',
    username: 'pawan-poudel-dev',
    url: 'https://leetcode.com/u/pawan-poudel-dev/',
    tagline: 'Daily DSA problems, algorithm practice, and consistency',
    icon: <Code2 size={40} />,
    color: '#ffa116'
  }
];

export default function CodingProfiles() {
  return (
    <section id="coding" className="section-padding relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-[var(--accent)] font-mono text-sm font-bold uppercase tracking-widest mb-4 block"
          >
            Where I Practice & Compete
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-display font-bold mb-6"
          >
            Sharpening my <br />
            <span className="text-[var(--muted)]">problem-solving skills daily.</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {profiles.map((profile, i) => (
            <motion.div
              key={profile.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="group relative p-10 rounded-3xl glass border border-[var(--border)] hover:border-[var(--accent)] transition-all hover:-translate-y-2 overflow-hidden"
            >
              {/* Background Glow */}
              <div
                className="absolute top-0 right-0 w-32 h-32 opacity-0 group-hover:opacity-20 transition-opacity blur-[60px]"
                style={{ backgroundColor: profile.color }}
              />

              <div className="relative z-10">
                <div
                  className="w-20 h-20 rounded-2xl bg-[var(--surface)] flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500"
                  style={{ color: profile.color }}
                >
                  {profile.icon}
                </div>

                <h3 className="text-3xl font-display font-bold mb-2">{profile.name}</h3>
                <p className="text-[var(--accent)] font-mono text-sm mb-4">@{profile.username}</p>
                <p className="text-[var(--muted)] text-lg mb-8 leading-relaxed">
                  {profile.tagline}
                </p>

                <a
                  href={profile.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest hover:text-[var(--accent)] transition-colors"
                >
                  View Profile <ExternalLink size={16} />
                </a>
              </div>

              {/* Decorative Platform Logo (Watermark) */}
              <div className="absolute -bottom-10 -right-10 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity pointer-events-none">
                <div className="scale-[4]">
                  {profile.icon}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
