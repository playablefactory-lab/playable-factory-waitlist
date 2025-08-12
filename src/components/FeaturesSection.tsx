
import { Zap, TrendingUp, Rocket } from 'lucide-react';

const FeaturesSection = () => {
  const features = [{
    title: "AI-Powered Generation",
    description: "Transform any creative into an interactive playable ad using advanced AI algorithms.",
    icon: Zap
  }, {
    title: "Performance Optimization", 
    description: "Automatically optimize your playables for maximum engagement and conversion rates.",
    icon: TrendingUp
  }, {
    title: "Instant Deployment",
    description: "Ship your playable ads across all major platforms with one-click deployment.",
    icon: Rocket
  }];

  return (
    <section className="section-spacing relative bg-gradient-to-b from-transparent to-background/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Built for <span className="gradient-text">Performance</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Everything you need to create, optimize, and deploy high-converting playable ads at scale.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-8 hover:scale-105 transition-all duration-300 hover:border-primary/30"
              >
                <div className="w-16 h-16 mb-6 bg-primary/10 rounded-2xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
