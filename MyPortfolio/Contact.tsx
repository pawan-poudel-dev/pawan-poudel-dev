import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, MapPin, GraduationCap, Github, Instagram, Facebook, Send, CheckCircle2, AlertCircle, Terminal, Code2 } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name) newErrors.name = 'Full Name is required';
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Enter a valid email address';
    }
    if (!formData.subject) newErrors.subject = 'Subject is required';
    if (!formData.message) {
      newErrors.message = 'Message is required';
    } else if (formData.message.length < 20) {
      newErrors.message = 'Message too short (min 20 chars)';
    }
    return newErrors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setStatus('loading');

    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setStatus('idle'), 5000);
    }, 2000);
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
    <section id="contact" className="section-padding bg-[var(--surface)] relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Left Column - Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-[var(--accent)] font-mono text-sm font-bold uppercase tracking-widest mb-4 block">
              Let's Work Together
            </span>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-8 leading-tight">
              Whether it's a project, internship, or just a chat — <br />
              <span className="text-[var(--muted)]">I'm always happy to connect.</span>
            </h2>

            <div className="space-y-8 mb-12">
              <ContactInfoItem icon={<Mail size={20} />} label="Email" value="poudelpawan770@gmail.com" href="mailto:poudelpawan770@gmail.com" />
              <ContactInfoItem icon={<MapPin size={20} />} label="Location" value="Pokhara, Nepal" />
              <ContactInfoItem icon={<GraduationCap size={20} />} label="College" value="Informatics College Pokhara" />
              <div className="flex items-center gap-4 p-4 rounded-xl border border-[var(--border)] bg-[var(--card)] w-fit">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                </span>
                <span className="text-sm font-bold">Available for internships & freelance projects</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-5 py-3 rounded-xl border border-[var(--border)] bg-[var(--card)] text-[var(--muted)] hover:text-[var(--accent)] hover:border-[var(--accent)] transition-all hover:-translate-y-1"
                >
                  {link.icon}
                  <span className="text-sm font-bold">{link.label}</span>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="p-8 md:p-12 rounded-3xl glass border border-[var(--border)]"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormInput
                  label="Full Name"
                  type="text"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  error={errors.name}
                />
                <FormInput
                  label="Email"
                  type="email"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  error={errors.email}
                />
              </div>
              <FormInput
                label="Subject"
                type="text"
                placeholder="Project Inquiry"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                error={errors.subject}
              />
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-[var(--muted)]">Message</label>
                <textarea
                  placeholder="Tell me about your project..."
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className={`w-full px-5 py-4 rounded-xl bg-[var(--surface)] border ${errors.message ? 'border-red-500' : 'border-[var(--border)]'} focus:border-[var(--accent)] outline-none transition-all resize-none`}
                />
                {errors.message && <p className="text-red-500 text-[10px] font-bold uppercase tracking-widest">{errors.message}</p>}
              </div>

              <button
                type="submit"
                disabled={status === 'loading'}
                className={`w-full btn-primary py-4 flex items-center justify-center gap-3 ${status === 'loading' ? 'opacity-70 cursor-not-allowed' : ''}`}
              >
                {status === 'loading' ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Sending...
                  </>
                ) : status === 'success' ? (
                  <>
                    <CheckCircle2 size={20} /> Message Sent!
                  </>
                ) : (
                  <>
                    Send Message <Send size={18} />
                  </>
                )}
              </button>

              {status === 'success' && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center text-green-500 text-xs font-bold"
                >
                  I'll reply within 24 hours. Thank you!
                </motion.p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ContactInfoItem({ icon, label, value, href }: { icon: any, label: string, value: string, href?: string }) {
  const Content = (
    <div className="flex items-center gap-4 group">
      <div className="w-12 h-12 rounded-xl bg-[var(--card)] border border-[var(--border)] flex items-center justify-center text-[var(--accent)] group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <div>
        <p className="text-xs font-bold uppercase tracking-widest text-[var(--muted)] mb-1">{label}</p>
        <p className="text-lg font-display font-bold text-[var(--text)] group-hover:text-[var(--accent)] transition-colors">{value}</p>
      </div>
    </div>
  );

  return href ? <a href={href}>{Content}</a> : Content;
}

function FormInput({ label, type, placeholder, value, onChange, error }: { label: string, type: string, placeholder: string, value: string, onChange: (e: any) => void, error?: string }) {
  return (
    <div className="space-y-2">
      <label className="text-xs font-bold uppercase tracking-widest text-[var(--muted)]">{label}</label>
      <div className="relative">
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className={`w-full px-5 py-4 rounded-xl bg-[var(--surface)] border ${error ? 'border-red-500' : 'border-[var(--border)]'} focus:border-[var(--accent)] outline-none transition-all`}
        />
        {error ? (
          <AlertCircle className="absolute right-4 top-1/2 -translate-y-1/2 text-red-500" size={18} />
        ) : value && (
          <CheckCircle2 className="absolute right-4 top-1/2 -translate-y-1/2 text-green-500" size={18} />
        )}
      </div>
      {error && <p className="text-red-500 text-[10px] font-bold uppercase tracking-widest">{error}</p>}
    </div>
  );
}
