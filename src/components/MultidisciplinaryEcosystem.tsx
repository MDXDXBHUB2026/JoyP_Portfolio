import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Heart, 
  UserCheck, 
  Users, 
  MessageSquare, 
  Activity, 
  Brain, 
  GraduationCap,
  Sparkles,
  Info,
  CheckCircle2
} from 'lucide-react';
import { ECOSYSTEM_NODES } from '../data/portfolioData';
import { EcosystemNode } from '../types';
import { StoryChapter } from './StoryChapter';

export const MultidisciplinaryEcosystem: React.FC = () => {
  const [selectedNodeId, setSelectedNodeId] = useState<string>('teacher');

  const selectedNode = ECOSYSTEM_NODES.find(n => n.id === selectedNodeId) || ECOSYSTEM_NODES[0];

  const getNodeIcon = (id: string) => {
    switch (id) {
      case 'student': return <Heart className="w-5 h-5 text-pink-400 fill-pink-400/30" />;
      case 'teacher': return <GraduationCap className="w-5 h-5 text-blue-400" />;
      case 'family': return <Users className="w-5 h-5 text-indigo-400" />;
      case 'speech-therapist': return <MessageSquare className="w-5 h-5 text-purple-400" />;
      case 'ot-therapist': return <Activity className="w-5 h-5 text-pink-400" />;
      case 'psychologist': return <Brain className="w-5 h-5 text-blue-400" />;
      case 'learning-support': return <UserCheck className="w-5 h-5 text-cyan-400" />;
      default: return <Sparkles className="w-5 h-5 text-blue-400" />;
    }
  };

  const surroundingNodes = ECOSYSTEM_NODES.filter(n => n.id !== 'student');

  return (
    <section id="ecosystem" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-7xl mx-auto">
        
        {/* Story Chapter */}
        <StoryChapter
          number="CHAPTER 03 • MULTIDISCIPLINARY CARE"
          title="The Support Ecosystem"
          theme="Holistic Coordination Around the Learner"
        />

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono-code text-blue-400 uppercase tracking-wider block mb-2 font-bold">
            Interdisciplinary Synergy
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            “Progress happens through collaboration.”
          </h2>
          <p className="text-slate-300 text-sm sm:text-base mt-4 font-light leading-relaxed">
            Joy bridges classroom instruction with clinical therapy — actively synchronizing strategies with speech pathologists, occupational therapists, psychologists, and families.
          </p>
        </div>

        {/* Interactive Network Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left / Center: Visual Circular Interactive Network */}
          <div className="lg:col-span-7 flex items-center justify-center p-4">
            <div className="relative w-full max-w-[460px] aspect-square flex items-center justify-center">
              
              {/* Outer Decorative Ring */}
              <div className="absolute inset-4 rounded-full border border-dashed border-white/10 animate-spin" style={{ animationDuration: '60s' }} />
              <div className="absolute inset-16 rounded-full border border-white/10" />

              {/* Central Node: STUDENT */}
              <button
                onClick={() => setSelectedNodeId('student')}
                className={`relative z-20 w-28 h-28 rounded-full flex flex-col items-center justify-center p-3 text-center transition-all duration-300 cursor-pointer ${
                  selectedNodeId === 'student'
                    ? 'glass border-2 border-pink-400 scale-105 shadow-2xl bg-white/10'
                    : 'glass border border-white/20 hover:scale-105'
                }`}
                id="ecosystem-node-student"
              >
                <Heart className="w-6 h-6 text-pink-400 fill-pink-400/40 mb-1 animate-pulse-subtle" />
                <span className="text-xs font-bold font-mono-code text-white">
                  STUDENT
                </span>
                <span className="text-[9px] text-slate-300 font-light">
                  Central Focus
                </span>
              </button>

              {/* Surrounding Nodes positioned in a circle */}
              {surroundingNodes.map((node, index) => {
                const total = surroundingNodes.length;
                const angle = (index * (360 / total) - 90) * (Math.PI / 180);
                const radius = 160; // distance in px from center
                const x = Math.cos(angle) * radius;
                const y = Math.sin(angle) * radius;
                const isSelected = selectedNodeId === node.id;

                return (
                  <div
                    key={node.id}
                    className="absolute z-20"
                    style={{ transform: `translate(${x}px, ${y}px)` }}
                  >
                    <button
                      onClick={() => setSelectedNodeId(node.id)}
                      className={`group flex flex-col items-center justify-center p-3 rounded-2xl transition-all duration-300 cursor-pointer ${
                        isSelected
                          ? 'glass border-2 border-blue-400 bg-white/10 shadow-xl shadow-blue-500/20 scale-110'
                          : 'glass glass-hover border border-white/10'
                      }`}
                      id={`ecosystem-node-${node.id}`}
                      aria-label={`Inspect ${node.role}`}
                    >
                      <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center shadow-inner">
                        {getNodeIcon(node.id)}
                      </div>
                      <span className="text-[10px] font-semibold text-slate-200 mt-1 max-w-[80px] text-center leading-tight">
                        {node.role.split('(')[0].trim()}
                      </span>
                    </button>
                  </div>
                );
              })}

              {/* Connecting lines SVG */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none z-10" viewBox="0 0 460 460">
                {surroundingNodes.map((node, index) => {
                  const total = surroundingNodes.length;
                  const angle = (index * (360 / total) - 90) * (Math.PI / 180);
                  const x = 230 + Math.cos(angle) * 160;
                  const y = 230 + Math.sin(angle) * 160;
                  const isSelected = selectedNodeId === node.id;

                  return (
                    <line
                      key={node.id}
                      x1="230"
                      y1="230"
                      x2={x}
                      y2={y}
                      stroke={isSelected ? '#3b82f6' : '#ffffff20'}
                      strokeWidth={isSelected ? '2' : '1'}
                      strokeDasharray={isSelected ? 'none' : '3 3'}
                      opacity={isSelected ? 0.9 : 0.4}
                      className="transition-all duration-300"
                    />
                  );
                })}
              </svg>
            </div>
          </div>

          {/* Right: Selected Node Breakdown Panel */}
          <div className="lg:col-span-5">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedNode.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="p-8 sm:p-10 rounded-3xl glass border border-white/15 shadow-2xl"
              >
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">
                    {getNodeIcon(selectedNode.id)}
                  </div>
                  <div>
                    <span className="text-[11px] font-mono-code uppercase tracking-wider text-blue-400 font-bold">
                      Collaborative Partner
                    </span>
                    <h3 className="text-xl font-bold text-white">
                      {selectedNode.role}
                    </h3>
                  </div>
                </div>

                <div className="space-y-4 text-sm font-light text-slate-300">
                  <div>
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1">
                      Role within Support Network:
                    </h4>
                    <p className="leading-relaxed text-xs sm:text-sm text-slate-200">
                      {selectedNode.description}
                    </p>
                  </div>

                  <div className="p-5 rounded-2xl glass border border-white/10">
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-blue-300 mb-1.5 flex items-center gap-1.5 font-bold">
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>How Joy Coordinates with This Partner:</span>
                    </h4>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      {selectedNode.howJoyCollaborates}
                    </p>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-slate-400">
                  <span>Click any node on the left to inspect partnership dynamics</span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
};
