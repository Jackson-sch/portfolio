import React, { useRef, useState } from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface Props {
  children: React.ReactNode;
  className?: string;
  colSpan?: 1 | 2 | 3;
  rowSpan?: 1 | 2;
  noPadding?: boolean;
  onClick?: () => void;
}

export default function BentoCard({ children, className, colSpan = 1, rowSpan = 1, noPadding = false, onClick }: Props) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0, opacity: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
      opacity: 1,
    });
  };

  const handleMouseLeave = () => {
    setMousePos((prev) => ({ ...prev, opacity: 0 }));
  };

  const spanClasses = {
    col: {
      1: 'md:col-span-1',
      2: 'md:col-span-2',
      3: 'md:col-span-3',
    },
    row: {
      1: 'md:row-span-1',
      2: 'md:row-span-2',
    },
  };

  return (
    <div
      ref={cardRef}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={cn(
        'relative overflow-hidden rounded-3xl border border-border bg-surface shadow-md transition-all duration-500 transform-gpu hover:-translate-y-1 hover:shadow-2xl hover:border-blue-500/30 group',
        !noPadding && 'p-6',
        spanClasses.col[colSpan],
        spanClasses.row[rowSpan],
        className
      )}
    >
      {/* Dynamic Mouse Spotlight Glow */}
      <div
        className="pointer-events-none absolute -inset-px z-0 transition-opacity duration-300"
        style={{
          opacity: mousePos.opacity,
          background: `radial-gradient(400px circle at ${mousePos.x}px ${mousePos.y}px, rgba(59, 130, 246, 0.15), transparent 80%)`,
        }}
      />

      <div className={cn("relative z-10 flex h-full flex-col", noPadding && "w-full h-full")}>
        {children}
      </div>

      {/* Subtle Ambient Border Light */}
      <div className="absolute inset-0 z-0 bg-linear-to-br from-white/3 light:from-black/2 to-transparent pointer-events-none transition-colors duration-500" />
    </div>
  );
}

