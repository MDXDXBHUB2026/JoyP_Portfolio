import React from 'react';
import { motion } from 'motion/react';
import { 
  Sparkles, 
  Activity, 
  HeartHandshake, 
  BrainCircuit, 
  Compass, 
  CheckCircle2, 
  ArrowRight,
  ShieldCheck
} from 'lucide-react';
import { CAREER_SNAPSHOTS, PERSONAL_INFO } from '../data/portfolioData';
import { StoryChapter } from './StoryChapter';

export const Introduction: React.FC = () => {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-7xl mx-auto">
        
        {/* Story Chapter 01 Badge */}
        <StoryChapter
          number="CHAPTER 01"
          title="Understanding the Learner"
          theme="Pedagogical Vision & Professional Synthesis"
        />

        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-16">
          <div className="lg:col-span-7">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-100 tracking-tight leading-tight">
              “Every learner deserves a path designed for them.”
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-teal-400 to-amber-400 rounded-full mt-5" />
          </div>

          <div className="lg:col-span-5">
            <p className="text-base sm:text-lg text-slate-300 font-light leading-relaxed">
              Joy is a dedicated Special Education professional with over a decade and a half of practice in Dubai, crafting supportive, inclusive, and tailored learning environments that honor each student’s pace and potential.
            </p>
          </div>
        </div>

        {/* Narrative Split: Clinical Foundations + Specialized Special Ed Practice */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          
          {/* Main Narrative Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-8 p-8 sm:p-10 rounded-3xl glass border border-white/10 relative overflow-hidden"
          >
            <div className="absolute -top-24 -right-24 w-60 h-60 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
            
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 flex items-center gap-2.5">
              <Sparkles className="w-5 h-5 text-blue-400" />
              <span>A Distinctive Interdisciplinary Background</span>
            </h3>

            <p className="text-slate-300 leading-relaxed mb-6 font-light">
              Prior to teaching as a full-time Special Education Teacher since September 2010 at the prestigious <strong className="text-white font-medium">Shaikha Maitha Bint Rashid Al Maktoum Foundation for Special Needs</strong> in Dubai, Joy developed rich professional experience spanning physical therapy, hospital healthcare, and specialized classroom support.
            </p>

            <p className="text-slate-300 leading-relaxed mb-6 font-light">
              This foundational clinical background gives her an exceptional, holistic perspective on child neurodevelopment, motor positioning, sensory regulation, and behavioral adaptation — ensuring educational interventions are grounded in both developmental science and genuine human empathy.
            </p>

            {/* Distinctive Combination Badges */}
            <div className="pt-4 border-t border-white/10">
              <span className="text-xs font-mono-code uppercase tracking-wider text-blue-400 block mb-3 font-semibold">
                Distinctive Professional Synthesis:
              </span>
              <div className="flex flex-wrap gap-2">
                {[
                  'Special Education',
                  'Physical Therapy & Biomechanics',
                  'Healthcare & Clinical Care',
                  'Child Development Support',
                  'Inclusive Classroom Environments',
                  'Positive Behavior Support',
                  'Multidisciplinary Team Collaboration'
                ].map((item, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl glass border border-white/10 text-slate-200 text-xs font-medium"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-400" />
                    <span>{item}</span>
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Current Institution Highlight Panel */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-4 p-8 rounded-3xl glass border border-purple-500/30 purple-glow flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-2 text-xs font-mono-code text-purple-400 uppercase tracking-wider mb-2 font-bold">
                <ShieldCheck className="w-4 h-4 text-purple-400" />
                <span>Primary UAE Affiliation</span>
              </div>
              <h4 className="text-lg font-bold text-white leading-snug mb-2">
                Shaikha Maitha Bint Rashid Al Maktoum Foundation for Special Needs
              </h4>
              <p className="text-xs text-purple-300/90 mb-4 font-mono-code">
                Dubai, UAE • Sept 2010 – Present
              </p>
              <p className="text-xs text-slate-300 leading-relaxed font-light">
                Continuous tenure as a Special Education Teacher delivering IEP design, adaptive technologies, multidisciplinary coordination, and personalized learning journeys.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-white/10">
              <a
                href="#experience"
                className="inline-flex items-center gap-2 text-xs font-semibold text-purple-300 hover:text-white group transition-colors"
              >
                <span>View career timeline & contributions</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </motion.div>
        </div>

        {/* 4 Professional Career Snapshot Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {CAREER_SNAPSHOTS.map((card, index) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -4 }}
              className="p-6 rounded-2xl glass glass-hover border border-white/10 transition-all group relative overflow-hidden"
            >
              <div className="text-[11px] font-mono-code font-bold tracking-wider uppercase text-blue-400 mb-1">
                {card.title}
              </div>
              <h4 className="text-sm font-semibold text-white group-hover:text-blue-200 transition-colors mb-2">
                {card.subtitle}
              </h4>
              <p className="text-xs text-slate-400 leading-relaxed font-light">
                {card.description}
              </p>

              {/* Accent corner line */}
              <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-blue-500/40 to-transparent group-hover:via-purple-400/80 transition-all" />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
