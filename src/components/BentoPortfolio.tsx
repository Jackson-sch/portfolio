import React, { useState } from 'react';
import BentoCard from './BentoCard';
import ProjectModal from './ProjectModal';
import DynamicStatusCard from './DynamicStatusCard';
import { Github, Linkedin, Mail, ArrowUpRight, ExternalLink, Globe, Sparkles } from 'lucide-react';

const NextjsLogo = () => (
  <svg width="14" height="14" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M64 0C28.6599 0 0 28.6599 0 64C0 99.3401 28.6599 128 64 128C99.3401 128 128 99.3401 128 64C128 28.6599 99.3401 0 64 0ZM109.282 101.405L65.4852 45.4516V95.7891H56.5161V32.2109H65.4852L101.373 78.4355C104.536 74.0531 106.452 68.75 106.452 63.0323C106.452 39.5484 87.4194 20.5161 64 20.5161C40.5806 20.5161 21.5484 39.5484 21.5484 63.0323C21.5484 86.5161 40.5806 105.548 64 105.548C74.3871 105.548 83.8406 101.815 91.1371 95.6371L109.282 101.405Z" fill="currentColor" />
  </svg>
);

const AstroLogo = () => (
  <svg width="14" height="14" viewBox="0 0 256 256" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M128 0L32 256H96L128 176L160 256H224L128 0Z" fill="currentColor" />
    <path d="M128 64L104 128H152L128 64Z" fill="currentColor" />
  </svg>
);

const TailwindLogo = () => (
  <svg width="14" height="14" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M64 32C48 32 38 40 34 56C40 48 48 45 58 47C63.7073 48.1415 67.7854 52.2854 72.2683 56.8402C79.5732 64.261 88.261 73.1098 104 73.1098C120 73.1098 130 65.1098 134 49.1098C128 57.1098 120 60.1098 110 58.1098C104.293 56.9683 100.215 52.8244 95.7317 48.2695C88.4268 40.8488 79.739 32 64 32ZM34 73C18 73 8 81 4 97C10 89 18 86 28 88C33.7073 89.1415 37.7854 93.2854 42.2683 97.8402C49.5732 105.261 58.261 114.11 74 114.11C90 114.11 100 106.11 104 90.11C98 98.11 90 101.11 80 99.11C74.2927 97.9683 70.2146 93.8244 65.7317 89.2695C58.4268 81.8488 49.739 73 34 73Z" fill="currentColor" />
  </svg>
);

const PrismaLogo = () => (
  <svg width="14" height="14" viewBox="0 0 256 256" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M128 0L16 192L128 256L240 192L128 0Z" fill="currentColor" />
  </svg>
);

const ReactLogo = () => (
  <svg width="14" height="14" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="64" cy="64" r="10" fill="currentColor" />
    <ellipse cx="64" cy="64" rx="60" ry="20" stroke="currentColor" strokeWidth="6" fill="none" />
    <ellipse cx="64" cy="64" rx="60" ry="20" stroke="currentColor" strokeWidth="6" fill="none" transform="rotate(60 64 64)" />
    <ellipse cx="64" cy="64" rx="60" ry="20" stroke="currentColor" strokeWidth="6" fill="none" transform="rotate(120 64 64)" />
  </svg>
);

const TechBadge = ({ name, icon }: { name: string, icon: React.ReactNode }) => (
  <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-surface border border-border hover:border-zinc-400 light:hover:border-zinc-600 transition-colors">
    <div className="text-zinc-400 light:text-zinc-600">
      {icon}
    </div>
    <span className="text-xs font-bold text-zinc-400 light:text-zinc-600 whitespace-nowrap">{name}</span>
  </div>
);

import { projects } from '../data/projects';

