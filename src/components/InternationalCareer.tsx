import React from 'react';
import { motion } from 'motion/react';
import { Globe, ArrowRight, Sparkles, Send, ShieldCheck, HeartHandshake } from 'lucide-react';
import { INTERNATIONAL_CAREER_CONTENT } from '../data/portfolioData';

export const InternationalCareer: React.FC = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="p-8 sm:p-12 rounded-3xl glass border border-blue-500/30 blue-glow shadow-2xl relative overflow-hidden"
        >
          {/* Ambient Corner Aura */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/20 border border-blue-400/40 text-blue-300 text-xs font-mono-code font-bold uppercase mb-4">
              <Globe className="w-3.5 h-3.5 text-blue-400" />
              <span>International Career Horizon</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
              {INTERNATIONAL_CAREER_CONTENT.headline}
            </h2>

            <p className="text-base sm:text-lg text-slate-300 font-light leading-relaxed mb-8">
              {INTERNATIONAL_CAREER_CONTENT.subheading}
            </p>
          </div>

          {/* 3 Pillars */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {INTERNATIONAL_CAREER_CONTENT.pillars.map((pillar, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl glass glass-hover border border-white/10 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-blue-400 font-mono-code text-xs font-bold mb-3.5">
                    0{idx + 1}
                  </div>
                  <h3 className="text-sm font-bold text-white mb-2">
                    {pillar.title}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed font-light">
                    {pillar.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Row */}
          <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-xs text-slate-400 font-light">
              Welcoming inquiries for Special Education, Learning Support, and SEN leadership roles.
            </span>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 text-xs font-bold text-black bg-white hover:bg-slate-100 rounded-2xl transition-all shadow-lg active:scale-95 group cursor-pointer"
            >
              <Send className="w-4 h-4" />
              <span>Connect With Joy</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

        </motion.div>
      </div>
    </section>
  );
};
