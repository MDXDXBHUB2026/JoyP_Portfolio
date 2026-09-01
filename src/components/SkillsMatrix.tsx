import React from 'react';
import { motion } from 'motion/react';
import { 
  Sparkles, 
  Layers, 
  Cpu, 
  HeartHandshake, 
  Monitor, 
  Smile, 
  CheckCircle2 
} from 'lucide-react';
import { SKILLS_MATRIX } from '../data/portfolioData';

export const SkillsMatrix: React.FC = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-14 gap-4">
          <div>
            <span className="text-xs font-mono-code text-blue-400 uppercase tracking-wider block mb-2 font-bold">
              Competency Matrix
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Skills & Methodological Toolkit
            </h2>
          </div>
          <p className="text-slate-300 text-xs sm:text-sm max-w-md font-light">
            Interactive skill domains reflecting specialized pedagogy, adaptive support tools, and personal professional strengths.
          </p>
        </div>

        {/* 3 Skill Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          
          {/* Pillar 1: Pedagogy & IEP */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-7 rounded-3xl glass glass-hover border border-white/10 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-2 text-blue-300 font-mono-code text-xs uppercase tracking-wider mb-4 font-bold">
                <Layers className="w-4 h-4 text-blue-400" />
                <span>Pedagogy & IEP Design</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {SKILLS_MATRIX.pedagogyAndIEP.map((skill, i) => (
                  <span
                    key={i}
                    className="px-3.5 py-1.5 rounded-xl glass border border-white/10 text-slate-200 hover:border-blue-400/40 hover:text-white transition-all text-xs font-medium cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Pillar 2: Adaptive & Assistive */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="p-7 rounded-3xl glass glass-hover border border-white/10 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-2 text-purple-300 font-mono-code text-xs uppercase tracking-wider mb-4 font-bold">
                <Cpu className="w-4 h-4 text-purple-400" />
                <span>Adaptive & Assistive Tools</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {SKILLS_MATRIX.adaptiveAndAssistive.map((skill, i) => (
                  <span
                    key={i}
                    className="px-3.5 py-1.5 rounded-xl glass border border-white/10 text-slate-200 hover:border-purple-400/40 hover:text-white transition-all text-xs font-medium cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Pillar 3: Collaborative & Care */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="p-7 rounded-3xl glass glass-hover border border-white/10 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-2 text-pink-300 font-mono-code text-xs uppercase tracking-wider mb-4 font-bold">
                <HeartHandshake className="w-4 h-4 text-pink-400" />
                <span>Collaboration & Clinical Care</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {SKILLS_MATRIX.collaborativeAndCare.map((skill, i) => (
                  <span
                    key={i}
                    className="px-3.5 py-1.5 rounded-xl glass border border-white/10 text-slate-200 hover:border-pink-400/40 hover:text-white transition-all text-xs font-medium cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Digital Documentation & Personal Strengths Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Digital Software Documentation Tools */}
          <div className="lg:col-span-5 p-7 rounded-3xl glass border border-white/10">
            <div className="flex items-center gap-2 text-blue-300 font-mono-code text-xs uppercase tracking-wider mb-4 font-bold">
              <Monitor className="w-4 h-4 text-blue-400" />
              <span>Digital Documentation & Classroom Tools</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mt-3">
              {SKILLS_MATRIX.digitalTools.map((tool, idx) => (
                <div key={idx} className="p-3 rounded-2xl glass border border-white/10 flex flex-col">
                  <span className="text-xs font-bold text-white">{tool.name}</span>
                  <span className="text-[10px] text-slate-400 font-light">{tool.category}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Personal Strengths & Professional Character */}
          <div className="lg:col-span-7 p-7 rounded-3xl glass border border-white/10">
            <div className="flex items-center gap-2 text-purple-300 font-mono-code text-xs uppercase tracking-wider mb-4 font-bold">
              <Smile className="w-4 h-4 text-purple-400" />
              <span>Core Personal Strengths</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mt-3">
              {SKILLS_MATRIX.personalStrengths.map((strength, idx) => (
                <div key={idx} className="p-4 rounded-2xl glass border border-white/10 flex flex-col justify-between">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-white mb-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                    <span>{strength.title}</span>
                  </div>
                  <p className="text-[11px] text-slate-400 font-light leading-snug">
                    {strength.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
