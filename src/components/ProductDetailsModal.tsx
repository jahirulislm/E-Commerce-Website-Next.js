
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Star } from 'lucide-react';
import { Product } from '@/types';

interface ProductDetailsModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
  onAddToCart: (productId: number) => void;
}

const ProductDetailsModal = ({ product, isOpen, onClose, onAddToCart }: ProductDetailsModalProps) => {
  if (!product) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-foreground">{product.name}</DialogTitle>
        </DialogHeader>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="relative">
            <img 
              src={product.image} 
              alt={product.name}
              className="w-full h-64 object-cover rounded-lg"
              onError={(e) => {
                e.currentTarget.src = `https://via.placeholder.com/500x400/3b82f6/ffffff?text=${encodeURIComponent(product.name)}`;
              }}
            />
            <Badge className="absolute top-2 left-2 bg-blue-600 text-white">
              {product.badge}
            </Badge>
          </div>
          
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="flex items-center">
                <Star className="h-5 w-5 text-slate-600 fill-current" />
                <span className="ml-1 text-lg font-semibold text-muted-foreground">{product.rating}</span>
              </div>
              <span className="text-muted-foreground">({product.reviews} reviews)</span>
            </div>
            
            <div className="flex items-center space-x-3">
              <span className="text-3xl font-bold text-foreground">{product.price}</span>
              <span className="text-lg text-muted-foreground line-through">{product.originalPrice}</span>
            </div>
            
            <div className="space-y-2">
              <h4 className="font-semibold text-foreground">Description:</h4>
              <p className="text-muted-foreground">
                Premium quality tea carefully selected from the finest gardens. 
                Experience the perfect blend of taste and aroma in every cup.
              </p>
            </div>
            
            <div className="space-y-2">
              <h4 className="font-semibold text-foreground">Features:</h4>
              <ul className="text-muted-foreground space-y-1">
                <li>• 100% Natural ingredients</li>
                <li>• Rich flavor and aroma</li>
                <li>• Perfect for any time of day</li>
                <li>• Premium packaging</li>
              </ul>
            </div>
            
            <Button 
              onClick={() => {
                onAddToCart(product.id);
                onClose();
              }}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 text-lg"
            >
              Add to Cart
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProductDetailsModal;
