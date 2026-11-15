import React, { useState, useEffect, useRef, useMemo } from 'react';
import {
  ArrowUpRight,
  Search,
  Layers,
  Cpu,
  Github,
  Mail,
  Check,
  Copy,
  ExternalLink,
  MapPin,
  Database,
  Server,
  Sparkles,
  LayoutGrid,
  X,
} from 'lucide-react';
import { projects, type ProjectData, type ProjectCategory } from '../data/projects';
import ProjectThumbnail from './ProjectThumbnail';
import ProjectDrawer from './ProjectDrawer';

interface Props {
  name: string;
  role: string;
  subrole: string;
}

const CATEGORIES: { id: ProjectCategory; label: string }[] = [
  { id: 'all', label: 'Todos' },
  { id: 'saas', label: 'SaaS & ERP' },
  { id: 'fintech', label: 'POS & FinTech SUNAT' },
  { id: 'ai', label: 'IA, Seguridad & Telemetría' },
  { id: 'web', label: 'Web & 3D' },
];

const STACK_LAYERS = [
  {
    title: 'Frontend & 3D',
    icon: LayoutGrid,
    items: ['Next.js 16', 'Astro v5', 'React 19', 'TypeScript', 'Tailwind v4', 'Shadcn UI', 'Three.js'],
  },
  {
    title: 'Backend & Runtimes',
    icon: Server,
    items: ['Bun Runtime', 'Hono', 'Express', 'Server Actions', 'REST & OpenAPI', 'Better Auth', 'NextAuth v5'],
  },
  {
    title: 'Datos & Offline-First',
    icon: Database,
    items: ['PostgreSQL', 'Supabase', 'Prisma 7', 'Drizzle ORM', 'Dexie IndexedDB', 'TanStack Query', 'Zustand'],
  },
  {
    title: 'IA, Mapas & SUNAT',
    icon: Sparkles,
    items: ['Gemini 2.0 AI', 'Vercel AI SDK', 'SUNAT UBL 2.1', 'MapLibre GL', 'Leaflet', 'Playwright', 'React-PDF'],
  },
];

