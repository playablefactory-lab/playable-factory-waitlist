
import { useState } from 'react';
import WaitlistModal from './WaitlistModal';

const Navigation = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img 
              src="/lovable-uploads/7f6bca4d-2236-4a43-980a-5df158fce3c2.png" 
              alt="Playable Factory" 
              className="h-8 w-auto"
            />
          </div>
          
          <button
            onClick={() => setIsModalOpen(true)}
            className="text-foreground hover:text-primary transition-colors duration-200 font-medium"
          >
            Join Waitlist
          </button>
        </div>
      </nav>

      <WaitlistModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};

export default Navigation;
