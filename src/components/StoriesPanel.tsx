
const StoriesPanel = () => {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div className="card-premium rounded-xl p-8 group hover:scale-105 transition-all duration-300 animate-scale-in">
            <div className="w-full h-48 bg-gradient-to-br from-primary/20 to-purple-500/20 rounded-lg mb-6 flex items-center justify-center">
              <div className="w-16 h-16 bg-primary/40 rounded-full animate-pulse"></div>
            </div>
            <h3 className="font-display text-2xl font-bold mb-4 text-foreground">
              AI Adapts to Behavior
            </h3>
            <p className="text-muted-foreground">
              Every interaction feeds our learning algorithms, creating smarter, more engaging experiences with each play.
            </p>
          </div>
          
          <div className="card-premium rounded-xl p-8 group hover:scale-105 transition-all duration-300 animate-scale-in" style={{ animationDelay: '0.2s' }}>
            <div className="w-full h-48 bg-gradient-to-br from-purple-500/20 to-primary/20 rounded-lg mb-6 flex items-center justify-center">
              <div className="grid grid-cols-3 gap-2">
                {Array.from({ length: 9 }).map((_, i) => (
                  <div key={i} className="w-4 h-4 bg-gradient-to-br from-primary/60 to-purple-500/60 rounded" />
                ))}
              </div>
            </div>
            <h3 className="font-display text-2xl font-bold mb-4 text-foreground">
              Zero Code. Maximum Impact.
            </h3>
            <p className="text-muted-foreground">
              Launch sophisticated playable campaigns without a single line of code. Our platform handles the complexity.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StoriesPanel;
