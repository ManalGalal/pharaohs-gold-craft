import { Gem, Gift, Crown, Sparkles } from "lucide-react";
import { CategoryCard } from "./CategoryCard";
import accessoriesImage from "@/assets/accessories-gold.jpg";
import souvenirsImage from "@/assets/souvenirs.jpg";
import clothingImage from "@/assets/egyptian-clothing.jpg";

export const CollectionSection = () => {
  const categories = [
    {
      title: "Golden Accessories",
      description: "Exquisite handcrafted jewelry inspired by ancient Egyptian royalty",
      icon: Crown,
      image: accessoriesImage,
    },
    {
      title: "Authentic Souvenirs",
      description: "Take home a piece of Egypt's timeless heritage",
      icon: Gift,
      image: souvenirsImage,
    },
    {
      title: "Egyptian Antiquities",
      description: "Replicas of treasures from the age of the pharaohs",
      icon: Gem,
      image: accessoriesImage,
    },
    {
      title: "Traditional Clothing",
      description: "Elegant garments adorned with pharaonic patterns",
      icon: Sparkles,
      image: clothingImage,
    },
  ];

  return (
    <section id="collection" className="py-24 px-4 relative papyrus-texture">
      {/* Section decoration */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
      
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="flex items-center justify-center space-x-4 mb-6">
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />
            <span className="text-5xl">𓋹</span>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />
          </div>
          
          <h2 className="font-cinzel font-bold text-4xl md:text-5xl lg:text-6xl mb-4 bg-gradient-to-r from-primary via-gold-light to-primary bg-clip-text text-transparent">
            Our Sacred Collection
          </h2>
          
          <p className="font-cormorant text-xl md:text-2xl text-foreground/80 max-w-3xl mx-auto">
            Each masterpiece is crafted by skilled artisans, preserving techniques passed down through millennia
          </p>
        </div>

        {/* Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <div
              key={category.title}
              className="animate-fade-in-scale"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CategoryCard {...category} />
            </div>
          ))}
        </div>

        {/* Bottom decoration */}
        <div className="flex items-center justify-center space-x-6 mt-16 text-primary/40">
          <span className="text-3xl">𓆃</span>
          <span className="text-3xl">𓁿</span>
          <span className="text-3xl">𓊽</span>
        </div>
      </div>

      {/* Section decoration */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
    </section>
  );
};
