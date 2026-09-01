import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  X, 
  ZoomIn, 
  ZoomOut, 
  Upload, 
  RotateCcw, 
  Sparkles, 
  MapPin, 
  ShieldCheck, 
  GraduationCap, 
  Award,
  CheckCircle2,
  Heart
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { setCustomPhoto, resetCustomPhoto, DEFAULT_EDUCATOR_PHOTO } from '../utils/photoState';

interface PhotoLightboxModalProps {
  isOpen: boolean;
  onClose: () => void;
  photoUrl: string;
  onPhotoUpdated?: () => void;
}

export const PhotoLightboxModal: React.FC<PhotoLightboxModalProps> = ({
  isOpen,
  onClose,
  photoUrl,
  onPhotoUpdated
}) => {
  const [zoomLevel, setZoomLevel] = useState<number>(1);
  const [isUploading, setIsUploading] = useState<boolean>(false);
  const [feedbackMsg, setFeedbackMsg] = useState<string>('');

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith('image/')) {
      setFeedbackMsg('Please select a valid image file (JPG, PNG, WEBP).');
      return;
    }

    setIsUploading(true);
    const reader = new FileReader();
    reader.onload = (event) => {
      const result = event.target?.result as string;
      if (result) {
        setCustomPhoto(result);
        if (onPhotoUpdated) onPhotoUpdated();
        setFeedbackMsg('Photo successfully updated!');
        setTimeout(() => setFeedbackMsg(''), 3000);
      }
      setIsUploading(false);
    };
    reader.onerror = () => {
      setFeedbackMsg('Error reading file. Please try another image.');
      setIsUploading(false);
    };
    reader.readAsDataURL(file);
  };

  const handleReset = () => {
    resetCustomPhoto();
    if (onPhotoUpdated) onPhotoUpdated();
    setFeedbackMsg('Restored default portfolio portrait.');
    setTimeout(() => setFeedbackMsg(''), 3000);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div 
        className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#020712]/90 backdrop-blur-2xl"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto glass border border-slate-700/80 rounded-3xl p-6 sm:p-8 bg-[#030A16]/95 shadow-2xl shadow-black/80"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header Controls */}
          <div className="flex items-center justify-between pb-5 mb-6 border-b border-slate-800">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-2xl bg-gradient-to-tr from-[#0B254E] to-[#1E3A8A] border border-orange-500/40 flex items-center justify-center text-orange-400">
                <Sparkles className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-bold text-white tracking-tight flex items-center gap-2">
                  <span>Educator Profile & Portrait</span>
                  <span className="text-[10px] font-mono-code px-2 py-0.5 rounded-full bg-orange-500/15 text-orange-300 border border-orange-500/30">
                    High Definition
                  </span>
                </h3>
                <p className="text-xs text-slate-400 font-light">
                  Special Education Teacher • Dubai, UAE
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              {/* Zoom Controls */}
              <div className="hidden sm:flex items-center gap-1 glass p-1 rounded-xl border border-slate-800">
                <button
                  onClick={() => setZoomLevel(Math.max(0.8, zoomLevel - 0.2))}
                  className="p-1.5 text-slate-300 hover:text-white rounded-lg transition-colors"
                  title="Zoom Out"
                  aria-label="Zoom out"
                >
                  <ZoomOut className="w-4 h-4" />
                </button>
                <span className="text-[10px] font-mono-code text-slate-400 px-1">
                  {Math.round(zoomLevel * 100)}%
                </span>
                <button
                  onClick={() => setZoomLevel(Math.min(2.0, zoomLevel + 0.2))}
                  className="p-1.5 text-slate-300 hover:text-white rounded-lg transition-colors"
                  title="Zoom In"
                  aria-label="Zoom in"
                >
                  <ZoomIn className="w-4 h-4" />
                </button>
              </div>

              {/* Close Button */}
              <button
                onClick={onClose}
                className="p-2.5 rounded-2xl glass hover:bg-slate-800 text-slate-300 hover:text-white transition-all border border-slate-700/60 cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Feedback banner if any */}
          {feedbackMsg && (
            <div className="mb-4 p-3 rounded-2xl bg-orange-500/15 border border-orange-500/40 text-orange-200 text-xs font-medium flex items-center justify-between">
              <span className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-orange-400" />
                {feedbackMsg}
              </span>
            </div>
          )}

          {/* Main Grid: Portrait + Educator Credentials */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            {/* Image Container with Zoom & Radiant Rim Glow */}
            <div className="md:col-span-6 flex flex-col items-center">
              <div className="relative group w-full max-w-sm rounded-3xl overflow-hidden glass border-2 border-orange-500/30 p-2 shadow-2xl bg-[#081832]/60">
                
                {/* Glow ring */}
                <div className="absolute -inset-1 bg-gradient-to-r from-orange-500/20 via-amber-500/10 to-blue-500/20 rounded-3xl blur-md -z-10" />

                <div className="w-full aspect-[3/4] overflow-hidden rounded-2xl bg-slate-900 flex items-center justify-center">
                  <motion.img
                    src={photoUrl}
                    alt="Joy L. Perez - Special Education Teacher"
                    className="w-full h-full object-cover object-center transition-transform duration-200"
                    style={{ transform: `scale(${zoomLevel})` }}
                    referrerPolicy="no-referrer"
                  />
                </div>

                {/* Floating Verified Badge */}
                <div className="absolute bottom-5 left-5 right-5 p-3 rounded-2xl glass border border-slate-700/80 backdrop-blur-xl bg-[#030A16]/90 flex items-center justify-between text-xs text-slate-200 shadow-xl">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                    <div>
                      <span className="font-bold text-white block leading-tight">15+ Years UAE Practice</span>
                      <span className="text-[10px] text-slate-400 font-mono-code">Active Special Education Faculty</span>
                    </div>
                  </div>
                  <ShieldCheck className="w-5 h-5 text-orange-400" />
                </div>
              </div>

              {/* Photo Upload / Switcher Actions */}
              <div className="mt-4 flex flex-wrap items-center justify-center gap-2">
                <label className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold rounded-xl bg-orange-500 hover:bg-orange-400 text-white transition-all shadow-md shadow-orange-500/20 cursor-pointer">
                  <Upload className="w-3.5 h-3.5" />
                  <span>{isUploading ? 'Uploading...' : 'Upload My Photo'}</span>
                  <input
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={handleFileUpload}
                  />
                </label>

                {photoUrl !== DEFAULT_EDUCATOR_PHOTO && (
                  <button
                    onClick={handleReset}
                    className="inline-flex items-center gap-1 px-3 py-2 text-xs font-medium rounded-xl glass hover:bg-slate-800 text-slate-300 transition-colors border border-slate-700/60 cursor-pointer"
                  >
                    <RotateCcw className="w-3 h-3 text-slate-400" />
                    <span>Reset Default</span>
                  </button>
                )}
              </div>
            </div>

            {/* Right Column: Key Professional Highlights */}
            <div className="md:col-span-6 space-y-4 text-left">
              <div>
                <span className="text-xs font-mono-code uppercase tracking-wider text-orange-400 font-bold block mb-1">
                  Professional Identity
                </span>
                <h4 className="text-2xl font-extrabold text-white">
                  JOY L. PEREZ
                </h4>
                <p className="text-xs text-slate-300 font-light mt-1">
                  Special Education Teacher • Shaikha Maitha Bint Rashid Al Maktoum Foundation for Special Needs, Dubai
                </p>
              </div>

              {/* Verified Badges List */}
              <div className="space-y-2.5 pt-2">
                <div className="p-3.5 rounded-2xl glass border border-slate-700/60 flex items-start gap-3">
                  <div className="p-2 rounded-xl bg-orange-500/15 text-orange-400 shrink-0">
                    <GraduationCap className="w-4 h-4" />
                  </div>
                  <div>
                    <h5 className="text-xs font-bold text-white">Postgraduate Special Education & Physical Therapy</h5>
                    <p className="text-[11px] text-slate-300 font-light leading-relaxed mt-0.5">
                      Unique dual synthesis of clinical neurodevelopment, physical rehabilitation, and specialized classroom pedagogy.
                    </p>
                  </div>
                </div>

                <div className="p-3.5 rounded-2xl glass border border-slate-700/60 flex items-start gap-3">
                  <div className="p-2 rounded-xl bg-amber-500/15 text-amber-400 shrink-0">
                    <Award className="w-4 h-4" />
                  </div>
                  <div>
                    <h5 className="text-xs font-bold text-white">Registered Behavior Technician (RBT®) Trained</h5>
                    <p className="text-[11px] text-slate-300 font-light leading-relaxed mt-0.5">
                      40-Hour BACB curriculum, Autism interventions, TEACCH, PECS, and sensory regulation strategies.
                    </p>
                  </div>
                </div>

                <div className="p-3.5 rounded-2xl glass border border-slate-700/60 flex items-start gap-3">
                  <div className="p-2 rounded-xl bg-blue-500/15 text-blue-400 shrink-0">
                    <Heart className="w-4 h-4 text-orange-400 fill-orange-400/20" />
                  </div>
                  <div>
                    <h5 className="text-xs font-bold text-white">Student-Centered Mission</h5>
                    <p className="text-[11px] text-slate-300 font-light leading-relaxed mt-0.5">
                      “Teaching is about understanding the learner and creating the individual path that allows them to flourish.”
                    </p>
                  </div>
                </div>
              </div>

              {/* Location and Languages */}
              <div className="pt-2 flex flex-wrap items-center gap-2 text-xs text-slate-400">
                <span className="inline-flex items-center gap-1 px-3 py-1.5 rounded-xl glass border border-slate-800">
                  <MapPin className="w-3.5 h-3.5 text-orange-400" />
                  Dubai, UAE
                </span>
                <span className="inline-flex items-center gap-1 px-3 py-1.5 rounded-xl glass border border-slate-800">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  English & Tagalog
                </span>
              </div>

            </div>

          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
};
