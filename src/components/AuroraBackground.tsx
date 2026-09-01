import React from 'react';

export const AuroraBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
      {/* Deep Dark Navy Blue Base */}
      <div className="absolute inset-0 bg-[#030A16]" />

      {/* Aurora Mesh Gradient Blobs: Dark Navy Blue + Silver Shade + Radiant Orange Glow */}
      <div className="mesh-gradient">
        {/* Top-Left Deep Royal Navy Aurora */}
        <div className="blob w-[700px] h-[700px] bg-[#0C2B5E] -top-[200px] -left-[100px] animate-aurora-1 opacity-70" />

        {/* Center-Top Radiant Orange Glow Aurora */}
        <div className="blob w-[550px] h-[550px] bg-[#EA580C] top-[10%] left-[25%] animate-aurora-2 opacity-30" />

        {/* Top-Right Luminous Silver Shade Aurora */}
        <div className="blob w-[600px] h-[600px] bg-[#94A3B8] -top-[100px] -right-[100px] animate-aurora-3 opacity-25" />

        {/* Mid-Left Striking Warm Orange Aura Blob */}
        <div className="blob w-[500px] h-[500px] bg-[#F97316] top-[45%] -left-[120px] animate-aurora-1 opacity-35" />

        {/* Center Deep Navy Indigo Core */}
        <div className="blob w-[650px] h-[650px] bg-[#0A1E3F] top-[40%] right-[15%] animate-aurora-2 opacity-60" />

        {/* Bottom-Right Intense Orange & Amber Radiant Bloom */}
        <div className="blob w-[580px] h-[580px] bg-[#FB923C] -bottom-[120px] -right-[80px] animate-aurora-3 opacity-30" />

        {/* Bottom-Left Shimmering Silver / Platinum Mist */}
        <div className="blob w-[500px] h-[500px] bg-[#CBD5E1] -bottom-[150px] left-[10%] animate-aurora-1 opacity-20" />
      </div>

      {/* Subtle silver precision grid pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-60" />

      {/* Ambient Depth Vignette for Navy Atmosphere */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#030A16]/30 via-transparent to-[#030A16]/90 pointer-events-none" />
    </div>
  );
};

