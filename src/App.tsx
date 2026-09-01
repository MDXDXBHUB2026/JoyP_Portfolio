import React, { useState } from 'react';
import { AuroraBackground } from './components/AuroraBackground';
import { CursorGlow } from './components/CursorGlow';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Introduction } from './components/Introduction';
import { ExpertiseGrid } from './components/ExpertiseGrid';
import { LearningApproach } from './components/LearningApproach';
import { ExperienceTimeline } from './components/ExperienceTimeline';
import { FeaturedExperience } from './components/FeaturedExperience';
import { MultidisciplinaryEcosystem } from './components/MultidisciplinaryEcosystem';
import { EducationSection } from './components/EducationSection';
import { ContinuousLearning } from './components/ContinuousLearning';
import { PhilosophySection } from './components/PhilosophySection';
import { SkillsMatrix } from './components/SkillsMatrix';
import { InternationalCareer } from './components/InternationalCareer';
import { ContactSection } from './components/ContactSection';
import { ResumeModal } from './components/ResumeModal';
import { Footer } from './components/Footer';

export default function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  const handleOpenResume = () => {
    setIsResumeOpen(true);
  };

  const handleCloseResume = () => {
    setIsResumeOpen(false);
  };

  return (
    <div className="relative min-h-screen bg-[#07070a] text-slate-100 selection:bg-blue-500/30 selection:text-blue-200 font-sans">
      {/* Background Animated Aurora & Subtle Grid */}
      <AuroraBackground />

      {/* Desktop-only subtle cursor radial glow */}
      <CursorGlow />

      {/* Navigation Bar */}
      <Navbar onOpenResume={handleOpenResume} />

      {/* Main Content Sections */}
      <main id="main-content" className="relative z-10">
        {/* 1. Hero Section & Learning Constellation */}
        <Hero onOpenResume={handleOpenResume} />

        {/* 2. Professional Introduction & Story Chapter 01 */}
        <Introduction />

        {/* 3. Core Capabilities & Story Chapter 02 */}
        <ExpertiseGrid />

        {/* 4. Individualized Learning Approach (6-Step Pedagogical Process) */}
        <LearningApproach />

        {/* 5. Career Experience Timeline & Narrative Bridge */}
        <ExperienceTimeline />

        {/* 6. Featured Institutional Experience (Shaikha Maitha Foundation 6 Pillars) */}
        <FeaturedExperience />

        {/* 7. Multidisciplinary Support Ecosystem (Interactive Network) */}
        <MultidisciplinaryEcosystem />

        {/* 8. Education & Qualifications (Postgraduate Highlight) */}
        <EducationSection />

        {/* 9. Continuous Learning & Specialized Symposia */}
        <ContinuousLearning />

        {/* 10. Professional Philosophy & Why I Teach */}
        <PhilosophySection />

        {/* 11. Skills Matrix & Personal Strengths */}
        <SkillsMatrix />

        {/* 12. International Career Section */}
        <InternationalCareer />

        {/* 13. Contact Experience & Validated Form */}
        <ContactSection onOpenResume={handleOpenResume} />
      </main>

      {/* Footer */}
      <Footer onOpenResume={handleOpenResume} />

      {/* Executive Résumé Modal */}
      <ResumeModal isOpen={isResumeOpen} onClose={handleCloseResume} />
    </div>
  );
}
