import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { Camera, Upload, CheckCircle2, Sparkles } from 'lucide-react';
import { DEFAULT_PORTRAIT_DATA_URI } from '../data/defaultPhoto';
import { loadSavedPhoto, savePhotoLocally, processImageFile } from '../utils/photoStorage';

interface ImmersivePhotoProps {
  className?: string;
}

export const ImmersivePhoto: React.FC<ImmersivePhotoProps> = ({ className = '' }) => {
  const [photoUrl, setPhotoUrl] = useState<string | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Initialize and load saved portrait permanently
  useEffect(() => {
    let isMounted = true;
    async function initPhoto() {
      const saved = await loadSavedPhoto();
      if (isMounted) {
        if (saved) {
          setPhotoUrl(saved);
        } else {
          // If no custom photo has been uploaded yet, keep null to prompt upload or fallback cleanly
          setPhotoUrl(null);
        }
      }
    }
    initPhoto();
    return () => { isMounted = false; };
  }, []);

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    try {
      setIsUploading(true);
      const processedDataUrl = await processImageFile(file);
      setPhotoUrl(processedDataUrl);
      await savePhotoLocally(processedDataUrl);
    } catch (err) {
      console.error('Error processing photo:', err);
    } finally {
      setIsUploading(false);
    }
  };

  const handleDrop = async (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const file = e.dataTransfer.files?.[0];
    if (!file) return;

    try {
      setIsUploading(true);
      const processedDataUrl = await processImageFile(file);
      setPhotoUrl(processedDataUrl);
      await savePhotoLocally(processedDataUrl);
    } catch (err) {
      console.error('Error processing dropped photo:', err);
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <div 
      className={`relative w-full max-w-[340px] sm:max-w-[400px] lg:max-w-[460px] xl:max-w-[500px] aspect-[3/4] min-h-[460px] sm:min-h-[520px] lg:min-h-[580px] flex items-center justify-center ${className}`}
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
      <div className="absolute inset-0 rounded-full bg-gradient-to-b from-sky-400/35 via-emerald-400/25 to-orange-500/35 blur-3xl transform scale-105 pointer-events-none animate-pulse-subtle" />

      {/* Orbiting Celestial Accents */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-45 animate-spin-slow" viewBox="0 0 500 650">
        <ellipse cx="250" cy="325" rx="230" ry="290" fill="none" stroke="#38BDF8" strokeWidth="1.2" strokeDasharray="6 12" />
        <ellipse cx="250" cy="325" rx="240" ry="220" fill="none" stroke="#10B981" strokeWidth="1" strokeDasharray="4 8" opacity="0.6" />
        <circle cx="250" cy="40" r="4.5" fill="#F97316" />
        <circle cx="480" cy="325" r="3.5" fill="#38BDF8" />
        <circle cx="20" cy="325" r="3.5" fill="#10B981" />
      </svg>

      {/* PHOTO DISPLAY OR CLEAN ALIGNED UPLOADER */}
      <div 
        onClick={() => fileInputRef.current?.click()}
        className="relative w-full h-full overflow-hidden flex items-center justify-center rounded-3xl cursor-pointer [mask-image:radial-gradient(ellipse_at_center,black_65%,transparent_95%)] group"
      >
        {photoUrl ? (
          <div className="relative w-full h-full">
            <img 
              src={photoUrl} 
              alt="Joy L. Perez - Special Education Teacher & Clinical Physical Therapist" 
              className="w-full h-full object-cover object-top filter brightness-105 contrast-105 select-none transition-transform duration-700 group-hover:scale-102"
            />
            {/* Seamless Edge Gradient Overlays to blend with #051329 */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#051329] via-[#051329]/20 to-transparent opacity-85 pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-b from-[#051329]/40 via-transparent to-transparent pointer-events-none" />
            
            {/* Subtle Hover Indicator to replace photo anytime */}
            {isHovered && (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="absolute inset-0 bg-[#051329]/50 backdrop-blur-[2px] flex flex-col items-center justify-center text-white transition-opacity"
              >
                <div className="w-12 h-12 rounded-2xl bg-sky-500/30 border border-sky-400/50 flex items-center justify-center mb-2 shadow-lg">
                  <Camera className="w-6 h-6 text-sky-300" />
                </div>
                <span className="text-xs font-semibold text-sky-200">Click to Change Photo</span>
              </motion.div>
            )}
          </div>
        ) : (
          /* Aligned, High-Craft Uploader Prompt */
          <div className="w-full h-full flex flex-col items-center justify-center p-8 text-center bg-gradient-to-b from-[#0B254E]/90 to-[#051329] border border-dashed border-sky-400/40 rounded-3xl hover:border-sky-400 transition-all hover:bg-[#0E2E5F]/95">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-tr from-sky-500/30 to-emerald-500/20 border border-sky-400/40 flex items-center justify-center mb-4 blue-glow shadow-xl shadow-sky-950/60">
              {isUploading ? (
                <div className="w-8 h-8 border-3 border-sky-400 border-t-transparent rounded-full animate-spin" />
              ) : (
                <Upload className="w-8 h-8 sm:w-10 sm:h-10 text-sky-300 animate-bounce" />
              )}
            </div>

            <h4 className="text-base sm:text-lg font-bold text-white mb-1.5 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-orange-400" />
              <span>Upload Joy's Photo</span>
            </h4>

            <p className="text-xs sm:text-sm text-sky-200/90 mb-4 max-w-[240px] leading-relaxed">
              Click or drag & drop <strong className="text-orange-300 font-mono-code">IMG_1599.jpeg</strong> to display and save permanently
            </p>

            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold bg-sky-500/25 text-sky-200 border border-sky-400/40 shadow-md">
              <Camera className="w-4 h-4 text-sky-400" />
              <span>Browse Image File</span>
            </span>
          </div>
        )}
      </div>

      {/* Verified Credentials Badge (Clean with no extra reset/change buttons) */}
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="absolute bottom-4 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-2 pointer-events-none"
      >
        <div className="px-5 py-2 rounded-full glass border border-sky-400/50 bg-[#051329]/95 text-center shadow-2xl shadow-sky-950/90 blue-glow whitespace-nowrap">
          <div className="flex items-center gap-2 text-xs sm:text-sm font-mono-code font-bold text-white tracking-wide">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>JOY L. PEREZ • PTRP, RBT®</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
