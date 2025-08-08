
import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import WaitlistModal from './WaitlistModal';

const HeroSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section className="relative min-h-screen flex items-center justify-center lightning-bg overflow-hidden">
        {/* Playable Examples - Blurred */}
        <div className="absolute top-20 left-20 w-48 h-32 playable-blur rounded-2xl animate-pulse opacity-60" />
        <div className="absolute top-40 right-32 w-40 h-28 playable-blur rounded-2xl animate-pulse opacity-40" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-32 left-32 w-52 h-36 playable-blur rounded-2xl animate-pulse opacity-50" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-20 right-20 w-44 h-30 playable-blur rounded-2xl animate-pulse opacity-45" style={{ animationDelay: '0.5s' }} />
        <div className="absolute top-1/2 left-10 w-36 h-24 playable-blur rounded-2xl animate-pulse opacity-35" style={{ animationDelay: '1.5s' }} />
        <div className="absolute top-1/3 right-10 w-40 h-28 playable-blur rounded-2xl animate-pulse opacity-55" style={{ animationDelay: '3s' }} />

        <div className="container mx-auto px-6 text-center relative z-10">
          <h1 className="druk-style text-[8rem] md:text-[12rem] lg:text-[16rem] font-black mb-12 leading-none animate-fade-in">
            <span className="text-foreground">AI</span>
            <br />
            <span className="gradient-text">PLAYABLES</span>
            <br />
            <span className="text-foreground">ARE</span>
            <br />
            <span className="gradient-text">NEXT</span>
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
