import React from 'react';
import { motion } from 'motion/react';
import { 
  Building2, 
  MapPin, 
  Calendar, 
  FileText, 
  Layers, 
  Cpu, 
  TrendingUp, 
  Users2, 
  Smile, 
  Sparkles,
  ShieldCheck
} from 'lucide-react';
import { CAREER_JOURNEY } from '../data/portfolioData';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.2,
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    }
  }
};

export const FeaturedExperience: React.FC = () => {
  const featuredRole = CAREER_JOURNEY.find(r => r.isFeatured);
  if (!featuredRole) return null;

  const capabilityIcons = [
    <FileText key="1" className="w-5 h-5 text-sky-400" />,
    <Layers key="2" className="w-5 h-5 text-indigo-400" />,
    <Cpu key="3" className="w-5 h-5 text-purple-400" />,
    <TrendingUp key="4" className="w-5 h-5 text-pink-400" />,
    <Users2 key="5" className="w-5 h-5 text-sky-400" />,
    <Smile key="6" className="w-5 h-5 text-purple-400" />
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="p-8 sm:p-12 rounded-3xl glass border border-purple-500/30 bg-[#061834]/85 purple-glow shadow-2xl relative overflow-hidden"
        >
          {/* Header */}
          <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 pb-8 border-b border-white/10">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/20 border border-purple-400/40 text-purple-300 text-xs font-mono-code font-bold uppercase mb-3">
                <ShieldCheck className="w-4 h-4 text-purple-400" />
                <span>Featured Institutional Practice — 15+ Years</span>
              </div>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
                {featuredRole.title}
              </h3>
              <div className="flex flex-wrap items-center gap-3 text-sm text-slate-300 mt-2">
                <span className="font-semibold text-white flex items-center gap-1.5">
                  <Building2 className="w-4 h-4 text-purple-400" />
                  {featuredRole.organization}
                </span>
                <span className="text-white/20">•</span>
                <span className="flex items-center gap-1 text-slate-300">
                  <MapPin className="w-3.5 h-3.5 text-sky-400" />
                  {featuredRole.location}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2 px-4 py-2 rounded-2xl glass border border-sky-500/20 text-xs font-mono-code text-sky-300 self-start">
              <Calendar className="w-4 h-4 text-sky-400" />
              <span>September 2010 – Present</span>
            </div>
          </div>

          {/* 6 Capability Focus Areas with Staggered Scroll Reveal */}
          <div className="mt-8">
            <h4 className="text-xs font-mono-code uppercase tracking-wider text-sky-400 mb-6 flex items-center gap-2 font-bold">
              <Sparkles className="w-4 h-4 text-sky-400" />
              <span>Core Operational Pillars at Shaikha Maitha Foundation</span>
            </h4>

            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {featuredRole.capabilities?.map((cap, i) => (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  className="p-6 rounded-2xl glass glass-hover border border-sky-500/20 bg-[#082042]/70 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-sky-500/10 border border-sky-400/25 flex items-center justify-center mb-4">
                      {capabilityIcons[i % capabilityIcons.length]}
                    </div>
                    <h5 className="text-sm font-bold text-white mb-2">
                      {cap.title}
                    </h5>
                    <p className="text-xs text-slate-400 leading-relaxed font-light">
                      {cap.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

        </motion.div>
      </div>
    </section>
  );
};
