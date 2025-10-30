import { Button } from "./ui/button";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative bg-gradient-to-b from-background to-black-secondary">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6 animate-fade-in">
            <div className="flex items-center space-x-4 mb-6">
              <span className="text-5xl">𓂀</span>
              <div className="h-px flex-1 bg-gradient-to-r from-primary to-transparent" />
            </div>
            
            <h2 className="font-cinzel font-bold text-4xl md:text-5xl mb-6 bg-gradient-to-r from-primary to-gold-light bg-clip-text text-transparent">
              The Legacy of Craftsmen
            </h2>
            
            <div className="space-y-4 font-cormorant text-lg text-foreground/80">
              <p className="leading-relaxed">
                For generations, our artisans have preserved the sacred art of Egyptian craftsmanship. 
                Each piece carries the spirit of ancient Egypt, from the golden sands of the Sahara to 
                the magnificent temples of Luxor.
              </p>
              
              <p className="leading-relaxed">
                Our master craftsmen use time-honored techniques, passed down through centuries, 
                to create authentic pieces that would make even the pharaohs proud. Every detail 
                is meticulously handcrafted with reverence for tradition.
              </p>
              
              <p className="leading-relaxed">
                When you acquire a treasure from our collection, you become part of an eternal story—
                a guardian of Egypt's magnificent heritage and artistic excellence.
              </p>
            </div>

            <div className="flex items-center space-x-8 pt-6">
              <div className="text-center">
                <div className="font-cinzel text-4xl font-bold text-primary mb-2">1000+</div>
                <div className="font-cormorant text-sm text-foreground/60">Masterpieces Created</div>
              </div>
              <div className="w-px h-16 bg-primary/20" />
              <div className="text-center">
                <div className="font-cinzel text-4xl font-bold text-primary mb-2">50+</div>
                <div className="font-cormorant text-sm text-foreground/60">Master Artisans</div>
              </div>
              <div className="w-px h-16 bg-primary/20" />
              <div className="text-center">
                <div className="font-cinzel text-4xl font-bold text-primary mb-2">3000+</div>
                <div className="font-cormorant text-sm text-foreground/60">Years of Tradition</div>
              </div>
            </div>

            <Button 
              size="lg"
              className="mt-8 font-cinzel bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary text-black-primary font-bold gold-glow hover:scale-105 transition-all duration-300"
            >
              Discover Our Story
            </Button>
          </div>

          {/* Decorative Side */}
          <div className="relative animate-fade-in-scale">
            <div className="relative aspect-square rounded-lg overflow-hidden border-2 border-primary/30 gold-glow">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent" />
              <div className="absolute inset-0 hieroglyph-pattern" />
              
              {/* Egyptian symbols */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center space-y-8">
                  <div className="text-8xl md:text-9xl text-primary/30 animate-float">𓋹</div>
                  <div className="flex items-center justify-center space-x-12">
                    <span className="text-6xl text-primary/30 animate-float" style={{ animationDelay: "0.5s" }}>𓆃</span>
                    <span className="text-6xl text-primary/30 animate-float" style={{ animationDelay: "1s" }}>𓁿</span>
                    <span className="text-6xl text-primary/30 animate-float" style={{ animationDelay: "1.5s" }}>𓊽</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
