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
  ShieldCheck,
  Award,
  Target
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
            <div className="w-24 h-1.5 bg-gradient-to-r from-sky-400 via-emerald-400 to-orange-400 rounded-full mt-5 shadow-sm shadow-sky-500/30" />
          </div>

          <div className="lg:col-span-5">
            <p className="text-base sm:text-lg text-slate-300 font-light leading-relaxed">
              I am a dedicated Special Education professional with over a decade and a half of continuous practice in Dubai, crafting supportive, inclusive, and tailored learning environments that honor each student’s pace and potential.
            </p>
          </div>
        </div>

        {/* Narrative Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 items-stretch">
          
          {/* Main Narrative Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-8 p-8 sm:p-10 rounded-3xl glass border border-sky-500/25 bg-[#061834]/85 relative overflow-hidden flex flex-col justify-between shadow-2xl shadow-sky-950/40"
          >
            <div className="absolute -top-24 -right-24 w-60 h-60 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />
            
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 flex items-center gap-2.5">
                <Sparkles className="w-5 h-5 text-sky-400" />
                <span>My Distinctive Interdisciplinary Background</span>
              </h3>

              <p className="text-slate-300 leading-relaxed mb-6 font-light">
                Serving as a full-time Special Education Teacher since September 2010 at the prestigious <strong className="text-white font-medium">Shaikha Maitha Bint Rashid Al Maktoum Foundation for Special Needs</strong> in Dubai, I have developed a multidisciplinary practice rooted in physical therapy, healthcare, and specialized classroom instruction.
              </p>

              <p className="text-slate-300 leading-relaxed mb-6 font-light">
                This foundational clinical background equips me with an exceptional, holistic perspective on child neurodevelopment, motor positioning, sensory regulation, and positive behavioral support — ensuring every educational intervention is backed by developmental science and authentic empathy.
              </p>
            </div>

            {/* Distinctive Combination Badges */}
            <div className="pt-6 border-t border-sky-500/20">
              <span className="text-xs font-mono-code uppercase tracking-wider text-sky-300 block mb-3 font-semibold">
                Core Competencies & Daily Practice:
              </span>
              <div className="flex flex-wrap gap-2">
                {[
                  'Individualized Education Programs (IEP)',
                  'Physical Therapy & Biomechanics',
                  'Sensory Integration & Regulation',
                  'Positive Behavior Support (RBT® Trained)',
                  'Multi-Sensory Curriculum Adaptation',
                  'Assistive Technology (AAC & PECS)',
                  'Multidisciplinary Team Leadership'
                ].map((item, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl glass border border-sky-500/20 text-slate-200 text-xs font-medium hover:border-emerald-400/50 transition-colors"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
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
            className="lg:col-span-4 p-8 rounded-3xl glass border border-orange-500/35 flex flex-col justify-between bg-[#061834]/90 shadow-2xl shadow-orange-500/10"
          >
            <div>
              <div className="flex items-center gap-2 text-xs font-mono-code text-orange-400 uppercase tracking-wider mb-2 font-bold">
                <ShieldCheck className="w-4 h-4 text-orange-400" />
                <span>Primary UAE Affiliation</span>
              </div>
              <h4 className="text-lg font-bold text-white leading-snug mb-2">
                Shaikha Maitha Bint Rashid Al Maktoum Foundation for Special Needs
              </h4>
              <p className="text-xs text-orange-300/90 mb-4 font-mono-code">
                Dubai, UAE • Sept 2010 – Present
              </p>
              <p className="text-xs text-slate-300 leading-relaxed font-light">
                Over 15 years of continuous service delivering individualized learning roadmaps, adaptive classroom technologies, and cross-functional team coordination for students with diverse developmental profiles.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800">
              <a
                href="#experience"
                className="inline-flex items-center gap-2 text-xs font-semibold text-orange-300 hover:text-white group transition-colors"
              >
                <span>View my career milestones & impact</span>
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
              className="p-6 rounded-2xl glass glass-hover border border-slate-700/60 transition-all group relative overflow-hidden"
            >
              <div className="text-[11px] font-mono-code font-bold tracking-wider uppercase text-orange-400 mb-1">
                {card.title}
              </div>
              <h4 className="text-sm font-semibold text-white group-hover:text-orange-200 transition-colors mb-2">
                {card.subtitle}
              </h4>
              <p className="text-xs text-slate-400 leading-relaxed font-light">
                {card.description}
              </p>

              {/* Accent corner line */}
              <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-orange-500/40 to-transparent group-hover:via-amber-400/80 transition-all" />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
