
import { useState, useEffect } from 'react';
import { ShoppingCart, Menu, X, Leaf, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Link, useNavigate } from 'react-router-dom';
import { useSearch } from '@/contexts/SearchContext';
import ThemeToggle from '@/components/ThemeToggle';

interface NavigationProps {
  cartItems: number;
  allProducts: any[];
}

const Navigation = ({ cartItems, allProducts }: NavigationProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { searchQuery, setSearchQuery, setSearchResults, setIsSearching } = useSearch();
  const navigate = useNavigate();

  useEffect(() => {
    if (searchQuery.trim()) {
      const filtered = allProducts.filter(product =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.badge.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setSearchResults(filtered);
      setIsSearching(true);
    } else {
      setSearchResults([]);
      setIsSearching(false);
    }
  }, [searchQuery, allProducts, setSearchResults, setIsSearching]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleNavigation = (section: string) => {
    navigate('/');
    setTimeout(() => {
      const element = document.getElementById(section);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-card/90 backdrop-blur-md border-b border-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Leaf className="h-8 w-8 text-primary" />
            <span className="text-2xl font-bold text-foreground">TeaHaven</span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => handleNavigation('home')} 
              className="text-foreground hover:text-primary font-medium transition-colors"
            >
              Home
            </button>
            <button 
              onClick={() => handleNavigation('products')} 
              className="text-foreground hover:text-primary font-medium transition-colors"
            >
              Products
            </button>
            <button 
              onClick={() => handleNavigation('categories')} 
              className="text-foreground hover:text-primary font-medium transition-colors"
            >
              Categories
            </button>
            <button 
              onClick={() => handleNavigation('about')} 
              className="text-foreground hover:text-primary font-medium transition-colors"
            >
              About
            </button>
            <Link to="/contact" className="text-foreground hover:text-primary font-medium transition-colors">Contact</Link>
          </div>

          <div className="flex items-center space-x-4">
            {/* Search Bar */}
            <div className="relative hidden md:block">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                type="text"
                placeholder="Search teas..."
                value={searchQuery}
                onChange={handleSearchChange}
                className="pl-10 w-64"
              />
            </div>

            <ThemeToggle />

            <Button variant="outline" className="relative">
              <ShoppingCart className="h-5 w-5" />
              {cartItems > 0 && (
                <Badge className="absolute -top-2 -right-2 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs bg-primary">
                  {cartItems}
                </Badge>
              )}
            </Button>
            
            {/* Mobile menu button */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-card border-t border-border">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {/* Mobile Search */}
            <div className="relative px-3 py-2">
              <Search className="absolute left-6 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                type="text"
                placeholder="Search teas..."
                value={searchQuery}
                onChange={handleSearchChange}
                className="pl-10"
              />
            </div>
            <button 
              onClick={() => handleNavigation('home')} 
              className="block w-full text-left px-3 py-2 text-foreground hover:text-primary"
            >
              Home
            </button>
            <button 
              onClick={() => handleNavigation('products')} 
              className="block w-full text-left px-3 py-2 text-foreground hover:text-primary"
            >
              Products
            </button>
            <button 
              onClick={() => handleNavigation('categories')} 
              className="block w-full text-left px-3 py-2 text-foreground hover:text-primary"
            >
              Categories
            </button>
            <button 
              onClick={() => handleNavigation('about')} 
              className="block w-full text-left px-3 py-2 text-foreground hover:text-primary"
            >
              About
            </button>
            <Link to="/contact" className="block px-3 py-2 text-foreground hover:text-primary" onClick={() => setIsMenuOpen(false)}>Contact</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
