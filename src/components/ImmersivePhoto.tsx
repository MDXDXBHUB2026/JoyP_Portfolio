import React from 'react';
import { motion } from 'motion/react';

interface ImmersivePhotoProps {
  className?: string;
}

const profilePhoto = `${import.meta.env.BASE_URL}assets/aistudio/joy-perez-profile-premium.png`;

export const ImmersivePhoto: React.FC<ImmersivePhotoProps> = ({ className = '' }) => {
  return (
    <div
      className={`relative w-full max-w-[340px] sm:max-w-[400px] lg:max-w-[460px] xl:max-w-[500px] aspect-[4/5] min-h-[460px] sm:min-h-[520px] lg:min-h-[580px] flex items-center justify-center ${className}`}
    >
      <div className="absolute inset-0 rounded-full bg-gradient-to-b from-sky-400/30 via-emerald-400/20 to-orange-500/30 blur-3xl scale-105 pointer-events-none animate-pulse-subtle" />

      <div className="relative w-full h-full overflow-hidden rounded-[2rem] group shadow-2xl shadow-sky-950/50 ring-1 ring-white/10 bg-[#07182f]">
        <img
          src={profilePhoto}
          alt="Joy L. Perez"
          loading="eager"
          decoding="async"
          className="w-full h-full object-cover select-none transition-transform duration-700 group-hover:scale-[1.015]"
          style={{ objectPosition: 'center 18%' }}
        />

        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#051329]/75 via-[#051329]/20 to-transparent pointer-events-none" />
        <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-[2rem] pointer-events-none" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="absolute bottom-4 left-1/2 -translate-x-1/2 z-30 pointer-events-none"
      >
        <div className="px-5 py-2 rounded-full glass border border-sky-400/50 bg-[#051329]/95 text-center shadow-2xl shadow-sky-950/90 blue-glow whitespace-nowrap">
          <div className="flex items-center gap-2 text-xs sm:text-sm font-mono-code font-bold text-white tracking-wide">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>JOY L. PEREZ</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
