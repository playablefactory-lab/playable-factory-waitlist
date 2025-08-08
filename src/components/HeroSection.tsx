
import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import WaitlistModal from './WaitlistModal';

const HeroSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section className="relative min-h-screen flex items-center justify-center grain-texture overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-purple-600/20 pointer-events-none" />
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-br from-primary/30 to-purple-500/30 rounded-full blur-xl floating-animation" />
        <div className="absolute bottom-40 right-20 w-24 h-24 bg-gradient-to-br from-purple-500/30 to-primary/30 rounded-full blur-xl floating-animation" style={{ animationDelay: '-2s' }} />
        <div className="absolute top-1/2 left-10 w-16 h-16 bg-primary/20 rounded-full blur-lg floating-animation" style={{ animationDelay: '-4s' }} />

        <div className="container mx-auto px-6 text-center relative z-10">
          <h1 className="font-display text-6xl md:text-8xl lg:text-9xl font-bold mb-8 animate-fade-in">
            <span className="gradient-text">AI Playables</span>
            <br />
            <span className="text-foreground">Are Next</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-12 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Interactive ads that learn and play.
          </p>
          
          <button
            onClick={() => setIsModalOpen(true)}
            className="group inline-flex items-center gap-3 text-lg font-medium text-foreground hover:text-primary transition-all duration-300 animate-fade-in"
            style={{ animationDelay: '0.4s' }}
          >
            Want in? Join the waitlist
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
          </button>
        </div>
      </section>

      <WaitlistModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};

export default HeroSection;
