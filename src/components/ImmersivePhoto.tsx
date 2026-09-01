import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { Camera, RefreshCw } from 'lucide-react';
import { DEFAULT_PORTRAIT_DATA_URI } from '../data/defaultPhoto';

interface ImmersivePhotoProps {
  className?: string;
}

export const ImmersivePhoto: React.FC<ImmersivePhotoProps> = ({ className = '' }) => {
  // Always default to the authentic portrait so public visitors see it instantly
  const [photoUrl, setPhotoUrl] = useState<string>(DEFAULT_PORTRAIT_DATA_URI);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Check if a custom photo was saved locally in this browser
  useEffect(() => {
    try {
      const saved = localStorage.getItem('JOY_PORTFOLIO_PHOTO');
      if (saved) {
        setPhotoUrl(saved);
      }
    } catch {
      // Fallback cleanly to default
    }
  }, []);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const base64 = event.target?.result as string;
        if (base64) {
          setPhotoUrl(base64);
          try {
            localStorage.setItem('JOY_PORTFOLIO_PHOTO', base64);
          } catch (err) {
            console.warn('Storage quota exceeded for localStorage image cache', err);
          }
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const file = e.dataTransfer.files?.[0];
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const base64 = event.target?.result as string;
        if (base64) {
          setPhotoUrl(base64);
          try {
            localStorage.setItem('JOY_PORTFOLIO_PHOTO', base64);
          } catch (err) {
            console.warn('Storage quota exceeded for localStorage image cache', err);
          }
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleReset = (e: React.MouseEvent) => {
    e.stopPropagation();
    try {
      localStorage.removeItem('JOY_PORTFOLIO_PHOTO');
    } catch {
      // ignore
    }
    setPhotoUrl(DEFAULT_PORTRAIT_DATA_URI);
  };

  return (
    <div 
      className={`relative w-full max-w-[340px] sm:max-w-[420px] lg:max-w-[480px] xl:max-w-[520px] aspect-[3/4] min-h-[460px] sm:min-h-[540px] lg:min-h-[600px] flex items-center justify-center ${className}`}
      onDragOver={(e) => e.preventDefault()}
      onDrop={handleDrop}
    >
      {/* Hidden File Input for uploading alternate photo */}
      <input 
        type="file" 
        ref={fileInputRef} 
        onChange={handleFileChange} 
        accept="image/*" 
        className="hidden" 
      />

      {/* Luminous Ambient Aurora Glow behind photo */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-b from-sky-400/35 via-emerald-400/25 to-orange-500/35 blur-3xl transform scale-105 pointer-events-none animate-pulse-subtle" />

      {/* Orbiting Celestial Accents (Frameless theme) */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-45 animate-spin-slow" viewBox="0 0 500 650">
        <ellipse cx="250" cy="325" rx="230" ry="290" fill="none" stroke="#38BDF8" strokeWidth="1.2" strokeDasharray="6 12" />
        <ellipse cx="250" cy="325" rx="240" ry="220" fill="none" stroke="#10B981" strokeWidth="1" strokeDasharray="4 8" opacity="0.6" />
        <circle cx="250" cy="40" r="4.5" fill="#F97316" />
        <circle cx="480" cy="325" r="3.5" fill="#38BDF8" />
        <circle cx="20" cy="325" r="3.5" fill="#10B981" />
      </svg>

      {/* PHOTO DISPLAY - Always Rendered with Frameless Radial Fade */}
      <div className="relative w-full h-full overflow-hidden flex items-center justify-center rounded-3xl [mask-image:radial-gradient(ellipse_at_center,black_62%,transparent_94%)]">
        <div className="relative w-full h-full">
          <img 
            src={photoUrl} 
            alt="Joy L. Perez - Special Education Teacher & Clinical Physical Therapist" 
            className="w-full h-full object-cover object-top filter brightness-105 contrast-105 select-none"
          />
          {/* Seamless Bottom and Edge Dark Navy Gradient Overlay to blend with #051329 */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#051329] via-[#051329]/20 to-transparent opacity-85 pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#051329]/40 via-transparent to-transparent pointer-events-none" />
        </div>
      </div>

      {/* Floating Action Badge & Verified Credentials */}
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="absolute bottom-4 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-2"
      >
        <div className="px-5 py-2 rounded-full glass border border-sky-400/50 bg-[#051329]/95 text-center shadow-2xl shadow-sky-950/90 blue-glow whitespace-nowrap">
          <div className="flex items-center gap-2 text-xs sm:text-sm font-mono-code font-bold text-white tracking-wide">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>JOY L. PEREZ • PTRP, RBT®</span>
          </div>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => fileInputRef.current?.click()}
            title="Upload an alternative image file"
            className="px-3 py-1 rounded-full glass border border-white/20 bg-slate-900/90 text-slate-300 hover:text-white hover:border-sky-400 text-[11px] font-medium flex items-center gap-1.5 transition-all shadow-md cursor-pointer"
          >
            <Camera className="w-3.5 h-3.5 text-sky-400" />
            <span>Change Photo</span>
          </button>
          
          {photoUrl !== DEFAULT_PORTRAIT_DATA_URI && (
            <button
              onClick={handleReset}
              title="Reset to default portrait"
              className="px-2.5 py-1 rounded-full glass border border-white/20 bg-slate-900/90 text-slate-300 hover:text-white hover:border-orange-400 text-[11px] font-medium flex items-center gap-1.5 transition-all shadow-md cursor-pointer"
            >
              <RefreshCw className="w-3 h-3 text-orange-400" />
              <span>Reset</span>
            </button>
          )}
        </div>
      </motion.div>
    </div>
  );
};
