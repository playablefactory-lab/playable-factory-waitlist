
import { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import WaitlistModal from './WaitlistModal';

const PlayfulCTASection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [missButtonPosition, setMissButtonPosition] = useState({ x: 50, y: 50 });
  const [isRunning, setIsRunning] = useState(false);

  const handleMissButtonHover = () => {
    if (!isRunning) {
      setIsRunning(true);
      const newX = Math.random() * 60 + 20; // Keep between 20-80%
      const newY = Math.random() * 40 + 30; // Keep between 30-70%
      setMissButtonPosition({ x: newX, y: newY });
      
      setTimeout(() => setIsRunning(false), 1000);
    }
  };

  return (
    <>
      <section className="py-20 relative bg-gradient-to-b from-background to-muted/20 min-h-[400px]">
        <div className="container mx-auto px-6 text-center relative">
          <h2 className="text-4xl font-bold text-foreground mb-6">
            Don't Get Left Behind
          </h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            The future of advertising is here. Choose your path.
          </p>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 relative">
            {/* Miss the Future Button - Runs away from mouse */}
            <button
              className={`absolute transition-all duration-500 ease-out bg-destructive text-destructive-foreground px-6 py-3 rounded-full font-medium hover:shadow-lg ${isRunning ? 'scale-110' : ''}`}
              style={{
                left: `${missButtonPosition.x}%`,
                top: `${missButtonPosition.y}%`,
                transform: 'translate(-50%, -50%)'
              }}
              onMouseEnter={handleMissButtonHover}
              onTouchStart={handleMissButtonHover}
            >
              Miss the Future
            </button>
            
            {/* Join Waitlist Button - Static */}
            <div className="relative z-10">
              <button
                onClick={() => setIsModalOpen(true)}
                className="group inline-flex items-center gap-3 text-xl font-medium text-white bg-primary hover:bg-primary/90 transition-all duration-300 px-8 py-4 rounded-full shadow-lg hover:shadow-xl"
              >
                Join the Revolution
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
              </button>
              <p className="text-sm text-muted-foreground mt-3">
                Be among the first to access AI-powered playable ads
              </p>
            </div>
          </div>
        </div>
      </section>

      <WaitlistModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};

export default PlayfulCTASection;
