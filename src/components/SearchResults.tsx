
import { useState } from 'react';
import { Star, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useSearch } from '@/contexts/SearchContext';
import { Product } from '@/types';
import { useNavigate } from 'react-router-dom';

interface SearchResultsProps {
  onAddToCart: (productId: number) => void;
}

const SearchResults = ({ onAddToCart }: SearchResultsProps) => {
  const { searchResults, searchQuery, isSearching, setIsSearching } = useSearch();
  const navigate = useNavigate();

  if (!isSearching) return null;

  const handleProductClick = (product: Product) => {
    setIsSearching(false); // Close search modal
    navigate(`/product/${product.id}`);
  };

  return (
    <div className="fixed inset-0 bg-black/50 z-40" onClick={() => setIsSearching(false)}>
      <div className="fixed top-20 left-1/2 transform -translate-x-1/2 w-full max-w-4xl max-h-[80vh] bg-card rounded-lg shadow-2xl z-50 overflow-hidden" onClick={(e) => e.stopPropagation()}>
        <div className="p-6 border-b bg-muted">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold text-foreground">
                Search Results for "{searchQuery}"
              </h2>
              <p className="text-muted-foreground">
                {searchResults.length} product{searchResults.length !== 1 ? 's' : ''} found
              </p>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsSearching(false)}
              className="text-foreground hover:bg-accent"
            >
              <X className="h-5 w-5" />
            </Button>
          </div>
        </div>

        <div className="overflow-y-auto max-h-[60vh] p-6">
          {searchResults.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-xl text-foreground">No products found matching your search.</p>
              <p className="text-muted-foreground mt-2">Try searching with different keywords.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {searchResults.map((product) => (
                <Card 
                  key={product.id} 
                  className="group hover:shadow-lg transition-all duration-300 overflow-hidden border cursor-pointer"
                  onClick={() => handleProductClick(product)}
                >
                  <div className="relative">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                      onError={(e) => {
                        e.currentTarget.src = `https://via.placeholder.com/500x400/3b82f6/ffffff?text=${encodeURIComponent(product.name)}`;
                      }}
                    />
                    <Badge className="absolute top-2 left-2 bg-blue-600 text-white">
                      {product.badge}
                    </Badge>
                  </div>
                  
                  <div className="p-4 space-y-2">
                    <div>
                      <h3 className="text-md font-semibold text-foreground mb-2 line-clamp-2">{product.name}</h3>
                      <div className="flex items-center space-x-2 mb-2">
                        <div className="flex items-center">
                          <Star className="h-4 w-4 text-slate-600 fill-current" />
                          <span className="ml-1 text-sm text-muted-foreground">{product.rating}</span>
                        </div>
                        <span className="text-muted-foreground text-sm">({product.reviews})</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <span className="text-lg font-bold text-foreground">{product.price}</span>
                        <span className="text-sm text-muted-foreground line-through">{product.originalPrice}</span>
                      </div>
                    </div>
                    
                    <Button 
                      onClick={(e) => {
                        e.stopPropagation();
                        onAddToCart(product.id);
                      }}
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white text-sm"
                    >
                      Add to Cart
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchResults;
