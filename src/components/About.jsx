import React from 'react';

const About = () => {
  return (
    <section id="about" className="relative w-full bg-black py-20 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-3xl font-bold tracking-tight md:text-4xl">About Me</h2>
        <div className="mt-6 grid gap-8 md:grid-cols-2">
          <p className="text-white/80">
            I’m a front‑end engineer focused on crafting accessible, high‑performance, and visually rich web apps. I love blending creative coding with solid engineering to deliver experiences that feel alive.
          </p>
          <ul className="space-y-3 text-white/70">
            <li>• Strong foundations in React and TypeScript</li>
            <li>• Design systems, component architecture, and motion</li>
            <li>• 3D and canvas experiments using Spline and WebGL</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
