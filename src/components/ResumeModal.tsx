import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  X, 
  Printer, 
  Download, 
  MapPin, 
  Mail, 
  GraduationCap, 
  Briefcase, 
  Award, 
  CheckCircle2,
  Sparkles,
  Building,
  Calendar,
  Check,
  FileCheck
} from 'lucide-react';
import { PERSONAL_INFO, CAREER_JOURNEY, EDUCATION_LIST, PROFESSIONAL_TRAINING } from '../data/portfolioData';
import { downloadResumePdf } from '../utils/resumeGenerator';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleDownload = () => {
    const success = downloadResumePdf();
    if (success) {
      setDownloadSuccess(true);
      setTimeout(() => setDownloadSuccess(false), 3500);
    }
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-2xl overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.25 }}
          className="relative w-full max-w-4xl glass border border-sky-500/30 rounded-3xl shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col bg-[#061834] blue-glow"
        >
          {/* Top Action Bar */}
          <div className="px-5 sm:px-6 py-4 glass border-b border-sky-500/20 bg-[#061834]/95 flex items-center justify-between shrink-0">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-sky-400 animate-pulse" />
              <span className="text-xs font-mono-code font-bold text-sky-200 tracking-wide">
                EXECUTIVE CURRICULUM VITAE • JOY L. PEREZ
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handlePrint}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl glass glass-hover text-slate-200 text-xs font-semibold border border-sky-500/25 hover:border-sky-400 transition-colors cursor-pointer"
                title="Print or Save as PDF via Browser"
              >
                <Printer className="w-3.5 h-3.5 text-sky-400" />
                <span className="hidden sm:inline">Print / Save PDF</span>
              </button>

              <button
                onClick={handleDownload}
                id="modal-download-pdf-btn"
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-400 hover:to-amber-400 text-white text-xs font-bold transition-all shadow-md shadow-orange-500/25 cursor-pointer active:scale-95 border border-orange-400/30"
                title="Download Official PDF"
              >
                {downloadSuccess ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-white" />
                    <span>Downloaded!</span>
                  </>
                ) : (
                  <>
                    <Download className="w-3.5 h-3.5" />
                    <span>Download Official PDF</span>
                  </>
                )}
              </button>

              <button
                onClick={onClose}
                className="p-1.5 rounded-xl text-slate-400 hover:text-white glass glass-hover transition-colors ml-1 cursor-pointer border border-sky-500/20 hover:border-sky-400"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Download Notification Banner if triggered */}
          {downloadSuccess && (
            <div className="bg-emerald-500/15 border-b border-emerald-500/30 px-6 py-2 flex items-center justify-between text-xs text-emerald-200 font-medium">
              <div className="flex items-center gap-2">
                <FileCheck className="w-4 h-4 text-emerald-400" />
                <span>Generating and downloading official Curriculum Vitae PDF (Joy_L_Perez_Special_Education_Resume.pdf)...</span>
              </div>
            </div>
          )}

          {/* Printable CV Content Body */}
          <div className="p-6 sm:p-10 overflow-y-auto space-y-8 text-slate-200 text-xs sm:text-sm font-light bg-[#061834]/95" id="printable-cv-content">
            
            {/* Header / Contact */}
            <div className="border-b border-slate-800 pb-6">
              <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                {PERSONAL_INFO.name}
              </h1>
              <p className="text-sm sm:text-base font-semibold text-orange-300 mt-1">
                {PERSONAL_INFO.title} • Special Education | Inclusive Learning | Individualized Education | Student Development
              </p>
              <div className="flex flex-wrap gap-4 text-xs text-slate-300 mt-3 font-mono-code">
                <span className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-orange-400" />
                  {PERSONAL_INFO.location}
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <Mail className="w-3.5 h-3.5 text-orange-400" />
                  {PERSONAL_INFO.email}
                </span>
                <span>•</span>
                <span>Languages: English & Tagalog</span>
              </div>
            </div>

            {/* Profile Summary */}
            <div>
              <h2 className="text-xs font-mono-code font-bold uppercase tracking-wider text-orange-400 mb-2.5 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-orange-400" />
                <span>Professional Profile</span>
              </h2>
              <p className="text-slate-300 leading-relaxed font-light">
                Passionate and dedicated Special Education professional with over 15 years of continuous practice in Dubai, creating individualized, inclusive, and multi-sensory learning pathways for students with diverse developmental and cognitive abilities. Combines structured Individualized Education Programs (IEPs), differentiated instruction, positive behavior support (RBT® trained), assistive technology (AAC & PECS), and multidisciplinary collaboration across speech and occupational therapy teams. Distinctively bridges special needs pedagogy with foundational clinical training in Physical Therapy.
              </p>
            </div>

            {/* Core Capabilities */}
            <div>
              <h2 className="text-xs font-mono-code font-bold uppercase tracking-wider text-orange-400 mb-2.5 flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-orange-400" />
                <span>Core Competencies & Areas of Expertise</span>
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
                {[
                  'Individualized Education Programs (IEPs)',
                  'Differentiated Instruction & Sensory Adaptation',
                  'Registered Behavior Technician (RBT®) Trained',
                  'Adaptive & Assistive Technology (AAC & PECS)',
                  'Continuous Developmental Progress Assessment',
                  'Inclusive Classroom Management & Safety',
                  'Social Skills & Peer Integration Development',
                  'Multidisciplinary Collaboration (OT, SLP, Psych)',
                  'Physical Therapy & Motor Development Foundations'
                ].map((skill, idx) => (
                  <div key={idx} className="flex items-center gap-1.5 p-2.5 rounded-xl glass border border-slate-700/60 text-xs text-slate-200">
                    <span className="w-1.5 h-1.5 rounded-full bg-orange-400 shrink-0" />
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Professional Experience */}
            <div>
              <h2 className="text-xs font-mono-code font-bold uppercase tracking-wider text-orange-400 mb-4 flex items-center gap-1.5">
                <Briefcase className="w-3.5 h-3.5 text-orange-400" />
                <span>Professional Experience</span>
              </h2>

              <div className="space-y-6">
                {CAREER_JOURNEY.map((role) => (
                  <div key={role.id} className="p-5 rounded-2xl glass border border-slate-700/60 space-y-3">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                      <h3 className="text-sm font-bold text-white">
                        {role.title}
                      </h3>
                      <span className="text-xs font-mono-code text-orange-400">
                        {role.period}
                      </span>
                    </div>

                    <div className="text-xs font-medium text-slate-300">
                      {role.organization} • {role.location}
                    </div>

                    <p className="text-xs text-slate-300 leading-relaxed font-light">
                      {role.summary}
                    </p>

                    <ul className="space-y-1.5 pl-1 pt-1 border-t border-slate-800">
                      {role.keyContributions.map((c, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs text-slate-300">
                          <span className="w-1.5 h-1.5 rounded-full bg-orange-400/80 shrink-0 mt-1.5" />
                          <span>{c}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Education */}
            <div>
              <h2 className="text-xs font-mono-code font-bold uppercase tracking-wider text-orange-400 mb-3 flex items-center gap-1.5">
                <GraduationCap className="w-3.5 h-3.5 text-orange-400" />
                <span>Education & Qualifications</span>
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {EDUCATION_LIST.map((edu) => (
                  <div key={edu.id} className="p-4 rounded-2xl glass border border-slate-700/60">
                    <div className="flex items-center justify-between text-xs mb-1">
                      <span className="font-bold text-white">{edu.degree}</span>
                      <span className="font-mono-code text-orange-400 text-[11px]">{edu.graduationDate}</span>
                    </div>
                    <div className="text-xs text-slate-300 mb-1.5">
                      {edu.institution} {edu.location ? `• ${edu.location}` : ''}
                    </div>
                    <p className="text-[11px] text-slate-400 leading-relaxed font-light">
                      {edu.details}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Professional Training */}
            <div>
              <h2 className="text-xs font-mono-code font-bold uppercase tracking-wider text-orange-400 mb-3 flex items-center gap-1.5">
                <Award className="w-3.5 h-3.5 text-orange-400" />
                <span>Continuous Professional Development</span>
              </h2>

              <div className="space-y-2.5">
                {PROFESSIONAL_TRAINING.map((tr) => (
                  <div key={tr.id} className="p-3.5 rounded-xl glass border border-slate-700/60 text-xs">
                    <div className="flex items-center justify-between">
                      <strong className="text-white">{tr.title}</strong>
                      <span className="font-mono-code text-orange-400 text-[11px]">{tr.year}</span>
                    </div>
                    <div className="text-slate-400 text-[11px] mt-0.5">
                      {tr.organization} {tr.location ? `• ${tr.location}` : ''}
                    </div>
                    <p className="text-slate-300 text-[11px] mt-1 font-light">
                      {tr.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Footer of modal */}
          <div className="p-4 glass border-t border-slate-800 flex items-center justify-between text-xs text-slate-400 shrink-0 bg-[#030A16]/90">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span>Official Executive Curriculum Vitae • Joy L. Perez</span>
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={handleDownload}
                className="text-orange-400 hover:text-orange-300 font-semibold cursor-pointer flex items-center gap-1"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download PDF</span>
              </button>
              <button
                onClick={onClose}
                className="px-4 py-1.5 rounded-xl glass glass-hover text-white border border-slate-700/60 text-xs cursor-pointer font-medium"
              >
                Close
              </button>
            </div>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
};
