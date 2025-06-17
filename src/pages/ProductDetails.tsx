
import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Star, ArrowLeft, ShoppingCart, User } from 'lucide-react';
import { Product } from '@/types';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { SearchProvider } from '@/contexts/SearchContext';

interface Review {
  id: number;
  name: string;
  rating: number;
  comment: string;
  date: string;
}

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState<Product | null>(null);
  const [cartItems, setCartItems] = useState(0);

  // All products data (same as in Index.tsx)
  const allProducts: Product[] = [
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
    },
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

  // Dummy reviews data
  const dummyReviews: Review[] = [
    {
      id: 1,
      name: "Rajesh Kumar",
      rating: 5,
      comment: "Absolutely love this tea! The aroma is incredible and taste is perfectly balanced. Will definitely order again.",
      date: "2024-01-15"
    },
    {
      id: 2,
      name: "Priya Sharma",
      rating: 4,
      comment: "Good quality tea with authentic flavor. Packaging was excellent and delivery was quick.",
      date: "2024-01-10"
    },
    {
      id: 3,
      name: "Amit Patel",
      rating: 5,
      comment: "Best tea I've had in years! Rich flavor and perfect for morning boost. Highly recommended.",
      date: "2024-01-08"
    },
    {
      id: 4,
      name: "Sneha Gupta",
      rating: 4,
      comment: "Great taste and quality. My family loves it. The price is also reasonable for the quality provided.",
      date: "2024-01-05"
    }
  ];

  useEffect(() => {
    // Scroll to top when component mounts or id changes
    window.scrollTo(0, 0);
    
    if (id) {
      const foundProduct = allProducts.find(p => p.id === parseInt(id));
      setProduct(foundProduct || null);
    }
  }, [id]);

  const addToCart = (productId: number) => {
    setCartItems(prev => prev + 1);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`h-4 w-4 ${
          index < rating ? 'text-slate-600 fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

  const getRelatedProducts = () => {
    if (!product) return [];
    // Get 4 random products excluding the current one
    return allProducts
      .filter(p => p.id !== product.id)
      .sort(() => Math.random() - 0.5)
      .slice(0, 4);
  };

  if (!product) {
    return (
      <SearchProvider>
        <div className="min-h-screen bg-gradient-to-br from-gray-50 via-slate-50 to-gray-100">
          <Navigation cartItems={cartItems} allProducts={allProducts} />
          <div className="flex items-center justify-center min-h-[60vh]">
            <div className="text-center">
              <h1 className="text-2xl font-bold text-gray-900 mb-4">Product Not Found</h1>
              <Button onClick={() => navigate('/')} className="bg-blue-600 hover:bg-blue-700">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
              </Button>
            </div>
          </div>
          <Footer />
        </div>
      </SearchProvider>
    );
  }

  const relatedProducts = getRelatedProducts();

  return (
    <SearchProvider>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-slate-50 to-gray-100">
        <Navigation cartItems={cartItems} allProducts={allProducts} />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Button
            onClick={() => navigate('/')}
            variant="ghost"
            className="mb-6 text-gray-700 hover:text-gray-900 hover:bg-gray-100"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Products
          </Button>

          <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-8">
            <div className="grid md:grid-cols-2 gap-8 p-8">
              {/* Product Image */}
              <div className="relative">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-96 object-cover rounded-lg shadow-lg"
                  onError={(e) => {
                    e.currentTarget.src = `https://via.placeholder.com/500x400/3b82f6/ffffff?text=${encodeURIComponent(product.name)}`;
                  }}
                />
                <Badge className="absolute top-4 left-4 bg-blue-600 text-white text-lg px-3 py-1">
                  {product.badge}
                </Badge>
              </div>
              
              {/* Product Details */}
              <div className="space-y-6">
                <div>
                  <h1 className="text-4xl font-bold text-gray-900 mb-4">{product.name}</h1>
                  
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="flex items-center">
                      <Star className="h-6 w-6 text-slate-600 fill-current" />
                      <span className="ml-2 text-xl font-semibold text-gray-600">{product.rating}</span>
                    </div>
                    <span className="text-gray-500 text-lg">({product.reviews} reviews)</span>
                  </div>
                  
                  <div className="flex items-center space-x-4 mb-6">
                    <span className="text-4xl font-bold text-gray-900">{product.price}</span>
                    <span className="text-2xl text-gray-500 line-through">{product.originalPrice}</span>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Description</h3>
                    <p className="text-gray-700 text-lg leading-relaxed">
                      Premium quality tea carefully selected from the finest gardens. 
                      Experience the perfect blend of taste and aroma in every cup. 
                      Our expert tea masters have crafted this exceptional blend to deliver 
                      an unforgettable tea experience.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Key Features</h3>
                    <ul className="text-gray-700 space-y-2 text-lg">
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-gray-500 rounded-full mr-3"></span>
                        100% Natural ingredients
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-gray-500 rounded-full mr-3"></span>
                        Rich flavor and aroma
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-gray-500 rounded-full mr-3"></span>
                        Perfect for any time of day
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-gray-500 rounded-full mr-3"></span>
                        Premium packaging
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-gray-500 rounded-full mr-3"></span>
                        Ethically sourced
                      </li>
                    </ul>
                  </div>
                  
                  <div className="pt-6">
                    <Button 
                      onClick={() => addToCart(product.id)}
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 text-xl font-semibold"
                      size="lg"
                    >
                      <ShoppingCart className="mr-3 h-6 w-6" />
                      Add to Cart
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Reviews Section */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden p-8 mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Customer Reviews</h2>
            
            <div className="space-y-6">
              {dummyReviews.map((review) => (
                <div key={review.id} className="border-b border-gray-100 pb-6 last:border-b-0">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                        <User className="h-6 w-6 text-gray-600" />
                      </div>
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <h4 className="text-lg font-semibold text-gray-900">{review.name}</h4>
                        <span className="text-gray-500 text-sm">•</span>
                        <span className="text-gray-500 text-sm">{review.date}</span>
                      </div>
                      
                      <div className="flex items-center space-x-2 mb-3">
                        <div className="flex">{renderStars(review.rating)}</div>
                        <span className="text-gray-600 font-medium">({review.rating}/5)</span>
                      </div>
                      
                      <p className="text-gray-700 leading-relaxed">{review.comment}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Related Products Section */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Related Products</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((relatedProduct) => (
                <div 
                  key={relatedProduct.id} 
                  className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-4 hover:shadow-lg transition-all duration-300 cursor-pointer"
                  onClick={() => navigate(`/product/${relatedProduct.id}`)}
                >
                  <div className="relative mb-4">
                    <img 
                      src={relatedProduct.image} 
                      alt={relatedProduct.name}
                      className="w-full h-48 object-cover rounded-lg"
                      onError={(e) => {
                        e.currentTarget.src = `https://via.placeholder.com/300x200/3b82f6/ffffff?text=${encodeURIComponent(relatedProduct.name)}`;
                      }}
                    />
                    <Badge className="absolute top-2 left-2 bg-blue-600 text-white text-xs px-2 py-1">
                      {relatedProduct.badge}
                    </Badge>
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold text-gray-900 line-clamp-2">{relatedProduct.name}</h3>
                    
                    <div className="flex items-center space-x-1">
                      <div className="flex items-center">
                        <Star className="h-4 w-4 text-slate-600 fill-current" />
                        <span className="ml-1 text-sm font-medium text-gray-600">{relatedProduct.rating}</span>
                      </div>
                      <span className="text-gray-500 text-sm">({relatedProduct.reviews})</span>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <span className="text-xl font-bold text-gray-900">{relatedProduct.price}</span>
                      <span className="text-sm text-gray-500 line-through">{relatedProduct.originalPrice}</span>
                    </div>
                    
                    <Button 
                      onClick={(e) => {
                        e.stopPropagation();
                        addToCart(relatedProduct.id);
                      }}
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white mt-3"
                      size="sm"
                    >
                      <ShoppingCart className="mr-2 h-4 w-4" />
                      Add to Cart
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </SearchProvider>
  );
};

export default ProductDetails;
