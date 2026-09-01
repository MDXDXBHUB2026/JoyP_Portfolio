import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Eye, 
  Target, 
  Sliders, 
  Users2, 
  CheckSquare2, 
  RefreshCw, 
  ChevronRight,
  CheckCircle2,
  Sparkles,
  ArrowDown
} from 'lucide-react';
import { APPROACH_STEPS } from '../data/portfolioData';
import { StoryChapter } from './StoryChapter';

export const LearningApproach: React.FC = () => {
  const [activeStepIndex, setActiveStepIndex] = useState<number>(0);

  const getStepIcon = (index: number) => {
    const props = { className: "w-5 h-5" };
    switch (index) {
      case 0: return <Eye {...props} className="text-blue-400" />;
      case 1: return <Target {...props} className="text-indigo-400" />;
      case 2: return <Sliders {...props} className="text-purple-400" />;
      case 3: return <Users2 {...props} className="text-pink-400" />;
      case 4: return <CheckSquare2 {...props} className="text-blue-400" />;
      case 5: return <RefreshCw {...props} className="text-purple-400" />;
      default: return <Sparkles {...props} className="text-blue-400" />;
    }
  };

  const activeStep = APPROACH_STEPS[activeStepIndex];

  return (
    <section id="approach" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-7xl mx-auto">
        
        {/* Story Chapter */}
        <StoryChapter
          number="CHAPTER 02 • CONTINUED"
          title="Instructional Framework"
          theme="Structured 6-Phase Pedagogical Cycle"
        />

        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-xs font-mono-code text-blue-400 uppercase tracking-wider block mb-2 font-bold">
              Iterative Pedagogical Process
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              An Individualized Approach to Learning
            </h2>
          </div>
          <p className="text-slate-300 text-sm sm:text-base max-w-md font-light">
            A responsive, cyclical methodology ensuring each student receives scaffolded support that adapts as they grow and achieve new milestones.
          </p>
        </div>

        {/* Desktop Connected 6-Step Pathway */}
        <div className="hidden lg:grid grid-cols-6 gap-3 mb-10 relative">
          {/* Background Connecting Line */}
          <div className="absolute top-7 left-8 right-8 h-[2px] bg-white/10 -z-0" />
          <div 
            className="absolute top-7 left-8 h-[2px] bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 transition-all duration-500 -z-0"
            style={{ width: `${(activeStepIndex / 5) * 88}%` }}
          />

          {APPROACH_STEPS.map((step, idx) => {
            const isActive = activeStepIndex === idx;
            const isPassed = activeStepIndex >= idx;

            return (
              <button
                key={step.step}
                onClick={() => setActiveStepIndex(idx)}
                className={`relative z-10 text-left p-5 rounded-2xl transition-all duration-300 focus:outline-none flex flex-col items-start cursor-pointer ${
                  isActive 
                    ? 'glass border-white/30 shadow-xl shadow-blue-500/10 bg-white/10' 
                    : 'glass glass-hover border-white/10'
                }`}
                id={`approach-step-btn-${step.step}`}
              >
                {/* Step Circle Marker */}
                <div 
                  className={`w-10 h-10 rounded-2xl flex items-center justify-center mb-3 transition-all ${
                    isActive 
                      ? 'bg-white text-black shadow-lg font-bold' 
                      : isPassed
                      ? 'bg-blue-500/20 text-blue-300 border border-blue-400/40'
                      : 'bg-white/5 text-slate-400 border border-white/10'
                  }`}
                >
                  <span className="text-xs font-mono-code font-bold">{step.step}</span>
                </div>

                <div className="text-xs font-bold text-white flex items-center gap-1.5 mb-1">
                  <span>{step.title}</span>
                </div>

                <p className="text-[11px] text-slate-400 font-light leading-snug line-clamp-2">
                  {step.summary}
                </p>
              </button>
            );
          })}
        </div>

        {/* Selected Step Deep Dive Card (Desktop) */}
        <motion.div
          key={activeStep.step}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          className="hidden lg:block p-8 sm:p-10 rounded-3xl glass border border-white/15 shadow-2xl relative overflow-hidden"
        >
          <div className="grid grid-cols-12 gap-8 items-center">
            <div className="col-span-7">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">
                  {getStepIcon(activeStepIndex)}
                </div>
                <div>
                  <span className="text-xs font-mono-code text-blue-400 font-bold tracking-wider">
                    PHASE {activeStep.step} OF 06
                  </span>
                  <h3 className="text-2xl font-bold text-white">
                    {activeStep.title} — {activeStep.summary}
                  </h3>
                </div>
              </div>

              <p className="text-slate-300 text-sm leading-relaxed font-light mb-4">
                {activeStep.detail}
              </p>
            </div>

            <div className="col-span-5 glass p-6 rounded-2xl border border-white/10">
              <h4 className="text-xs font-mono-code uppercase tracking-wider text-blue-300 mb-3 flex items-center gap-1.5 font-bold">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Key Pedagogical Actions</span>
              </h4>
              <ul className="space-y-2.5">
                {activeStep.keyActions.map((action, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-xs text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                    <span>{action}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Mobile Vertical Flow (Linear, High Legibility) */}
        <div className="lg:hidden space-y-4">
          {APPROACH_STEPS.map((step) => (
            <div
              key={step.step}
              className="p-6 rounded-2xl glass border border-white/10 relative"
            >
              <div className="flex items-start gap-3.5 mb-3">
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                  <span className="text-xs font-mono-code font-bold text-blue-300">{step.step}</span>
                </div>
                <div>
                  <h3 className="text-base font-bold text-white">
                    {step.title}
                  </h3>
                  <p className="text-xs text-blue-300 font-light mt-0.5">
                    {step.summary}
                  </p>
                </div>
              </div>

              <p className="text-xs text-slate-300 font-light leading-relaxed mb-3">
                {step.detail}
              </p>

              <div className="pt-3 border-t border-white/10">
                <span className="text-[10px] font-mono-code uppercase text-blue-400 block mb-1.5 font-bold">
                  Action Steps:
                </span>
                <ul className="space-y-1.5">
                  {step.keyActions.map((act, i) => (
                    <li key={i} className="flex items-center gap-2 text-[11px] text-slate-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                      <span>{act}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
