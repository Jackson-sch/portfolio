import React, { useState, useEffect } from 'react';
import { Sun, Moon, Github, Linkedin, Mail } from 'lucide-react';

import { Logo } from './Logo';

export default function Navbar() {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as 'dark' | 'light' | null;
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.classList.toggle('light', savedTheme === 'light');
    } else if (window.matchMedia('(prefers-color-scheme: light)').matches) {
      setTheme('light');
      document.documentElement.classList.add('light');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    document.documentElement.classList.toggle('light', newTheme === 'light');
    localStorage.setItem('theme', newTheme);
  };

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-2 p-1.5 rounded-2xl bg-zinc-900/50 light:bg-white/70 backdrop-blur-xl border border-zinc-800 light:border-zinc-200 shadow-2xl animate-fade-in-down animate-duration-slow">
      <a href="#" className="flex items-center gap-2 px-2 py-1.5 rounded-xl hover:bg-zinc-800/50 light:hover:bg-zinc-100/50 transition-colors group cursor-pointer" aria-label="Home">
        <Logo />
        <span className="text-xs font-bold tracking-tight text-white light:text-zinc-900 sr-only md:not-sr-only md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 -ml-2 group-hover:ml-0">
          SEBASTIAN
        </span>
      </a>

      <div className="w-px h-4 bg-zinc-800 light:bg-zinc-200 mx-1" />

      <div className="flex items-center gap-1">
        {['Inicio', 'Proyectos', 'Contacto'].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className="px-3 py-1.5 rounded-xl text-xs font-medium text-zinc-400 light:text-zinc-500 hover:text-white light:hover:text-zinc-900 hover:bg-zinc-800/50 light:hover:bg-zinc-100/50 transition-all"
          >
            {item}
          </a>
        ))}
      </div>

      <div className="w-px h-4 bg-zinc-800 light:bg-zinc-200 mx-1" />

      <div className="flex items-center gap-1">
        <SocialLink href="https://github.com" icon={<Github size={16} />} />
        <button
          onClick={toggleTheme}
          className="p-2 rounded-xl text-zinc-400 light:text-zinc-600 hover:text-white light:hover:text-black hover:bg-white/5 light:hover:bg-black/5 transition-all duration-300"
          aria-label="Toggle theme"
        >
          {theme === 'dark' ? <Sun size={16} className="animate-spin-slow" /> : <Moon size={16} />}
        </button>
      </div>
    </nav>
  );
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      className="px-3 py-1.5 rounded-xl text-xs font-medium text-zinc-400 light:text-zinc-600 hover:text-white light:hover:text-black hover:bg-white/5 light:hover:bg-black/5 transition-all duration-300"
    >
      {children}
    </a>
  );
}

function SocialLink({ href, icon }: { href: string; icon: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="p-2 rounded-xl text-zinc-400 light:text-zinc-600 hover:text-white light:hover:text-black hover:bg-white/5 light:hover:bg-black/5 transition-all duration-300"
    >
      {icon}
    </a>
  );
}
