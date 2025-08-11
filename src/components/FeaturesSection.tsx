
const FeaturesSection = () => {
  const features = [
    {
      title: "AI-Powered Generation",
      description: "Transform any creative into an interactive playable ad using advanced AI algorithms."
    },
    {
      title: "Performance Optimization",
      description: "Automatically optimize your playables for maximum engagement and conversion rates."
    },
    {
      title: "Instant Deployment",
      description: "Ship your playable ads across all major platforms with one-click deployment."
    }
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Why Choose <span className="gradient-text">Playable Factory</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            The future of advertising is interactive. Join the revolution.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 bg-background rounded-lg border border-border hover:shadow-lg transition-shadow"
            >
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
