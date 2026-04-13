import Sidebar from './components/portfolio/Sidebar';
import HeroSection from './components/portfolio/HeroSection';
import SkillsSection from './components/portfolio/SkillsSection';
import ProjectsSection from './components/portfolio/ProjectsSection';
import ExperienceSection from './components/portfolio/ExperienceSection';
import ContactSection from './components/portfolio/ContactSection';

export default function App() {
  return (
    <div className="min-h-screen bg-background flex">
      <Sidebar />
      
      <main className="flex-1 lg:ml-60 px-6 sm:px-12 md:px-20 max-w-5xl pb-16 lg:pb-0">
        <HeroSection />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <ContactSection />
      </main>
    </div>
  );
}