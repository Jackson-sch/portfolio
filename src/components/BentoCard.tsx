import React from 'react';
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
      onClick={onClick}
      className={cn(
        'relative overflow-hidden rounded-3xl border border-border bg-surface shadow-sm transition-all duration-500 transform-gpu hover:-translate-y-1 hover:shadow-xl group',
        !noPadding && 'p-6',
        spanClasses.col[colSpan],
        spanClasses.row[rowSpan],
        className
      )}
    >
      <div className={cn("relative z-10 flex h-full flex-col", noPadding && "w-full h-full")}>
        {children}
      </div>

      {/* Subtle Glow Effect on Hover */}
      <div className="absolute inset-0 z-0 bg-linear-to-br from-white/2 dark:from-white/5 light:from-black/1 to-transparent pointer-events-none transition-colors duration-500" />
    </div>
  );
}
