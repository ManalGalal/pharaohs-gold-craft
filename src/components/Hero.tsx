import { ChevronDown } from "lucide-react";
import { Button } from "./ui/button";
import heroImage from "@/assets/hero-pharaoh.jpg";

export const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/90" />
      </div>

      {/* Animated golden particles effect */}
      <div className="absolute inset-0 hieroglyph-pattern opacity-30" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center animate-fade-in">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Egyptian symbol decoration */}
          <div className="flex items-center justify-center space-x-4 mb-6 animate-float">
            <div className="w-16 h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />
            <span className="text-6xl">𓂀</span>
            <div className="w-16 h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />
          </div>

          <h1 className="font-cinzel font-bold text-5xl md:text-7xl lg:text-8xl mb-6 animate-slide-up">
            <span className="bg-gradient-to-r from-primary via-gold-light to-primary bg-clip-text text-transparent inline-block animate-shimmer bg-[length:200%_100%]">
              Treasures of the Pharaohs
            </span>
          </h1>

          <p className="font-cormorant text-xl md:text-2xl lg:text-3xl text-foreground/90 mb-8 max-w-3xl mx-auto leading-relaxed animate-slide-up" style={{ animationDelay: "0.2s" }}>
            Discover authentic handcrafted Egyptian masterpieces. Each piece tells a story of ancient civilization, 
            crafted with the same dedication that built the pyramids.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up" style={{ animationDelay: "0.4s" }}>
            <Button 
              size="lg" 
              className="font-cinzel text-lg px-8 py-6 bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary transition-all duration-300 text-black-primary font-bold gold-glow-lg hover:scale-105"
            >
              Explore Collection
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="font-cinzel text-lg px-8 py-6 border-2 border-primary text-primary hover:bg-primary hover:text-black-primary transition-all duration-300 hover:scale-105"
            >
              Learn Our Story
            </Button>
          </div>

          {/* Egyptian decorative elements */}
          <div className="flex items-center justify-center space-x-8 mt-12 text-primary/60 animate-fade-in" style={{ animationDelay: "0.6s" }}>
            <span className="text-4xl animate-float" style={{ animationDelay: "0s" }}>𓆃</span>
            <span className="text-4xl animate-float" style={{ animationDelay: "0.5s" }}>𓁿</span>
            <span className="text-4xl animate-float" style={{ animationDelay: "1s" }}>𓋹</span>
            <span className="text-4xl animate-float" style={{ animationDelay: "1.5s" }}>𓊽</span>
          </div>
        </div>

        {/* Scroll indicator */}
        <a 
          href="#collection"
          className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce cursor-pointer"
        >
          <ChevronDown className="w-8 h-8 text-primary" />
        </a>
      </div>
    </section>
  );
};
