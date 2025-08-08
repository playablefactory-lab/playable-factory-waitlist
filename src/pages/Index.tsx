
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import ShowcaseSection from '@/components/ShowcaseSection';
import AboutSection from '@/components/AboutSection';
import StoriesPanel from '@/components/StoriesPanel';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-secondary">
      <Navigation />
      <HeroSection />
      <ShowcaseSection />
      <AboutSection />
      <StoriesPanel />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
