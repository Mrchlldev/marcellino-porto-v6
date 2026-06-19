'use client';
import Navbar from '@/components/layout/Navbar';
import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import SkillsSection from '@/components/sections/SkillsSection';
import EducationSection from '@/components/sections/EducationSection';
import ProjectsSection from '@/components/sections/ProjectsSection';
import ContactSection from '@/components/sections/ContactSection';

export default function Home() {
  return (
    <main>
      <Navbar />
      <div className="scroll-snap-container">
        <HeroSection />
        <AboutSection isPreview />
        <SkillsSection isPreview />
        <EducationSection isPreview />
        <ProjectsSection isPreview />
        <ContactSection isPreview />
      </div>
    </main>
  );
}
