
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card } from '@/components/ui/card';
import { Leaf, Mail, Phone, MapPin, Clock, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { useForm } from 'react-hook-form';
import { useToast } from '@/hooks/use-toast';

interface ContactFormData {
  email: string;
  message: string;
}

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const form = useForm<ContactFormData>({
    defaultValues: {
      email: '',
      message: '',
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    console.log('Contact form submitted:', data);
    
    toast({
      title: "Message sent successfully!",
      description: "We'll get back to you within 24 hours.",
    });
    
    form.reset();
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50">
      {/* Navigation */}
      <nav className="bg-white/90 backdrop-blur-md border-b border-amber-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center space-x-2">
              <Leaf className="h-8 w-8 text-amber-600" />
              <span className="text-2xl font-bold text-amber-900">TeaHaven</span>
            </Link>
            
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/" className="text-amber-800 hover:text-amber-600 font-medium transition-colors">Home</Link>
              <a href="/#products" className="text-amber-800 hover:text-amber-600 font-medium transition-colors">Products</a>
              <a href="/#categories" className="text-amber-800 hover:text-amber-600 font-medium transition-colors">Categories</a>
              <a href="/#about" className="text-amber-800 hover:text-amber-600 font-medium transition-colors">About</a>
              <Link to="/contact" className="text-amber-600 font-medium">Contact</Link>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-amber-800 hover:text-amber-600"
              >
                {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>

          {/* Mobile menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-amber-200">
                <Link 
                  to="/" 
                  className="block px-3 py-2 text-amber-800 hover:text-amber-600 font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Home
                </Link>
                <a 
                  href="/#products" 
                  className="block px-3 py-2 text-amber-800 hover:text-amber-600 font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Products
                </a>
                <a 
                  href="/#categories" 
                  className="block px-3 py-2 text-amber-800 hover:text-amber-600 font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Categories
                </a>
                <a 
                  href="/#about" 
                  className="block px-3 py-2 text-amber-800 hover:text-amber-600 font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  About
                </a>
                <Link 
                  to="/contact" 
                  className="block px-3 py-2 text-amber-600 font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Contact
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Contact Header */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-amber-900 mb-6">Get in Touch</h1>
          <p className="text-xl text-amber-700 max-w-2xl mx-auto">
            Have questions about our teas or need assistance? We'd love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-amber-900 mb-6">Company Info</h2>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-amber-100 p-3 rounded-lg">
                    <MapPin className="h-6 w-6 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-amber-900 mb-1">Address</h3>
                    <p className="text-amber-700">123 Tea Street<br />Mumbai, Maharashtra 400001<br />India</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-amber-100 p-3 rounded-lg">
                    <Phone className="h-6 w-6 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-amber-900 mb-1">Phone</h3>
                    <p className="text-amber-700">+91 98765 43210</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-amber-100 p-3 rounded-lg">
                    <Mail className="h-6 w-6 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-amber-900 mb-1">Email</h3>
                    <p className="text-amber-700">info@teahaven.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-amber-100 p-3 rounded-lg">
                    <Clock className="h-6 w-6 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-amber-900 mb-1">Business Hours</h3>
                    <p className="text-amber-700">
                      Monday - Friday: 9:00 AM - 7:00 PM<br />
                      Saturday: 10:00 AM - 6:00 PM<br />
                      Sunday: 11:00 AM - 5:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <Card className="p-8 border-amber-200">
              <h2 className="text-3xl font-bold text-amber-900 mb-6">Contact Us</h2>
              
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="email"
                    rules={{ 
                      required: "Email is required",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Invalid email address"
                      }
                    }}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-amber-800">Email Address</FormLabel>
                        <FormControl>
                          <Input 
                            type="email"
                            placeholder="your.email@example.com"
                            className="border-amber-300 focus:border-amber-500"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    rules={{ required: "Message is required" }}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-amber-800">Message</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Tell us more about your inquiry..."
                            className="border-amber-300 focus:border-amber-500 min-h-[120px]"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div className="flex justify-center">
                    <Button 
                      type="submit" 
                      size="lg"
                      disabled={isSubmitting}
                      className="w-1/2 bg-amber-600 hover:bg-amber-700 text-white"
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </Button>
                  </div>
                </form>
              </Form>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
