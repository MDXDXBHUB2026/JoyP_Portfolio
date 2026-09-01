import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Sparkles, 
  MapPin, 
  Languages, 
  Award, 
  CheckCircle2, 
  GraduationCap, 
  Brain,
  ShieldCheck,
  FileText
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { ImmersivePhoto } from './ImmersivePhoto';

interface EducatorSpotlightProps {
  onOpenResume?: () => void;
}

export const EducatorSpotlight: React.FC<EducatorSpotlightProps> = ({ onOpenResume }) => {
  const [activeTab, setActiveTab] = useState<'profile' | 'credentials' | 'philosophy'>('profile');

  return (
    <div className="relative w-full max-w-5xl mx-auto my-6">
      {/* Immersive Ambient Glows behind the whole spotlight */}
      <div className="absolute -top-12 -left-12 w-80 h-80 bg-sky-500/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-12 -right-12 w-80 h-80 bg-emerald-500/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Main Container - Frameless Seamless Blend with deep backdrop */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
        
        {/* LEFT / CENTER: Authentic Immersive Photo with Aurora Blend */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-5 flex flex-col items-center justify-center relative"
        >
          <ImmersivePhoto />
        </motion.div>

        {/* RIGHT: Clear Photo Information & Synthesized Credentials Display */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:col-span-7 flex flex-col justify-between space-y-6"
        >
          {/* Header & Identity Card */}
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass border border-emerald-500/30 text-emerald-300 text-xs font-mono-code font-semibold uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
              <span>Authentic Educator Profile & Verification</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-tight mb-2">
              Joy L. Perez, <span className="text-gradient-aurora">PTRP, RBT®</span>
            </h3>

            <p className="text-sm font-mono-code text-sky-300 mb-4">
              Special Education Teacher • Licensed Physical Therapy Clinician
            </p>

            <p className="text-sm text-slate-300 font-light leading-relaxed">
              Shown above in daily practice: a compassionate, multidisciplinary special educator bridging clinical motor rehabilitation with specialized inclusive pedagogy to empower every child at their own rhythm.
            </p>
          </div>

          {/* Tab Navigation for Clear Photo Info */}
          <div className="flex items-center gap-2 border-b border-sky-500/20 pb-2">
            {[
              { id: 'profile', label: 'Photo & Role Details', icon: ShieldCheck },
              { id: 'credentials', label: '15-Year Practice', icon: Award },
              { id: 'philosophy', label: 'Clinical Synthesis', icon: Brain }
            ].map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                    isActive 
                      ? 'bg-sky-500/20 text-sky-200 border border-sky-400/40 shadow-sm blue-glow' 
                      : 'text-slate-400 hover:text-white glass'
                  }`}
                >
                  <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-sky-400' : 'text-slate-400'}`} />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>

          {/* Dynamic Tab Content */}
          <AnimatePresence mode="wait">
            {activeTab === 'profile' && (
              <motion.div
                key="profile"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1"
              >
                <div className="p-3.5 rounded-2xl glass border border-sky-500/20 bg-[#061834]/80">
                  <span className="text-[10px] uppercase font-mono-code text-slate-400 block mb-1">Current Base</span>
                  <div className="flex items-center gap-2 text-xs font-semibold text-white">
                    <MapPin className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>Dubai, United Arab Emirates</span>
                  </div>
                </div>

                <div className="p-3.5 rounded-2xl glass border border-sky-500/20 bg-[#061834]/80">
                  <span className="text-[10px] uppercase font-mono-code text-slate-400 block mb-1">Affiliation</span>
                  <div className="flex items-center gap-2 text-xs font-semibold text-white truncate">
                    <GraduationCap className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                    <span className="truncate">Shaikha Maitha Foundation</span>
                  </div>
                </div>

                <div className="p-3.5 rounded-2xl glass border border-sky-500/20 bg-[#061834]/80">
                  <span className="text-[10px] uppercase font-mono-code text-slate-400 block mb-1">Languages</span>
                  <div className="flex items-center gap-2 text-xs font-semibold text-white">
                    <Languages className="w-3.5 h-3.5 text-orange-400 shrink-0" />
                    <span>English & Tagalog</span>
                  </div>
                </div>

                <div className="p-3.5 rounded-2xl glass border border-sky-500/20 bg-[#061834]/80">
                  <span className="text-[10px] uppercase font-mono-code text-slate-400 block mb-1">Direct Contact</span>
                  <div className="flex items-center gap-2 text-xs font-semibold text-sky-200 truncate">
                    <span className="font-mono-code truncate">{PERSONAL_INFO.email}</span>
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === 'credentials' && (
              <motion.div
                key="credentials"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                className="space-y-2 pt-1"
              >
                <div className="flex items-center gap-2.5 p-3 rounded-2xl glass border border-emerald-500/25 bg-[#061834]/80 text-xs text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span><strong>15+ Consecutive Years</strong> teaching in Dubai Special Needs institutions (2010–Present)</span>
                </div>
                <div className="flex items-center gap-2.5 p-3 rounded-2xl glass border border-sky-500/25 bg-[#061834]/80 text-xs text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0" />
                  <span><strong>Registered Behavior Technician (RBT®)</strong> 40-Hour Applied Behavior Analysis certified</span>
                </div>
                <div className="flex items-center gap-2.5 p-3 rounded-2xl glass border border-orange-500/25 bg-[#061834]/80 text-xs text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-orange-400 shrink-0" />
                  <span><strong>Licensed Physical Therapy Clinician (PTRP)</strong> with deep motor & biomechanics expertise</span>
                </div>
              </motion.div>
            )}

            {activeTab === 'philosophy' && (
              <motion.div
                key="philosophy"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                className="p-4 rounded-2xl glass border border-sky-500/25 bg-[#061834]/90 text-xs text-slate-300 leading-relaxed font-light space-y-2"
              >
                <p>
                  “My foundational training in Physical Therapy transforms my special education classroom into an active, multi-sensory environment. Understanding how motor alignment, sensory integration, and posture affect cognitive attention allows me to design IEPs that genuinely empower non-verbal and neurodiverse learners.”
                </p>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Quick Action Link */}
          {onOpenResume && (
            <div className="pt-2">
              <button
                onClick={onOpenResume}
                className="inline-flex items-center gap-2 text-xs font-semibold text-sky-300 hover:text-white transition-colors cursor-pointer group"
              >
                <FileText className="w-3.5 h-3.5 text-emerald-400" />
                <span>View Full Executive CV with All Institutional Credentials</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </button>
            </div>
          )}

        </motion.div>

      </div>
    </div>
  );
};
