import React from 'react';
import { motion } from 'motion/react';

interface ImmersivePhotoProps {
  className?: string;
}

export const ImmersivePhoto: React.FC<ImmersivePhotoProps> = ({ className = '' }) => {
  const profilePhoto = `${import.meta.env.BASE_URL}joy-perez.jpg`;

  return (
    <div
      className={`relative w-full max-w-[340px] sm:max-w-[400px] lg:max-w-[460px] xl:max-w-[500px] aspect-[3/4] min-h-[460px] sm:min-h-[520px] lg:min-h-[580px] flex items-center justify-center ${className}`}
    >
      {/* Luminous Ambient Aurora Glow behind photo */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-b from-sky-400/35 via-emerald-400/25 to-orange-500/35 blur-3xl transform scale-105 pointer-events-none animate-pulse-subtle" />

      {/* Orbiting Celestial Accents */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-45 animate-spin-slow" viewBox="0 0 500 650">
        <ellipse cx="250" cy="325" rx="230" ry="290" fill="none" stroke="#38BDF8" strokeWidth="1.2" strokeDasharray="6 12" />
        <ellipse cx="250" cy="325" rx="240" ry="220" fill="none" stroke="#10B981" strokeWidth="1" strokeDasharray="4 8" opacity="0.6" />
        <circle cx="250" cy="40" r="4.5" fill="#F97316" />
        <circle cx="480" cy="325" r="3.5" fill="#38BDF8" />
        <circle cx="20" cy="325" r="3.5" fill="#10B981" />
      </svg>

      {/* Permanent public profile photo sourced from /public */}
      <div className="relative w-full h-full overflow-hidden flex items-center justify-center rounded-3xl [mask-image:radial-gradient(ellipse_at_center,black_65%,transparent_95%)] group">
        <div className="relative w-full h-full">
          <img
            src={profilePhoto}
            alt="Joy L. Perez"
            className="w-full h-full object-cover object-top filter brightness-105 contrast-105 select-none transition-transform duration-700 group-hover:scale-102"
          />

          {/* Seamless Edge Gradient Overlays */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#051329] via-[#051329]/20 to-transparent opacity-85 pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#051329]/40 via-transparent to-transparent pointer-events-none" />
        </div>
      </div>

      {/* Professional Identity Badge */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="absolute bottom-4 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-2 pointer-events-none"
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
