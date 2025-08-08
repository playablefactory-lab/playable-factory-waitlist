
import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import WaitlistModal from './WaitlistModal';

const CTASection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section className="section-spacing relative bg-gradient-to-b from-background/30 to-background">
        <div className="container mx-auto px-6 text-center relative z-10">
          <button
            onClick={() => setIsModalOpen(true)}
            className="group inline-flex items-center gap-3 text-xl md:text-2xl font-medium text-foreground hover:text-primary transition-all duration-300 animate-fade-in border border-foreground/20 px-8 py-4 rounded-full hover:border-primary/50"
          >
            Join Waitlist
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
          </button>
        </div>
      </section>

      <WaitlistModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};

export default CTASection;
