
import { Award, Users } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-6">Our Tea Heritage</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                For over three decades, we've been dedicated to bringing you the finest teas from the most renowned gardens across the globe. Our commitment to quality and tradition ensures every cup tells a story of excellence.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                From the misty hills of Darjeeling to the lush gardens of Ceylon, we source our teas directly from growers who share our passion for perfection.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-6 bg-card rounded-xl shadow-md border border-border">
                <Users className="h-12 w-12 text-primary mx-auto mb-3" />
                <div className="text-2xl font-bold text-foreground">1000+</div>
                <div className="text-muted-foreground">Happy Customers</div>
              </div>
              <div className="text-center p-6 bg-card rounded-xl shadow-md border border-border">
                <Award className="h-12 w-12 text-primary mx-auto mb-3" />
                <div className="text-2xl font-bold text-foreground">35+</div>
                <div className="text-muted-foreground">Years Experience</div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=600&h=700&fit=crop&crop=center" 
              alt="Tea plantation and tea processing" 
              className="rounded-2xl shadow-2xl w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
