import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  FileText, 
  Send, 
  Menu, 
  X, 
  Globe2, 
  Compass,
  Sparkles
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface NavbarProps {
  onOpenResume: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.scrollY;
      
      setScrolled(currentScroll > 40);
      setScrollProgress(totalScroll > 0 ? (currentScroll / totalScroll) * 100 : 0);

      // Active section detection
      const sections = [
        'home',
        'about',
        'expertise',
        'approach',
        'experience',
        'ecosystem',
        'education',
        'training',
        'contact'
      ];

      const current = sections.find((section) => {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          return rect.top <= 200 && rect.bottom >= 200;
        }
        return false;
      });

      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home', id: 'home' },
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Expertise', href: '#expertise', id: 'expertise' },
    { label: 'Approach', href: '#approach', id: 'approach' },
    { label: 'Experience', href: '#experience', id: 'experience' },
    { label: 'Ecosystem', href: '#ecosystem', id: 'ecosystem' },
    { label: 'Education', href: '#education', id: 'education' },
    { label: 'Training', href: '#training', id: 'training' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Scroll Progress Bar at the Top */}
      <div 
        className="fixed top-0 left-0 h-[2.5px] z-50 transition-all duration-100 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
        style={{ width: `${scrollProgress}%` }}
        aria-hidden="true"
      />

      {/* Main Sticky Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'bg-[#07070a]/70 backdrop-blur-2xl border-b border-white/10 py-3 shadow-2xl shadow-black/40'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo / Monogram */}
          <a
            href="#home"
            id="nav-logo-link"
            className="group flex items-center gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 rounded-2xl p-1"
          >
            <div className="relative flex items-center justify-center w-10 h-10 rounded-2xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-purple-600 border border-white/20 shadow-lg shadow-blue-500/20 group-hover:scale-105 transition-all">
              <span className="font-bold text-sm tracking-wider font-mono-code text-white">
                JP
              </span>
              <div className="absolute inset-0 rounded-2xl bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity blur-xs" />
            </div>
            
            <div className="flex flex-col text-left">
              <span className="text-sm font-semibold text-slate-100 group-hover:text-white transition-colors tracking-tight flex items-center gap-1.5">
                {PERSONAL_INFO.name}
              </span>
              <span className="text-[11px] text-slate-400 font-light flex items-center gap-1">
                <span>Special Education</span>
                <span className="text-blue-400">•</span>
                <span>Dubai, UAE</span>
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center gap-1 glass p-1.5 rounded-full border border-white/10 backdrop-blur-2xl" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  id={`nav-link-${link.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className={`relative px-3.5 py-1.5 text-xs font-medium rounded-full transition-all duration-200 ${
                    isActive
                      ? 'text-white font-semibold'
                      : 'text-slate-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute inset-0 rounded-full bg-white/10 border border-white/20 shadow-inner -z-10"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* Action CTAs (Desktop) */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={onOpenResume}
              id="nav-view-resume-btn"
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-medium text-slate-200 hover:text-white glass glass-hover rounded-2xl transition-all active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
            >
              <FileText className="w-3.5 h-3.5 text-blue-400" />
              <span>View Résumé</span>
            </button>

            <a
              href="#contact"
              id="nav-contact-me-btn"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#contact');
              }}
              className="inline-flex items-center gap-1.5 px-5 py-2 text-xs font-bold text-black bg-white hover:bg-slate-100 rounded-2xl transition-all shadow-xl shadow-white/10 active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              <Send className="w-3.5 h-3.5 text-black" />
              <span>Contact Me</span>
            </a>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex xl:hidden items-center gap-2">
            <button
              onClick={onOpenResume}
              id="nav-mobile-resume-btn"
              className="lg:hidden inline-flex items-center gap-1 px-3 py-1.5 text-xs text-slate-200 glass glass-hover rounded-xl"
              aria-label="View Résumé"
            >
              <FileText className="w-3.5 h-3.5 text-blue-400" />
              <span className="text-[11px]">CV</span>
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              id="nav-mobile-toggle-btn"
              className="p-2 text-slate-300 hover:text-white glass glass-hover rounded-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-x-0 top-[64px] z-30 bg-[#07070a]/90 backdrop-blur-2xl border-b border-white/10 shadow-2xl xl:hidden max-h-[calc(100vh-70px)] overflow-y-auto px-5 py-6"
          >
            <div className="flex flex-col gap-1.5">
              <div className="text-[11px] font-mono-code uppercase tracking-wider text-blue-400 px-3 py-1 flex items-center gap-1.5">
                <Compass className="w-3.5 h-3.5" />
                <span>Navigation & Portfolio Chapters</span>
              </div>

              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.id}
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link.href);
                    }}
                    className={`px-4 py-2.5 rounded-xl text-sm font-medium flex items-center justify-between transition-colors ${
                      isActive
                        ? 'bg-white/10 text-white border border-white/15'
                        : 'text-slate-300 hover:bg-white/5 hover:text-white'
                    }`}
                  >
                    <span>{link.label}</span>
                    {isActive && <span className="w-2 h-2 rounded-full bg-blue-400" />}
                  </a>
                );
              })}

              <div className="pt-4 mt-2 border-t border-white/10 flex flex-col gap-2.5">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenResume();
                  }}
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl glass glass-hover text-slate-100 font-medium text-sm transition-colors"
                >
                  <FileText className="w-4 h-4 text-blue-400" />
                  <span>View Executive Résumé</span>
                </button>

                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick('#contact');
                  }}
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-white text-black font-bold text-sm shadow-xl shadow-white/10 hover:bg-slate-100 transition-colors"
                >
                  <Send className="w-4 h-4" />
                  <span>Contact Me Directly</span>
                </a>
              </div>

              {/* Location indicator */}
              <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-xs text-slate-400 px-2">
                <span className="flex items-center gap-1.5">
                  <Globe2 className="w-3.5 h-3.5 text-blue-400" />
                  Dubai, UAE
                </span>
                <span>English & Tagalog</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