export default function PortfolioApp({ name, role, subrole }: Props) {
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [copied, setCopied] = useState(false);
  const searchInputRef = useRef<HTMLInputElement>(null);

  const featuredProjects = useMemo(() => projects.filter((p) => p.featured), []);

  const filteredProjects = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    return projects.filter((project) => {
      const matchesCategory = selectedCategory === 'all' || project.category === selectedCategory;
      if (!matchesCategory) return false;
      if (!q) return true;
      return (
        project.title.toLowerCase().includes(q) ||
        project.description.toLowerCase().includes(q) ||
        project.badge.toLowerCase().includes(q) ||
        project.stack.some((t) => t.toLowerCase().includes(q))
      );
    });
  }, [selectedCategory, searchQuery]);

  useEffect(() => {
    const focusSearch = () => {
      document.getElementById('catalogo')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setTimeout(() => searchInputRef.current?.focus(), 250);
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        focusSearch();
      }
    };

    window.addEventListener('portfolio:focus-search', focusSearch);
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('portfolio:focus-search', focusSearch);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const copyEmail = () => {
    navigator.clipboard.writeText('contact@jackson.dev');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* HERO SECTION */}
      <section id="inicio" className="pt-14 pb-16 md:pt-20 md:pb-20 border-b border-border">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-8 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface border border-border text-xs font-mono text-text-muted">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span>Disponible para proyectos</span>
              <span className="text-border-strong">|</span>
              <span className="inline-flex items-center gap-1">
                <MapPin size={11} className="text-blue-500" /> Perú
              </span>
            </div>

            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-[-0.03em] leading-[1.06] text-text-main">
                {name}
                <span className="block text-text-muted font-semibold mt-1">{role}</span>
              </h1>
              <p className="text-base sm:text-lg text-text-muted max-w-2xl leading-relaxed">
                {subrole} Diseño y construyo plataformas SaaS Multi-Tenant, sistemas POS con facturación electrónica SUNAT, aplicaciones Offline-First y centros operativos con IA.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#catalogo"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium transition-colors"
              >
                Explorar Proyectos <ArrowUpRight size={16} />
              </a>
              <a
                href="#contacto"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-surface border border-border hover:border-border-strong text-text-main text-sm font-medium transition-colors"
              >
                <Mail size={16} /> Contactar
              </a>
            </div>
          </div>

          {/* Compact Profile Card */}
          <div className="lg:col-span-4">
            <div className="relative rounded-2xl border border-border bg-surface p-3 shadow-sm">
              <div className="aspect-4/4 rounded-xl overflow-hidden bg-surface-elevated relative">
                <img
                  src="/images/me.png"
                  alt={name}
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/70 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white">
                  <div>
                    <div className="text-sm font-semibold">{name}</div>
                    <div className="text-[11px] font-mono text-zinc-300">Next.js · Astro · Bun · IA</div>
                  </div>
                  <a
                    href="https://github.com/Jackson-sch"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Perfil de GitHub"
                    className="p-2 rounded-lg bg-white/10 hover:bg-white/20 backdrop-blur-md transition-colors"
                  >
                    <Github size={16} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Metrics Strip */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-border mt-14 rounded-2xl overflow-hidden border border-border">
          {[
            { label: 'Sistemas en Portafolio', value: `${projects.length}+ Proyectos` },
            { label: 'Especialidad Core', value: 'SaaS & POS SUNAT' },
            { label: 'Stack Principal', value: 'Next.js 16 · Astro 5 · Bun' },
            { label: 'Patrones Clave', value: 'Offline-First · RBAC · IA' },
          ].map((stat) => (
            <div key={stat.label} className="bg-surface px-5 py-4">
              <div className="text-[11px] font-mono uppercase tracking-wider text-text-muted">{stat.label}</div>
              <div className="text-sm sm:text-base font-semibold text-text-main mt-1">{stat.value}</div>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURED CASE STUDIES */}
      <section id="destacados" className="py-16 border-b border-border space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div className="space-y-1.5">
            <div className="text-xs font-mono uppercase tracking-wider text-blue-500">Selección 2026</div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-text-main">
              Sistemas Destacados
            </h2>
          </div>
          <p className="text-sm text-text-muted max-w-md">
            Proyectos recientes con arquitectura de producción en videovigilancia C4, educación con IA y punto de venta SUNAT.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {featuredProjects.map((project) => (
            <article
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="group rounded-2xl border border-border bg-surface hover:border-border-strong transition-all duration-300 overflow-hidden flex flex-col cursor-pointer"
            >
              <div className="aspect-16/9 w-full border-b border-border overflow-hidden">
                <ProjectThumbnail project={project} />
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between gap-5">
                <div className="space-y-2.5">
                  <div className="flex items-center justify-between gap-2">
                    <span className="px-2.5 py-0.5 rounded-md text-[11px] font-mono font-medium bg-blue-500/10 text-blue-400 light:text-blue-600 border border-blue-500/20">
                      {project.badge}
                    </span>
                    <ArrowUpRight
                      size={18}
                      className="text-text-muted group-hover:text-blue-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
                    />
                  </div>
                  <h3 className="text-xl font-bold tracking-tight text-text-main group-hover:text-blue-500 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-text-muted leading-relaxed">{project.description}</p>
                </div>

                <div className="space-y-3 pt-2 border-t border-border">
                  {project.architecture && (
                    <div className="flex flex-wrap gap-1.5">
                      {project.architecture.map((arch) => (
                        <span
                          key={arch}
                          className="px-2 py-0.5 rounded text-[10px] font-mono bg-surface-elevated text-text-main border border-border"
                        >
                          {arch}
                        </span>
                      ))}
                    </div>
                  )}
                  <div className="flex flex-wrap gap-1.5">
                    {project.stack.slice(0, 5).map((tech) => (
                      <span key={tech} className="text-[11px] font-mono text-text-muted">
                        {tech}
                        <span className="mx-1.5 text-border-strong">·</span>
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* FULL CATALOG WITH SEARCH & FILTERS */}
      <section id="catalogo" className="py-16 border-b border-border space-y-8">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div className="space-y-1.5">
            <div className="text-xs font-mono uppercase tracking-wider text-blue-500 flex items-center gap-1.5">
              <Layers size={13} /> Explorador Completo
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-text-main">
              Catálogo de Proyectos
            </h2>
          </div>

          {/* Search Input */}
          <div className="relative w-full lg:w-80">
            <Search size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-text-muted pointer-events-none" />
            <input
              ref={searchInputRef}
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Buscar por nombre o tecnología..."
              aria-label="Buscar proyectos"
              className="w-full pl-10 pr-9 py-2 rounded-xl bg-surface border border-border focus:border-blue-500 focus:outline-none text-sm text-text-main placeholder:text-text-muted transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                aria-label="Limpiar búsqueda"
                className="absolute right-2.5 top-1/2 -translate-y-1/2 p-1 text-text-muted hover:text-text-main"
              >
                <X size={14} />
              </button>
            )}
          </div>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap gap-2">
          {CATEGORIES.map((cat) => {
            const isActive = selectedCategory === cat.id;
            const count =
              cat.id === 'all' ? projects.length : projects.filter((p) => p.category === cat.id).length;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-mono font-medium transition-colors flex items-center gap-2 border ${
                  isActive
                    ? 'bg-blue-600 border-blue-600 text-white'
                    : 'bg-surface border-border text-text-muted hover:text-text-main hover:border-border-strong'
                }`}
              >
                <span>{cat.label}</span>
                <span
                  className={`px-1.5 py-0.2 rounded text-[10px] ${
                    isActive ? 'bg-white/20 text-white' : 'bg-surface-elevated text-text-muted'
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Project Grid */}
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <article
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className="group rounded-2xl border border-border bg-surface hover:border-border-strong transition-all duration-300 overflow-hidden flex flex-col justify-between cursor-pointer hover:-translate-y-0.5"
              >
                <div>
                  <div className="aspect-16/10 w-full border-b border-border overflow-hidden relative">
                    <ProjectThumbnail project={project} />
                    <span className="absolute top-3 left-3 px-2.5 py-0.5 rounded-md text-[10px] font-mono font-medium bg-zinc-950/80 light:bg-white/90 backdrop-blur-md text-zinc-200 light:text-zinc-800 border border-white/10 light:border-zinc-200">
                      {project.badge}
                    </span>
                  </div>

                  <div className="p-5 space-y-2">
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="text-base font-bold text-text-main group-hover:text-blue-500 transition-colors">
                        {project.title}
                      </h3>
                      <ArrowUpRight
                        size={16}
                        className="text-text-muted opacity-0 group-hover:opacity-100 transition-opacity shrink-0 mt-0.5"
                      />
                    </div>
                    <p className="text-xs text-text-muted line-clamp-2 leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                </div>

                <div className="px-5 pb-5 pt-2 space-y-3">
                  <div className="flex flex-wrap gap-1.5">
                    {project.stack.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 rounded text-[10px] font-mono bg-surface-elevated border border-border text-text-muted"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.stack.length > 3 && (
                      <span className="px-2 py-0.5 rounded text-[10px] font-mono text-text-muted">
                        +{project.stack.length - 3}
                      </span>
                    )}
                  </div>

                  <div className="flex items-center justify-between pt-3 border-t border-border text-xs font-mono">
                    <span className="text-text-muted group-hover:text-text-main transition-colors">
                      Ver arquitectura
                    </span>
                    <div className="flex items-center gap-3">
                      {project.link && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="text-blue-500 hover:text-blue-400 inline-flex items-center gap-1 font-medium"
                        >
                          <ExternalLink size={12} /> Demo
                        </a>
                      )}
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          aria-label={`Repositorio de ${project.title}`}
                          className="text-text-muted hover:text-text-main inline-flex items-center gap-1"
                        >
                          <Github size={13} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="rounded-2xl border border-border bg-surface p-12 text-center space-y-3">
            <p className="text-sm text-text-muted">
              No se encontraron proyectos que coincidan con "{searchQuery}".
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
              }}
              className="px-4 py-2 rounded-lg bg-surface-elevated border border-border text-xs font-mono text-text-main hover:border-border-strong transition-colors"
            >
              Restablecer filtros
            </button>
          </div>
        )}
      </section>

      {/* ENGINEERING STACK MATRIX */}
      <section id="stack" className="py-16 border-b border-border space-y-8">
        <div className="space-y-1.5">
          <div className="text-xs font-mono uppercase tracking-wider text-blue-500 flex items-center gap-1.5">
            <Cpu size={13} /> Capacidades Técnicas
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-text-main">
            Stack por Capas de Ingeniería
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {STACK_LAYERS.map((layer) => {
            const Icon = layer.icon;
            return (
              <div key={layer.title} className="rounded-2xl border border-border bg-surface p-5 space-y-4">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-lg bg-surface-elevated border border-border text-blue-500">
                    <Icon size={16} />
                  </div>
                  <h3 className="text-sm font-semibold text-text-main">{layer.title}</h3>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {layer.items.map((item) => (
                    <span
                      key={item}
                      className="px-2.5 py-1 rounded-md text-xs font-mono bg-surface-elevated border border-border text-text-muted"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* CONTACT & FOOTER */}
      <footer id="contacto" className="py-14 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="space-y-1.5">
          <h2 className="text-xl font-bold tracking-tight text-text-main">
            ¿Construimos un sistema juntos?
          </h2>
          <p className="text-sm text-text-muted">
            Disponible para desarrollo Fullstack, arquitectura SaaS, POS SUNAT e integraciones con IA.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <button
            onClick={copyEmail}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-surface border border-border hover:border-border-strong text-xs font-mono text-text-main transition-colors"
          >
            {copied ? <Check size={14} className="text-emerald-500" /> : <Copy size={14} />}
            <span>{copied ? 'Correo copiado' : 'contact@jackson.dev'}</span>
          </button>
          <a
            href="mailto:contact@jackson.dev"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-medium transition-colors"
          >
            <Mail size={14} /> Enviar Email
          </a>
          <a
            href="https://github.com/Jackson-sch"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-surface border border-border hover:border-border-strong text-xs font-medium text-text-main transition-colors"
          >
            <Github size={14} /> GitHub
          </a>
        </div>
      </footer>

      {/* Project Detail Slide-Over Drawer */}
      <ProjectDrawer project={selectedProject} onClose={() => setSelectedProject(null)} />
    </div>
  );
}
