/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import CodingProfiles from './components/CodingProfiles';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import { motion, useScroll, useSpring } from 'motion/react';

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="relative selection:bg-[var(--accent)] selection:text-[var(--bg)]">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-[var(--accent)] origin-left z-[60]"
        style={{ scaleX }}
      />

      <CustomCursor />
      <Navbar />
      
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <CodingProfiles />
        <Services />
        <Testimonials />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
