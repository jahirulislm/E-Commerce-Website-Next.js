
import { useState } from 'react';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import LogoSlider from '@/components/LogoSlider';
import DiscountSection from '@/components/DiscountSection';
import CategoriesSection from '@/components/CategoriesSection';
import FeaturedProducts from '@/components/FeaturedProducts';
import AboutSection from '@/components/AboutSection';
import Footer from '@/components/Footer';
import SearchResults from '@/components/SearchResults';
import { SearchProvider } from '@/contexts/SearchContext';
import { Product } from '@/types';

const Index = () => {
  const [cartItems, setCartItems] = useState(0);

  const addToCart = (productId: number) => {
    setCartItems(prev => prev + 1);
    // Toast notification could be added here
  };

  // All products data for search functionality
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

  const allProducts = [...featuredProducts, ...discountProducts];

  return (
    <SearchProvider>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-slate-50 to-gray-100">
        <Navigation cartItems={cartItems} allProducts={allProducts} />
        <HeroSection />
        <LogoSlider />
        <SearchResults onAddToCart={addToCart} />
        <DiscountSection onAddToCart={addToCart} />
        <CategoriesSection />
        <FeaturedProducts onAddToCart={addToCart} />
        <AboutSection />
        <Footer />
      </div>
    </SearchProvider>
  );
};

export default Index;
