import { useParams, Link } from "react-router-dom";
import { products } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { useWishlist } from "@/context/WishlistContext";
import { useState } from "react";
import { motion } from "framer-motion";
import { Heart, Minus, Plus, ShoppingCart, Star, ArrowLeft, Truck, Shield, RotateCcw } from "lucide-react";
import { toast } from "sonner";
import ProductCard from "@/components/ProductCard";

const ProductDetail = () => {
  const { slug } = useParams();
  const product = products.find(p => p.slug === slug);
  const { addToCart } = useCart();
  const { isInWishlist, toggleWishlist } = useWishlist();
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-serif text-3xl mb-4">Produs Negăsit</h1>
          <Link to="/shop" className="text-secondary hover:underline font-sans">← Înapoi la Magazin</Link>
        </div>
      </div>
    );
  }

  const inWishlist = isInWishlist(product.id);
  const avgRating = product.reviews.length > 0
    ? product.reviews.reduce((s, r) => s + r.rating, 0) / product.reviews.length
    : 0;

  const related = products.filter(p => p.category === product.category && p.id !== product.id).slice(0, 3);

  return (
    <main className="min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <Link to="/shop" className="inline-flex items-center gap-2 text-sm text-muted-foreground font-sans hover:text-secondary mb-8">
          <ArrowLeft size={14} /> Înapoi la Magazin
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="aspect-square rounded-lg overflow-hidden bg-muted">
            <img src={product.image} alt={product.title} className="w-full h-full object-cover" />
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>
            <p className="text-secondary font-sans uppercase tracking-[0.2em] text-sm mb-2">{product.category.replace("-", " ")}</p>
            <h1 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">{product.title}</h1>

            {avgRating > 0 && (
              <div className="flex items-center gap-2 mb-4">
                <div className="flex gap-0.5">
                  {[1,2,3,4,5].map(i => (
                    <Star key={i} size={16} className={i <= Math.round(avgRating) ? "text-secondary fill-secondary" : "text-border"} />
                  ))}
                </div>
                <span className="text-sm text-muted-foreground font-sans">{avgRating.toFixed(1)} ({product.reviews.length} recenzii)</span>
              </div>
            )}

            <p className="text-3xl font-serif font-bold text-foreground mb-6">€{product.price.toFixed(2)}</p>
            <p className="text-muted-foreground font-sans leading-relaxed mb-6">{product.longDescription}</p>

            <div className="grid grid-cols-2 gap-4 mb-6 text-sm font-sans">
              <div><span className="text-muted-foreground">Origine:</span> <span className="font-bold">{product.origin}</span></div>
              <div><span className="text-muted-foreground">Stoc:</span> <span className={`font-bold ${product.inStock ? "text-primary" : "text-destructive"}`}>{product.inStock ? `${product.stockCount} disponibile` : "Stoc epuizat"}</span></div>
              <div className="col-span-2"><span className="text-muted-foreground">Ingrediente:</span> <span className="font-bold">{product.ingredients}</span></div>
            </div>

            <div className="flex items-center gap-4 mb-6">
              <div className="flex items-center border border-border rounded-md">
                <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="px-3 py-2 hover:bg-muted transition-colors"><Minus size={16} /></button>
                <span className="px-4 py-2 font-sans font-bold">{quantity}</span>
                <button onClick={() => setQuantity(quantity + 1)} className="px-3 py-2 hover:bg-muted transition-colors"><Plus size={16} /></button>
              </div>
              <button
                onClick={() => { addToCart(product, quantity); toast.success(`${quantity}x ${product.title} adăugat în coș`); }}
                disabled={!product.inStock}
                className="flex-1 flex items-center justify-center gap-2 px-8 py-3 bg-primary text-primary-foreground font-sans font-bold text-sm uppercase tracking-wider rounded-md hover:bg-olive-dark transition-colors disabled:opacity-50"
              >
                <ShoppingCart size={16} /> Adaugă în Coș
              </button>
              <button
                onClick={() => { toggleWishlist(product.id); toast(inWishlist ? "Eliminat din favorite" : "Adăugat la favorite"); }}
                className={`p-3 border rounded-md transition-colors ${inWishlist ? "bg-secondary text-secondary-foreground border-secondary" : "border-border hover:border-secondary"}`}
                aria-label="Comută favorite"
              >
                <Heart size={16} fill={inWishlist ? "currentColor" : "none"} />
              </button>
            </div>

            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-border">
              {[
                { icon: Truck, text: "Transport Gratuit" },
                { icon: Shield, text: "Calitate Garantată" },
                { icon: RotateCcw, text: "Retur în 30 de Zile" },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="text-center">
                  <Icon size={20} className="mx-auto text-secondary mb-1" />
                  <p className="text-xs text-muted-foreground font-sans">{text}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {product.reviews.length > 0 && (
          <section className="mt-20">
            <h2 className="font-serif text-2xl font-bold mb-8">Recenzii Clienți</h2>
            <div className="space-y-6">
              {product.reviews.map(review => (
                <div key={review.id} className="bg-card rounded-lg p-6 shadow-card">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-sans font-bold">{review.author}</span>
                    <span className="text-xs text-muted-foreground font-sans">{review.date}</span>
                  </div>
                  <div className="flex gap-0.5 mb-2">
                    {[1,2,3,4,5].map(i => (
                      <Star key={i} size={14} className={i <= review.rating ? "text-secondary fill-secondary" : "text-border"} />
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground font-sans">{review.comment}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {related.length > 0 && (
          <section className="mt-20">
            <h2 className="font-serif text-2xl font-bold mb-8">S-ar Putea Să-ți Placă</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {related.map(p => <ProductCard key={p.id} product={p} />)}
            </div>
          </section>
        )}
      </div>
    </main>
  );
};

export default ProductDetail;
