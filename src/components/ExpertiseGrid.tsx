import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  FileText, 
  Layers, 
  Cpu, 
  TrendingUp, 
  LayoutGrid, 
  Users, 
  Network, 
  HeartHandshake,
  ArrowUpRight,
  X,
  CheckCircle2,
  Sparkles
} from 'lucide-react';
import { CORE_CAPABILITIES } from '../data/portfolioData';
import { CapabilityItem } from '../types';
import { StoryChapter } from './StoryChapter';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
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

export const ExpertiseGrid: React.FC = () => {
  const [selectedCapability, setSelectedCapability] = useState<CapabilityItem | null>(null);

  const getIcon = (name: string) => {
    const props = { className: "w-5 h-5 text-sky-400 group-hover:text-white transition-colors" };
    switch (name) {
      case 'FileText': return <FileText {...props} />;
      case 'Layers': return <Layers {...props} />;
      case 'Cpu': return <Cpu {...props} />;
      case 'TrendingUp': return <TrendingUp {...props} />;
      case 'LayoutGrid': return <LayoutGrid {...props} />;
      case 'Users': return <Users {...props} />;
      case 'Network': return <Network {...props} />;
      case 'HeartHandshake': return <HeartHandshake {...props} />;
      default: return <Sparkles {...props} />;
    }
  };

  return (
    <section id="expertise" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-7xl mx-auto">
        
        {/* Story Chapter Marker */}
        <StoryChapter
          number="CHAPTER 02"
          title="Individualizing the Journey"
          theme="Core Capabilities & Special Education Methods"
        />

        {/* Section Heading with Intersection Observer */}
        <motion.div 
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6"
        >
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Core Professional Capabilities
            </h2>
            <p className="text-slate-300 text-sm sm:text-base mt-2 max-w-2xl font-light">
              Demonstrated competencies spanning individualized instruction, adaptive learning tools, student assessment, and multidisciplinary coordination.
            </p>
          </div>

          <span className="text-xs font-mono-code text-sky-400 px-4 py-1.5 rounded-full glass border border-sky-500/20 self-start md:self-auto font-medium">
            8 Core Pillars of Practice
          </span>
        </motion.div>

        {/* 8-Card Grid with Staggered Intersection Observer */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {CORE_CAPABILITIES.map((item) => (
            <motion.div
              key={item.id}
              variants={cardVariants}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              onClick={() => setSelectedCapability(item)}
              className="p-7 rounded-3xl glass glass-hover border border-sky-500/20 bg-[#061834]/80 transition-all duration-300 group cursor-pointer flex flex-col justify-between relative overflow-hidden"
              id={`capability-card-${item.id}`}
            >
              {/* Card top */}
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-sky-500/10 border border-sky-400/25 flex items-center justify-center group-hover:bg-sky-500/25 group-hover:border-sky-400/50 transition-all shadow-inner">
                    {getIcon(item.iconName)}
                  </div>
                  <span className="text-[10px] font-mono-code text-slate-300 px-2.5 py-1 rounded-full glass border border-sky-500/20">
                    {item.tag}
                  </span>
                </div>

                <h3 className="text-base font-bold text-white group-hover:text-sky-300 transition-colors mb-2.5 leading-snug">
                  {item.title}
                </h3>

                <p className="text-xs text-slate-400 leading-relaxed font-light line-clamp-3">
                  {item.shortDesc}
                </p>
              </div>

              {/* Card footer CTA */}
              <div className="mt-6 pt-3 border-t border-sky-500/15 flex items-center justify-between text-xs text-sky-400 group-hover:text-white transition-colors">
                <span className="font-semibold">Explore Methodology</span>
                <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>

              {/* Bottom Subtle Shimmer line */}
              <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-sky-500/0 to-transparent group-hover:via-sky-400/80 transition-all duration-500" />
            </motion.div>
          ))}
        </motion.div>

      </div>

      {/* Detail Modal for Capability */}
      <AnimatePresence>
        {selectedCapability && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-2xl">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.25 }}
              className="relative w-full max-w-xl p-8 rounded-3xl glass border border-white/15 shadow-2xl bg-[#07070a]/90 backdrop-blur-2xl"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedCapability(null)}
                className="absolute top-6 right-6 p-2 rounded-xl text-slate-400 hover:text-white glass glass-hover border border-white/10 transition-colors"
                aria-label="Close details"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">
                  {getIcon(selectedCapability.iconName)}
                </div>
                <div>
                  <span className="text-[11px] font-mono-code uppercase tracking-wider text-blue-400 font-semibold">
                    {selectedCapability.tag}
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold text-white">
                    {selectedCapability.title}
                  </h3>
                </div>
              </div>

              <div className="space-y-4 text-sm text-slate-300 font-light mt-4">
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1">
                    Capability Overview
                  </h4>
                  <p className="leading-relaxed text-slate-200">{selectedCapability.fullDesc}</p>
                </div>

                <div className="p-5 rounded-2xl glass border border-white/10">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-blue-300 mb-1.5 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>In-Classroom Application</span>
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed font-light">
                    {selectedCapability.practicalApplication}
                  </p>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-white/10 flex justify-end">
                <button
                  onClick={() => setSelectedCapability(null)}
                  className="px-5 py-2.5 text-xs font-bold text-black bg-white hover:bg-slate-100 rounded-xl transition-all shadow-lg"
                >
                  Close Overview
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
