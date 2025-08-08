
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
          <h1 className="font-display text-8xl md:text-9xl lg:text-[12rem] font-bold mb-12 leading-none animate-fade-in">
            <span className="text-foreground">AI</span>
            <br />
            <span className="gradient-text">PLAYABLES</span>
          </h1>
          
          <button
            onClick={() => setIsModalOpen(true)}
            className="group inline-flex items-center gap-3 text-2xl font-medium text-foreground hover:text-primary transition-all duration-300 animate-fade-in"
            style={{ animationDelay: '0.4s' }}
          >
            Join Waitlist
            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-200" />
          </button>
        </div>
      </section>

      <WaitlistModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};

export default HeroSection;
