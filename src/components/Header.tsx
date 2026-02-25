import { Link, useLocation } from "react-router-dom";
import { ShoppingCart, Heart, User, Menu, X, Search } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { useWishlist } from "@/context/WishlistContext";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const { totalItems } = useCart();
  const { wishlist } = useWishlist();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const location = useLocation();

  const navLinks = [
    { to: "/", label: "Acasă" },
    { to: "/shop", label: "Magazin" },
    { to: "/about", label: "Despre Noi" },
    { to: "/blog", label: "Blog" },
    { to: "/contact", label: "Contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      {/* Banner promoțional */}
      <div className="bg-primary text-primary-foreground text-center py-2 text-sm font-sans tracking-wide">
        Transport gratuit pentru comenzi peste 50€ · Folosește codul <span className="font-bold">LIVADA10</span> pentru 10% reducere
      </div>

      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Meniu mobil */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-foreground p-2"
            aria-label="Deschide meniul"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Logo */}
          <Link to="/" className="font-serif text-2xl md:text-3xl font-bold tracking-wider text-gradient-gold">
            LIVADA CU MĂSLINI
          </Link>

          {/* Navigare Desktop */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map(link => (
              <Link
                key={link.to}
                to={link.to}
                className={`text-sm uppercase tracking-widest font-sans transition-colors hover:text-secondary ${
                  isActive(link.to) ? "text-secondary font-bold" : "text-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Iconițe */}
          <div className="flex items-center gap-3 md:gap-4">
            <button onClick={() => setSearchOpen(!searchOpen)} className="text-foreground hover:text-secondary transition-colors" aria-label="Caută">
              <Search size={20} />
            </button>
            <Link to="/account" className="text-foreground hover:text-secondary transition-colors" aria-label="Cont">
              <User size={20} />
            </Link>
            <Link to="/shop?wishlist=true" className="text-foreground hover:text-secondary transition-colors relative" aria-label="Favorite">
              <Heart size={20} />
              {wishlist.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-secondary text-secondary-foreground text-xs w-4 h-4 rounded-full flex items-center justify-center font-bold">
                  {wishlist.length}
                </span>
              )}
            </Link>
            <Link to="/cart" className="text-foreground hover:text-secondary transition-colors relative" aria-label="Coș">
              <ShoppingCart size={20} />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-secondary text-secondary-foreground text-xs w-4 h-4 rounded-full flex items-center justify-center font-bold">
                  {totalItems}
                </span>
              )}
            </Link>
          </div>
        </div>

        {/* Bară de căutare */}
        <AnimatePresence>
          {searchOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="overflow-hidden"
            >
              <div className="pb-4">
                <form onSubmit={(e) => { e.preventDefault(); if (searchQuery.trim()) window.location.href = `/shop?search=${encodeURIComponent(searchQuery)}`; }}>
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Caută în colecția noastră..."
                    className="w-full px-4 py-3 bg-muted border border-border rounded-md font-sans text-sm focus:outline-none focus:ring-2 focus:ring-secondary"
                    autoFocus
                  />
                </form>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Meniu mobil */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden overflow-hidden bg-background border-b border-border"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
              {navLinks.map(link => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-sm uppercase tracking-widest font-sans py-2 ${
                    isActive(link.to) ? "text-secondary font-bold" : "text-foreground"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
