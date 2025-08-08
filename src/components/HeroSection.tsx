
import { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import WaitlistModal from './WaitlistModal';

const HeroSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <>
      <section className="relative h-screen flex items-center justify-center hero-purple-bg overflow-hidden pt-20">
        {/* Mouse-responsive light overlay */}
        <div 
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0.15) 25%, transparent 50%)`,
            transition: 'background 0.3s ease-out'
          }}
        />

        {/* Playable Examples - With descriptive text */}
        <div className="absolute top-20 left-20 group">
          <div className="w-48 h-32 playable-blur-purple rounded-2xl animate-pulse opacity-60" />
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span className="text-xs text-white font-medium bg-black/50 px-2 py-1 rounded">Playable Ad</span>
          </div>
        </div>
        
        <div className="absolute top-40 right-32 group" style={{ animationDelay: '1s' }}>
          <div className="w-40 h-28 playable-blur-purple rounded-2xl animate-pulse opacity-40" />
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span className="text-xs text-white font-medium bg-black/50 px-2 py-1 rounded">Interactive Ad</span>
          </div>
        </div>
        
        <div className="absolute bottom-32 left-32 group" style={{ animationDelay: '2s' }}>
          <div className="w-52 h-36 playable-blur-purple rounded-2xl animate-pulse opacity-50" />
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span className="text-xs text-white font-medium bg-black/50 px-2 py-1 rounded">AI-Generated Playable</span>
          </div>
        </div>
        
        <div className="absolute bottom-20 right-20 group" style={{ animationDelay: '0.5s' }}>
          <div className="w-44 h-30 playable-blur-purple rounded-2xl animate-pulse opacity-45" />
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span className="text-xs text-white font-medium bg-black/50 px-2 py-1 rounded">Demo Ad</span>
          </div>
        </div>
        
        <div className="absolute top-1/2 left-10 group" style={{ animationDelay: '1.5s' }}>
          <div className="w-36 h-24 playable-blur-purple rounded-2xl animate-pulse opacity-35" />
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span className="text-xs text-white font-medium bg-black/50 px-2 py-1 rounded">Preview</span>
          </div>
        </div>
        
        <div className="absolute top-1/3 right-10 group" style={{ animationDelay: '3s' }}>
          <div className="w-40 h-28 playable-blur-purple rounded-2xl animate-pulse opacity-55" />
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span className="text-xs text-white font-medium bg-black/50 px-2 py-1 rounded">Coming Soon</span>
          </div>
        </div>

        <div className="container mx-auto px-6 text-center relative z-10 py-16">
          <h1 className="druk-style text-[3rem] sm:text-[4rem] md:text-[5rem] lg:text-[6rem] xl:text-[8rem] 2xl:text-[10rem] font-black leading-[0.85] mb-8 md:mb-12 animate-fade-in">
            <span className="text-black block mb-3 md:mb-6">AI</span>
            <span className="text-white block mb-3 md:mb-6">PLAYABLES</span>
            <span className="text-black block mb-3 md:mb-6">ARE</span>
            <span className="text-white block">NEXT</span>
          </h1>
          
          <div className="mt-8 md:mt-16">
            <button
              onClick={() => setIsModalOpen(true)}
              className="group inline-flex items-center gap-3 text-xl md:text-2xl lg:text-3xl font-medium text-white hover:text-purple-200 transition-all duration-300 animate-fade-in border border-white/30 px-6 md:px-8 py-3 md:py-4 rounded-full hover:border-purple-300/50 hover:bg-white/10"
              style={{ animationDelay: '0.4s' }}
            >
              Join Waitlist
              <ArrowRight className="w-5 h-5 md:w-6 md:h-6 group-hover:translate-x-1 transition-transform duration-200" />
            </button>
          </div>
        </div>
      </section>

      <WaitlistModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};

export default HeroSection;
