import { Link } from "react-router-dom";
import { Heart, ShoppingCart, Star } from "lucide-react";
import { Product } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { useWishlist } from "@/context/WishlistContext";
import { motion } from "framer-motion";
import { toast } from "sonner";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { addToCart } = useCart();
  const { isInWishlist, toggleWishlist } = useWishlist();
  const inWishlist = isInWishlist(product.id);

  const avgRating = product.reviews.length > 0
    ? product.reviews.reduce((sum, r) => sum + r.rating, 0) / product.reviews.length
    : 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="group bg-card rounded-lg overflow-hidden shadow-card hover:shadow-hover transition-shadow duration-300"
    >
      {/* Image */}
      <div className="relative overflow-hidden aspect-square bg-muted">
        <Link to={`/product/${product.slug}`}>
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
        </Link>
        {product.isBestSeller && (
          <span className="absolute top-3 left-3 bg-secondary text-secondary-foreground text-xs font-bold px-3 py-1 rounded-full font-sans uppercase tracking-wider">
            Best Seller
          </span>
        )}
        <button
          onClick={() => { toggleWishlist(product.id); toast(inWishlist ? "Removed from wishlist" : "Added to wishlist"); }}
          className={`absolute top-3 right-3 w-9 h-9 rounded-full flex items-center justify-center transition-colors ${
            inWishlist ? "bg-secondary text-secondary-foreground" : "bg-card/80 text-foreground hover:bg-secondary hover:text-secondary-foreground"
          }`}
          aria-label="Toggle wishlist"
        >
          <Heart size={16} fill={inWishlist ? "currentColor" : "none"} />
        </button>
      </div>

      {/* Content */}
      <div className="p-4 md:p-5">
        <Link to={`/product/${product.slug}`}>
          <h3 className="font-serif text-lg font-semibold text-foreground hover:text-secondary transition-colors leading-tight">
            {product.title}
          </h3>
        </Link>
        <p className="text-sm text-muted-foreground mt-2 line-clamp-2 font-sans">{product.shortDescription}</p>

        {/* Rating */}
        {avgRating > 0 && (
          <div className="flex items-center gap-1 mt-2">
            {[1,2,3,4,5].map(i => (
              <Star key={i} size={12} className={i <= Math.round(avgRating) ? "text-secondary fill-secondary" : "text-border"} />
            ))}
            <span className="text-xs text-muted-foreground ml-1 font-sans">({product.reviews.length})</span>
          </div>
        )}

        <div className="flex items-center justify-between mt-4">
          <span className="text-xl font-serif font-bold text-foreground">€{product.price.toFixed(2)}</span>
          <button
            onClick={() => { addToCart(product); toast.success(`${product.title} added to cart`); }}
            className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground text-sm font-sans font-bold rounded-md hover:bg-olive-dark transition-colors"
            disabled={!product.inStock}
          >
            <ShoppingCart size={14} />
            {product.inStock ? "Add" : "Sold Out"}
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
