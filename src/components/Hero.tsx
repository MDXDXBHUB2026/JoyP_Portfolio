import React from 'react';
import { motion } from 'motion/react';
import { 
  ArrowRight, 
  MapPin, 
  Languages, 
  Sparkles, 
  ChevronDown, 
  BookOpen, 
  HeartHandshake,
  CheckCircle2,
  FileText
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { LearningConstellation } from './LearningConstellation';

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  return (
    <section 
      id="home" 
      className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        
        {/* Left Column: Authoritative Editorial Copy & CTAs */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="lg:col-span-7 flex flex-col items-start text-left z-20"
        >
          {/* Eyebrow badge in navy with bluish glow & emerald accent */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-sky-500/35 text-sky-200 text-xs font-bold tracking-widest uppercase mb-6 shadow-lg shadow-sky-500/20 blue-glow">
            <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse-subtle" />
            <span>SPECIAL EDUCATION • INCLUSIVE LEARNING • STUDENT DEVELOPMENT</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl xl:text-6xl font-extrabold text-white tracking-tight leading-[1.12] mb-6">
            Helping{' '}
            <span className="text-gradient-aurora">
              Every Learner
            </span>{' '}
            Discover Their{' '}
            <span className="relative inline-block text-white">
              Potential
              <span className="absolute -bottom-1 left-0 w-full h-[3.5px] bg-gradient-to-r from-sky-400 via-emerald-400 to-orange-400 rounded-full opacity-90 shadow-md shadow-sky-500/50" />
            </span>
            .
          </h1>

          {/* Supporting Text - First person and accomplishment driven */}
          <p className="text-lg sm:text-xl text-slate-300 font-light leading-relaxed mb-6 max-w-2xl">
            I am a Special Education Teacher with over 15 years of dedicated practice in Dubai, creating individualized, inclusive, and multi-sensory learning pathways that empower diverse learners to achieve meaningful milestones.
          </p>

          {/* Location & Language Highlights */}
          <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-slate-300 mb-8 pt-2">
            <div className="flex items-center gap-2 px-4 py-2 rounded-2xl glass border border-sky-500/25">
              <MapPin className="w-4 h-4 text-sky-400 shrink-0" />
              <span>Special Education Teacher • <strong className="text-white font-medium">Dubai, UAE</strong></span>
            </div>

            <div className="flex items-center gap-2 px-4 py-2 rounded-2xl glass border border-emerald-500/25">
              <Languages className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>English & Tagalog</span>
            </div>

            <div className="flex items-center gap-1.5 px-4 py-2 rounded-2xl glass bg-orange-500/15 text-orange-200 border border-orange-500/35 text-xs font-medium shadow-sm shadow-orange-500/10">
              <CheckCircle2 className="w-3.5 h-3.5 text-orange-400" />
              <span>15+ Years UAE Practice</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-3.5 w-full sm:w-auto">
            <a
              href="#about"
              id="hero-explore-journey-btn"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 text-sm font-bold text-white bg-gradient-to-r from-orange-500 via-orange-600 to-amber-500 hover:from-orange-400 hover:to-amber-400 rounded-2xl transition-all shadow-xl shadow-orange-500/30 hover:shadow-orange-500/45 active:scale-[0.98] group cursor-pointer border border-orange-400/30"
            >
              <span>Explore My Journey</span>
              <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href="#experience"
              id="hero-experience-btn"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-medium text-slate-200 hover:text-white glass glass-hover rounded-2xl transition-all active:scale-[0.98] border border-sky-500/25 hover:border-sky-400 cursor-pointer"
            >
              <BookOpen className="w-4 h-4 text-sky-400" />
              <span>Professional Experience</span>
            </a>

            <button
              onClick={onOpenResume}
              id="hero-view-cv-btn"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-medium text-slate-200 hover:text-white glass glass-hover rounded-2xl transition-all border border-sky-500/25 hover:border-emerald-400 cursor-pointer"
            >
              <FileText className="w-4 h-4 text-emerald-400" />
              <span>View Résumé</span>
            </button>
          </div>
        </motion.div>

        {/* Right Column: Educational Learning Constellation */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="lg:col-span-5 flex flex-col items-center justify-center py-6 z-10 w-full"
        >
          <LearningConstellation />
        </motion.div>

      </div>

      {/* Animated Scroll Indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-70 hover:opacity-100 transition-opacity">
        <a 
          href="#about" 
          aria-label="Scroll down to About section"
          className="flex flex-col items-center text-[11px] font-mono-code text-slate-400 hover:text-orange-300 transition-colors"
        >
          <span className="mb-1">Scroll to explore</span>
          <ChevronDown className="w-4 h-4 animate-bounce text-orange-400" />
        </a>
      </div>
    </section>
  );
};
