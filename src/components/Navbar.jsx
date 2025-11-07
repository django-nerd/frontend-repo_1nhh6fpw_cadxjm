import React from 'react';

const Navbar = () => {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-white/10 bg-black/60 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 text-white">
        <a href="#home" className="text-lg font-bold tracking-tight">
          <span className="bg-gradient-to-r from-teal-300 via-sky-300 to-fuchsia-300 bg-clip-text text-transparent">devfolio</span>
        </a>
        <nav className="hidden gap-6 text-sm font-medium md:flex">
          <a href="#projects" className="text-white/80 hover:text-white">Projects</a>
          <a href="#about" className="text-white/80 hover:text-white">About</a>
          <a href="#contact" className="text-white/80 hover:text-white">Contact</a>
        </nav>
        <a href="#contact" className="rounded-md bg-white px-3 py-1.5 text-sm font-semibold text-black shadow hover:bg-white/90 md:inline-flex hidden">Hire Me</a>
      </div>
    </header>
  );
};

export default Navbar;
