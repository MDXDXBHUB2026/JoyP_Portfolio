import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Heart, Quote, Compass } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const PhilosophySection: React.FC = () => {
  return (
    <section className="py-28 px-4 sm:px-6 lg:px-8 relative z-10 overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute inset-0 max-w-5xl mx-auto flex items-center justify-center pointer-events-none" aria-hidden="true">
        <div className="w-[600px] h-[300px] bg-gradient-to-r from-blue-500/15 via-purple-500/15 to-pink-500/10 rounded-full blur-[120px] animate-aurora-2" />
      </div>

      <div className="max-w-5xl mx-auto relative">
        
        {/* Cinematic Quote Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="p-8 sm:p-14 rounded-3xl glass border border-white/20 purple-glow text-center relative shadow-2xl"
        >
          <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mx-auto mb-8 shadow-md">
            <Quote className="w-6 h-6 text-purple-400 fill-purple-400/30" />
          </div>

          <div className="text-xs font-mono-code uppercase tracking-widest text-blue-400 mb-4 font-bold">
            Educational Philosophy
          </div>

          <blockquote className="text-xl sm:text-2xl lg:text-3xl font-serif-editorial italic text-white leading-relaxed max-w-3xl mx-auto mb-8">
            “Teaching is not about asking every learner to follow the same path. It is about understanding the learner and helping create the path that allows them to progress.”
          </blockquote>

          <div className="w-16 h-[2px] bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-6" />

          <div className="text-sm font-semibold text-slate-200 tracking-tight">
            Different abilities. Individual journeys. Meaningful progress.
          </div>
          <p className="text-xs text-slate-400 mt-1 font-mono-code">
            Core Teaching Ethos • Joy L. Perez
          </p>
        </motion.div>

        {/* Why I Teach Sub-section */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-5">
            <span className="text-xs font-mono-code text-blue-400 uppercase tracking-wider block mb-2 font-bold">
              Human-Centered Purpose
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-snug">
              “Creating environments where every learner can participate, develop and belong.”
            </h3>
          </div>

          <div className="md:col-span-7 space-y-4 text-sm text-slate-300 font-light leading-relaxed">
            <p>
              Special Education requires more than instructional techniques — it demands genuine patience, observant listening, and the flexibility to adapt in real time to each student’s sensory, emotional, and cognitive states.
            </p>
            <p>
              By combining structured Individualized Education Programs (IEPs) with compassionate behavioral guidance and multidisciplinary alignment, Joy strives to build classroom spaces where differences are understood, achievements are celebrated, and every child feels empowered to grow.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
