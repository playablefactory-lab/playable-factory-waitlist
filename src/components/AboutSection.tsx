
const AboutSection = () => {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display text-4xl md:text-5xl font-bold gradient-text mb-12 animate-fade-in">
            The Future of Interactive Advertising
          </h2>
          <div className="space-y-8 text-lg md:text-xl text-muted-foreground leading-relaxed animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <p>
              We upgraded to SaaS, embedded AI, and evolved into a gamification platform—serving gaming and massive non-gaming brands alike.
            </p>
            <p>
              Our playables don't just engage; they learn, adapt, and optimize in real-time, creating personalized experiences that drive unprecedented conversion rates.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
