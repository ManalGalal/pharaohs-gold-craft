import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ProductCard } from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { Filter } from "lucide-react";

const categories = [
  { id: "all", name: "All Products", subcategories: [] },
  {
    id: "accessories",
    name: "Accessories",
    subcategories: ["Jewelry", "Scarabs", "Amulets", "Rings"],
  },
  {
    id: "clothing",
    name: "Clothing",
    subcategories: ["Galabeya", "Shawls", "Headwear", "Robes"],
  },
  {
    id: "antiquities",
    name: "Antiquities",
    subcategories: ["Statues", "Masks", "Scrolls", "Tablets"],
  },
  {
    id: "souvenirs",
    name: "Souvenirs",
    subcategories: ["Papyrus", "Ceramics", "Paintings", "Miniatures"],
  },
];

const products = [
  {
    id: 1,
    name: "Golden Scarab Necklace",
    category: "accessories",
    subcategory: "Jewelry",
    price: 299,
    image: "/placeholder.svg",
    description: "Handcrafted golden scarab with intricate hieroglyphic details",
  },
  {
    id: 2,
    name: "Pharaoh's Ring",
    category: "accessories",
    subcategory: "Rings",
    price: 189,
    image: "/placeholder.svg",
    description: "Royal ring adorned with ancient Egyptian symbols",
  },
  {
    id: 3,
    name: "Traditional Galabeya",
    category: "clothing",
    subcategory: "Galabeya",
    price: 450,
    image: "/placeholder.svg",
    description: "Elegant traditional Egyptian robe with golden embroidery",
  },
  {
    id: 4,
    name: "Queen's Shawl",
    category: "clothing",
    subcategory: "Shawls",
    price: 210,
    image: "/placeholder.svg",
    description: "Luxurious silk shawl with pharaonic patterns",
  },
  {
    id: 5,
    name: "Anubis Statue",
    category: "antiquities",
    subcategory: "Statues",
    price: 680,
    image: "/placeholder.svg",
    description: "Detailed replica of the ancient guardian of the underworld",
  },
  {
    id: 6,
    name: "Tutankhamun Mask Replica",
    category: "antiquities",
    subcategory: "Masks",
    price: 890,
    image: "/placeholder.svg",
    description: "Museum-quality replica of the iconic golden mask",
  },
  {
    id: 7,
    name: "Papyrus Painting",
    category: "souvenirs",
    subcategory: "Papyrus",
    price: 120,
    image: "/placeholder.svg",
    description: "Authentic papyrus with hand-painted Egyptian scenes",
  },
  {
    id: 8,
    name: "Ceramic Vase Set",
    category: "souvenirs",
    subcategory: "Ceramics",
    price: 155,
    image: "/placeholder.svg",
    description: "Traditional ceramic vases with hieroglyphic motifs",
  },
  {
    id: 9,
    name: "Ankh Amulet",
    category: "accessories",
    subcategory: "Amulets",
    price: 95,
    image: "/placeholder.svg",
    description: "Symbol of eternal life in pure gold finish",
  },
  {
    id: 10,
    name: "Sphinx Miniature",
    category: "souvenirs",
    subcategory: "Miniatures",
    price: 78,
    image: "/placeholder.svg",
    description: "Detailed miniature of the Great Sphinx of Giza",
  },
  {
    id: 11,
    name: "Royal Headwear",
    category: "clothing",
    subcategory: "Headwear",
    price: 175,
    image: "/placeholder.svg",
    description: "Traditional Egyptian headdress with golden accents",
  },
  {
    id: 12,
    name: "Ancient Scroll Replica",
    category: "antiquities",
    subcategory: "Scrolls",
    price: 320,
    image: "/placeholder.svg",
    description: "Handwritten replica of ancient Egyptian wisdom",
  },
];

