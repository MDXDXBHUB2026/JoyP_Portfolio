import React, { useEffect, useState } from 'react';

export const CursorGlow: React.FC = () => {
  const [position, setPosition] = useState<{ x: number; y: number }>({ x: -100, y: -100 });
  const [isVisible, setIsVisible] = useState(false);
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    // Check if user prefers reduced motion or is on touch device
    const mediaQueryMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const mediaQueryTouch = window.matchMedia('(pointer: coarse)');

    if (mediaQueryMotion.matches || mediaQueryTouch.matches) {
      setIsTouch(true);
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isVisible]);

  if (isTouch || !isVisible) return null;

  return (
    <div
      className="fixed pointer-events-none z-30 transition-opacity duration-300 -translate-x-1/2 -translate-y-1/2 hidden md:block"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        width: '420px',
        height: '420px',
        background: 'radial-gradient(circle, rgba(56, 189, 248, 0.16) 0%, rgba(16, 185, 129, 0.08) 35%, rgba(249, 115, 22, 0.05) 55%, transparent 75%)',
        borderRadius: '50%',
      }}
      aria-hidden="true"
    />
  );
};
