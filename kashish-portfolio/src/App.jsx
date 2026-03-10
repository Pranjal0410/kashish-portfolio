import { useEffect, useState } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion, useScroll } from 'framer-motion';

import Navigation from './components/Navigation';
import CustomCursor from './components/CustomCursor';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Blog from './components/Blog';
import Skills from './components/Skills';
import Philosophy from './components/Philosophy';
import Footer from './components/Footer';

gsap.registerPlugin(ScrollTrigger);

function App() {
  const { scrollYProgress } = useScroll();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (loading) return;

    gsap.to(".global-bg-overlay", {
      opacity: 0,
      duration: 1,
      ease: "power2.inOut"
    });

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      smoothWheel: true,
    });

    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add((time) => lenis.raf(time * 1000));
    gsap.ticker.lagSmoothing(0);

    // Subtle ambient parallax
    gsap.to(".ambient-element-1", {
      yPercent: 25,
      ease: "none",
      scrollTrigger: { trigger: "body", start: "top top", end: "bottom bottom", scrub: 2 }
    });
    gsap.to(".ambient-element-2", {
      yPercent: -15,
      ease: "none",
      scrollTrigger: { trigger: "body", start: "top top", end: "bottom bottom", scrub: 2.5 }
    });

    return () => {
      lenis.destroy();
    };
  }, [loading]);

  if (loading) {
    return (
      <div className="min-h-screen bg-[#F5F0EB] flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="font-serif text-2xl text-text-primary tracking-[0.05em]"
        >
          KO<span className="text-accent-bronze">.</span>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="relative w-full overflow-hidden text-text-primary selection:bg-[#2C2522]/10 selection:text-[#2C2522]">
      <CustomCursor />

      {/* Scroll Progress — thin, subtle */}
      <motion.div
        style={{ scaleX: scrollYProgress, transformOrigin: "0%" }}
        className="fixed top-0 left-0 right-0 h-[1.5px] bg-[#2C2522] z-[100]"
      />

      {/* Load overlay */}
      <div className="global-bg-overlay fixed inset-0 bg-[#F5F0EB] z-[100] pointer-events-none" />

      {/* Ambient gradients — very subtle */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden opacity-[0.12]">
        <div className="ambient-element-1 absolute top-[15%] left-[5%] w-[500px] h-[500px] bg-accent-warm rounded-full blur-[160px] mix-blend-multiply" />
        <div className="ambient-element-2 absolute bottom-[15%] right-[5%] w-[600px] h-[600px] bg-accent-sage rounded-full blur-[180px] mix-blend-multiply" />
      </div>

      <Navigation />

      <main className="relative z-10 mx-auto px-5 sm:px-8 md:px-14 lg:px-20 xl:px-28 w-full max-w-[1360px]">
        <Hero />
        <About />
        <Services />
        <Blog />
        <Skills />
      </main>

      <div className="relative z-10">
        <Philosophy />
        <Footer />
      </div>
    </div>
  );
}

export default App;
