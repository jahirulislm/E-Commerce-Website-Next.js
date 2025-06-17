
import { Card } from '@/components/ui/card';
import { Category } from '@/types';

const CategoriesSection = () => {
  const categories: Category[] = [
    { 
      name: "Black Tea", 
      image: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80", 
      count: "25+ Varieties" 
    },
    { 
      name: "Green Tea", 
      image: "https://images.unsplash.com/photo-1627435601361-ec25f5b1d0e5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80", 
      count: "18+ Varieties" 
    },
    { 
      name: "Herbal Tea", 
      image: "https://images.unsplash.com/photo-1594631661960-21365d68b11b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80", 
      count: "15+ Varieties" 
    },
    { 
      name: "Chai Blends", 
      image: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80", 
      count: "12+ Varieties" 
    }
  ];

  return (
    <section id="categories" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Explore Our Categories</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover our carefully curated tea collections, each offering unique flavors and experiences
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category, index) => (
            <Card key={index} className="group cursor-pointer hover:shadow-xl transition-all duration-300 overflow-hidden border">
              <div className="relative">
                <img 
                  src={category.image} 
                  alt={category.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.src = `https://via.placeholder.com/400x300/000000/ffffff?text=${encodeURIComponent(category.name)}`;
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-semibold">{category.name}</h3>
                  <p className="text-gray-200">{category.count}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
