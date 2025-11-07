import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen w-full bg-black font-inter text-white">
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <About />
        <Contact />
      </main>
      <footer className="border-t border-white/10 bg-black/80 py-8 text-center text-sm text-white/60">
        © {new Date().getFullYear()} Your Name — Built with love and caffeine.
      </footer>
    </div>
  );
}

export default App;
