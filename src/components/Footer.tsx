
import { Leaf } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-slate-900 dark:bg-slate-950 text-slate-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-1">
            <div className="flex items-center space-x-3 mb-4">
              <Leaf className="h-8 w-8 text-blue-400" />
              <span className="text-2xl font-bold">TeaHaven</span>
            </div>
            <p className="text-slate-300 leading-relaxed text-sm">
              Fine teas from around the world, carefully curated for the perfect cup.
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-slate-50">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-slate-300 hover:text-blue-400 transition-colors text-sm">Home</a></li>
              <li><a href="#products" className="text-slate-300 hover:text-blue-400 transition-colors text-sm">Products</a></li>
              <li><a href="#about" className="text-slate-300 hover:text-blue-400 transition-colors text-sm">About</a></li>
              <li><Link to="/contact" className="text-slate-300 hover:text-blue-400 transition-colors text-sm">Contact</Link></li>
            </ul>
          </div>
          
          {/* Categories */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-slate-50">Categories</h3>
            <ul className="space-y-2">
              <li><span className="text-slate-300 text-sm">Black Tea</span></li>
              <li><span className="text-slate-300 text-sm">Green Tea</span></li>
              <li><span className="text-slate-300 text-sm">Herbal Tea</span></li>
              <li><span className="text-slate-300 text-sm">Chai Blends</span></li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-slate-50">Contact Info</h3>
            <div className="space-y-2 text-slate-300 text-sm">
              <p>123 Tea Street</p>
              <p>Mumbai, Maharashtra 400001</p>
              <p>Phone: +91 98765 43210</p>
              <p>Email: info@teahaven.com</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-slate-800 mt-10 pt-6 text-center">
          <p className="text-slate-400 text-sm">&copy; 2024 TeaHaven. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
