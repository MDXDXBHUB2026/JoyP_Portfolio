import React from 'react';
import { motion } from 'motion/react';
import { Compass } from 'lucide-react';

interface StoryChapterProps {
  number: string;
  title: string;
  theme?: string;
  className?: string;
}

export const StoryChapter: React.FC<StoryChapterProps> = ({
  number,
  title,
  theme,
  className = ''
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6 }}
      className={`inline-flex items-center gap-3 px-4 py-1.5 rounded-full glass border border-white/10 text-xs text-slate-300 mb-4 shadow-lg shadow-black/20 ${className}`}
    >
      <span className="flex items-center gap-1.5 font-mono-code font-bold tracking-wider text-blue-400">
        <Compass className="w-3.5 h-3.5 text-blue-400 animate-pulse-subtle" />
        {number}
      </span>
      <span className="w-1 h-1 rounded-full bg-white/20" />
      <span className="font-semibold text-white">{title}</span>
      {theme && (
        <>
          <span className="hidden sm:inline w-1 h-1 rounded-full bg-white/20" />
          <span className="hidden sm:inline text-slate-400 font-light">{theme}</span>
        </>
      )}
    </motion.div>
  );
};
