import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  BookOpenCheck, 
  Calendar, 
  MapPin, 
  Sparkles, 
  Award, 
  ChevronDown, 
  ChevronUp, 
  Info,
  CheckCircle2
} from 'lucide-react';
import { PROFESSIONAL_TRAINING } from '../data/portfolioData';
import { TrainingItem } from '../types';
import { StoryChapter } from './StoryChapter';

export const ContinuousLearning: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [expandedSymposium, setExpandedSymposium] = useState<boolean>(true);

  const categories = ['All', 'Behavior & RBT', 'Autism & Interventions', 'Excellence & Awards', 'Rehabilitation & Care'];

  const filteredTraining = selectedCategory === 'All'
    ? PROFESSIONAL_TRAINING
    : PROFESSIONAL_TRAINING.filter(t => t.category === selectedCategory);

  return (
    <section id="training" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-7xl mx-auto">
        
        {/* Story Chapter */}
        <StoryChapter
          number="CHAPTER 05"
          title="Continuing to Learn"
          theme="Lifelong Professional Development & Specialized Workshops"
        />

        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 gap-6">
          <div>
            <span className="text-xs font-mono-code text-blue-400 uppercase tracking-wider block mb-2 font-bold">
              Continuous Professional Development
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              “Learning never stops.”
            </h2>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-2xl text-xs font-semibold transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-white text-black shadow-lg shadow-white/10'
                    : 'glass glass-hover text-slate-300 border border-white/10'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Training Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTraining.map((item, index) => {
            const hasWorkshops = item.workshops && item.workshops.length > 0;

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className={`p-7 sm:p-8 rounded-3xl glass glass-hover border border-white/10 transition-all flex flex-col justify-between ${
                  hasWorkshops ? 'md:col-span-2 lg:col-span-2' : ''
                }`}
                id={`training-card-${item.id}`}
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="px-3 py-1 rounded-full text-[10px] font-mono-code font-bold uppercase tracking-wider glass border border-white/10 text-blue-300">
                      {item.category}
                    </span>
                    <span className="text-xs font-mono-code text-slate-400 flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-blue-400" />
                      {item.year}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2">
                    {item.title}
                  </h3>

                  <div className="flex flex-wrap items-center gap-2 text-xs text-slate-300 mb-3">
                    <span className="font-semibold text-purple-300">
                      {item.organization}
                    </span>
                    {item.location && (
                      <>
                        <span className="text-white/20">•</span>
                        <span className="text-slate-400 flex items-center gap-1 font-light">
                          <MapPin className="w-3 h-3 text-blue-400" />
                          {item.location}
                        </span>
                      </>
                    )}
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed font-light mb-4">
                    {item.description}
                  </p>

                  {/* Verification Note (e.g. for RBT) */}
                  {item.note && (
                    <div className="p-3.5 rounded-2xl glass border border-blue-500/30 text-[11px] text-blue-200 font-light flex items-center gap-2.5 mb-3">
                      <Info className="w-4 h-4 text-blue-400 shrink-0" />
                      <span>{item.note}</span>
                    </div>
                  )}

                  {/* Workshop Tracks Accordion / List for Autism Symposium */}
                  {hasWorkshops && (
                    <div className="pt-3.5 border-t border-white/10">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-[11px] font-mono-code uppercase tracking-wider text-blue-300 font-bold flex items-center gap-1.5">
                          <Sparkles className="w-3.5 h-3.5" />
                          <span>Specialized Symposium Workshop Areas ({item.workshops?.length}):</span>
                        </span>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {item.workshops?.map((ws, i) => (
                          <div key={i} className="flex items-start gap-2 text-xs text-slate-300 p-2.5 rounded-xl glass border border-white/10">
                            <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                            <span>{ws}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                <div className="mt-5 pt-3.5 border-t border-white/10 flex items-center gap-1.5 text-[11px] text-slate-400 font-light">
                  <Award className="w-3.5 h-3.5 text-blue-400" />
                  <span>Verified Professional Development</span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
