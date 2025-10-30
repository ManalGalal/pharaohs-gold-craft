import { Facebook, Instagram, Twitter, Mail } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="relative border-t border-primary/20 bg-black-secondary py-12 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center gold-glow">
                <span className="text-black-primary font-cinzel font-bold text-xl">𓂀</span>
              </div>
              <span className="font-cinzel font-bold text-xl bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Pharaoh's Treasures
              </span>
            </div>
            <p className="font-cormorant text-foreground/60 text-sm">
              Preserving the legacy of ancient Egyptian craftsmanship for the modern world.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-cinzel font-bold text-primary mb-4">Quick Links</h3>
            <ul className="space-y-2 font-cormorant">
              <li><a href="#home" className="text-foreground/60 hover:text-primary transition-colors">Home</a></li>
              <li><a href="#collection" className="text-foreground/60 hover:text-primary transition-colors">Collection</a></li>
              <li><a href="#about" className="text-foreground/60 hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#contact" className="text-foreground/60 hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="font-cinzel font-bold text-primary mb-4">Categories</h3>
            <ul className="space-y-2 font-cormorant">
              <li><a href="#" className="text-foreground/60 hover:text-primary transition-colors">Accessories</a></li>
              <li><a href="#" className="text-foreground/60 hover:text-primary transition-colors">Souvenirs</a></li>
              <li><a href="#" className="text-foreground/60 hover:text-primary transition-colors">Antiquities</a></li>
              <li><a href="#" className="text-foreground/60 hover:text-primary transition-colors">Clothing</a></li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="font-cinzel font-bold text-primary mb-4">Connect With Us</h3>
            <div className="flex space-x-4 mb-4">
              <a href="#" className="w-10 h-10 rounded-full border border-primary/30 flex items-center justify-center hover:bg-primary hover:text-black-primary transition-all duration-300 hover:gold-glow">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-primary/30 flex items-center justify-center hover:bg-primary hover:text-black-primary transition-all duration-300 hover:gold-glow">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-primary/30 flex items-center justify-center hover:bg-primary hover:text-black-primary transition-all duration-300 hover:gold-glow">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-primary/30 flex items-center justify-center hover:bg-primary hover:text-black-primary transition-all duration-300 hover:gold-glow">
                <Mail className="w-5 h-5" />
              </a>
            </div>
            <p className="font-cormorant text-foreground/60 text-sm">
              Subscribe to our newsletter for exclusive offers
            </p>
          </div>
        </div>

        {/* Decorative line */}
        <div className="h-px bg-gradient-to-r from-transparent via-primary to-transparent my-8" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="font-cormorant text-foreground/40 text-sm text-center md:text-left">
            © 2025 Pharaoh's Treasures. Crafted with reverence for ancient traditions.
          </p>
          <div className="flex items-center space-x-4 text-foreground/40 text-2xl">
            <span className="animate-float">𓆃</span>
            <span className="animate-float" style={{ animationDelay: "0.5s" }}>𓁿</span>
            <span className="animate-float" style={{ animationDelay: "1s" }}>𓊽</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
