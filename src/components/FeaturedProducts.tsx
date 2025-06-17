
import { Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Product } from '@/types';
import { useNavigate } from 'react-router-dom';

interface FeaturedProductsProps {
  onAddToCart: (productId: number) => void;
}

const FeaturedProducts = ({ onAddToCart }: FeaturedProductsProps) => {
  const navigate = useNavigate();

  const featuredProducts: Product[] = [
    {
      id: 1,
      name: "Premium Earl Grey",
      price: "₹450",
      originalPrice: "₹500",
      image: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
      rating: 4.8,
      reviews: 124,
      badge: "Bestseller"
    },
    {
      id: 2,
      name: "Himalayan Green Tea",
      price: "₹380",
      originalPrice: "₹420",
      image: "https://images.unsplash.com/photo-1627435601361-ec25f5b1d0e5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
      rating: 4.9,
      reviews: 89,
      badge: "Organic"
    },
    {
      id: 3,
      name: "Royal Masala Chai",
      price: "₹320",
      originalPrice: "₹360",
      image: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
      rating: 4.7,
      reviews: 156,
      badge: "Traditional"
    },
    {
      id: 4,
      name: "Darjeeling Black Tea",
      price: "₹520",
      originalPrice: "₹580",
      image: "https://images.unsplash.com/photo-1594631661960-21365d68b11b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
      rating: 4.9,
      reviews: 201,
      badge: "Premium"
    }
  ];

  const handleProductClick = (productId: number) => {
    navigate(`/product/${productId}`);
  };

  return (
    <section id="products" className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Featured Products</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Handpicked selections from our premium tea collection
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredProducts.map((product) => (
            <Card 
              key={product.id} 
              className="group hover:shadow-xl transition-all duration-300 overflow-hidden border cursor-pointer"
              onClick={() => handleProductClick(product.id)}
            >
              <div className="relative">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.src = `https://via.placeholder.com/500x400/3b82f6/ffffff?text=${encodeURIComponent(product.name)}`;
                  }}
                />
                <Badge className="absolute top-3 left-3 bg-blue-600 text-white">
                  {product.badge}
                </Badge>
              </div>
              
              <div className="p-6 space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">{product.name}</h3>
                  <div className="flex items-center space-x-2 mb-3">
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-slate-600 fill-current" />
                      <span className="ml-1 text-sm text-muted-foreground">{product.rating}</span>
                    </div>
                    <span className="text-muted-foreground">({product.reviews} reviews)</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl font-bold text-foreground">{product.price}</span>
                    <span className="text-lg text-muted-foreground line-through">{product.originalPrice}</span>
                  </div>
                </div>
                
                <Button 
                  onClick={(e) => {
                    e.stopPropagation();
                    onAddToCart(product.id);
                  }}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                >
                  Add to Cart
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
