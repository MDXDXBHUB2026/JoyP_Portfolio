import React from 'react';

interface ImmersivePhotoProps {
  className?: string;
}

const profilePhoto = `${import.meta.env.BASE_URL}assets/aistudio/joy-perez-profile-premium.png`;

export const ImmersivePhoto: React.FC<ImmersivePhotoProps> = ({ className = '' }) => {
  return (
    <div
      className={`relative w-full max-w-[500px] lg:max-w-[560px] xl:max-w-[620px] flex items-center justify-center lg:justify-end ${className}`}
    >
      {/* Ambient glow behind the portrait for an immersive, borderless feel */}
      <div className="absolute -inset-8 rounded-[40%] bg-gradient-to-br from-sky-500/10 via-emerald-400/5 to-amber-500/10 blur-3xl pointer-events-none" />

      <div className="relative w-full aspect-[4/5] sm:aspect-[3/4] lg:aspect-[4/5] max-h-[640px] overflow-hidden">
        <img
          src={profilePhoto}
          alt="Joy L. Perez"
          loading="eager"
          decoding="async"
          fetchPriority="high"
          className="absolute inset-0 w-full h-full object-cover select-none"
          style={{ objectPosition: 'center 18%' }}
        />

        {/* Blend the portrait into the page instead of showing a hard rectangular frame */}
        <div className="absolute inset-x-0 bottom-0 h-[34%] bg-gradient-to-t from-[#070d1e] via-[#070d1e]/75 to-transparent pointer-events-none" />
        <div className="absolute inset-y-0 left-0 w-[24%] bg-gradient-to-r from-[#070d1e] via-[#070d1e]/45 to-transparent pointer-events-none hidden lg:block" />
        <div className="absolute inset-y-0 right-0 w-[10%] bg-gradient-to-l from-[#070d1e]/55 to-transparent pointer-events-none" />
        <div className="absolute inset-x-0 top-0 h-[9%] bg-gradient-to-b from-[#070d1e]/25 to-transparent pointer-events-none" />

        {/* Subtle cinematic vignette, kept light so facial detail remains crisp */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_52%_38%,transparent_48%,rgba(7,13,30,0.10)_72%,rgba(7,13,30,0.45)_100%)] pointer-events-none" />
      </div>
    </div>
  );
};
