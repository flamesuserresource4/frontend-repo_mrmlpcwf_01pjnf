import React from 'react';
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';
import { Rocket, Mail, Github, Linkedin } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-[90vh] w-full overflow-hidden bg-gradient-to-b from-zinc-950 via-zinc-900 to-zinc-900 text-white">
      <div className="absolute inset-0 opacity-80" aria-hidden>
        <Spline
          scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Subtle gradient overlay to improve text contrast */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-zinc-950/70 via-zinc-950/40 to-zinc-900/90" aria-hidden />

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-start px-6 py-28 md:flex-row md:items-center md:gap-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-sm text-white backdrop-blur">
            <Rocket className="h-4 w-4 text-emerald-400" />
            <span>Tech • Interactive • Modern</span>
          </div>

          <h1 className="font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl">
            Prathamesh More
          </h1>
          <p className="mt-3 text-lg text-zinc-200 md:text-xl">“I never like to lose.”</p>
          <p className="mt-5 max-w-xl text-balance text-zinc-300">
            I craft fast, accessible, and delightful digital experiences. From intuitive UIs to robust systems,
            I ship products that feel as good as they look.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-lg bg-emerald-500 px-5 py-3 font-medium text-white shadow-lg shadow-emerald-500/25 transition hover:bg-emerald-400"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-lg bg-white/10 px-5 py-3 font-medium text-white backdrop-blur transition hover:bg-white/20"
            >
              <Mail className="h-4 w-4" /> Contact Me
            </a>
          </div>

          <div className="mt-8 flex items-center gap-4 text-zinc-300">
            <a className="hover:text-white transition" href="https://github.com/" target="_blank" rel="noreferrer">
              <Github className="h-6 w-6" />
            </a>
            <a className="hover:text-white transition" href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
              <Linkedin className="h-6 w-6" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