const Shop = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedSubcategory, setSelectedSubcategory] = useState<string | null>(null);
  const [showFilters, setShowFilters] = useState(false);

  const currentCategory = categories.find((cat) => cat.id === selectedCategory);

  const filteredProducts = products.filter((product) => {
    if (selectedCategory === "all") return true;
    if (selectedSubcategory) {
      return product.category === selectedCategory && product.subcategory === selectedSubcategory;
    }
    return product.category === selectedCategory;
  });

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 bg-gradient-to-b from-black-secondary to-background relative overflow-hidden">
        <div className="absolute inset-0 hieroglyph-pattern opacity-5" />
        <div className="container mx-auto text-center relative z-10">
          <div className="flex items-center justify-center space-x-4 mb-6">
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />
            <span className="text-5xl">𓋹</span>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />
          </div>
          
          <h1 className="font-cinzel font-bold text-5xl md:text-7xl mb-6 bg-gradient-to-r from-primary via-gold-light to-primary bg-clip-text text-transparent animate-fade-in">
            Sacred Marketplace
          </h1>
          
          <p className="font-cormorant text-xl md:text-2xl text-foreground/80 max-w-3xl mx-auto animate-fade-in">
            Discover authentic Egyptian treasures handcrafted by master artisans
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <aside className="lg:w-64 space-y-6">
            <div className="flex items-center justify-between lg:justify-start">
              <h3 className="font-cinzel text-2xl font-bold text-primary flex items-center gap-2">
                <Filter className="w-5 h-5" />
                Categories
              </h3>
              <Button
                variant="ghost"
                size="sm"
                className="lg:hidden"
                onClick={() => setShowFilters(!showFilters)}
              >
                {showFilters ? "Hide" : "Show"}
              </Button>
            </div>

            <div className={`space-y-2 ${showFilters ? "block" : "hidden lg:block"}`}>
              {categories.map((category) => (
                <div key={category.id}>
                  <Button
                    variant={selectedCategory === category.id ? "default" : "ghost"}
                    className={`w-full justify-start font-cormorant text-lg ${
                      selectedCategory === category.id
                        ? "bg-gradient-to-r from-primary to-secondary text-black-primary hover:from-secondary hover:to-primary"
                        : "hover:text-primary"
                    }`}
                    onClick={() => {
                      setSelectedCategory(category.id);
                      setSelectedSubcategory(null);
                    }}
                  >
                    {category.name}
                  </Button>

                  {/* Subcategories */}
                  {selectedCategory === category.id && category.subcategories.length > 0 && (
                    <div className="ml-4 mt-2 space-y-1 animate-fade-in">
                      {category.subcategories.map((sub) => (
                        <Button
                          key={sub}
                          variant="ghost"
                          size="sm"
                          className={`w-full justify-start font-cormorant ${
                            selectedSubcategory === sub ? "text-primary" : "text-foreground/60"
                          } hover:text-primary`}
                          onClick={() => setSelectedSubcategory(sub)}
                        >
                          {sub}
                        </Button>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Decorative element */}
            <div className="hidden lg:block pt-6">
              <div className="border border-primary/20 rounded-lg p-6 bg-gradient-to-br from-primary/5 to-transparent">
                <p className="text-6xl text-center text-primary/30 animate-float">𓂀</p>
              </div>
            </div>
          </aside>

          {/* Products Grid */}
          <main className="flex-1">
            <div className="mb-8">
              <h2 className="font-cinzel text-3xl font-bold text-foreground mb-2">
                {selectedSubcategory || currentCategory?.name || "All Products"}
              </h2>
              <p className="font-cormorant text-foreground/60">
                {filteredProducts.length} treasures found
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product, index) => (
                <div
                  key={product.id}
                  className="animate-fade-in-scale"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <ProductCard {...product} />
                </div>
              ))}
            </div>

            {filteredProducts.length === 0 && (
              <div className="text-center py-16">
                <p className="text-6xl mb-4 text-primary/20">𓁿</p>
                <p className="font-cormorant text-2xl text-foreground/60">
                  No treasures found in this category
                </p>
              </div>
            )}
          </main>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Shop;
