import React from 'react';
import {
  Shield,
  Receipt,
  Pill,
  Terminal,
  Bus,
  Truck,
  Building2,
  BookOpen,
  Ticket,
  Box,
  ScanSearch,
  Activity,
  CheckCircle2,
  WifiOff,
  FileCode2,
} from 'lucide-react';
import type { ProjectData } from '../data/projects';

interface Props {
  project: ProjectData;
  className?: string;
}

export default function ProjectThumbnail({ project, className = '' }: Props) {
  if (project.image) {
    return (
      <div className={`relative w-full h-full overflow-hidden bg-zinc-950 light:bg-zinc-100 ${className}`}>
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          className="w-full h-full object-cover object-top opacity-90 group-hover:opacity-100 group-hover:scale-[1.03] transition-all duration-500"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/50 via-transparent to-transparent light:from-black/15 pointer-events-none" />
      </div>
    );
  }

  return (
    <div
      className={`relative w-full h-full overflow-hidden bg-zinc-950 light:bg-zinc-50 flex items-center justify-center p-4 select-none ${className}`}
    >
      {/* Subtle architectural dot matrix */}
      <div
        className="absolute inset-0 opacity-30 light:opacity-50"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(148,163,184,0.22) 1px, transparent 1px)',
          backgroundSize: '14px 14px',
        }}
      />

      {/* Bespoke mini-UI preview by project variant */}
      <div className="relative z-10 w-full h-full rounded-xl border border-white/10 light:border-zinc-200 bg-zinc-900/90 light:bg-white shadow-inner overflow-hidden flex flex-col">
        {/* Mini Window Topbar */}
        <div className="flex items-center justify-between px-3 py-1.5 border-b border-white/5 light:border-zinc-100 bg-zinc-900 light:bg-zinc-50/80">
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-zinc-700 light:bg-zinc-300" />
            <span className="w-2 h-2 rounded-full bg-zinc-700 light:bg-zinc-300" />
            <span className="w-2 h-2 rounded-full bg-zinc-700 light:bg-zinc-300" />
          </div>
          <span className="text-[9px] font-mono text-zinc-500 truncate max-w-[160px]">{project.id}</span>
        </div>

        <div className="flex-1 p-3 flex flex-col justify-between gap-2">
          {renderVariantContent(project)}
        </div>
      </div>
    </div>
  );
}

