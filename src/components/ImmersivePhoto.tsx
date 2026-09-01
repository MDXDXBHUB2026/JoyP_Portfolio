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
      className={`relative w-72 sm:w-80 h-96 sm:h-[430px] flex items-center justify-center ${className}`}
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
      <div className="absolute inset-0 rounded-full bg-gradient-to-b from-sky-400/30 via-emerald-400/25 to-orange-500/30 blur-2xl transform scale-95 pointer-events-none animate-pulse-subtle" />

      {/* Orbiting Celestial Accents (Frameless theme) */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-40 animate-spin-slow" viewBox="0 0 320 430">
        <ellipse cx="160" cy="215" rx="145" ry="180" fill="none" stroke="#38BDF8" strokeWidth="1" strokeDasharray="4 8" />
        <ellipse cx="160" cy="215" rx="155" ry="130" fill="none" stroke="#10B981" strokeWidth="0.8" strokeDasharray="3 6" opacity="0.6" />
        <circle cx="160" cy="35" r="3.5" fill="#F97316" />
        <circle cx="300" cy="215" r="2.5" fill="#38BDF8" />
        <circle cx="20" cy="215" r="2.5" fill="#10B981" />
      </svg>

      {/* PHOTO DISPLAY - Always Rendered with Frameless Radial Fade */}
      <div className="relative w-full h-full overflow-hidden flex items-center justify-center rounded-3xl [mask-image:radial-gradient(ellipse_at_center,black_65%,transparent_95%)]">
        <div className="relative w-full h-full">
          <img 
            src={photoUrl} 
            alt="Joy L. Perez - Special Education Teacher & Clinical Physical Therapist" 
            className="w-full h-full object-cover object-top filter brightness-105 contrast-105"
          />
          {/* Seamless Bottom and Edge Dark Navy Gradient Overlay to blend with #051329 */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#051329] via-transparent to-transparent opacity-80 pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#051329]/40 via-transparent to-transparent pointer-events-none" />
        </div>
      </div>

      {/* Floating Action Badge & Verified Credentials */}
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="absolute bottom-2 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-1.5"
      >
        <div className="px-4 py-1.5 rounded-full glass border border-sky-400/40 bg-[#051329]/95 text-center shadow-xl shadow-sky-950/80 blue-glow whitespace-nowrap">
          <div className="flex items-center gap-2 text-[11px] font-mono-code font-bold text-white">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>JOY L. PEREZ • PTRP, RBT®</span>
          </div>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-1.5">
          <button
            onClick={() => fileInputRef.current?.click()}
            title="Upload an alternative image file"
            className="px-2.5 py-1 rounded-full glass border border-white/20 bg-slate-900/90 text-slate-300 hover:text-white hover:border-sky-400 text-[10px] font-medium flex items-center gap-1 transition-all shadow-md cursor-pointer"
          >
            <Camera className="w-3 h-3 text-sky-400" />
            <span>Change Photo</span>
          </button>
          
          {photoUrl !== DEFAULT_PORTRAIT_DATA_URI && (
            <button
              onClick={handleReset}
              title="Reset to default portrait"
              className="px-2 py-1 rounded-full glass border border-white/20 bg-slate-900/90 text-slate-300 hover:text-white hover:border-orange-400 text-[10px] font-medium flex items-center gap-1 transition-all shadow-md cursor-pointer"
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
