import React, { useEffect } from 'react';
import { X, CheckCircle2, ExternalLink, Github, Layers, Cpu, Sparkles } from 'lucide-react';
import type { ProjectData } from '../data/projects';
import ProjectThumbnail from './ProjectThumbnail';

interface Props {
  project: ProjectData | null;
  onClose: () => void;
}

export default function ProjectDrawer({ project, onClose }: Props) {
  useEffect(() => {
    if (!project) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end" role="dialog" aria-modal="true" aria-label={project.title}>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 light:bg-zinc-950/35 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Slide-over Panel */}
      <aside className="relative z-10 w-full max-w-2xl h-full bg-zinc-950 light:bg-white border-l border-border shadow-2xl flex flex-col overflow-hidden animate-fade-in-left animate-duration-200">
        {/* Top Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-border bg-surface/80 backdrop-blur-md">
          <div className="flex items-center gap-2.5">
            <span className="px-2.5 py-0.5 rounded-md text-[11px] font-mono font-medium bg-blue-500/10 text-blue-400 light:text-blue-600 border border-blue-500/20">
              {project.badge}
            </span>
            <span className="text-xs font-mono text-text-muted">{project.year}</span>
          </div>
          <button
            onClick={onClose}
            aria-label="Cerrar detalle"
            className="p-2 rounded-lg text-text-muted hover:text-text-main hover:bg-surface-elevated transition-colors"
          >
            <X size={18} />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto p-6 md:p-8 space-y-8">
          {/* Preview Frame */}
          <div className="aspect-16/9 w-full rounded-xl overflow-hidden border border-border bg-surface-elevated">
            <ProjectThumbnail project={project} />
          </div>

          {/* Title & Description */}
          <div className="space-y-3">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-text-main">
              {project.title}
            </h2>
            <p className="text-sm md:text-base text-text-muted leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Architecture Highlights */}
          {project.architecture && project.architecture.length > 0 && (
            <div className="space-y-2.5">
              <h3 className="text-xs font-mono uppercase tracking-wider text-text-muted flex items-center gap-2">
                <Cpu size={14} className="text-blue-500" /> Arquitectura Clave
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.architecture.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1 rounded-lg text-xs font-mono bg-blue-500/8 text-blue-400 light:text-blue-600 border border-blue-500/20"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Features */}
          <div className="space-y-3">
            <h3 className="text-xs font-mono uppercase tracking-wider text-text-muted flex items-center gap-2">
              <Sparkles size={14} className="text-blue-500" /> Capacidades y Módulos
            </h3>
            <ul className="space-y-2.5">
              {project.features.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm text-text-main/90 leading-snug">
                  <CheckCircle2 size={16} className="text-blue-500 shrink-0 mt-0.5" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Stack */}
          <div className="space-y-3">
            <h3 className="text-xs font-mono uppercase tracking-wider text-text-muted flex items-center gap-2">
              <Layers size={14} className="text-blue-500" /> Stack Tecnológico
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 rounded-lg text-xs font-mono bg-surface-elevated border border-border text-text-muted"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Action Bar */}
        {(project.link || project.github) && (
          <div className="px-6 py-4 border-t border-border bg-surface/90 backdrop-blur-md flex flex-wrap gap-3">
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 min-w-[160px] inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium transition-colors"
              >
                <ExternalLink size={16} /> Demo en Vivo
              </a>
            )}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 min-w-[160px] inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-surface-elevated hover:border-border-strong border border-border text-text-main text-sm font-medium transition-colors"
              >
                <Github size={16} /> Ver Código
              </a>
            )}
          </div>
        )}
      </aside>
    </div>
  );
}
