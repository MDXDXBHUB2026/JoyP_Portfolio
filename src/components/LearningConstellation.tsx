import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Sparkles, 
  Heart, 
  MessageSquare, 
  UserCheck, 
  Smile, 
  Compass, 
  TrendingUp,
  Info
} from 'lucide-react';
import { CONSTELLATION_NODES } from '../data/portfolioData';
import { ConstellationNode } from '../types';

export const LearningConstellation: React.FC = () => {
  const [activeNodeId, setActiveNodeId] = useState<string | null>(null);

  const getIcon = (id: string) => {
    switch (id) {
      case 'potential':
        return <Sparkles className="w-4 h-4 text-orange-300" />;
      case 'communication':
        return <MessageSquare className="w-4 h-4 text-slate-200" />;
      case 'independence':
        return <UserCheck className="w-4 h-4 text-amber-400" />;
      case 'confidence':
        return <Smile className="w-4 h-4 text-slate-300" />;
      case 'participation':
        return <Compass className="w-4 h-4 text-orange-400" />;
      case 'growth':
        return <TrendingUp className="w-4 h-4 text-slate-100" />;
      default:
        return <Sparkles className="w-4 h-4 text-orange-300" />;
    }
  };

  const activeNode = CONSTELLATION_NODES.find((n) => n.id === activeNodeId);

  return (
    <div className="relative w-full max-w-[540px] aspect-square flex items-center justify-center select-none" id="learning-constellation-container">
      {/* Outer ambient decorative rings with subtle silver/navy sheen */}
      <div className="absolute inset-0 rounded-full border border-slate-700/40 animate-spin" style={{ animationDuration: '60s' }} />
      <div className="absolute inset-8 rounded-full border border-dashed border-slate-600/30 animate-spin" style={{ animationDuration: '40s', animationDirection: 'reverse' }} />
      <div className="absolute inset-20 rounded-full border border-orange-500/20 animate-pulse-subtle" />

      {/* SVG Connecting Web Lines */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none z-10" viewBox="0 0 400 400">
        <defs>
          <radialGradient id="centerGlowGrad" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#FB923C" stopOpacity="0.35" />
            <stop offset="45%" stopColor="#0B254E" stopOpacity="0.4" />
            <stop offset="100%" stopColor="transparent" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Central glow area */}
        <circle cx="200" cy="200" r="85" fill="url(#centerGlowGrad)" />

        {/* Lines between center (200,200) and each orbital node */}
        {CONSTELLATION_NODES.map((node) => {
          const rad = (node.angle * Math.PI) / 180;
          const x = 200 + Math.cos(rad) * 140;
          const y = 200 + Math.sin(rad) * 140;
          const isHighlighted = activeNodeId === node.id;
          const isDimmed = activeNodeId !== null && !isHighlighted;

          return (
            <g key={node.id}>
              {/* Primary connector line */}
              <line
                x1="200"
                y1="200"
                x2={x}
                y2={y}
                stroke={isHighlighted ? node.color : '#94a3b830'}
                strokeWidth={isHighlighted ? '2' : '1'}
                strokeDasharray={isHighlighted ? 'none' : '3 3'}
                className="transition-all duration-300"
                opacity={isDimmed ? 0.2 : isHighlighted ? 0.95 : 0.45}
              />

              {/* Pulsing beacon on line when active */}
              {isHighlighted && (
                <circle
                  cx={(200 + x) / 2}
                  cy={(200 + y) / 2}
                  r="3.5"
                  fill={node.color}
                  className="animate-ping"
                />
              )}
            </g>
          );
        })}

        {/* Orbit interconnecting polygon lines */}
        {CONSTELLATION_NODES.map((node, index) => {
          const nextNode = CONSTELLATION_NODES[(index + 1) % CONSTELLATION_NODES.length];
          const rad1 = (node.angle * Math.PI) / 180;
          const rad2 = (nextNode.angle * Math.PI) / 180;
          const x1 = 200 + Math.cos(rad1) * 140;
          const y1 = 200 + Math.sin(rad1) * 140;
          const x2 = 200 + Math.cos(rad2) * 140;
          const y2 = 200 + Math.sin(rad2) * 140;

          const isConnectedToActive = activeNodeId === node.id || activeNodeId === nextNode.id;

          return (
            <line
              key={`ring-${node.id}`}
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              stroke={isConnectedToActive ? '#FB923C' : '#94a3b820'}
              strokeWidth="1"
              strokeDasharray="2 4"
              opacity={activeNodeId ? (isConnectedToActive ? 0.8 : 0.15) : 0.35}
              className="transition-all duration-300"
            />
          );
        })}
      </svg>

      {/* Central Node: "Every Learner" */}
      <div className="relative z-20 flex flex-col items-center justify-center p-4 rounded-full w-28 h-28 glass border border-orange-500/40 text-center shadow-2xl bg-[#081832]/80 backdrop-blur-xl shadow-orange-500/10">
        <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-orange-500 to-amber-400 text-white flex items-center justify-center mb-1 shadow-md shadow-orange-500/30">
          <Heart className="w-4 h-4 text-white fill-white" />
        </div>
        <span className="text-[11px] uppercase tracking-wider font-mono-code font-bold text-white">
          Every Learner
        </span>
        <span className="text-[9px] text-orange-200 font-light mt-0.5 leading-tight">
          Individual Core
        </span>
      </div>

      {/* Orbiting Interactive Nodes */}
      {CONSTELLATION_NODES.map((node) => {
        const rad = (node.angle * Math.PI) / 180;
        const xOffset = Math.cos(rad) * 140;
        const yOffset = Math.sin(rad) * 140;
        const isSelected = activeNodeId === node.id;

        return (
          <div
            key={node.id}
            id={`constellation-node-${node.id}`}
            style={{
              transform: `translate(${xOffset}px, ${yOffset}px)`,
            }}
            className="absolute z-20"
            onMouseEnter={() => setActiveNodeId(node.id)}
            onMouseLeave={() => setActiveNodeId(null)}
            onClick={() => setActiveNodeId(activeNodeId === node.id ? null : node.id)}
          >
            <motion.button
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.95 }}
              className={`group flex items-center justify-center w-12 h-12 rounded-2xl transition-all duration-300 shadow-lg cursor-pointer ${
                isSelected
                  ? 'glass border-2 bg-orange-500/15 shadow-orange-500/30'
                  : 'glass glass-hover border border-slate-700/60'
              }`}
              style={{
                borderColor: isSelected ? node.color : undefined,
                boxShadow: isSelected ? `0 0 20px ${node.color}40` : undefined,
              }}
              aria-label={`Learning pillar: ${node.title} - ${node.subtitle}`}
            >
              {getIcon(node.id)}
            </motion.button>

            {/* Static Node Title Badge */}
            <div
              className={`absolute top-full left-1/2 -translate-x-1/2 mt-1.5 whitespace-nowrap px-2.5 py-0.5 rounded-full text-[10px] font-semibold tracking-wide transition-all duration-200 pointer-events-none ${
                isSelected
                  ? 'bg-gradient-to-r from-orange-500 to-amber-500 text-white font-bold shadow-md'
                  : 'glass text-slate-300 group-hover:text-white border border-slate-700/60'
              }`}
            >
              {node.title}
            </div>
          </div>
        );
      })}

      {/* Floating Active Node Context Card (Bottom / Overlay) */}
      <AnimatePresence>
        {activeNode && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute -bottom-16 sm:-bottom-12 z-30 max-w-[340px] p-4 rounded-2xl glass border border-slate-700/80 text-left shadow-2xl bg-[#030A16]/95 backdrop-blur-2xl"
          >
            <div className="flex items-start gap-2.5">
              <div
                className="w-8 h-8 rounded-xl flex items-center justify-center shrink-0 mt-0.5"
                style={{ backgroundColor: `${activeNode.color}20`, border: `1px solid ${activeNode.color}50` }}
              >
                {getIcon(activeNode.id)}
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h4 className="text-xs font-bold" style={{ color: activeNode.color }}>
                    {activeNode.title}
                  </h4>
                  <span className="text-[10px] font-mono-code text-slate-400">
                    {activeNode.subtitle}
                  </span>
                </div>
                <p className="text-[11px] text-slate-300 mt-1 leading-relaxed">
                  {activeNode.description}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile / Default Helper Hint */}
      {!activeNode && (
        <div className="absolute -bottom-10 z-20 text-[11px] text-slate-400 font-light flex items-center gap-1.5 opacity-75">
          <Info className="w-3.5 h-3.5 text-orange-400" />
          <span>Tap or hover learning nodes to explore educational pillars</span>
        </div>
      )}
    </div>
  );
};
