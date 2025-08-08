
import { Sparkles, Play, Rocket } from 'lucide-react';

const ShowcaseSection = () => {
  const cards = [
    {
      icon: Sparkles,
      title: 'Create'
    },
    {
      icon: Play,
      title: 'Play'
    },
    {
      icon: Rocket,
      title: 'Ship'
    }
  ];

  return (
    <section className="section-spacing relative bg-gradient-to-b from-transparent to-background/50">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {cards.map((card, index) => (
            <div
              key={card.title}
              className="text-center group animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-20 h-20 mx-auto mb-8 bg-gradient-to-br from-primary/20 to-purple-500/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <card.icon className="w-10 h-10 text-primary" />
              </div>
              <h3 className="font-display text-4xl font-bold text-foreground">
                {card.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShowcaseSection;
