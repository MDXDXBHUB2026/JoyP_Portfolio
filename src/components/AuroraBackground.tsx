import React from 'react';

export const AuroraBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
      {/* Light Multi-tone Navy Blue, Green, & Orange Ambient Base */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a1e3f] via-[#071d34] to-[#0d2238]" />

      {/* Aurora Mesh Gradient Blobs: Navy Blue + Emerald Green + Warm Orange + Cyan Blue Glow */}
      <div className="mesh-gradient">
        {/* Top-Left Cyan & Royal Blue Luminous Glow */}
        <div className="blob w-[750px] h-[750px] bg-[#0284C7] -top-[200px] -left-[120px] animate-aurora-1 opacity-55" />

        {/* Center-Top Fresh Emerald & Mint Green Aurora */}
        <div className="blob w-[600px] h-[600px] bg-[#10B981] top-[5%] left-[30%] animate-aurora-2 opacity-40" />

        {/* Top-Right Radiant Sunset Orange & Amber Bloom */}
        <div className="blob w-[650px] h-[650px] bg-[#F97316] -top-[100px] -right-[120px] animate-aurora-3 opacity-40" />

        {/* Mid-Left Lush Seafoam & Mint Green Aura */}
        <div className="blob w-[580px] h-[580px] bg-[#059669] top-[40%] -left-[140px] animate-aurora-3 opacity-35" />

        {/* Center Vivid Sky Blue & Azure Glow Core */}
        <div className="blob w-[700px] h-[700px] bg-[#38BDF8] top-[35%] right-[20%] animate-aurora-1 opacity-30" />

        {/* Mid-Right Warm Orange Aura Bloom */}
        <div className="blob w-[520px] h-[520px] bg-[#EA580C] top-[55%] -right-[100px] animate-aurora-2 opacity-35" />

        {/* Bottom-Left Deep Royal Navy Indigo Foundation */}
        <div className="blob w-[650px] h-[650px] bg-[#1E3A8A] -bottom-[150px] -left-[100px] animate-aurora-2 opacity-65" />

        {/* Bottom-Center Emerald Green Radiance */}
        <div className="blob w-[550px] h-[550px] bg-[#34D399] -bottom-[100px] left-[35%] animate-aurora-1 opacity-25" />

        {/* Bottom-Right Radiant Amber-Orange Bloom */}
        <div className="blob w-[600px] h-[600px] bg-[#FB923C] -bottom-[140px] -right-[100px] animate-aurora-3 opacity-40" />
      </div>

      {/* Subtle Cyan-Silver Precision Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-50" />

      {/* Light Atmospheric Vignette */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#061730]/25 via-transparent to-[#051428]/80 pointer-events-none" />
    </div>
  );
};


