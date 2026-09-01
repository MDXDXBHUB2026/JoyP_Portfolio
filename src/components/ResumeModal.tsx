import React from 'react';
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
  Calendar
} from 'lucide-react';
import { PERSONAL_INFO, CAREER_JOURNEY, EDUCATION_LIST, PROFESSIONAL_TRAINING, SKILLS_MATRIX } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-2xl overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.25 }}
          className="relative w-full max-w-4xl glass border border-white/20 rounded-3xl shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col"
        >
          {/* Top Action Bar */}
          <div className="px-6 py-4 glass border-b border-white/10 flex items-center justify-between shrink-0">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-blue-400 animate-pulse" />
              <span className="text-xs font-mono-code font-bold text-white tracking-wide">
                EXECUTIVE CURRICULUM VITAE • JOY L. PEREZ
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handlePrint}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl glass glass-hover text-slate-200 text-xs font-semibold border border-white/10 transition-colors cursor-pointer"
                title="Print or Save as PDF"
              >
                <Printer className="w-3.5 h-3.5 text-blue-400" />
                <span className="hidden sm:inline">Print / Save PDF</span>
              </button>

              <a
                href={PERSONAL_INFO.resumeUrl}
                download="Joy_L_Perez_Resume.pdf"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white hover:bg-slate-100 text-black text-xs font-bold transition-all shadow-md cursor-pointer"
                title="Direct PDF link"
              >
                <Download className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Download PDF</span>
              </a>

              <button
                onClick={onClose}
                className="p-1.5 rounded-xl text-slate-400 hover:text-white glass glass-hover transition-colors ml-2 cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Printable CV Content Body */}
          <div className="p-6 sm:p-10 overflow-y-auto space-y-8 text-slate-200 text-xs sm:text-sm font-light bg-black/40" id="printable-cv-content">
            
            {/* Header / Contact */}
            <div className="border-b border-white/10 pb-6">
              <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                {PERSONAL_INFO.name}
              </h1>
              <p className="text-sm sm:text-base font-semibold text-purple-300 mt-1">
                {PERSONAL_INFO.title} • Special Education | Inclusive Learning | Individualized Education | Student Development
              </p>
              <div className="flex flex-wrap gap-4 text-xs text-slate-300 mt-3 font-mono-code">
                <span className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-blue-400" />
                  {PERSONAL_INFO.location}
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <Mail className="w-3.5 h-3.5 text-blue-400" />
                  {PERSONAL_INFO.email}
                </span>
                <span>•</span>
                <span>Languages: English & Tagalog</span>
              </div>
            </div>

            {/* Profile Summary */}
            <div>
              <h2 className="text-xs font-mono-code font-bold uppercase tracking-wider text-blue-400 mb-2.5 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-purple-400" />
                <span>Professional Profile</span>
              </h2>
              <p className="text-slate-300 leading-relaxed font-light">
                Passionate and dedicated Special Education professional with extensive experience creating inclusive, supportive, and engaging learning environments for students with diverse abilities. Combines individualized education (IEPs), differentiated teaching, adaptive learning methods, assistive technology, student progress assessment, and multidisciplinary collaboration. Bridges specialized special needs pedagogy with foundational clinical experience in physical therapy and healthcare.
              </p>
            </div>

            {/* Core Capabilities */}
            <div>
              <h2 className="text-xs font-mono-code font-bold uppercase tracking-wider text-blue-400 mb-2.5 flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-blue-400" />
                <span>Core Competencies</span>
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
                {[
                  'Individualized Education Programs (IEPs)',
                  'Differentiated Instruction',
                  'Adaptive & Assistive Technology',
                  'Student Progress Assessment',
                  'Inclusive Classroom Development',
                  'Social Skills Development',
                  'Multidisciplinary Collaboration',
                  'Student Advocacy & Communication',
                  'Behavior Support & Physical Therapy Foundations'
                ].map((skill, idx) => (
                  <div key={idx} className="flex items-center gap-1.5 p-2 rounded-xl glass border border-white/10 text-xs text-slate-200">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0" />
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Professional Experience */}
            <div>
              <h2 className="text-xs font-mono-code font-bold uppercase tracking-wider text-blue-400 mb-4 flex items-center gap-1.5">
                <Briefcase className="w-3.5 h-3.5 text-blue-400" />
                <span>Professional Experience</span>
              </h2>

              <div className="space-y-6">
                {CAREER_JOURNEY.map((role) => (
                  <div key={role.id} className="p-4 rounded-2xl glass border border-white/10">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1">
                      <h3 className="text-sm font-bold text-white">
                        {role.title}
                      </h3>
                      <span className="text-xs font-mono-code text-blue-300">
                        {role.period}
                      </span>
                    </div>

                    <div className="text-xs font-medium text-purple-300 mb-2">
                      {role.organization} • {role.location}
                    </div>

                    <p className="text-xs text-slate-300 mb-3 leading-relaxed">
                      {role.summary}
                    </p>

                    <ul className="space-y-1 pl-1">
                      {role.keyContributions.map((c, i) => (
                        <li key={i} className="flex items-start gap-1.5 text-xs text-slate-400">
                          <span className="w-1 h-1 rounded-full bg-slate-500 shrink-0 mt-1.5" />
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
              <h2 className="text-xs font-mono-code font-bold uppercase tracking-wider text-blue-400 mb-3 flex items-center gap-1.5">
                <GraduationCap className="w-3.5 h-3.5 text-blue-400" />
                <span>Education & Qualifications</span>
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {EDUCATION_LIST.map((edu) => (
                  <div key={edu.id} className="p-3.5 rounded-2xl glass border border-white/10">
                    <div className="flex items-center justify-between text-xs mb-1">
                      <span className="font-bold text-white">{edu.degree}</span>
                      <span className="font-mono-code text-blue-400 text-[11px]">{edu.graduationDate}</span>
                    </div>
                    <div className="text-xs text-purple-300 mb-1.5">
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
              <h2 className="text-xs font-mono-code font-bold uppercase tracking-wider text-blue-400 mb-3 flex items-center gap-1.5">
                <Award className="w-3.5 h-3.5 text-blue-400" />
                <span>Continuous Professional Development</span>
              </h2>

              <div className="space-y-2">
                {PROFESSIONAL_TRAINING.map((tr) => (
                  <div key={tr.id} className="p-3 rounded-xl glass border border-white/10 text-xs">
                    <div className="flex items-center justify-between">
                      <strong className="text-white">{tr.title}</strong>
                      <span className="font-mono-code text-blue-400 text-[11px]">{tr.year}</span>
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
          <div className="p-4 glass border-t border-white/10 flex items-center justify-between text-xs text-slate-400 shrink-0">
            <span>Portfolio of Joy L. Perez • Special Education Teacher</span>
            <button
              onClick={onClose}
              className="px-4 py-1.5 rounded-xl glass glass-hover text-white border border-white/10 text-xs cursor-pointer font-medium"
            >
              Close
            </button>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
};
