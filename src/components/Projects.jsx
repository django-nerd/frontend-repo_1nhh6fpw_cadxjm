import React from 'react';
import { Code, Globe, Github } from 'lucide-react';

const projects = [
  {
    title: 'Interactive 3D Landing',
    description: 'A playful hero with Spline integration and responsive UI.',
    tags: ['React', 'Spline', 'Tailwind'],
    link: '#',
    repo: '#',
  },
  {
    title: 'Design System Kit',
    description: 'Reusable components and tokens for rapid prototyping.',
    tags: ['Storybook', 'Tailwind', 'Radix'],
    link: '#',
    repo: '#',
  },
  {
    title: 'Realtime Collaboration',
    description: 'Multiplayer cursors and presence with WebSockets.',
    tags: ['FastAPI', 'WebSocket', 'MongoDB'],
    link: '#',
    repo: '#',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="relative w-full bg-black py-20 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Selected Projects</h2>
        <p className="mt-2 max-w-2xl text-white/70">
          A few things I’ve been building lately.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <article key={p.title} className="group rounded-xl border border-white/10 bg-white/5 p-5 shadow-sm transition hover:bg-white/10">
              <div className="flex items-center justify-between">
                <div className="inline-flex items-center gap-2 text-white/90">
                  <Code size={16} />
                  <span className="text-sm font-medium">{p.tags[0]}</span>
                </div>
                <div className="flex items-center gap-2">
                  <a href={p.link} className="rounded-md bg-white/10 p-2 hover:bg-white/20" aria-label="Live">
                    <Globe size={16} />
                  </a>
                  <a href={p.repo} className="rounded-md bg-white/10 p-2 hover:bg-white/20" aria-label="Repo">
                    <Github size={16} />
                  </a>
                </div>
              </div>
              <h3 className="mt-4 text-lg font-semibold">{p.title}</h3>
              <p className="mt-2 text-sm text-white/70">{p.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="rounded-full border border-white/10 bg-black/40 px-2.5 py-1 text-xs text-white/80">
                    {t}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
