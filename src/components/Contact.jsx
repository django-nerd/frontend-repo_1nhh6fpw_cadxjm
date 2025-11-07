import React from 'react';
import { Mail, Send } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="relative w-full bg-black py-20 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Get In Touch</h2>
        <p className="mt-2 max-w-2xl text-white/70">
          Want to collaborate or have an opportunity? Drop a message and I’ll get back to you.
        </p>

        <form onSubmit={(e) => e.preventDefault()} className="mt-8 grid gap-4 rounded-xl border border-white/10 bg-white/5 p-6">
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="mb-1 block text-sm text-white/70">Name</label>
              <input type="text" required className="w-full rounded-md border border-white/10 bg-black/40 px-3 py-2 text-sm outline-none placeholder-white/40 focus:border-white/30" placeholder="Ada Lovelace" />
            </div>
            <div>
              <label className="mb-1 block text-sm text-white/70">Email</label>
              <input type="email" required className="w-full rounded-md border border-white/10 bg-black/40 px-3 py-2 text-sm outline-none placeholder-white/40 focus:border-white/30" placeholder="you@example.com" />
            </div>
          </div>
          <div>
            <label className="mb-1 block text-sm text-white/70">Message</label>
            <textarea rows={4} required className="w-full rounded-md border border-white/10 bg-black/40 px-3 py-2 text-sm outline-none placeholder-white/40 focus:border-white/30" placeholder="Hello! I'd love to talk about..." />
          </div>
          <button type="submit" className="inline-flex items-center justify-center gap-2 rounded-md bg-white px-4 py-2 text-sm font-semibold text-black hover:bg-white/90">
            <Send size={16} /> Send Message
          </button>
        </form>

        <div className="mt-6 flex items-center gap-3 text-sm text-white/70">
          <Mail size={16} /> or email me at
          <a href="mailto:hello@example.com" className="text-white hover:underline">hello@example.com</a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
