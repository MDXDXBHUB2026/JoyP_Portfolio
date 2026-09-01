import React from 'react';

export const AuroraBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
      {/* Background base */}
      <div className="absolute inset-0 bg-[#07070a]" />

      {/* Frosted Glass Mesh Gradient Blobs */}
      <div className="mesh-gradient">
        {/* Top-left Blue Blob */}
        <div className="blob w-[650px] h-[650px] bg-blue-600 -top-[200px] -left-[100px] animate-aurora-1 opacity-40" />

        {/* Bottom-right Purple Blob */}
        <div className="blob w-[550px] h-[550px] bg-purple-600 -bottom-[150px] -right-[100px] animate-aurora-2 opacity-40" />

        {/* Center-right Pink Blob */}
        <div className="blob w-[450px] h-[450px] bg-pink-600 top-[25%] right-[8%] animate-aurora-3 opacity-35" />

        {/* Mid-left Teal / Cyan Glow Blob */}
        <div className="blob w-[500px] h-[500px] bg-teal-500 top-[55%] -left-[100px] animate-aurora-1 opacity-30" />
      </div>

      {/* Subtle grid pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-70" />

      {/* Ambient Vignette for deep depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#07070a]/20 via-transparent to-[#07070a]/80 pointer-events-none" />
    </div>
  );
};

