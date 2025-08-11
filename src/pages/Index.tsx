
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import ShowcaseSection from '@/components/ShowcaseSection';
import FeaturesSection from '@/components/FeaturesSection';
import PlayfulCTASection from '@/components/PlayfulCTASection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-secondary">
      <Navigation />
      <HeroSection />
      <ShowcaseSection />
      <FeaturesSection />
      <PlayfulCTASection />
      <Footer />
    </div>
  );
};

export default Index;
