
import { Star, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Product } from '@/types';
import { useNavigate } from 'react-router-dom';

interface DiscountSectionProps {
  onAddToCart: (productId: number) => void;
}

const DiscountSection = ({ onAddToCart }: DiscountSectionProps) => {
  const navigate = useNavigate();

  const discountProducts: Product[] = [
    {
      id: 101,
      name: "Assam Gold Blend",
      price: "₹290",
      originalPrice: "₹450",
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=500&h=400&fit=crop&crop=center",
      rating: 4.6,
      reviews: 98,
      badge: "35% OFF"
    },
    {
      id: 102,
      name: "Chamomile Dreams",
      price: "₹240",
      originalPrice: "₹350",
      image: "https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=500&h=400&fit=crop&crop=center",
      rating: 4.5,
      reviews: 67,
      badge: "31% OFF"
    },
    {
      id: 103,
      name: "Spiced Cardamom Tea",
      price: "₹320",
      originalPrice: "₹480",
      image: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=500&h=400&fit=crop&crop=center",
      rating: 4.7,
      reviews: 134,
      badge: "33% OFF"
    },
    {
      id: 104,
      name: "White Peony Tea",
      price: "₹420",
      originalPrice: "₹650",
      image: "https://images.unsplash.com/photo-1571934811356-5cc061b6821f?w=500&h=400&fit=crop&crop=center",
      rating: 4.8,
      reviews: 89,
      badge: "35% OFF"
    },
    {
      id: 105,
      name: "Lemon Ginger Wellness",
      price: "₹180",
      originalPrice: "₹280",
      image: "https://images.unsplash.com/photo-1627435601361-ec25f5b1d0e5?w=500&h=400&fit=crop&crop=center",
      rating: 4.4,
      reviews: 156,
      badge: "36% OFF"
    }
  ];

  const handleProductClick = (productId: number) => {
    navigate(`/product/${productId}`);
  };

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 mb-3">
            <Clock className="h-6 w-6 text-red-600 animate-pulse" />
            <h2 className="text-3xl font-bold text-red-900">Flash Sale</h2>
            <Clock className="h-6 w-6 text-red-600 animate-pulse" />
          </div>
          <p className="text-lg text-red-700 max-w-2xl mx-auto mb-2">
            Limited time offers on premium tea collection
          </p>
          <Badge className="bg-red-600 text-white px-3 py-1 animate-bounce">
            Ends Soon!
          </Badge>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {discountProducts.map((product) => (
            <Card 
              key={product.id} 
              className="group hover:shadow-lg transition-all duration-300 overflow-hidden border-red-200 relative cursor-pointer"
              onClick={() => handleProductClick(product.id)}
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-500 to-pink-500"></div>
              <div className="relative">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.src = `https://via.placeholder.com/500x400/dc2626/ffffff?text=${encodeURIComponent(product.name)}`;
                  }}
                />
                <Badge className="absolute top-2 left-2 bg-red-600 text-white font-bold text-xs">
                  {product.badge}
                </Badge>
              </div>
              
              <div className="p-4 space-y-2">
                <div>
                  <h3 className="text-sm font-semibold text-gray-900 mb-1 line-clamp-2">{product.name}</h3>
                  <div className="flex items-center space-x-1 mb-2">
                    <div className="flex items-center">
                      <Star className="h-3 w-3 text-slate-600 fill-current" />
                      <span className="ml-1 text-xs text-gray-600">{product.rating}</span>
                    </div>
                    <span className="text-xs text-gray-500">({product.reviews})</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-1">
                    <span className="text-lg font-bold text-red-600">{product.price}</span>
                    <span className="text-sm text-gray-400 line-through">{product.originalPrice}</span>
                  </div>
                </div>
                
                <Button 
                  onClick={(e) => {
                    e.stopPropagation();
                    onAddToCart(product.id);
                  }}
                  className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold text-xs py-2"
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

export default DiscountSection;
