
import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import WaitlistModal from './WaitlistModal';

const CTASection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-purple-600/10 pointer-events-none" />
        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="font-display text-4xl md:text-6xl font-bold gradient-text mb-8 animate-fade-in">
            Ready to Play?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-12 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Join thousands of forward-thinking brands already on the waitlist.
          </p>
          <button
            onClick={() => setIsModalOpen(true)}
            className="group inline-flex items-center gap-3 text-lg font-medium text-foreground hover:text-primary transition-all duration-300 animate-fade-in"
            style={{ animationDelay: '0.4s' }}
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
