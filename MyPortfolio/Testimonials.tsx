import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react';

const testimonials = [
  {
    text: "Pawan's dedication to his 366-day Java challenge is truly inspiring. He builds clean, logical systems and is always eager to learn more.",
    name: "Dr. Rajesh Sharma",
    role: "Professor, Informatics College Pokhara",
    rating: 5
  },
  {
    text: "Working with Pawan on our group project was a breeze. His backend logic for the database integration was flawless and well-documented.",
    name: "Suman Thapa",
    role: "CS Student Peer",
    rating: 5
  },
  {
    text: "I hired Pawan to help me debug a complex Java application. He found the issues quickly and explained the fixes clearly. Highly recommended!",
    name: "Anjali Gurung",
    role: "Freelance Client",
    rating: 5
  },
  {
    text: "Pawan is one of the most focused students I've met. His passion for Java backend engineering is evident in every project he touches.",
    name: "Bibek Karki",
    role: "Senior Developer Mentor",
    rating: 5
  }
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const next = () => {
    setDirection(1);
    setIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setDirection(-1);
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="section-padding relative overflow-hidden">
      <div className="max-w-4xl mx-auto text-center">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-[var(--accent)] font-mono text-sm font-bold uppercase tracking-widest mb-4 block"
        >
          What People Say
        </motion.span>

        <div className="relative mt-12 px-12">
          <Quote className="absolute -top-10 -left-4 text-[var(--accent)] opacity-20" size={80} />

          <div className="min-h-[300px] flex items-center justify-center">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={index}
                custom={direction}
                initial={{ opacity: 0, x: direction * 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction * -50 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="space-y-8"
              >
                <p className="text-2xl md:text-3xl font-display italic text-[var(--text)] leading-relaxed">
                  "{testimonials[index].text}"
                </p>

                <div className="flex flex-col items-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[var(--accent)] to-[var(--accent-warm)] p-1">
                    <div className="w-full h-full rounded-full bg-[var(--surface)] flex items-center justify-center font-bold text-xl">
                      {testimonials[index].name.charAt(0)}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-xl font-display font-bold">{testimonials[index].name}</h4>
                    <p className="text-[var(--muted)] text-sm">{testimonials[index].role}</p>
                  </div>
                  <div className="flex gap-1">
                    {[...Array(testimonials[index].rating)].map((_, i) => (
                      <Star key={i} size={16} fill="var(--accent)" className="text-[var(--accent)]" />
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 p-2 rounded-full border border-[var(--border)] hover:border-[var(--accent)] text-[var(--muted)] hover:text-[var(--accent)] transition-all"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 p-2 rounded-full border border-[var(--border)] hover:border-[var(--accent)] text-[var(--muted)] hover:text-[var(--accent)] transition-all"
            aria-label="Next testimonial"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Indicators */}
        <div className="flex justify-center gap-2 mt-12">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setDirection(i > index ? 1 : -1);
                setIndex(i);
              }}
              className={`w-2 h-2 rounded-full transition-all ${
                index === i ? 'w-8 bg-[var(--accent)]' : 'bg-[var(--dim)]'
              }`}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
