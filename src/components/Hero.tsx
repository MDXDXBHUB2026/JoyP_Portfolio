import React from 'react';
import { motion } from 'motion/react';
import { 
  ArrowRight, 
  ChevronDown
} from 'lucide-react';
import { ImmersivePhoto } from './ImmersivePhoto';

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  return (
    <section 
      id="home" 
      className="relative min-h-[92vh] flex items-center justify-center pt-24 sm:pt-28 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden bg-[#070d1e]"
    >
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        
        {/* Left Column: Reference Layout matching image */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="lg:col-span-7 flex flex-col items-start text-left z-20"
        >
          {/* Eyebrow in uppercase amber */}
          <div className="text-xs sm:text-sm font-mono-code font-bold text-amber-500 uppercase tracking-widest mb-3">
            SPECIAL EDUCATION · INCLUSIVE PEDAGOGY
          </div>

          {/* Large Bold Name */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.05] mb-3">
            Joy L. Perez
          </h1>

          {/* Dual Subtitles */}
          <div className="mb-6 space-y-1">
            <div className="text-2xl sm:text-3xl font-medium text-slate-100 tracking-tight">
              Special Education Teacher
            </div>
            <div className="text-xl sm:text-2xl font-semibold text-amber-500 tracking-tight">
              Inclusion & Pediatric Therapy Specialist
            </div>
          </div>

          {/* Narrative Summary Paragraph */}
          <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed mb-6 max-w-xl">
            Over fifteen years turning individualized education plans into daily classroom breakthroughs — across early childhood to adolescence, multi-sensory strategies, and multidisciplinary therapy alignment in Dubai.
          </p>

          {/* Credentials Mono Tagline - Enlarged & Highlighted */}
          <div className="text-sm sm:text-base md:text-lg font-mono-code tracking-wider text-slate-200 font-bold mb-8 flex flex-wrap items-center gap-2.5 sm:gap-3 uppercase">
            <span className="text-white">PTRP®</span>
            <span className="text-amber-500 font-extrabold">·</span>
            <span className="text-white">RBT®</span>
            <span className="text-amber-500 font-extrabold">·</span>
            <span className="text-white">POSTGRADUATE SPED</span>
            <span className="text-amber-500 font-extrabold">·</span>
            <span className="text-slate-300">DUBAI, UAE</span>
          </div>

          {/* CTA Pill Buttons matching image */}
          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#experience"
              id="hero-view-experience-btn"
              className="px-8 py-3.5 rounded-full font-bold text-sm sm:text-base text-slate-950 bg-amber-500 hover:bg-amber-400 transition-all shadow-lg shadow-amber-500/20 active:scale-[0.98] inline-flex items-center gap-2 cursor-pointer group"
            >
              <span>View experience</span>
              <ArrowRight className="w-4 h-4 text-slate-950 group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href="#about"
              id="hero-about-me-btn"
              className="px-8 py-3.5 rounded-full font-medium text-sm sm:text-base text-white bg-[#0e1b33] hover:bg-[#162747] border border-slate-700/80 transition-all active:scale-[0.98] inline-flex items-center justify-center cursor-pointer"
            >
              About me
            </a>

            <button
              onClick={onOpenResume}
              id="hero-view-cv-btn"
              className="px-6 py-3.5 rounded-full font-medium text-xs sm:text-sm text-slate-300 hover:text-white border border-slate-700/50 hover:border-slate-500 transition-all cursor-pointer"
            >
              View Résumé
            </button>
          </div>
        </motion.div>

        {/* Right Column: Seamless Executive Portrait matching image */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="lg:col-span-5 flex items-center justify-center lg:justify-end z-10 w-full relative"
        >
          <ImmersivePhoto />
        </motion.div>

      </div>

      {/* Subtle Scroll Indicator */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-60 hover:opacity-100 transition-opacity">
        <a 
          href="#about" 
          aria-label="Scroll down"
          className="flex flex-col items-center text-[11px] font-mono-code text-slate-400 hover:text-amber-400 transition-colors"
        >
          <ChevronDown className="w-4 h-4 animate-bounce text-amber-500" />
        </a>
      </div>
    </section>
  );
};

