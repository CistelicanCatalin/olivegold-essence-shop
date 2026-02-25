import { Link } from "react-router-dom";
import { useCart } from "@/context/CartContext";
import { Minus, Plus, Trash2, ArrowLeft, ShoppingBag } from "lucide-react";
import { motion } from "framer-motion";

const CartPage = () => {
  const { items, updateQuantity, removeFromCart, totalPrice } = useCart();

  if (items.length === 0) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <ShoppingBag size={64} className="mx-auto text-muted-foreground/30 mb-6" />
          <h1 className="font-serif text-3xl font-bold mb-4">Coșul Tău Este Gol</h1>
          <p className="text-muted-foreground font-sans mb-6">Adaugă uleiuri de măsline premium pentru a începe.</p>
          <Link to="/shop" className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground font-sans font-bold text-sm uppercase tracking-wider rounded-md hover:bg-olive-dark transition-colors">
            Continuă Cumpărăturile
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen">
      <div className="container mx-auto px-4 py-10">
        <Link to="/shop" className="inline-flex items-center gap-2 text-sm text-muted-foreground font-sans hover:text-secondary mb-8">
          <ArrowLeft size={14} /> Continuă Cumpărăturile
        </Link>
        <h1 className="font-serif text-3xl md:text-4xl font-bold mb-10">Coșul de Cumpărături</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-4">
            {items.map(({ product, quantity }) => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex gap-4 md:gap-6 bg-card rounded-lg p-4 shadow-card"
              >
                <Link to={`/product/${product.slug}`} className="w-20 h-20 md:w-28 md:h-28 rounded-md overflow-hidden bg-muted flex-shrink-0">
                  <img src={product.image} alt={product.title} className="w-full h-full object-cover" />
                </Link>
                <div className="flex-1 min-w-0">
                  <Link to={`/product/${product.slug}`} className="font-serif font-bold text-foreground hover:text-secondary transition-colors line-clamp-1">{product.title}</Link>
                  <p className="text-sm text-muted-foreground font-sans mt-1">€{product.price.toFixed(2)}</p>
                  <div className="flex items-center justify-between mt-3">
                    <div className="flex items-center border border-border rounded-md">
                      <button onClick={() => updateQuantity(product.id, quantity - 1)} className="px-2 py-1 hover:bg-muted"><Minus size={14} /></button>
                      <span className="px-3 text-sm font-sans font-bold">{quantity}</span>
                      <button onClick={() => updateQuantity(product.id, quantity + 1)} className="px-2 py-1 hover:bg-muted"><Plus size={14} /></button>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="font-serif font-bold">€{(product.price * quantity).toFixed(2)}</span>
                      <button onClick={() => removeFromCart(product.id)} className="text-muted-foreground hover:text-destructive transition-colors">
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="bg-card rounded-lg p-6 shadow-card h-fit sticky top-32">
            <h2 className="font-serif text-xl font-bold mb-6">Sumar Comandă</h2>
            <div className="space-y-3 text-sm font-sans">
              <div className="flex justify-between"><span className="text-muted-foreground">Subtotal</span><span>€{totalPrice.toFixed(2)}</span></div>
              <div className="flex justify-between"><span className="text-muted-foreground">Livrare</span><span>{totalPrice >= 50 ? "Gratuită" : "5,00€"}</span></div>
              <div className="border-t border-border pt-3 flex justify-between font-bold text-base">
                <span>Total</span>
                <span className="font-serif text-xl">€{(totalPrice + (totalPrice >= 50 ? 0 : 5)).toFixed(2)}</span>
              </div>
            </div>
            {totalPrice < 50 && (
              <p className="text-xs text-secondary font-sans mt-3">Adaugă încă €{(50 - totalPrice).toFixed(2)} pentru transport gratuit!</p>
            )}
            <Link
              to="/checkout"
              className="block mt-6 text-center px-8 py-3 bg-primary text-primary-foreground font-sans font-bold text-sm uppercase tracking-wider rounded-md hover:bg-olive-dark transition-colors"
            >
              Finalizează Comanda
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default CartPage;
