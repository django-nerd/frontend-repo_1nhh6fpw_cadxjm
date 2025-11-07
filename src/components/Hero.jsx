import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-[90vh] w-full overflow-hidden bg-black text-white">
      {/* 3D Spline Scene */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradient overlay for readability (does not block interactions) */}
      <div className="pointer-events-none absolute inset-0 from-black/40 via-black/20 to-transparent bg-gradient-to-b" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center px-6 pt-28 text-center md:pt-36">
        <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium backdrop-blur">
          <Rocket size={14} className="text-teal-300" />
          Building playful, modern web experiences
        </span>
        <h1 className="mt-6 text-4xl font-black tracking-tight sm:text-5xl md:text-6xl">
          Hi, I'm <span className="bg-gradient-to-r from-teal-300 via-sky-300 to-fuchsia-300 bg-clip-text text-transparent">Your Name</span>
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-balance text-white/80 md:text-lg">
          Frontend engineer and creative coder crafting interactive interfaces, immersive products, and delightful UI systems.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 rounded-lg bg-white px-4 py-2 text-sm font-semibold text-black shadow hover:bg-white/90"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-lg border border-white/20 bg-white/5 px-4 py-2 text-sm font-semibold text-white backdrop-blur hover:bg-white/10"
          >
            <Mail size={16} /> Contact
          </a>
        </div>

        <div className="mt-8 flex items-center gap-4">
          <a
            href="https://github.com/" target="_blank" rel="noreferrer"
            className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 p-2 hover:bg-white/10"
            aria-label="GitHub"
          >
            <Github size={18} />
          </a>
          <a
            href="https://linkedin.com/" target="_blank" rel="noreferrer"
            className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 p-2 hover:bg-white/10"
            aria-label="LinkedIn"
          >
            <Linkedin size={18} />
          </a>
        </div>
      </div>

      {/* bottom gradient fade to content */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-black" />
    </section>
  );
};

export default Hero;
