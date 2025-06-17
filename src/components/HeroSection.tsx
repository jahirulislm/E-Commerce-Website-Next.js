
import { Star, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const HeroSection = () => {
  return (
    <section id="home" className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-50/30 to-indigo-50/30"></div>
      <div className="max-w-7xl mx-auto relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge className="bg-blue-600 text-white border-blue-600">Premium Quality Since 1985</Badge>
              <h1 className="text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Discover the
                <span className="text-blue-600 block">Perfect Tea</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                From the finest gardens to your cup. Experience the art of tea with our carefully curated collection of premium teas from around the world.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg">
                Shop Now
              </Button>
              <Button size="lg" variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 text-lg">
                Learn More
              </Button>
            </div>

            <div className="flex items-center space-x-8 pt-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">1000+</div>
                <div className="text-muted-foreground text-sm">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">50+</div>
                <div className="text-muted-foreground text-sm">Tea Varieties</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">4.9</div>
                <div className="text-muted-foreground text-sm flex items-center">
                  <Star className="h-4 w-4 fill-current mr-1" />
                  Rating
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=600&fit=crop&crop=center" 
              alt="Premium Tea Collection" 
              className="rounded-2xl shadow-2xl w-full h-auto object-cover"
            />
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-4 shadow-lg">
              <div className="flex items-center space-x-3">
                <Award className="h-8 w-8 text-blue-600" />
                <div>
                  <div className="font-semibold text-foreground">Premium Quality</div>
                  <div className="text-gray-600 text-sm">Certified Organic</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
