import { LucideIcon } from "lucide-react";
import { Card } from "./ui/card";

interface CategoryCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  image: string;
}

export const CategoryCard = ({ title, description, icon: Icon, image }: CategoryCardProps) => {
  return (
    <Card className="group relative overflow-hidden border-primary/20 bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-500 hover:scale-105 cursor-pointer">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/40 group-hover:from-black/90 group-hover:via-black/70 transition-all duration-500" />
      </div>

      {/* Content */}
      <div className="relative z-10 p-8 h-80 flex flex-col justify-end">
        <div className="mb-4 transform transition-transform duration-500 group-hover:-translate-y-2">
          <div className="w-16 h-16 rounded-full bg-primary/10 backdrop-blur-md flex items-center justify-center mb-4 border border-primary/30 group-hover:border-primary gold-glow transition-all duration-500">
            <Icon className="w-8 h-8 text-primary" />
          </div>
          
          <h3 className="font-cinzel font-bold text-2xl mb-2 text-primary group-hover:text-gold-light transition-colors duration-300">
            {title}
          </h3>
          
          <p className="font-cormorant text-foreground/80 text-lg opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
            {description}
          </p>
        </div>

        {/* Decorative line */}
        <div className="h-1 bg-gradient-to-r from-primary/0 via-primary to-primary/0 w-0 group-hover:w-full transition-all duration-500" />
      </div>

      {/* Hieroglyphic pattern overlay */}
      <div className="absolute inset-0 hieroglyph-pattern opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
    </Card>
  );
};
