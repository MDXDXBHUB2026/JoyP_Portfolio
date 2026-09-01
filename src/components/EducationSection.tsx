import React from 'react';
import { motion } from 'motion/react';
import { 
  GraduationCap, 
  Award, 
  BookOpen, 
  MapPin, 
  Calendar, 
  Sparkles,
  CheckCircle2
} from 'lucide-react';
import { EDUCATION_LIST } from '../data/portfolioData';
import { StoryChapter } from './StoryChapter';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.15,
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    }
  }
};

export const EducationSection: React.FC = () => {
  return (
    <section id="education" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-7xl mx-auto">
        
        {/* Story Chapter */}
        <StoryChapter
          number="CHAPTER 04"
          title="Measuring Progress & Academic Rigor"
          theme="Educational Background & Qualifications"
        />

        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-6"
        >
          <div>
            <span className="text-xs font-mono-code text-sky-400 uppercase tracking-wider block mb-2 font-bold">
              Academic Credentials
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              Education & Qualifications
            </h2>
          </div>
          <p className="text-slate-300 text-sm sm:text-base max-w-md font-light">
            Formal graduate pedagogy in Special Education supported by clinical foundations in physical therapy and teaching methods.
          </p>
        </motion.div>

        {/* Education Grid with Staggered Scroll Reveal */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {EDUCATION_LIST.map((edu) => (
            <motion.div
              key={edu.id}
              variants={cardVariants}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className={`p-8 sm:p-10 rounded-3xl transition-all duration-300 flex flex-col justify-between relative overflow-hidden ${
                edu.highlight
                  ? 'glass border border-sky-500/40 bg-[#061834]/90 blue-glow shadow-2xl md:col-span-2'
                  : 'glass glass-hover border border-sky-500/15 bg-[#061834]/70'
              }`}
              id={`edu-card-${edu.id}`}
            >
              {edu.highlight && (
                <div className="absolute top-0 right-0 px-4 py-1.5 bg-gradient-to-l from-sky-500 to-indigo-600 text-white text-[11px] font-mono-code font-bold uppercase tracking-wider rounded-bl-2xl shadow-md">
                  Special Education Postgraduate Highlight
                </div>
              )}

              <div>
                <div className="flex items-center gap-2 mb-3">
                  <span className={`px-3 py-1 rounded-full text-[10px] font-mono-code uppercase font-bold ${
                    edu.highlight
                      ? 'bg-sky-500/20 text-sky-300 border border-sky-400/30'
                      : 'glass border border-sky-500/20 text-slate-300'
                  }`}>
                    {edu.credentialType}
                  </span>
                  <span className="text-xs font-mono-code text-slate-400 flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-sky-400" />
                    {edu.graduationDate}
                  </span>
                </div>

                <h3 className={`font-bold text-white mb-2 ${
                  edu.highlight ? 'text-2xl sm:text-3xl' : 'text-xl'
                }`}>
                  {edu.degree}
                </h3>

                <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm text-slate-300 mb-4">
                  <span className="font-medium text-slate-200 flex items-center gap-1.5">
                    <GraduationCap className="w-4 h-4 text-purple-400" />
                    {edu.institution}
                  </span>
                  {edu.location && (
                    <>
                      <span className="text-white/20">•</span>
                      <span className="flex items-center gap-1 text-slate-400 font-light">
                        <MapPin className="w-3.5 h-3.5 text-sky-400" />
                        {edu.location}
                      </span>
                    </>
                  )}
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
                  {edu.details}
                </p>
              </div>

              {edu.highlight && (
                <div className="mt-6 pt-4 border-t border-sky-500/20 flex flex-wrap items-center gap-4 text-xs text-sky-200">
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span>Individualized Education Programs (IEPs)</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-purple-400" />
                    <span>Differentiated Teaching Strategies</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-pink-400" />
                    <span>Inclusive Classroom Pedagogy</span>
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};
