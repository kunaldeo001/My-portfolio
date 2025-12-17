
"use client";

import { Header } from '@/components/portfolio/header';
import { AboutSection } from '@/components/portfolio/about-section';
import { SkillsSection } from '@/components/portfolio/skills-section';
import { ProjectsSection } from '@/components/portfolio/projects-section';
import { InternshipsSection } from '@/components/portfolio/internships-section';
import { EducationSection } from '@/components/portfolio/education-section';
import { CertificationsSection } from '@/components/portfolio/certifications-section';
import { ClubsSection } from '@/components/portfolio/clubs-section';
import { ContactSection } from '@/components/portfolio/contact-section';
import { Footer } from '@/components/portfolio/footer';
import { BackToTop } from '@/components/portfolio/back-to-top';
import { HeroSection } from '@/components/portfolio/hero-section';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function PortfolioPage() {
  const heroBgImage = PlaceHolderImages.find((img) => img.id === 'hero-background');

  return (
    <div 
      className="flex min-h-screen flex-col"
    >
      <div 
        className="fixed inset-0 z-0 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: heroBgImage ? `url(${heroBgImage.imageUrl})` : 'none' }}
      ></div>
      <div className="absolute inset-0 z-0 bg-background/80 backdrop-blur-sm"></div>
      <div className="relative z-10">
        <Header />
        <main className="flex-1">
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <ProjectsSection />
          <InternshipsSection />
          <EducationSection />
          <CertificationsSection />
          <ClubsSection />
          <ContactSection />
        </main>
        <Footer />
        <BackToTop />
      </div>
    </div>
  );
}
