import React, { useState } from 'react';
import BentoCard from './BentoCard';
import ProjectModal from './ProjectModal';
import DynamicStatusCard from './DynamicStatusCard';
import { Github, Linkedin, Mail, ArrowUpRight, ExternalLink, Sparkles, Layers, Cpu } from 'lucide-react';
import { NextjsLogo, AstroLogo, TailwindLogo, PrismaLogo, ReactLogo } from './TechLogos';

import { projects, type ProjectData } from '../data/projects';

const TechBadge = ({ name, icon }: { name: string; icon: React.ReactNode }) => (
  <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-surface border border-border hover:border-zinc-400 light:hover:border-zinc-600 transition-colors">
    <div className="text-zinc-400 light:text-zinc-600">{icon}</div>
    <span className="text-xs font-bold text-zinc-400 light:text-zinc-600 whitespace-nowrap">{name}</span>
  </div>
);

export default function BentoPortfolio({ name, role, subrole }: { name: string; role: string; subrole: string }) {
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const featuredProjects = projects.slice(0, 3);
  
  const categories = [
    { id: 'all', label: 'Todos los Proyectos' },
    { id: 'saas', label: 'SaaS & Logística' },
    { id: 'ai', label: 'IA & EdTech' },
    { id: 'fintech', label: 'FinTech & POS' },
    { id: 'telemetry', label: 'Telemetría & Control' },
  ];

  const filteredProjects = projects.filter((p) => {
    if (selectedCategory === 'all') return true;
    return p.category === selectedCategory;
  });

  return (
    <>
      <div className="space-y-8 max-w-7xl mx-auto" id="proyectos">
        {/* Main Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[minmax(200px,auto)] md:auto-rows-[200px]">
          {/* Row 1: Personal Impact */}
          <BentoCard colSpan={2} rowSpan={2} className="flex flex-col justify-end gap-4 bg-(--hero-bg) animate-blurred-fade-in animate-duration-slow">
            <div className="space-y-2">
              <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-surface border border-border text-xs font-medium text-zinc-400 light:text-zinc-600 w-fit">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                </span>
                Astro v5 Portfolio & Projects
              </div>
              <h1 className="text-4xl md:text-5xl font-black leading-tight">
                <span className="text-white light:text-zinc-900">Hola, soy</span>{' '}
                <span className="bg-linear-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">{name}</span>.
                <br />
                <span className="text-white light:text-zinc-900">{role}</span>
              </h1>
              <p className="text-zinc-400 light:text-zinc-600 text-lg max-w-md font-mono">{subrole}</p>
            </div>
            <div className="flex gap-4 mt-6">
              <a
                href="https://github.com/Jackson-sch"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Perfil de GitHub"
                className="p-2.5 rounded-xl bg-surface border border-border hover:bg-zinc-800 light:hover:bg-zinc-100 transition-colors text-zinc-400 light:text-zinc-600"
              >
                <Github size={20} />
              </a>
              <a
                href="https://github.com/Jackson-sch"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Perfil de LinkedIn"
                className="p-2.5 rounded-xl bg-surface border border-border hover:bg-zinc-800 light:hover:bg-zinc-100 transition-colors text-zinc-400 light:text-zinc-600"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:contact@jackson.dev"
                aria-label="Contactar por email"
                className="px-5 py-2.5 rounded-xl bg-blue-600 text-white font-medium hover:bg-blue-500 transition-colors flex items-center gap-2 ml-auto shadow-lg shadow-blue-500/20"
              >
                Contactar <Mail size={16} />
              </a>
            </div>
          </BentoCard>

          {/* Dynamic Status Card */}
          <BentoCard colSpan={1} rowSpan={1} className="bg-surface animate-blurred-fade-in animate-duration-slow animate-delay-200">
            <DynamicStatusCard />
          </BentoCard>

          {/* GitHub Activity Card */}
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
            <p className="text-[10px] text-blue-400 light:text-blue-500 font-bold mt-2 font-mono">10+ Repositorios Activos</p>
          </BentoCard>

          {/* Featured Project 1: GymOS */}
          <BentoCard
            colSpan={1}
            rowSpan={2}
            className="relative bg-surface flex flex-col justify-between overflow-hidden animate-blurred-fade-in animate-duration-slow animate-delay-400 group cursor-pointer border border-border hover:border-blue-500/40 p-6"
            onClick={() => setSelectedProject(featuredProjects[0])}
          >
            <div className="space-y-3 relative z-10">
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 bg-blue-500/10 light:bg-blue-50 text-blue-400 light:text-blue-600 rounded-full text-[10px] font-mono font-bold border border-blue-500/20">
                  {featuredProjects[0].badge}
                </span>
                <ArrowUpRight size={18} className="text-zinc-500 group-hover:text-blue-400 transition-colors" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white light:text-zinc-900 tracking-tight">{featuredProjects[0].title}</h3>
                <p className="text-zinc-400 light:text-zinc-600 text-xs mt-1 leading-relaxed">{featuredProjects[0].description}</p>
              </div>
            </div>

            {/* Framed Image Container */}
            <div className="relative mt-4 h-48 w-full rounded-2xl overflow-hidden border border-white/10 light:border-zinc-200 shadow-md group-hover:shadow-xl transition-all duration-500">
              <img
                src={featuredProjects[0].image}
                alt={featuredProjects[0].title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-linear-to-t from-zinc-950/60 via-transparent to-transparent" />
            </div>

            <div className="mt-4 flex items-center justify-between text-xs font-mono text-blue-400 light:text-blue-600 font-bold">
              <span>Ver Detalles Completos</span>
              <ArrowUpRight size={14} />
            </div>
          </BentoCard>

          {/* Featured Project 2: Sistema Escolar IA Pro */}
          <BentoCard
            colSpan={2}
            rowSpan={2}
            className="relative bg-surface flex flex-col justify-between overflow-hidden animate-blurred-fade-in animate-duration-slow animate-delay-500 group cursor-pointer border border-border hover:border-indigo-500/40 p-6"
            onClick={() => setSelectedProject(featuredProjects[1])}
          >
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 relative z-10">
              <div className="space-y-2">
                <span className="px-3 py-1 bg-indigo-500/10 light:bg-indigo-50 text-indigo-400 light:text-indigo-600 rounded-full text-[10px] font-mono font-bold border border-indigo-500/20">
                  {featuredProjects[1].badge}
                </span>
                <h3 className="text-3xl font-black text-white light:text-zinc-900 tracking-tight">{featuredProjects[1].title}</h3>
                <p className="text-zinc-400 light:text-zinc-600 max-w-lg text-xs leading-relaxed">{featuredProjects[1].description}</p>
              </div>
              <div className="hidden md:flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-zinc-800/80 light:bg-zinc-100 border border-zinc-700/50 text-xs font-mono font-bold text-indigo-400 light:text-indigo-600">
                Gemini Pro 2.0 <Sparkles size={14} />
              </div>
            </div>

            {/* Framed Image Container */}
            <div className="relative mt-4 h-52 w-full rounded-2xl overflow-hidden border border-white/10 light:border-zinc-200 shadow-md group-hover:shadow-xl transition-all duration-500">
              <img
                src={featuredProjects[1].image}
                alt={featuredProjects[1].title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-linear-to-t from-zinc-950/70 via-transparent to-transparent" />
            </div>

            <div className="mt-4 grid grid-cols-3 gap-2">
              <div className="bg-zinc-800/60 light:bg-zinc-100 rounded-xl p-2.5 text-center border border-zinc-700/40 light:border-zinc-200">
                <div className="text-[9px] font-mono text-zinc-400">IA ENGINE</div>
                <div className="text-xs font-bold text-white light:text-zinc-900 font-mono">Gemini Pro 2.0</div>
              </div>
              <div className="bg-zinc-800/60 light:bg-zinc-50 rounded-xl p-2.5 text-center border border-zinc-700/40 light:border-zinc-200">
                <div className="text-[9px] font-mono text-zinc-400">STACK</div>
                <div className="text-xs font-bold text-white light:text-zinc-900 font-mono">Next.js 16</div>
              </div>
              <div className="bg-zinc-800/60 light:bg-zinc-50 rounded-xl p-2.5 text-center border border-zinc-700/40 light:border-zinc-200">
                <div className="text-[9px] font-mono text-zinc-400">ESTADO</div>
                <div className="text-xs font-bold text-green-400 light:text-green-600 font-mono">EN PRODUCCIÓN</div>
              </div>
            </div>
          </BentoCard>

          {/* Row 3: Personal Photo */}
          <BentoCard colSpan={1} rowSpan={2} noPadding className="relative bg-surface flex flex-col justify-end overflow-hidden animate-blurred-fade-in animate-duration-slow animate-delay-600 group min-h-[350px] md:min-h-0">
            <img src="/images/me.png" alt="Jackson Sebastian" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 pointer-events-none" />
            <div className="absolute inset-0 bg-linear-to-t from-zinc-950/90 via-zinc-950/20 to-transparent opacity-80 light:opacity-40"></div>
            <div className="p-6 relative z-10">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                <span className="text-[10px] font-bold text-white light:text-zinc-900 uppercase tracking-widest font-mono">Disponible para proyectos</span>
              </div>
              <h3 className="text-xl font-bold text-white light:text-zinc-900 tracking-tight">{name}</h3>
              <p className="text-zinc-300 light:text-zinc-600 text-xs font-mono">{role}</p>
            </div>
          </BentoCard>

          {/* Featured Project 3: Agencia Transporte */}
          <BentoCard
            colSpan={2}
            rowSpan={2}
            className="relative bg-surface flex flex-col justify-between overflow-hidden animate-blurred-fade-in animate-duration-slow animate-delay-700 group cursor-pointer border border-border hover:border-blue-500/40 p-6"
            onClick={() => setSelectedProject(featuredProjects[2])}
          >
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 relative z-10">
              <div className="space-y-2">
                <span className="px-3 py-1 bg-blue-500/10 light:bg-blue-50 text-blue-400 light:text-blue-600 rounded-full text-[10px] font-mono font-bold border border-blue-500/20">
                  {featuredProjects[2].badge}
                </span>
                <h3 className="text-3xl font-black text-white light:text-zinc-900 tracking-tight">{featuredProjects[2].title}</h3>
                <p className="text-zinc-400 light:text-zinc-600 max-w-lg text-xs leading-relaxed">{featuredProjects[2].description}</p>
              </div>
              <div className="flex items-center gap-1 text-xs font-mono text-blue-400 light:text-blue-600 font-bold shrink-0">
                Ver Detalles <ArrowUpRight size={16} />
              </div>
            </div>

            {/* Framed Image Container */}
            <div className="relative mt-4 h-52 w-full rounded-2xl overflow-hidden border border-white/10 light:border-zinc-200 shadow-md group-hover:shadow-xl transition-all duration-500">
              <img
                src={featuredProjects[2].image}
                alt={featuredProjects[2].title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-linear-to-t from-zinc-950/70 via-transparent to-transparent" />
            </div>

            <div className="mt-4 flex items-center justify-between px-4 py-3 bg-zinc-800/50 light:bg-zinc-100 rounded-xl border border-zinc-700/40 light:border-zinc-200 text-xs font-mono text-zinc-300 light:text-zinc-700">
              <span>Tracking QR & Guías Digitales</span>
              <span className="text-blue-400 light:text-blue-600 font-bold flex items-center gap-1">Ver Módulo <ArrowUpRight size={14} /></span>
            </div>
          </BentoCard>
        </div>

        {/* Catalog of Additional Projects */}
        <div className="pt-8 space-y-6">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-b border-zinc-800 light:border-zinc-200 pb-6">
            <div>
              <h2 className="text-2xl md:text-3xl font-black text-white light:text-zinc-900 flex items-center gap-3">
                <Layers className="text-blue-500" size={28} /> Catálogo de Proyectos
              </h2>
              <p className="text-sm text-zinc-400 light:text-zinc-600 font-mono mt-1">
                Explora las soluciones empresariales, sistemas SaaS y herramientas desarrolladas.
              </p>
            </div>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => {
                const isActive = selectedCategory === cat.id;
                const count = cat.id === 'all' ? projects.length : projects.filter((p) => p.category === cat.id).length;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`px-3.5 py-1.5 rounded-xl text-xs font-mono font-bold transition-all duration-300 flex items-center gap-1.5 border ${
                      isActive
                        ? 'bg-blue-600 border-blue-500 text-white shadow-lg shadow-blue-500/20 scale-105'
                        : 'bg-surface border-border text-zinc-400 hover:text-white light:text-zinc-600 light:hover:text-black hover:border-zinc-500'
                    }`}
                  >
                    {cat.label}
                    <span className={`px-1.5 py-0.2 rounded-md text-[10px] ${isActive ? 'bg-white/20 text-white' : 'bg-zinc-800 light:bg-zinc-200 text-zinc-400'}`}>
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className="group relative bg-surface border border-border rounded-3xl overflow-hidden hover:border-blue-500/40 transition-all duration-300 flex flex-col justify-between cursor-pointer hover:-translate-y-1.5 shadow-lg hover:shadow-2xl hover:shadow-blue-500/5 animate-blurred-fade-in"
              >
                <div className="relative h-48 overflow-hidden bg-zinc-950">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover opacity-75 group-hover:opacity-95 group-hover:scale-105 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-zinc-900 via-zinc-900/30 to-transparent opacity-90 light:opacity-50" />
                  {project.badge && (
                    <span className="absolute top-4 left-4 px-3 py-1 bg-zinc-900/90 light:bg-white/90 backdrop-blur-md rounded-full text-[10px] font-mono font-bold text-blue-400 light:text-blue-600 border border-zinc-700/50 light:border-zinc-300">
                      {project.badge}
                    </span>
                  )}
                </div>

                <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-white light:text-zinc-900 group-hover:text-blue-400 light:group-hover:text-blue-600 transition-colors flex items-center justify-between">
                      {project.title}
                      <ArrowUpRight size={18} className="opacity-0 group-hover:opacity-100 transition-opacity text-blue-400" />
                    </h3>
                    <p className="text-xs text-zinc-400 light:text-zinc-600 line-clamp-2 leading-relaxed">{project.description}</p>
                  </div>

                  <div className="space-y-4 pt-2">
                    <div className="flex flex-wrap gap-1.5">
                      {project.stack.slice(0, 4).map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-2.5 py-0.5 rounded-md text-[10px] font-mono bg-zinc-800/60 light:bg-zinc-100 text-zinc-400 light:text-zinc-600 border border-zinc-700/40 light:border-zinc-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center justify-between text-xs font-mono pt-2 border-t border-zinc-800/80 light:border-zinc-200/80">
                      <span className="text-zinc-500 light:text-zinc-500 font-bold group-hover:text-zinc-300 transition-colors">Ver Detalles</span>
                      {project.link && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="text-blue-400 hover:text-blue-300 light:text-blue-600 light:hover:text-blue-700 flex items-center gap-1 font-bold"
                        >
                          <ExternalLink size={13} /> Demo en Vivo
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mastered Tools Section */}
        <div className="pt-6">
          <BentoCard colSpan={3} rowSpan={1} className="flex flex-col items-center justify-center p-8">
            <div className="w-full flex flex-col items-center justify-center">
              <h3 className="text-xs font-mono text-center text-zinc-400 light:text-zinc-600 uppercase tracking-widest mb-6 flex items-center gap-2">
                <Cpu size={16} /> Stack & Tecnologías Principales
              </h3>
              <div className="flex flex-wrap justify-center gap-4 px-4 w-full max-w-4xl">
                <TechBadge name="Next.js 16" icon={<NextjsLogo />} />
                <TechBadge name="Astro v5" icon={<AstroLogo />} />
                <TechBadge name="Tailwind v4" icon={<TailwindLogo />} />
                <TechBadge name="Prisma 7" icon={<PrismaLogo />} />
                <TechBadge name="Gemini IA 2.0" icon={<Sparkles size={14} className="text-indigo-400" />} />
                <TechBadge name="React 19" icon={<ReactLogo />} />
              </div>
            </div>
          </BentoCard>
        </div>
      </div>

      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </>
  );
}


