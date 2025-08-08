
const StoriesPanel = () => {
  return (
    <section className="py-32 relative">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-5xl mx-auto">
          <div className="text-center animate-scale-in">
            <div className="w-full h-64 bg-gradient-to-br from-primary/20 to-purple-500/20 rounded-3xl mb-8 flex items-center justify-center">
              <div className="w-20 h-20 bg-primary/40 rounded-full animate-pulse"></div>
            </div>
            <h3 className="font-display text-3xl font-bold text-foreground">
              AI Adapts
            </h3>
          </div>
          
          <div className="text-center animate-scale-in" style={{ animationDelay: '0.2s' }}>
            <div className="w-full h-64 bg-gradient-to-br from-purple-500/20 to-primary/20 rounded-3xl mb-8 flex items-center justify-center">
              <div className="grid grid-cols-3 gap-2">
                {Array.from({ length: 9 }).map((_, i) => (
                  <div key={i} className="w-6 h-6 bg-gradient-to-br from-primary/60 to-purple-500/60 rounded" />
                ))}
              </div>
            </div>
            <h3 className="font-display text-3xl font-bold text-foreground">
              Zero Code
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StoriesPanel;
