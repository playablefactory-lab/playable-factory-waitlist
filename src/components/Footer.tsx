
const Footer = () => {
  return (
    <footer className="border-t border-border py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="font-display text-lg gradient-text mb-4 md:mb-0">
            Playable Factory
          </div>
          <div className="flex items-center gap-8 text-sm text-muted-foreground">
            <span>© 2024 Playable Factory</span>
            <a href="#" className="hover:text-foreground transition-colors">Privacy</a>
            <a href="#" className="hover:text-foreground transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
