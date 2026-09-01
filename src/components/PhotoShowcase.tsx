import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { 
  Sparkles, 
  Maximize2, 
  Upload, 
  ShieldCheck, 
  Heart, 
  Award, 
  MapPin,
  CheckCircle2,
  Camera
} from 'lucide-react';
import { getCustomPhoto, setCustomPhoto, DEFAULT_EDUCATOR_PHOTO } from '../utils/photoState';
import { PhotoLightboxModal } from './PhotoLightboxModal';

interface PhotoShowcaseProps {
  variant?: 'hero' | 'about' | 'compact';
  onOpenResume?: () => void;
}

export const PhotoShowcase: React.FC<PhotoShowcaseProps> = ({ variant = 'hero', onOpenResume }) => {
  const [photoUrl, setPhotoUrl] = useState<string>(getCustomPhoto());
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isHovered, setIsHovered] = useState<boolean>(false);

  useEffect(() => {
    const handlePhotoChange = () => {
      setPhotoUrl(getCustomPhoto());
    };
    window.addEventListener('portfolio_photo_changed', handlePhotoChange);
    return () => {
      window.removeEventListener('portfolio_photo_changed', handlePhotoChange);
    };
  }, []);

  const handleQuickUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    if (!file.type.startsWith('image/')) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const result = event.target?.result as string;
      if (result) {
        setCustomPhoto(result);
      }
    };
    reader.readAsDataURL(file);
  };

  return (
    <>
      <div 
        className="relative group w-full max-w-md mx-auto select-none"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Ambient Dark Navy & Radiant Orange Glow Ring */}
        <div className="absolute -inset-2 bg-gradient-to-tr from-orange-500/20 via-blue-600/15 to-amber-500/20 rounded-[2.5rem] blur-xl opacity-75 group-hover:opacity-100 transition-opacity duration-500 -z-10" />

        {/* Main Photo Card Container */}
        <div className="relative rounded-3xl p-3 sm:p-4 glass border border-slate-700/80 bg-[#030A16]/90 backdrop-blur-2xl shadow-2xl shadow-black/80 transition-all duration-300">
          
          {/* Top Bar with Status Tag */}
          <div className="flex items-center justify-between pb-3 px-2 text-xs">
            <div className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span className="font-mono-code text-[11px] text-slate-300 font-medium">
                Special Education Faculty
              </span>
            </div>

            <div className="flex items-center gap-1">
              <button
                onClick={() => setIsModalOpen(true)}
                className="p-1.5 rounded-xl glass hover:bg-slate-800 text-slate-300 hover:text-white transition-all text-xs flex items-center gap-1 border border-slate-700/60 cursor-pointer"
                title="Expand and inspect high-resolution portrait"
                aria-label="Expand photo"
              >
                <Maximize2 className="w-3.5 h-3.5 text-orange-400" />
                <span className="text-[10px] font-medium hidden sm:inline">Inspect Photo</span>
              </button>

              <label 
                className="p-1.5 rounded-xl glass hover:bg-slate-800 text-slate-300 hover:text-white transition-all text-xs flex items-center gap-1 border border-slate-700/60 cursor-pointer"
                title="Change or upload custom photo"
              >
                <Camera className="w-3.5 h-3.5 text-slate-300" />
                <span className="text-[10px] font-medium hidden sm:inline">Change</span>
                <input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handleQuickUpload}
                />
              </label>
            </div>
          </div>

          {/* Photo Frame */}
          <div 
            onClick={() => setIsModalOpen(true)}
            className="relative w-full aspect-[4/5] sm:aspect-[3/4] overflow-hidden rounded-2xl bg-slate-950 border border-slate-700/60 cursor-pointer group/img"
          >
            <img
              src={photoUrl}
              alt="Special Education Educator Portrait - Dubai UAE"
              className="w-full h-full object-cover object-center group-hover/img:scale-105 transition-transform duration-500"
              referrerPolicy="no-referrer"
            />

            {/* Subtle Gradient Overlay at the base */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#030A16]/90 via-transparent to-transparent pointer-events-none" />

            {/* Click to Expand Prompt */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/img:opacity-100 transition-opacity bg-black/40 backdrop-blur-xs">
              <span className="px-4 py-2 rounded-2xl glass border border-white/20 text-white text-xs font-semibold flex items-center gap-2 shadow-xl">
                <Maximize2 className="w-4 h-4 text-orange-400" />
                <span>View Fullscreen Portrait</span>
              </span>
            </div>

            {/* Bottom Floating Stats Pill inside Image */}
            <div className="absolute bottom-3 inset-x-3 p-3 rounded-2xl glass border border-slate-700/80 backdrop-blur-xl bg-[#030A16]/85 flex items-center justify-between text-xs">
              <div className="flex flex-col">
                <span className="text-white font-bold text-xs tracking-tight">15+ Years UAE Practice</span>
                <span className="text-[10px] text-slate-400 font-mono-code">Shaikha Maitha Foundation</span>
              </div>
              <div className="w-7 h-7 rounded-xl bg-orange-500/15 border border-orange-500/40 text-orange-400 flex items-center justify-center">
                <ShieldCheck className="w-4 h-4" />
              </div>
            </div>
          </div>

          {/* Footer Info Cards */}
          <div className="mt-3 pt-3 border-t border-slate-800 flex items-center justify-between text-xs text-slate-300 px-1">
            <div className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-orange-400" />
              <span>Dubai, United Arab Emirates</span>
            </div>
            <div className="flex items-center gap-1 text-[11px] text-slate-400">
              <Award className="w-3.5 h-3.5 text-amber-400" />
              <span>RBT® Trained</span>
            </div>
          </div>

        </div>
      </div>

      {/* Full-Screen Lightbox Modal */}
      <PhotoLightboxModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        photoUrl={photoUrl}
        onPhotoUpdated={() => setPhotoUrl(getCustomPhoto())}
      />
    </>
  );
};
