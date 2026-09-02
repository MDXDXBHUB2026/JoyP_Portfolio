import React from 'react';

interface ImmersivePhotoProps {
  className?: string;
}

/*
 * LOCKED PORTRAIT SOURCE
 *
 * This is the only authorized portrait for Joy L. Perez.
 * Never replace this image with Unsplash, stock photography,
 * generated portraits, remote URLs, placeholders, or fallback people.
 */
const profilePhoto =
  `${import.meta.env.BASE_URL}assets/aistudio/joy-perez-profile-premium.png`;

export const ImmersivePhoto: React.FC<ImmersivePhotoProps> = ({
  className = '',
}) => {
  return (
    <div
      className={`relative w-full max-w-[320px] sm:max-w-[420px] lg:max-w-[540px] xl:max-w-[600px] flex items-center justify-center lg:justify-end ${className}`}
    >
      {/* Ambient glow */}
      <div className="absolute inset-0 -m-4 sm:-m-8 rounded-[40%] bg-gradient-to-br from-sky-500/15 via-emerald-400/10 to-amber-500/15 blur-2xl sm:blur-3xl pointer-events-none" />

      {/* Immersive portrait */}
      <div className="relative w-full aspect-[4/5] sm:aspect-[3/4] lg:aspect-[4/5] max-h-[460px] sm:max-h-[540px] lg:max-h-[640px] overflow-hidden rounded-2xl lg:rounded-none bg-[#070d1e]">
        <img
          src={profilePhoto}
          alt="Joy L. Perez"
          loading="eager"
          decoding="async"
          className="w-full h-full object-cover select-none"
          style={{
            objectPosition: 'center 18%',
          }}
        />

        {/* Bottom fade */}
        <div className="absolute inset-x-0 bottom-0 h-28 sm:h-36 lg:h-44 bg-gradient-to-t from-[#070d1e] via-[#070d1e]/85 to-transparent pointer-events-none" />

        {/* Left immersion */}
        <div className="absolute inset-y-0 left-0 w-24 sm:w-32 lg:w-40 bg-gradient-to-r from-[#070d1e] via-[#070d1e]/60 to-transparent pointer-events-none hidden lg:block" />

        {/* Right vignette */}
        <div className="absolute inset-y-0 right-0 w-12 sm:w-16 bg-gradient-to-l from-[#070d1e]/60 to-transparent pointer-events-none" />

        {/* Top blend */}
        <div className="absolute inset-x-0 top-0 h-12 sm:h-16 bg-gradient-to-b from-[#070d1e]/40 to-transparent pointer-events-none" />

        {/* Mobile cinematic vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,transparent_50%,rgba(7,13,30,0.15)_75%,rgba(7,13,30,0.55)_100%)] pointer-events-none lg:hidden" />
      </div>
    </div>
  );
};