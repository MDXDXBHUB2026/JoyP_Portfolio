import React from 'react';
import { Heart, Globe2, MapPin, Languages, ArrowUp } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface FooterProps {
  onOpenResume: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenResume }) => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative z-10 border-t border-white/10 glass text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Top Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center justify-between pb-8 border-b border-white/10">
          
          <div className="md:col-span-6">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-8 rounded-xl glass border border-white/20 flex items-center justify-center font-mono-code font-bold text-white text-xs">
                JP
              </div>
              <span className="text-base font-bold text-white">
                {PERSONAL_INFO.name}
              </span>
            </div>
            <p className="text-slate-400 font-light text-xs max-w-md">
              Special Education • Inclusive Learning • Individualized Education • Student Development
            </p>
          </div>

          {/* Quick links */}
          <div className="md:col-span-6 flex flex-wrap items-center md:justify-end gap-5">
            <a href="#about" className="hover:text-blue-300 transition-colors">About</a>
            <a href="#expertise" className="hover:text-blue-300 transition-colors">Capabilities</a>
            <a href="#approach" className="hover:text-blue-300 transition-colors">Approach</a>
            <a href="#experience" className="hover:text-blue-300 transition-colors">Experience</a>
            <a href="#ecosystem" className="hover:text-blue-300 transition-colors">Ecosystem</a>
            <a href="#education" className="hover:text-blue-300 transition-colors">Education</a>
            <a href="#training" className="hover:text-blue-300 transition-colors">Training</a>
            <button onClick={onOpenResume} className="hover:text-purple-300 transition-colors font-medium cursor-pointer">
              Résumé
            </button>
            <a href="#contact" className="hover:text-blue-300 transition-colors">Contact</a>
          </div>

        </div>

        {/* Bottom Footer Row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-400 text-[11px]">
          <div className="flex items-center gap-2">
            <MapPin className="w-3.5 h-3.5 text-blue-400" />
            <span>Dubai, United Arab Emirates</span>
            <span className="text-white/20">•</span>
            <span>English & Tagalog</span>
          </div>

          <div className="flex items-center gap-4">
            <span>© {currentYear} Joy L. Perez. All rights reserved.</span>
            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-xl glass glass-hover border border-white/10 text-slate-300 hover:text-white transition-colors flex items-center gap-1.5 cursor-pointer"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-3.5 h-3.5 text-blue-400" />
              <span>Top</span>
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
