
import { Sparkles, Play, Rocket } from 'lucide-react';

const ShowcaseSection = () => {
  const cards = [{
    icon: Sparkles,
    title: 'Create'
  }, {
    icon: Play,
    title: 'Play'
  }, {
    icon: Rocket,
    title: 'Ship'
  }];

  return (
    <section className="section-spacing relative">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {cards.map((card, index) => {
            const Icon = card.icon;
            return (
              <div key={index} className="text-center p-6 rounded-lg bg-card border border-border hover:shadow-lg transition-shadow">
                <Icon className="w-12 h-12 mx-auto mb-4 text-primary" />
                <h3 className="text-xl font-semibold text-foreground">{card.title}</h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ShowcaseSection;
