import React from 'react';

interface ImmersivePhotoProps {
  className?: string;
}

const profilePhoto = `${import.meta.env.BASE_URL}joy-perez.jpg`;

export const ImmersivePhoto: React.FC<ImmersivePhotoProps> = ({ className = '' }) => {
  return (
    <div className={`relative w-full max-w-[480px] lg:max-w-[540px] xl:max-w-[600px] flex items-center justify-center lg:justify-end ${className}`}>
      {/* Studio Ambient Glow */}
      <div className="absolute inset-0 bg-radial from-amber-500/10 via-sky-500/5 to-transparent blur-3xl pointer-events-none -z-10" />

      {/* Seamless Studio Portrait Container without harsh borders */}
      <div className="relative w-full aspect-[4/5] sm:aspect-[3/4] lg:aspect-[4/5] max-h-[620px] overflow-hidden">
        <img
          src={profilePhoto}
          alt="Joy L. Perez"
          loading="eager"
          decoding="async"
          className="w-full h-full object-cover object-top filter brightness-105 contrast-105 select-none"
        />

        {/* Studio Edge Blending Gradients matching reference image */}
        {/* Bottom Fade to dark background */}
        <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-[#070d1e] via-[#070d1e]/80 to-transparent pointer-events-none" />
        
        {/* Left Edge Fade into navy content area */}
        <div className="absolute inset-y-0 left-0 w-36 bg-gradient-to-r from-[#070d1e] via-[#070d1e]/60 to-transparent pointer-events-none hidden lg:block" />
        
        {/* Right Edge Soft Vignette */}
        <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-[#070d1e]/50 to-transparent pointer-events-none" />

        {/* Top Edge subtle blend */}
        <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-[#070d1e]/40 to-transparent pointer-events-none" />
      </div>
    </div>
  );
};