export default function BentoPortfolio({ name, role, subrole }: { name: string, role: string, subrole: string }) {
  const [selectedProject, setSelectedProject] = useState<any>(null);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto auto-rows-[200px]">
        {/* Row 1: Personal Impact */}
        <BentoCard colSpan={2} rowSpan={2} className="flex flex-col justify-end gap-4 bg-(--hero-bg) animate-blurred-fade-in animate-duration-slow">
          <div className="space-y-2">
            <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-surface border border-border text-xs font-medium text-zinc-400 light:text-zinc-600 w-fit">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              Astro v5 Portfolio
            </div>
            <h1 className="text-4xl md:text-5xl font-black leading-tight">
              <span className="text-white light:text-zinc-900">Hola, soy</span> <span className="bg-linear-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Jackson Sebastian</span>.
              <br />
              <span className="text-white light:text-zinc-900">{role}</span>
            </h1>
            <p className="text-zinc-400 light:text-zinc-600 text-lg max-w-md font-mono">{subrole}</p>
          </div>
          <div className="flex gap-4 mt-6">
            <a href="https://github.com/Jackson-sch" target="_blank" rel="noopener noreferrer" aria-label="Visit my GitHub profile" className="p-2 rounded-xl bg-surface border border-border hover:bg-zinc-800 light:hover:bg-zinc-100 transition-colors text-zinc-400 light:text-zinc-600">
              <Github size={20} />
            </a>
            <a href="#" aria-label="Visit my LinkedIn profile" className="p-2 rounded-xl bg-surface border border-border hover:bg-zinc-800 light:hover:bg-zinc-100 transition-colors text-zinc-400 light:text-zinc-600">
              <Linkedin size={20} />
            </a>
            <a href="#" aria-label="Contact me via email" className="px-4 py-2 rounded-xl bg-blue-600 text-white font-medium hover:bg-blue-500 transition-colors flex items-center gap-2 ml-auto shadow-lg shadow-blue-500/20">
              Contactar <Mail size={16} />
            </a>
          </div>
        </BentoCard>

        {/* Dynamic Status Card */}
        <BentoCard colSpan={1} rowSpan={1} className="bg-surface animate-blurred-fade-in animate-duration-slow animate-delay-200">
          <DynamicStatusCard />
        </BentoCard>

        {/* GitHub Activity Card (Small Row 2) */}
        <BentoCard colSpan={1} rowSpan={1} className="bg-surface flex flex-col justify-between animate-blurred-fade-in animate-duration-slow animate-delay-300">
          <div className="flex items-center justify-between">
            <h3 className="text-[10px] font-mono text-zinc-400 light:text-zinc-600 uppercase tracking-widest">GitHub Contributions</h3>
            <Github size={14} className="text-zinc-400 light:text-zinc-600" />
          </div>
          <div className="grid grid-cols-7 gap-1 mt-2">
            {[...Array(28)].map((_, i) => (
              <div
                key={i}
                className={`h-3 w-3 rounded-sm ${i % 3 === 0 ? 'bg-blue-500/60' : i % 5 === 0 ? 'bg-blue-500/20' : 'bg-zinc-800 light:bg-zinc-200'}`}
              />
            ))}
          </div>
          <p className="text-[10px] text-blue-400 light:text-blue-500 font-bold mt-2 font-mono">342 commits este año</p>
        </BentoCard>

        {/* Row 2: Real World Systems */}
        <BentoCard colSpan={1} rowSpan={2} noPadding className="relative bg-surface flex flex-col justify-between overflow-hidden animate-blurred-fade-in animate-duration-slow animate-delay-400 group" onClick={() => setSelectedProject(projects[0])}>
          <img src={projects[0].image} alt={projects[0].title} className="absolute inset-x-0 bottom-0 w-full h-1/2 object-cover opacity-50 light:opacity-90 group-hover:scale-110 transition-transform duration-700 pointer-events-none mask-fade-top" />
          <div className="p-6 space-y-4 relative z-10">
            <div className="p-3 bg-white/5 light:bg-zinc-100/50 rounded-2xl border border-border w-fit backdrop-blur-sm">
              <div className="text-xs font-bold tracking-widest text-blue-400 light:text-blue-600 uppercase font-mono">Real Logistic SaaS</div>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white light:text-zinc-900 tracking-tight">{projects[0].title}</h3>
              <p className="text-zinc-400 light:text-zinc-600 text-sm mt-1">{projects[0].description}</p>
            </div>
          </div>
          <div className="p-6 flex items-center gap-2 text-blue-400 light:text-blue-700 text-[10px] font-bold relative z-10 font-mono">
            Ver Detalles <ArrowUpRight size={12} />
          </div>
        </BentoCard>

        <BentoCard colSpan={2} rowSpan={2} noPadding className="relative bg-surface flex flex-col group overflow-hidden animate-blurred-fade-in animate-duration-slow animate-delay-500" onClick={() => setSelectedProject(projects[1])}>
          <img src={projects[1].image} alt={projects[1].title} className="absolute inset-x-0 bottom-0 w-full h-2/3 object-cover opacity-30 light:opacity-80 group-hover:scale-105 transition-transform duration-700 pointer-events-none mask-fade-top" />
          <div className="p-6 absolute top-0 right-0 pointer-events-none group-hover:scale-110 transition-transform duration-500 opacity-20 light:opacity-40 group-hover:opacity-40">
            <ExternalLink size={120} className="text-indigo-500 light:text-indigo-300" />
          </div>
          <div className="p-6 space-y-4 z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-xs font-medium text-indigo-400 light:text-indigo-600 font-mono">AI Educational SaaS</div>
            <h3 className="text-3xl font-black text-white light:text-zinc-900 tracking-tight">{projects[1].title}</h3>
            <p className="text-zinc-400 light:text-zinc-600 max-w-sm">{projects[1].description}</p>
          </div>
          <div className="mt-auto relative z-10">
            <div className="bg-zinc-900/90 light:bg-white/90 border-t border-l border-zinc-800 light:border-zinc-200 rounded-tl-2xl p-4 transform translate-y-4 group-hover:translate-y-2 transition-transform duration-500">
              <div className="grid grid-cols-3 gap-2">
                <div className="h-16 bg-zinc-800/80 light:bg-zinc-50 rounded-lg p-2 text-center flex flex-col justify-center border border-zinc-700/50 light:border-zinc-200"><div className="text-[8px] text-zinc-500">IA MODULE</div><div className="text-xs font-bold tracking-tighter text-white light:text-zinc-900">Gemini Pro 1.5</div></div>
                <div className="h-16 bg-zinc-800/80 light:bg-zinc-50 rounded-lg p-2 text-center flex flex-col justify-center border border-zinc-700/50 light:border-zinc-200"><div className="text-[8px] text-zinc-500">ALUMNOS</div><div className="text-xs font-bold tracking-tighter text-white light:text-zinc-900">800+ Activos</div></div>
                <div className="h-16 bg-zinc-800/80 light:bg-zinc-50 rounded-lg p-2 text-center flex flex-col justify-center border border-zinc-700/50 light:border-zinc-200"><div className="text-[8px] text-zinc-500">ESTADO</div><div className="text-xs font-bold tracking-tighter text-green-400 light:text-green-600 uppercase font-mono">En Línea</div></div>
              </div>
            </div>
          </div>
        </BentoCard>

        {/* Row 3: Stylized & Mobile */}
        <BentoCard colSpan={1} rowSpan={2} noPadding className="relative bg-surface flex flex-col justify-end overflow-hidden animate-blurred-fade-in animate-duration-slow animate-delay-600 group">
          <img src="/images/me.png" alt="Jackson Sebastian" className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 pointer-events-none" />
          <div className="absolute inset-0 bg-linear-to-t from-zinc-950/90 via-zinc-950/20 to-transparent opacity-80 light:opacity-40"></div>
          <div className="p-6 relative z-10">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
              <span className="text-[10px] font-bold text-white light:text-zinc-900 uppercase tracking-widest font-mono">En Línea</span>
            </div>
            <h3 className="text-xl font-bold text-white light:text-zinc-900 tracking-tight">Jackson Sebastian</h3>
            <p className="text-zinc-300 light:text-zinc-600 text-xs font-mono">Fullstack Developer</p>
          </div>
        </BentoCard>

        <BentoCard colSpan={2} rowSpan={2} noPadding className="relative bg-surface flex flex-col group overflow-hidden animate-blurred-fade-in animate-duration-slow animate-delay-700" onClick={() => setSelectedProject(projects[2])}>
          <img src={projects[2].image} alt={projects[2].title} className="absolute inset-x-0 bottom-0 w-full h-3/4 object-cover opacity-50 light:opacity-90 group-hover:scale-105 transition-transform duration-700 pointer-events-none mask-fade-top" />
          <div className="p-6 absolute top-0 right-0 pointer-events-none opacity-20"><ExternalLink size={120} className="text-blue-500 light:text-blue-400" /></div>
          <div className="p-6 space-y-4 z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-medium text-blue-400 light:text-blue-600 font-mono">Design System</div>
            <h3 className="text-3xl font-black text-white light:text-zinc-900 tracking-tight">{projects[2].title}</h3>
            <p className="text-zinc-400 light:text-zinc-600 max-w-sm">{projects[2].description}</p>
          </div>
          <div className="mt-auto h-24 bg-zinc-900/90 light:bg-white/90 border-t border-zinc-800 light:border-zinc-200 rounded-tl-2xl translate-y-8 group-hover:translate-y-0 transition-transform duration-500 p-4 relative z-10">
            <div className="h-full w-full bg-linear-to-r from-blue-500/10 to-purple-500/10 rounded border border-white/5 light:border-zinc-200 flex items-center justify-center text-[10px] text-zinc-400 light:text-zinc-600 uppercase tracking-widest font-mono">Interface Concept</div>
          </div>
        </BentoCard>

        {/* Row 4: Mini Services */}
        <BentoCard colSpan={1} rowSpan={1} noPadding className="relative bg-surface flex flex-col justify-center overflow-hidden animate-blurred-fade-in animate-duration-slow animate-delay-800 group" onClick={() => setSelectedProject(projects[3])}>
          <img src={projects[3].image} alt={projects[3].title} className="absolute inset-0 w-full h-full object-cover opacity-40 light:opacity-80 group-hover:scale-110 transition-transform duration-700 pointer-events-none" />
          <div className="p-6 flex items-center gap-3 relative z-10 h-full w-full">
            <div className="p-2 rounded-lg bg-red-500/10 light:bg-red-500/10 text-red-400 light:text-red-600 text-xl shadow-lg shadow-red-500/10">🍕</div>
            <h3 className="font-bold text-white light:text-zinc-900 text-sm drop-shadow-sm">{projects[3].title}</h3>
          </div>
        </BentoCard>

        <BentoCard colSpan={1} rowSpan={1} noPadding className="relative bg-surface flex flex-col justify-center overflow-hidden animate-blurred-fade-in animate-duration-slow animate-delay-900 group" onClick={() => setSelectedProject(projects[4])}>
          <img src={projects[4].image} alt={projects[4].title} className="absolute inset-x-0 top-0 w-full h-full object-cover opacity-40 light:opacity-80 group-hover:scale-110 transition-transform duration-700 pointer-events-none" />
          <div className="p-6 flex items-center gap-3 relative z-10 h-full w-full">
            <div className="p-2 rounded-lg bg-orange-500/10 light:bg-orange-500/10 text-orange-400 light:text-orange-600 text-xl shadow-lg shadow-orange-500/10">🛠️</div>
            <h3 className="font-bold text-white light:text-zinc-900 text-sm drop-shadow-sm light:bg-white/40 light:px-2 light:py-0.5 light:rounded-md">{projects[4].title}</h3>
          </div>
        </BentoCard>

        <BentoCard colSpan={1} rowSpan={1} noPadding className="relative bg-surface flex flex-col justify-center overflow-hidden animate-blurred-fade-in animate-duration-slow animate-delay-1000 group" onClick={() => setSelectedProject(projects[5])}>
          <img src={projects[5].image} alt={projects[5].title} className="absolute inset-y-0 right-0 w-1/2 h-full object-cover opacity-40 group-hover:scale-110 transition-transform duration-700 pointer-events-none mask-fade-right" />
          <div className="p-6 flex items-center gap-3 relative z-10 h-full w-full">
            <div className="p-2 rounded-lg bg-yellow-500/10 light:bg-yellow-500/10 text-yellow-500 light:text-yellow-600 text-xl shadow-lg shadow-yellow-500/10">🍌</div>
            <h3 className="font-bold text-white light:text-zinc-900 text-sm drop-shadow-sm light:bg-white/40 light:px-2 light:py-0.5 light:rounded-md">{projects[5].title}</h3>
          </div>
        </BentoCard>

        {/* Row 5: Final Row */}
        <BentoCard colSpan={1} rowSpan={1} noPadding className="relative bg-surface flex flex-col justify-center overflow-hidden animate-blurred-fade-in animate-duration-slow animate-delay-1100 group" onClick={() => setSelectedProject(projects[6])}>
          <img src={projects[6].image} alt={projects[6].title} className="absolute inset-0 w-full h-full object-cover opacity-40 light:opacity-80 group-hover:scale-110 transition-transform duration-700 pointer-events-none" />
          <div className="p-6 flex items-center gap-3 relative z-10 h-full w-full">
            <div className="p-2 rounded-lg bg-zinc-500/10 text-[#D4AF37] text-xl">✂️</div>
            <h3 className="font-bold text-white light:text-zinc-900 text-sm drop-shadow-sm light:bg-white/40 light:px-2 light:py-0.5 light:rounded-md">{projects[6].title}</h3>
          </div>
        </BentoCard>

        <BentoCard colSpan={2} rowSpan={1} noPadding className="bg-surface/50 dark:bg-zinc-900/30 border-border dark:border-zinc-800 flex flex-col items-center justify-center overflow-hidden animate-blurred-fade-in animate-duration-slow animate-delay-1200">
          <div className="relative w-full overflow-hidden flex flex-col gap-10 items-center h-full pb-6">
            <h3 className="text-[10px] font-mono text-center text-zinc-500 light:text-zinc-600 uppercase tracking-widest mb-3 pt-6">Mastered Tools</h3>
            <div className="flex gap-12 animate-infinite-scroll px-12">
              <div className="flex items-center gap-12 shrink-0">
                <TechBadge name="Next.js 15" icon={<NextjsLogo />} />
                <TechBadge name="Astro v5" icon={<AstroLogo />} />
                <TechBadge name="Tailwind v4" icon={<TailwindLogo />} />
                <TechBadge name="Prisma" icon={<PrismaLogo />} />
                <TechBadge name="Gemini IA" icon={<Sparkles size={14} className="text-indigo-400" />} />
                <TechBadge name="React 19" icon={<ReactLogo />} />
              </div>
              <div className="flex items-center gap-12 shrink-0" aria-hidden="true">
                <TechBadge name="Next.js 15" icon={<NextjsLogo />} />
                <TechBadge name="Astro v5" icon={<AstroLogo />} />
                <TechBadge name="Tailwind v4" icon={<TailwindLogo />} />
                <TechBadge name="Prisma" icon={<PrismaLogo />} />
                <TechBadge name="Gemini IA" icon={<Sparkles size={14} className="text-indigo-400 light:text-indigo-600" />} />
                <TechBadge name="React 19" icon={<ReactLogo />} />
              </div>
            </div>
            {/* Side Fades - now truly at the edge */}
            {/* Side Fades - now using theme variables with correct v4 syntax */}
            <div className="absolute inset-y-0 left-0 w-32 bg-linear-to-r from-(--fade-color) via-(--fade-color)/20 to-transparent z-10 pointer-events-none"></div>
            <div className="absolute inset-y-0 right-0 w-32 bg-linear-to-l from-(--fade-color) via-(--fade-color)/20 to-transparent z-10 pointer-events-none"></div>
          </div>
        </BentoCard>
      </div>

      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </>
  );
}
