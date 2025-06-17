
import { useEffect, useState } from 'react';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

const LogoSlider = () => {
  const [emblaRef] = useEmblaCarousel(
    { 
      loop: true,
      align: 'start',
      containScroll: 'trimSnaps',
      dragFree: true,
      slidesToScroll: 1
    },
    [Autoplay({ delay: 800, stopOnInteraction: false, playOnInit: true })]
  );

  // Tea company logos with realistic names
  const companies = [
    { name: 'TeaLeaf Co.', logo: 'https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=200&h=100&fit=crop&crop=center' },
    { name: 'Golden Brew', logo: 'https://images.unsplash.com/photo-1571934811356-5cc061b6821f?w=200&h=100&fit=crop&crop=center' },
    { name: 'Himalayan Tea', logo: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=200&h=100&fit=crop&crop=center' },
    { name: 'Chai Masters', logo: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=200&h=100&fit=crop&crop=center' },
    { name: 'Premium Leaf', logo: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?w=200&h=100&fit=crop&crop=center' },
    { name: 'Garden Fresh', logo: 'https://images.unsplash.com/photo-1627435601361-ec25f5b1d0e5?w=200&h=100&fit=crop&crop=center' },
    { name: 'Royal Tea Co.', logo: 'https://images.unsplash.com/photo-1594631661960-21365d68b11b?w=200&h=100&fit=crop&crop=center' },
    { name: 'Organic Blends', logo: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=200&h=100&fit=crop&crop=center' },
  ];

  return (
    <section className="py-8 bg-gradient-to-br from-gray-50 via-gray-100 to-slate-100 overflow-hidden relative shadow-[0_-10px_15px_-3px_rgba(0,0,0,0.1),0_10px_15px_-3px_rgba(0,0,0,0.1)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative">
          {/* Left blur overlay */}
          <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none"></div>
          
          {/* Right blur overlay */}
          <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-slate-100 to-transparent z-10 pointer-events-none"></div>
          
          <Carousel
            ref={emblaRef}
            className="w-full"
            opts={{
              align: "start",
              loop: true,
              slidesToScroll: 1,
            }}
            plugins={[
              Autoplay({
                delay: 800,
                stopOnInteraction: false,
              }),
            ]}
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {companies.map((company, index) => (
                <CarouselItem key={`${company.name}-${index}`} className="pl-2 md:pl-4 basis-1/3 md:basis-1/4 lg:basis-1/6">
                  <div className="flex flex-col items-center justify-center p-2">
                    <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 p-3 w-full h-14 flex items-center justify-center group mb-2">
                      <img 
                        src={company.logo}
                        alt={`${company.name} logo`}
                        className="max-w-full max-h-full object-contain transition-all duration-300 hover:scale-110"
                        onError={(e) => {
                          e.currentTarget.src = `https://via.placeholder.com/200x100/000000/ffffff?text=${encodeURIComponent(company.name)}`;
                        }}
                      />
                    </div>
                    <p className="text-xs font-medium text-foreground text-center">{company.name}</p>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default LogoSlider;
