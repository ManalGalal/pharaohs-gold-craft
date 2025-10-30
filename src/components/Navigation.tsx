import { Menu, ShoppingCart, Search, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";

export const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md border-b border-primary/20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center gold-glow">
              <span className="text-black-primary font-cinzel font-bold text-xl">𓂀</span>
            </div>
            <span className="font-cinzel font-bold text-2xl bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Pharaoh's Treasures
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="font-cormorant text-lg hover:text-primary transition-colors">
              Home
            </Link>
            <Link to="/shop" className="font-cormorant text-lg hover:text-primary transition-colors">
              Shop
            </Link>
            <a href="#collection" className="font-cormorant text-lg hover:text-primary transition-colors">
              Collection
            </a>
            <a href="#about" className="font-cormorant text-lg hover:text-primary transition-colors">
              Our Story
            </a>
            <a href="#contact" className="font-cormorant text-lg hover:text-primary transition-colors">
              Contact
            </a>
          </div>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="hidden md:flex hover:text-primary">
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="hover:text-primary relative">
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 bg-primary text-black-primary text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                0
              </span>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-4 border-t border-primary/20 animate-fade-in">
            <Link
              to="/"
              className="block font-cormorant text-lg hover:text-primary transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/shop"
              className="block font-cormorant text-lg hover:text-primary transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Shop
            </Link>
            <a
              href="#collection"
              className="block font-cormorant text-lg hover:text-primary transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Collection
            </a>
            <a
              href="#about"
              className="block font-cormorant text-lg hover:text-primary transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Our Story
            </a>
            <a
              href="#contact"
              className="block font-cormorant text-lg hover:text-primary transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};
