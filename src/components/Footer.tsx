import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-foreground text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <h3 className="font-serif text-2xl text-gradient-gold mb-4">OLIVEGOLD</h3>
            <p className="text-sm opacity-70 font-sans leading-relaxed">
              Premium cold-pressed olive oils from the finest Mediterranean groves. Quality, tradition, and taste in every bottle.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm font-sans opacity-70">
              <li><Link to="/shop" className="hover:opacity-100 transition-opacity">Shop All</Link></li>
              <li><Link to="/about" className="hover:opacity-100 transition-opacity">Our Story</Link></li>
              <li><Link to="/blog" className="hover:opacity-100 transition-opacity">Blog</Link></li>
              <li><Link to="/contact" className="hover:opacity-100 transition-opacity">Contact Us</Link></li>
            </ul>
          </div>

          {/* Customer Care */}
          <div>
            <h4 className="font-serif text-lg mb-4">Customer Care</h4>
            <ul className="space-y-2 text-sm font-sans opacity-70">
              <li><span className="hover:opacity-100 cursor-pointer transition-opacity">Shipping & Returns</span></li>
              <li><span className="hover:opacity-100 cursor-pointer transition-opacity">FAQ</span></li>
              <li><span className="hover:opacity-100 cursor-pointer transition-opacity">Privacy Policy</span></li>
              <li><span className="hover:opacity-100 cursor-pointer transition-opacity">Terms & Conditions</span></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-serif text-lg mb-4">Stay Connected</h4>
            <p className="text-sm opacity-70 font-sans mb-3">Subscribe for recipes, tips & exclusive offers.</p>
            <form onSubmit={(e) => e.preventDefault()} className="flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-3 py-2 bg-charcoal-light text-primary-foreground text-sm rounded-md border border-charcoal-light focus:outline-none focus:ring-1 focus:ring-secondary font-sans"
              />
              <button type="submit" className="px-4 py-2 bg-secondary text-secondary-foreground text-sm font-bold rounded-md hover:bg-gold-dark transition-colors font-sans">
                Join
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-charcoal-light mt-12 pt-8 text-center text-sm opacity-50 font-sans">
          © 2026 OliveGold Store. All rights reserved. Crafted with love in the Mediterranean.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
