
import { Sparkles, Brain, Rocket } from 'lucide-react';

const ShowcaseSection = () => {
  const steps = [
    {
      icon: Sparkles,
      title: 'Create',
      description: 'Input your creative assets and ideas'
    },
    {
      icon: Brain,
      title: 'AI',
      description: 'Our AI transforms them into playable ads'
    },
    {
      icon: Rocket,
      title: 'Ship',
      description: 'Deploy high-converting playables instantly'
    }
  ];

  return (
    <section className="py-16 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Simple. Powerful. <span className="gradient-text">Automated.</span>
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 left-full w-8 transform -translate-y-1/2 translate-x-4">
                    <div className="w-full h-0.5 bg-border"></div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ShowcaseSection;
