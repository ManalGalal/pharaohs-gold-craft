import { ShoppingCart, Eye } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";

interface ProductCardProps {
  name: string;
  price: number;
  image: string;
  description: string;
  category: string;
  subcategory: string;
}

export const ProductCard = ({ name, price, image, description }: ProductCardProps) => {
  return (
    <Card className="group relative overflow-hidden border-primary/20 bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-500 hover:scale-105 cursor-pointer">
      {/* Product Image */}
      <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-8xl text-primary/20 group-hover:text-primary/30 transition-colors duration-500">
            𓋹
          </span>
        </div>
        
        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center gap-2">
          <Button
            size="icon"
            variant="ghost"
            className="bg-primary/20 backdrop-blur-sm hover:bg-primary hover:text-black-primary transition-all"
          >
            <Eye className="w-5 h-5" />
          </Button>
          <Button
            size="icon"
            variant="ghost"
            className="bg-primary/20 backdrop-blur-sm hover:bg-primary hover:text-black-primary transition-all"
          >
            <ShoppingCart className="w-5 h-5" />
          </Button>
        </div>
      </div>

      {/* Product Info */}
      <CardContent className="p-6 relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
        
        <h3 className="font-cinzel font-bold text-xl mb-2 text-foreground group-hover:text-primary transition-colors duration-300">
          {name}
        </h3>
        
        <p className="font-cormorant text-foreground/70 text-sm mb-4 line-clamp-2">
          {description}
        </p>

        <div className="flex items-center justify-between">
          <div>
            <span className="font-cinzel text-2xl font-bold text-primary">${price}</span>
            <span className="font-cormorant text-sm text-foreground/50 ml-2">USD</span>
          </div>
          
          <Button
            size="sm"
            className="bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary text-black-primary font-cinzel font-bold"
          >
            Add to Cart
          </Button>
        </div>

        {/* Decorative corner */}
        <div className="absolute bottom-6 right-6 text-primary/10 group-hover:text-primary/30 transition-colors duration-500">
          <span className="text-3xl">𓂀</span>
        </div>
      </CardContent>
    </Card>
  );
};