function renderVariantContent(project: ProjectData) {
  switch (project.previewVariant) {
    case 'c4':
      return (
        <>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="p-1.5 rounded-lg bg-red-500/10 text-red-400 border border-red-500/20">
                <Shield size={14} />
              </div>
              <div>
                <div className="text-[11px] font-semibold text-zinc-100 light:text-zinc-900">C4 COMMAND GRID</div>
                <div className="text-[9px] font-mono text-emerald-400 light:text-emerald-600 flex items-center gap-1">
                  <Activity size={10} /> 24 CAMERAS ONLINE
                </div>
              </div>
            </div>
            <span className="px-1.5 py-0.5 rounded bg-zinc-800 light:bg-zinc-100 text-[9px] font-mono text-zinc-400">RBAC</span>
          </div>
          <div className="grid grid-cols-3 gap-1.5 flex-1">
            <div className="col-span-2 rounded-lg border border-white/5 light:border-zinc-200 bg-zinc-950/70 light:bg-zinc-100/70 p-2 relative overflow-hidden">
              <div className="w-16 h-16 rounded-full border border-blue-500/25 absolute -bottom-4 -right-4" />
              <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
              <div className="mt-2 h-1.5 w-2/3 rounded bg-zinc-800 light:bg-zinc-200" />
              <div className="mt-1 h-1.5 w-1/2 rounded bg-zinc-800/70 light:bg-zinc-200/70" />
            </div>
            <div className="rounded-lg border border-white/5 light:border-zinc-200 bg-zinc-950/70 light:bg-zinc-100/70 p-2 flex flex-col justify-between">
              <div className="h-1.5 w-full rounded bg-red-500/40" />
              <div className="h-1.5 w-4/5 rounded bg-amber-500/40" />
              <div className="h-1.5 w-3/5 rounded bg-emerald-500/40" />
            </div>
          </div>
        </>
      );

    case 'pos':
      return (
        <>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="p-1.5 rounded-lg bg-blue-500/10 text-blue-400 light:text-blue-600 border border-blue-500/20">
                <Receipt size={14} />
              </div>
              <div>
                <div className="text-[11px] font-semibold text-zinc-100 light:text-zinc-900">SUNAT UBL 2.1 POS</div>
                <div className="text-[9px] font-mono text-zinc-400">MULTI-TENANT SAAS</div>
              </div>
            </div>
            <span className="text-[10px] font-mono font-bold text-emerald-400 light:text-emerald-600">S/ 1,420.50</span>
          </div>
          <div className="grid grid-cols-3 gap-1.5 flex-1">
            <div className="col-span-2 grid grid-cols-2 gap-1">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="rounded-md border border-white/5 light:border-zinc-200 bg-zinc-800/40 light:bg-zinc-100 p-1.5">
                  <div className="h-1.5 w-3/4 rounded bg-zinc-600/60 light:bg-zinc-300" />
                  <div className="mt-1 h-1 w-1/2 rounded bg-blue-500/50" />
                </div>
              ))}
            </div>
            <div className="rounded-md border border-white/5 light:border-zinc-200 bg-zinc-950/70 light:bg-zinc-50 p-1.5 flex flex-col justify-between">
              <div className="space-y-1">
                <div className="h-1 w-full rounded bg-zinc-700 light:bg-zinc-300" />
                <div className="h-1 w-2/3 rounded bg-zinc-700 light:bg-zinc-300" />
              </div>
              <div className="h-3 w-full rounded bg-blue-600/80" />
            </div>
          </div>
        </>
      );

    case 'botica':
      return (
        <>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="p-1.5 rounded-lg bg-emerald-500/10 text-emerald-400 light:text-emerald-600 border border-emerald-500/20">
                <Pill size={14} />
              </div>
              <div>
                <div className="text-[11px] font-semibold text-zinc-100 light:text-zinc-900">BOTICA OFFLINE-FIRST</div>
                <div className="text-[9px] font-mono text-zinc-400 flex items-center gap-1">
                  <WifiOff size={10} /> DEXIE + SUPABASE SYNC
                </div>
              </div>
            </div>
            <CheckCircle2 size={14} className="text-emerald-500" />
          </div>
          <div className="space-y-1.5 flex-1 flex flex-col justify-center">
            {['Lote #A-402 · Vence 12/2027', 'Lote #B-118 · Stock Óptimo'].map((row, i) => (
              <div key={i} className="flex items-center justify-between px-2 py-1.5 rounded-md border border-white/5 light:border-zinc-200 bg-zinc-800/40 light:bg-zinc-100">
                <span className="text-[9px] font-mono text-zinc-300 light:text-zinc-700">{row}</span>
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
              </div>
            ))}
          </div>
        </>
      );

    case 'api':
      return (
        <>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="p-1.5 rounded-lg bg-amber-500/10 text-amber-400 light:text-amber-600 border border-amber-500/20">
                <Terminal size={14} />
              </div>
              <span className="text-[11px] font-mono font-semibold text-zinc-100 light:text-zinc-900">POST /api/v1/invoices</span>
            </div>
            <span className="px-1.5 py-0.5 rounded bg-emerald-500/15 text-emerald-400 light:text-emerald-700 text-[9px] font-mono">200 OK</span>
          </div>
          <div className="rounded-lg border border-white/5 light:border-zinc-200 bg-zinc-950 light:bg-zinc-100 p-2 font-mono text-[9px] text-zinc-400 light:text-zinc-600 space-y-0.5 flex-1">
            <div className="flex items-center gap-1 text-blue-400 light:text-blue-600">
              <FileCode2 size={10} /> {'{ "ubl": "2.1", "signed": true,'}
            </div>
            <div className="pl-3">{'"cdr": "ACCEPTED", "ms": 14 }'}</div>
          </div>
        </>
      );

    default: {
      const iconMap: Record<string, React.ReactNode> = {
        transport: <Bus size={16} className="text-blue-400 light:text-blue-600" />,
        cargo: <Truck size={16} className="text-indigo-400 light:text-indigo-600" />,
        realestate: <Building2 size={16} className="text-cyan-400 light:text-cyan-600" />,
        books: <BookOpen size={16} className="text-amber-400 light:text-amber-600" />,
        raffle: <Ticket size={16} className="text-violet-400 light:text-violet-600" />,
        academy3d: <Box size={16} className="text-emerald-400 light:text-emerald-600" />,
        curator: <ScanSearch size={16} className="text-pink-400 light:text-pink-600" />,
      };
      return (
        <>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="p-1.5 rounded-lg bg-zinc-800 light:bg-zinc-100 border border-white/10 light:border-zinc-200">
                {iconMap[project.previewVariant ?? ''] ?? <Box size={16} className="text-blue-400" />}
              </div>
              <div>
                <div className="text-[11px] font-semibold text-zinc-100 light:text-zinc-900 truncate max-w-[170px]">
                  {project.title}
                </div>
                <div className="text-[9px] font-mono text-zinc-500">{project.badge}</div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-1.5 flex-1 items-end">
            <div className="h-8 rounded-md bg-zinc-800/60 light:bg-zinc-100 border border-white/5 light:border-zinc-200" />
            <div className="h-12 rounded-md bg-blue-500/10 border border-blue-500/20" />
            <div className="h-10 rounded-md bg-zinc-800/60 light:bg-zinc-100 border border-white/5 light:border-zinc-200" />
          </div>
        </>
      );
    }
  }
}
