import React, { useEffect, useState } from 'react';
import { X, CheckCircle2 } from 'lucide-react';

interface ProjectData {
  id: string;
  title: string;
  description: string;
  features: string[];
  stack: string[];
  link?: string;
  color: string;
}

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
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/40 light:bg-zinc-100/40 backdrop-blur-md"
        onClick={onClose}
      />

      {/* Modal Content */}
      <div
        className={`relative w-full max-w-2xl bg-zinc-900 light:bg-white border border-zinc-800 light:border-zinc-200 rounded-3xl overflow-hidden shadow-2xl transition-transform duration-500 transform ${isOpen ? 'scale-100 translate-y-0' : 'scale-95 translate-y-8'}`}
      >
        <div className={`h-2 w-full bg-linear-to-r ${project.color}`} />

        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full bg-zinc-800 light:bg-zinc-100 text-zinc-400 light:text-zinc-500 hover:text-white light:hover:text-zinc-900 transition-colors"
        >
          <X size={20} />
        </button>

        <div className="p-8 md:p-12 space-y-8 max-h-[80vh] overflow-y-auto custom-scrollbar">
          <div className="space-y-4">
            <h2 className="text-4xl font-black text-white light:text-zinc-900">{project.title}</h2>
            <p className="text-xl text-zinc-400 light:text-zinc-500 font-mono italic">{project.description}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-xs font-bold uppercase tracking-widest text-zinc-500 light:text-zinc-400">Key Features</h3>
              <ul className="space-y-3">
                {project.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-zinc-300 light:text-zinc-600 text-sm">
                    <CheckCircle2 size={18} className="text-blue-500 shrink-0 mt-0.5" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-xs font-bold uppercase tracking-widest text-zinc-500 light:text-zinc-400">Tech Stack</h3>
              <div className="flex flex-wrap gap-2">
                {project.stack.map((tech, idx) => (
                  <span key={idx} className="px-3 py-1 bg-zinc-800 light:bg-zinc-50 border border-zinc-700 light:border-zinc-200 rounded-lg text-xs font-mono text-zinc-400 light:text-zinc-500">
                    {tech}
                  </span>
                ))}
              </div>

              {project.link && (
                <div className="pt-4">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-white light:bg-zinc-900 text-zinc-950 light:text-white font-bold rounded-xl hover:opacity-90 transition-opacity shadow-lg shadow-blue-500/10"
                  >
                    Visitar Proyecto
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
