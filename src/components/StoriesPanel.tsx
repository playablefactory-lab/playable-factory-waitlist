const StoriesPanel = () => {
  const playableExamples = [
    {
      id: 1,
      title: "AI-Powered Creative Generation",
      description: "Our intelligent algorithms analyze your best-performing content and automatically generate new playable variations with fresh mechanics, themes, and interactive elements that maintain your winning formula.",
      image: "/lovable-uploads/85e9903f-c804-4bbd-8e96-a45544df08a4.png",
      bgGradient: "from-blue-900/40 to-green-500/40"
    },
    {
      id: 2,
      title: "Smart Performance Optimization",
      description: "Playable Factory's machine learning continuously monitors user engagement, identifies winning patterns, and automatically optimizes your playable ads for maximum conversion rates across all platforms.",
      image: "/lovable-uploads/85e9903f-c804-4bbd-8e96-a45544df08a4.png",
      bgGradient: "from-amber-600/40 to-orange-500/40"
    },
    {
      id: 3,
      title: "Seamless Creative Transformation",
      description: "Transform your existing video ads, static creatives, and marketing assets into engaging playable experiences. Our AI maintains your brand identity while adding interactive elements that drive results.",
      image: "/lovable-uploads/85e9903f-c804-4bbd-8e96-a45544df08a4.png",
      bgGradient: "from-purple-600/40 to-pink-500/40"
    }
  ];

  return (
    <section className="section-spacing relative bg-gradient-to-b from-transparent to-background/30">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {playableExamples.map((example, index) => (
            <div
              key={example.id}
              className="group animate-scale-in bg-card/50 backdrop-blur-sm border border-border/50 rounded-3xl overflow-hidden hover:scale-105 transition-all duration-500 hover:border-primary/30"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Image/Visual Section */}
              <div className={`relative h-80 bg-gradient-to-br ${example.bgGradient} flex items-center justify-center overflow-hidden`}>
                <div className="absolute inset-0 bg-gradient-to-br from-background/20 to-transparent"></div>
                <div className="relative z-10 w-48 h-48 bg-gradient-to-br from-primary/30 to-purple-500/30 rounded-2xl backdrop-blur-md border border-primary/20 flex items-center justify-center">
                  <div className="grid grid-cols-3 gap-2">
                    {Array.from({ length: 9 }).map((_, i) => (
                      <div 
                        key={i} 
                        className={`w-6 h-6 rounded ${i % 3 === 0 ? 'bg-primary/60' : i % 3 === 1 ? 'bg-purple-500/60' : 'bg-accent/60'} animate-pulse`}
                        style={{ animationDelay: `${i * 0.1}s` }}
                      />
                    ))}
                  </div>
                </div>
                
                {/* Floating elements for visual interest */}
                <div className="absolute top-4 right-4 w-8 h-8 bg-primary/30 rounded-full animate-float"></div>
                <div className="absolute bottom-6 left-6 w-6 h-6 bg-purple-500/30 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
              </div>

              {/* Content Section */}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                  {example.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {example.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StoriesPanel;
