import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { Camera, Upload, Sparkles, Image as ImageIcon, Check } from 'lucide-react';

interface ImmersivePhotoProps {
  className?: string;
}

export const ImmersivePhoto: React.FC<ImmersivePhotoProps> = ({ className = '' }) => {
  const [photoUrl, setPhotoUrl] = useState<string | null>(null);
  const [isHovered, setIsHovered] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Load saved photo from localStorage or look for public asset
  useEffect(() => {
    const saved = localStorage.getItem('JOY_PORTFOLIO_PHOTO');
    if (saved) {
      setPhotoUrl(saved);
    } else {
      // Test if default asset exists in public
      const defaultImg = new Image();
      defaultImg.src = './assets/joy-perez.jpg';
      defaultImg.onload = () => setPhotoUrl('./assets/joy-perez.jpg');
      defaultImg.onerror = () => {
        // Also check root IMG_1599.jpeg
        const testImg2 = new Image();
        testImg2.src = './IMG_1599.jpeg';
        testImg2.onload = () => setPhotoUrl('./IMG_1599.jpeg');
      };
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

  return (
    <div 
      className={`relative w-72 sm:w-80 h-96 sm:h-[430px] flex items-center justify-center ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onDragOver={(e) => e.preventDefault()}
      onDrop={handleDrop}
    >
      {/* Hidden File Input for uploading authentic photo */}
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

      {/* PHOTO DISPLAY OR UPLOAD PLACEHOLDER */}
      <div className="relative w-full h-full overflow-hidden flex items-center justify-center rounded-3xl [mask-image:radial-gradient(ellipse_at_center,black_65%,transparent_95%)]">
        {photoUrl ? (
          <div className="relative w-full h-full">
            <img 
              src={photoUrl} 
              alt="Joy L. Perez - Special Education Teacher" 
              className="w-full h-full object-cover object-top filter brightness-105 contrast-105"
            />
            {/* Seamless Bottom and Edge Dark Navy Gradient Overlay to blend with #051329 */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#051329] via-transparent to-transparent opacity-80 pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-b from-[#051329]/40 via-transparent to-transparent pointer-events-none" />
          </div>
        ) : (
          /* Empty / Upload Prompt state with seamless dark styling */
          <div 
            onClick={() => fileInputRef.current?.click()}
            className="w-full h-full flex flex-col items-center justify-center p-6 text-center cursor-pointer bg-gradient-to-b from-[#0B254E]/80 to-[#051329] transition-all hover:bg-[#0E2E5F]/90"
          >
            <div className="w-16 h-16 rounded-2xl bg-sky-500/20 border border-sky-400/30 flex items-center justify-center mb-4 blue-glow">
              <Upload className="w-8 h-8 text-sky-400 animate-bounce" />
            </div>
            <h4 className="text-base font-bold text-white mb-1">Click to Display Photo</h4>
            <p className="text-xs text-sky-200/80 mb-3 max-w-[200px]">
              Select <span className="text-orange-400 font-mono-code font-bold">IMG_1599.jpeg</span> to render Joy's authentic portrait
            </p>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-semibold bg-sky-500/20 text-sky-300 border border-sky-400/40">
              <Camera className="w-3.5 h-3.5" />
              <span>Browse Image</span>
            </span>
          </div>
        )}
      </div>

      {/* Floating Action Badge: Change / Upload Photo on Hover or Click */}
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

        {/* Change / Upload Button Tooltip */}
        <button
          onClick={() => fileInputRef.current?.click()}
          className="px-3 py-1 rounded-full glass border border-white/20 bg-slate-900/90 text-slate-300 hover:text-white hover:border-sky-400 text-[10px] font-medium flex items-center gap-1.5 transition-all shadow-md cursor-pointer"
        >
          <Camera className="w-3 h-3 text-sky-400" />
          <span>{photoUrl ? 'Update / Change Photo' : 'Upload IMG_1599.jpeg'}</span>
        </button>
      </motion.div>
    </div>
  );
};
