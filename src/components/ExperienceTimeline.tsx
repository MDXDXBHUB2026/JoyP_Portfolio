import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Briefcase, 
  MapPin, 
  Calendar, 
  Sparkles, 
  Activity, 
  Building2, 
  GraduationCap, 
  Heart,
  ArrowRight,
  ShieldCheck
} from 'lucide-react';
import { CAREER_JOURNEY } from '../data/portfolioData';
import { StoryChapter } from './StoryChapter';

export const ExperienceTimeline: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'All' | 'Special Education' | 'Healthcare & Rehabilitation'>('All');

  const filteredRoles = activeFilter === 'All'
    ? CAREER_JOURNEY
    : CAREER_JOURNEY.filter(role => 
        activeFilter === 'Special Education' 
          ? (role.category === 'Special Education' || role.category === 'Classroom Support')
          : role.category === 'Healthcare & Rehabilitation'
      );

  return (
    <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-7xl mx-auto">
        
        {/* Story Chapter */}
        <StoryChapter
          number="CHAPTER 03"
          title="Building Support Around the Student"
          theme="Professional Experience & Interdisciplinary Evolution"
        />

        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 gap-6">
          <div>
            <span className="text-xs font-mono-code text-teal-400 uppercase tracking-wider block mb-2">
              Career Pathway & Institutional Practice
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-100 tracking-tight">
              Experience Journey
            </h2>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {(['All', 'Special Education', 'Healthcare & Rehabilitation'] as const).map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 rounded-2xl text-xs font-semibold transition-all cursor-pointer ${
                  activeFilter === filter
                    ? 'bg-white text-black shadow-lg shadow-white/10'
                    : 'glass glass-hover text-slate-300 border border-white/10'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Narrative Flow Banner (Visual Career Bridge) */}
        <div className="mb-14 p-6 rounded-3xl glass border border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs">
          <span className="font-mono-code uppercase tracking-wider text-blue-400 font-bold text-[11px] shrink-0">
            Professional Evolution:
          </span>
          <div className="flex flex-wrap items-center justify-center gap-2 text-slate-300">
            <span className="px-3 py-1.5 rounded-xl glass border border-white/10 text-slate-200 font-medium">
              Physical Therapy (1998)
            </span>
            <ArrowRight className="w-3.5 h-3.5 text-blue-400" />
            <span className="px-3 py-1.5 rounded-xl glass border border-white/10 text-slate-200 font-medium">
              Healthcare Practice (2002–2008)
            </span>
            <ArrowRight className="w-3.5 h-3.5 text-blue-400" />
            <span className="px-3 py-1.5 rounded-xl glass border border-white/10 text-slate-200 font-medium">
              Classroom Support (2008)
            </span>
            <ArrowRight className="w-3.5 h-3.5 text-blue-400" />
            <span className="px-3.5 py-1.5 rounded-xl bg-blue-500/20 text-blue-200 border border-blue-400/40 font-bold">
              Special Education Teacher (2010 – Present)
            </span>
          </div>
        </div>

        {/* Vertical Timeline */}
        <div className="relative pl-6 sm:pl-10 space-y-12 before:absolute before:left-2 sm:before:left-3.5 before:top-3 before:bottom-3 before:w-[2px] before:bg-gradient-to-b before:from-blue-400 via-purple-500/40 before:to-white/10">
          {filteredRoles.map((role, index) => {
            const isPresent = role.endYear === 'Present';

            return (
              <motion.div
                key={role.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="relative group"
                id={`timeline-item-${role.id}`}
              >
                {/* Timeline Dot Marker */}
                <div 
                  className={`absolute -left-[30px] sm:-left-[46px] top-2 w-5 h-5 rounded-full flex items-center justify-center transition-transform group-hover:scale-125 ${
                    isPresent
                      ? 'bg-blue-400 ring-4 ring-blue-400/20 shadow-lg shadow-blue-500/50'
                      : 'bg-[#07070a] border-2 border-white/40 group-hover:border-blue-400'
                  }`}
                >
                  <div className={`w-2 h-2 rounded-full ${isPresent ? 'bg-black animate-ping' : 'bg-blue-400'}`} />
                </div>

                {/* Role Content Card */}
                <div 
                  className={`p-7 sm:p-9 rounded-3xl transition-all duration-300 ${
                    isPresent
                      ? 'glass border border-blue-500/40 blue-glow shadow-2xl'
                      : 'glass glass-hover border border-white/10'
                  }`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className={`px-3 py-1 rounded-full text-[11px] font-mono-code font-bold uppercase tracking-wider ${
                        isPresent 
                          ? 'bg-blue-500/20 text-blue-300 border border-blue-400/40' 
                          : 'glass border border-white/10 text-slate-300'
                      }`}>
                        {role.category}
                      </span>
                      {isPresent && (
                        <span className="px-3 py-1 rounded-full text-[10px] font-bold bg-purple-500/20 text-purple-300 border border-purple-500/30 animate-pulse-subtle">
                          CURRENT ROLE (15+ YEARS)
                        </span>
                      )}
                    </div>

                    <div className="flex items-center gap-1.5 text-xs font-mono-code text-slate-400">
                      <Calendar className="w-3.5 h-3.5 text-blue-400" />
                      <span>{role.period}</span>
                    </div>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-blue-300 transition-colors">
                    {role.title}
                  </h3>

                  <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm text-slate-300 mt-1.5 mb-4 font-medium">
                    <span className="flex items-center gap-1.5 text-slate-200">
                      <Building2 className="w-4 h-4 text-purple-400" />
                      {role.organization}
                    </span>
                    <span className="text-white/20">•</span>
                    <span className="flex items-center gap-1 text-slate-400 font-light">
                      <MapPin className="w-3.5 h-3.5 text-blue-400" />
                      {role.location}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light mb-5">
                    {role.summary}
                  </p>

                  {/* Contributions list */}
                  <div className="pt-4 border-t border-white/10">
                    <h4 className="text-[11px] font-mono-code uppercase tracking-wider text-blue-400 mb-2.5 font-bold">
                      Key Contributions & Responsibilities:
                    </h4>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
                      {role.keyContributions.map((contrib, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs text-slate-300 font-light">
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0 mt-1.5" />
                          <span>{contrib}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
