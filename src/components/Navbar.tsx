import React, { useState, useEffect } from 'react';
import { Sun, Moon, Github, Search, Menu, X } from 'lucide-react';
import { Logo } from './Logo';

export default function Navbar() {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const [mobileOpen, setMobileOpen] = useState(false);

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

  const triggerSearch = () => {
    window.dispatchEvent(new CustomEvent('portfolio:focus-search'));
  };

  const navItems = [
    { href: '#destacados', label: 'Destacados' },
    { href: '#catalogo', label: 'Catálogo' },
    { href: '#stack', label: 'Stack' },
    { href: '#contacto', label: 'Contacto' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border bg-background/80 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
        {/* Brand */}
        <a href="#inicio" className="flex items-center gap-2.5 group shrink-0">
          <Logo />
          <div className="flex flex-col">
            <span className="text-sm font-semibold tracking-tight text-text-main leading-none">
              Jackson Sebastian
            </span>
            <span className="text-[10px] font-mono text-text-muted mt-0.5">
              Fullstack & AI Systems
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1" aria-label="Navegación principal">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="px-3 py-1.5 rounded-lg text-xs font-medium text-text-muted hover:text-text-main hover:bg-surface-elevated transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-2">
          <button
            onClick={triggerSearch}
            className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-lg border border-border bg-surface hover:border-border-strong text-xs text-text-muted transition-colors"
            aria-label="Buscar proyectos"
          >
            <Search size={13} />
            <span>Buscar...</span>
            <kbd className="px-1.5 py-0.5 text-[10px] font-mono rounded bg-surface-elevated border border-border">
              Ctrl K
            </kbd>
          </button>

          <a
            href="https://github.com/Jackson-sch"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="p-2 rounded-lg border border-border bg-surface hover:border-border-strong text-text-muted hover:text-text-main transition-colors"
          >
            <Github size={16} />
          </a>

          <button
            onClick={toggleTheme}
            aria-label="Cambiar tema"
            className="p-2 rounded-lg border border-border bg-surface hover:border-border-strong text-text-muted hover:text-text-main transition-colors"
          >
            {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
          </button>

          <button
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label="Menú móvil"
            className="md:hidden p-2 rounded-lg border border-border bg-surface text-text-muted hover:text-text-main transition-colors"
          >
            {mobileOpen ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <div className="md:hidden border-t border-border bg-background px-4 py-3 space-y-1">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className="block px-3 py-2 rounded-lg text-sm font-medium text-text-muted hover:text-text-main hover:bg-surface-elevated transition-colors"
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
