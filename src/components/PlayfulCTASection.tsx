
import { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import WaitlistModal from './WaitlistModal';

const PlayfulCTASection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [missButtonPosition, setMissButtonPosition] = useState({ x: 25, y: 50 });
  const [isRunning, setIsRunning] = useState(false);

  const handleMissButtonHover = () => {
    if (!isRunning) {
      setIsRunning(true);
      // Ensure button moves to corners or edges where it's harder to click
      const positions = [
        { x: 15, y: 20 }, // top-left area
        { x: 15, y: 80 }, // bottom-left area
        { x: 35, y: 15 }, // top area
        { x: 35, y: 85 }, // bottom area
        { x: 20, y: 40 }, // middle-left
        { x: 30, y: 65 }, // lower-middle
      ];
      
      // Pick a random position that's different from current
      const currentPos = missButtonPosition;
      let newPos;
      do {
        newPos = positions[Math.floor(Math.random() * positions.length)];
      } while (Math.abs(newPos.x - currentPos.x) < 10 && Math.abs(newPos.y - currentPos.y) < 15);
      
      setMissButtonPosition(newPos);
      
      setTimeout(() => setIsRunning(false), 300);
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
          
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 relative max-w-4xl mx-auto">
            {/* Left side container for Miss the Future Button */}
            <div className="relative w-full md:w-1/2 h-40 md:h-60">
              <button
                className={`absolute transition-all duration-200 ease-out bg-destructive text-destructive-foreground px-6 py-3 rounded-full font-medium hover:shadow-lg ${isRunning ? 'scale-110' : ''}`}
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
            </div>
            
            {/* Right side - Join Waitlist Button */}
            <div className="w-full md:w-1/2 flex flex-col items-center justify-center">
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
