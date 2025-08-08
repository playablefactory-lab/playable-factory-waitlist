
import { Sparkles, Play, Rocket } from 'lucide-react';

const ShowcaseSection = () => {
  const cards = [
    {
      icon: Sparkles,
      title: 'Create',
      description: 'AI-powered tools that generate interactive experiences'
    },
    {
      icon: Play,
      title: 'Playtest',
      description: 'Real-time learning from user behavior and engagement'
    },
    {
      icon: Rocket,
      title: 'Ship',
      description: 'Deploy adaptive playables across any platform instantly'
    }
  ];

  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {cards.map((card, index) => (
            <div
              key={card.title}
              className="card-premium rounded-xl p-8 text-center group hover:scale-105 transition-all duration-300 hover:glow-effect animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-primary/20 to-purple-500/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <card.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-display text-2xl font-bold mb-4 text-foreground">
                {card.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShowcaseSection;
