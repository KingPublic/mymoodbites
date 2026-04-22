import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ProblemSection from '@/components/ProblemSection';
import SolutionSection from '@/components/SolutionSection';
import FeaturesSection from '@/components/FeaturesSection';
import GallerySection from '@/components/GallerySection';
import PartnerSection from '@/components/PartnerSection';
import TeamSection from '@/components/TeamSection';
import SupportSection from '@/components/SupportSection';
import Footer from '@/components/Footer';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const Index = () => {
  useScrollReveal();

  return (
    <div className="font-sans">
      <Navbar />
      <Hero />
      <ProblemSection />
      <SolutionSection />
      <FeaturesSection />
      <GallerySection />
      <PartnerSection />
      <TeamSection />
      <SupportSection />
      <Footer />
    </div>
  );
};

export default Index;
