
import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import WaitlistModal from './WaitlistModal';

const CTASection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section className="py-32 relative">
        <div className="container mx-auto px-6 text-center relative z-10">
          <button
            onClick={() => setIsModalOpen(true)}
            className="group inline-flex items-center gap-3 text-2xl font-medium text-foreground hover:text-primary transition-all duration-300 animate-fade-in"
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

export default CTASection;
