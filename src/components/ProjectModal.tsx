import React, { useEffect, useState } from 'react';
import { X, CheckCircle2, ExternalLink, Sparkles, Layers } from 'lucide-react';
import type { ProjectData } from '../data/projects';

interface Props {
  project: ProjectData | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (project) {
      setIsOpen(true);
      document.body.style.overflow = 'hidden';
    } else {
      setIsOpen(false);
      document.body.style.overflow = 'auto';
    }
  }, [project]);

  if (!project) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 transition-opacity duration-300 ${
        isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 light:bg-zinc-900/50 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Modal Card Container */}
      <div
        className={`relative w-full max-w-3xl bg-zinc-900/85 light:bg-white/85 backdrop-blur-2xl border border-white/10 light:border-zinc-200/80 rounded-3xl overflow-hidden shadow-2xl transition-all duration-500 transform ${
          isOpen ? 'scale-100 translate-y-0' : 'scale-95 translate-y-8'
        }`}
      >

        {/* Modal Image Header Banner */}
        <div className="relative h-56 md:h-64 w-full bg-zinc-950 overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover opacity-85 transition-transform duration-700 hover:scale-105"
          />
          <div className="absolute inset-0 bg-linear-to-t from-zinc-900 via-zinc-900/40 to-transparent light:from-white light:via-white/30" />

          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2.5 rounded-full bg-black/50 light:bg-white/80 backdrop-blur-md text-white light:text-zinc-800 hover:bg-black/80 light:hover:bg-white transition-colors border border-white/10 light:border-zinc-200 z-20"
          >
            <X size={18} />
          </button>

          {/* Header Title Overlay */}
          <div className="absolute bottom-6 left-6 right-6 z-10 space-y-2">
            {project.badge && (
              <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-blue-500/20 light:bg-blue-100 border border-blue-500/30 text-blue-300 light:text-blue-700 backdrop-blur-md inline-block">
                {project.badge}
              </span>
            )}
            <h2 className="text-3xl md:text-4xl font-black text-white light:text-zinc-900 tracking-tight drop-shadow-md">
              {project.title}
            </h2>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 md:p-10 space-y-8 max-h-[60vh] overflow-y-auto custom-scrollbar">
          <p className="text-base md:text-lg text-zinc-300 light:text-zinc-700 leading-relaxed font-sans">
            {project.description}
          </p>

          <div className="grid md:grid-cols-2 gap-8 pt-2">
            {/* Features Column */}
            <div className="space-y-4">
              <h3 className="text-xs font-bold uppercase tracking-widest text-zinc-400 light:text-zinc-500 font-mono flex items-center gap-2">
                <Sparkles size={14} className="text-blue-400" /> Funcionalidades Principales
              </h3>
              <ul className="space-y-3">
                {project.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-zinc-300 light:text-zinc-700 text-sm leading-snug">
                    <CheckCircle2 size={16} className="text-blue-500 shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Stack & Action Column */}
            <div className="space-y-6 flex flex-col justify-between">
              <div className="space-y-4">
                <h3 className="text-xs font-bold uppercase tracking-widest text-zinc-400 light:text-zinc-500 font-mono flex items-center gap-2">
                  <Layers size={14} className="text-purple-400" /> Stack Tecnológico
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.stack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-zinc-800/80 light:bg-zinc-100 border border-zinc-700/60 light:border-zinc-300 rounded-xl text-xs font-mono text-zinc-300 light:text-zinc-700 shadow-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              {project.link && (
                <div className="pt-4 border-t border-zinc-800 light:border-zinc-200">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-2xl transition-all shadow-lg shadow-blue-500/25 w-full text-center hover:scale-[1.02]"
                  >
                    <ExternalLink size={18} />
                    Visitar Demo en Vivo
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


