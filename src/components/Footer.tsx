
const Footer = () => {
  return (
    <footer className="border-t border-border py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center gap-3 mb-4 md:mb-0">
            <img 
              src="/lovable-uploads/7f6bca4d-2236-4a43-980a-5df158fce3c2.png" 
              alt="Playable Factory" 
              className="h-6 w-auto"
            />
          </div>
          <div className="flex items-center gap-8 text-sm text-muted-foreground">
            <span>© 2025 Playable Factory</span>
            <a href="#" className="hover:text-foreground transition-colors">Privacy</a>
            <a href="#" className="hover:text-foreground transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
