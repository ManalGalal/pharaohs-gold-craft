import { Card, CardContent } from "./ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";

const creators = [
  {
    name: "Ahmed Hassan",
    craft: "Master Goldsmith",
    story: "For over 30 years, Ahmed has been crafting exquisite jewelry using techniques passed down from his grandfather. His pieces have adorned collectors worldwide.",
    achievement: "Created 500+ unique pieces",
    image: "👨‍🎨",
  },
  {
    name: "Fatima El-Sayed",
    craft: "Textile Artisan",
    story: "Fatima weaves magic into every thread, creating traditional Egyptian garments that tell stories of ancient dynasties. Her work preserves centuries-old patterns.",
    achievement: "Master of 50+ traditional patterns",
    image: "👩‍🎨",
  },
  {
    name: "Mohamed Khaled",
    craft: "Papyrus Artist",
    story: "Mohamed breathes life into ancient art forms, creating stunning papyrus paintings that capture the essence of pharaonic glory. Each piece is a masterpiece.",
    achievement: "10,000+ artworks sold globally",
    image: "🎨",
  },
  {
    name: "Nadia Ibrahim",
    craft: "Ceramic Master",
    story: "Specializing in traditional Egyptian pottery, Nadia's ceramics blend ancient designs with modern elegance, making each piece a timeless treasure.",
    achievement: "Featured in 20+ exhibitions",
    image: "🏺",
  },
];

export const CreatorsSection = () => {
  return (
    <section className="py-24 px-4 bg-gradient-to-b from-black-secondary via-background to-black-secondary relative overflow-hidden">
      {/* Light accent overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-primary/5" />
      
      <div className="container mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="flex items-center justify-center space-x-4 mb-6">
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-gold-light to-transparent" />
            <span className="text-5xl">𓁿</span>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-gold-light to-transparent" />
          </div>
          
          <h2 className="font-cinzel font-bold text-4xl md:text-5xl lg:text-6xl mb-4 bg-gradient-to-r from-gold-light via-primary to-gold-light bg-clip-text text-transparent">
            Master Artisans of Egypt
          </h2>
          
          <p className="font-cormorant text-xl md:text-2xl text-foreground/80 max-w-3xl mx-auto">
            Meet the talented creators who bring ancient Egyptian craftsmanship to life
          </p>
        </div>

        {/* Carousel */}
        <div className="relative max-w-5xl mx-auto">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {creators.map((creator, index) => (
                <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/2">
                  <Card className="group border-primary/30 bg-card/80 backdrop-blur-sm hover:border-gold-light transition-all duration-500 hover:scale-[1.02] gold-glow h-full">
                    <CardContent className="p-8">
                      {/* Creator Icon */}
                      <div className="text-7xl mb-6 text-center transform group-hover:scale-110 transition-transform duration-500">
                        {creator.image}
                      </div>

                      {/* Creator Info */}
                      <div className="text-center mb-6">
                        <h3 className="font-cinzel font-bold text-2xl text-primary group-hover:text-gold-light transition-colors duration-300 mb-2">
                          {creator.name}
                        </h3>
                        <p className="font-cormorant text-lg text-gold-light/80 mb-4">
                          {creator.craft}
                        </p>
                      </div>

                      {/* Story */}
                      <p className="font-cormorant text-foreground/80 leading-relaxed mb-6 text-center">
                        {creator.story}
                      </p>

                      {/* Achievement Badge */}
                      <div className="bg-gradient-to-r from-primary/10 to-gold-light/10 border border-primary/30 rounded-lg p-4 text-center">
                        <p className="font-cinzel text-sm text-primary font-semibold">
                          {creator.achievement}
                        </p>
                      </div>

                      {/* Decorative line */}
                      <div className="h-1 bg-gradient-to-r from-transparent via-primary to-transparent mt-6 w-0 group-hover:w-full transition-all duration-500 mx-auto" />
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="border-primary/50 bg-background/80 text-primary hover:bg-primary hover:text-black-primary hover:border-primary transition-all" />
            <CarouselNext className="border-primary/50 bg-background/80 text-primary hover:bg-primary hover:text-black-primary hover:border-primary transition-all" />
          </Carousel>
        </div>

        {/* Bottom decoration */}
        <div className="flex items-center justify-center space-x-6 mt-16 text-gold-light/40">
          <span className="text-3xl animate-float">𓋹</span>
          <span className="text-3xl animate-float" style={{ animationDelay: "0.5s" }}>𓊽</span>
          <span className="text-3xl animate-float" style={{ animationDelay: "1s" }}>𓆃</span>
        </div>
      </div>
    </section>
  );
};
