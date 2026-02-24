import { useCart } from "@/context/CartContext";
import { useAuth } from "@/context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { motion } from "framer-motion";
import { toast } from "sonner";
import { CheckCircle } from "lucide-react";

const Checkout = () => {
  const { items, totalPrice, clearCart } = useCart();
  const { user } = useAuth();
  const navigate = useNavigate();
  const [submitted, setSubmitted] = useState(false);

  const shippingCost = totalPrice >= 50 ? 0 : 5;
  const total = totalPrice + shippingCost;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    clearCart();
    toast.success("Order placed successfully!");
  };

  if (items.length === 0 && !submitted) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-serif text-3xl font-bold mb-4">Nothing to Checkout</h1>
          <Link to="/shop" className="text-secondary font-sans hover:underline">← Back to Shop</Link>
        </div>
      </main>
    );
  }

  if (submitted) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="text-center max-w-md">
          <CheckCircle size={80} className="mx-auto text-primary mb-6" />
          <h1 className="font-serif text-3xl font-bold mb-4">Thank You!</h1>
          <p className="text-muted-foreground font-sans mb-6">Your order has been placed successfully. We'll send a confirmation email shortly.</p>
          <Link to="/shop" className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground font-sans font-bold text-sm uppercase tracking-wider rounded-md hover:bg-olive-dark transition-colors">
            Continue Shopping
          </Link>
        </motion.div>
      </main>
    );
  }

  return (
    <main className="min-h-screen">
      <div className="container mx-auto px-4 py-10 max-w-5xl">
        <h1 className="font-serif text-3xl md:text-4xl font-bold mb-10">Checkout</h1>
        <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Shipping Details */}
          <div className="lg:col-span-3 space-y-6">
            <div className="bg-card rounded-lg p-6 shadow-card">
              <h2 className="font-serif text-xl font-bold mb-4">Shipping Details</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-sans font-bold mb-1">First Name</label>
                  <input type="text" required defaultValue={user?.name?.split(" ")[0]} className="w-full px-4 py-3 border border-border rounded-md font-sans text-sm bg-background focus:outline-none focus:ring-2 focus:ring-secondary" />
                </div>
                <div>
                  <label className="block text-sm font-sans font-bold mb-1">Last Name</label>
                  <input type="text" required className="w-full px-4 py-3 border border-border rounded-md font-sans text-sm bg-background focus:outline-none focus:ring-2 focus:ring-secondary" />
                </div>
                <div className="sm:col-span-2">
                  <label className="block text-sm font-sans font-bold mb-1">Email</label>
                  <input type="email" required defaultValue={user?.email} className="w-full px-4 py-3 border border-border rounded-md font-sans text-sm bg-background focus:outline-none focus:ring-2 focus:ring-secondary" />
                </div>
                <div className="sm:col-span-2">
                  <label className="block text-sm font-sans font-bold mb-1">Address</label>
                  <input type="text" required className="w-full px-4 py-3 border border-border rounded-md font-sans text-sm bg-background focus:outline-none focus:ring-2 focus:ring-secondary" />
                </div>
                <div>
                  <label className="block text-sm font-sans font-bold mb-1">City</label>
                  <input type="text" required className="w-full px-4 py-3 border border-border rounded-md font-sans text-sm bg-background focus:outline-none focus:ring-2 focus:ring-secondary" />
                </div>
                <div>
                  <label className="block text-sm font-sans font-bold mb-1">Postal Code</label>
                  <input type="text" required className="w-full px-4 py-3 border border-border rounded-md font-sans text-sm bg-background focus:outline-none focus:ring-2 focus:ring-secondary" />
                </div>
                <div className="sm:col-span-2">
                  <label className="block text-sm font-sans font-bold mb-1">Country</label>
                  <input type="text" required className="w-full px-4 py-3 border border-border rounded-md font-sans text-sm bg-background focus:outline-none focus:ring-2 focus:ring-secondary" />
                </div>
              </div>
            </div>

            <div className="bg-card rounded-lg p-6 shadow-card">
              <h2 className="font-serif text-xl font-bold mb-4">Payment</h2>
              <p className="text-sm text-muted-foreground font-sans mb-4">This is a demo store. No real payment is processed.</p>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-sans font-bold mb-1">Card Number</label>
                  <input type="text" placeholder="4242 4242 4242 4242" className="w-full px-4 py-3 border border-border rounded-md font-sans text-sm bg-background focus:outline-none focus:ring-2 focus:ring-secondary" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-sans font-bold mb-1">Expiry</label>
                    <input type="text" placeholder="12/26" className="w-full px-4 py-3 border border-border rounded-md font-sans text-sm bg-background focus:outline-none focus:ring-2 focus:ring-secondary" />
                  </div>
                  <div>
                    <label className="block text-sm font-sans font-bold mb-1">CVC</label>
                    <input type="text" placeholder="123" className="w-full px-4 py-3 border border-border rounded-md font-sans text-sm bg-background focus:outline-none focus:ring-2 focus:ring-secondary" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-2">
            <div className="bg-card rounded-lg p-6 shadow-card sticky top-32">
              <h2 className="font-serif text-xl font-bold mb-4">Order Summary</h2>
              <div className="space-y-3 mb-6">
                {items.map(({ product, quantity }) => (
                  <div key={product.id} className="flex justify-between text-sm font-sans">
                    <span className="text-muted-foreground">{product.title} × {quantity}</span>
                    <span>€{(product.price * quantity).toFixed(2)}</span>
                  </div>
                ))}
              </div>
              <div className="border-t border-border pt-3 space-y-2 text-sm font-sans">
                <div className="flex justify-between"><span className="text-muted-foreground">Subtotal</span><span>€{totalPrice.toFixed(2)}</span></div>
                <div className="flex justify-between"><span className="text-muted-foreground">Shipping</span><span>{shippingCost === 0 ? "Free" : `€${shippingCost.toFixed(2)}`}</span></div>
                <div className="border-t border-border pt-3 flex justify-between font-bold text-lg">
                  <span>Total</span>
                  <span className="font-serif">€{total.toFixed(2)}</span>
                </div>
              </div>
              <button type="submit" className="w-full mt-6 px-8 py-3 bg-primary text-primary-foreground font-sans font-bold text-sm uppercase tracking-wider rounded-md hover:bg-olive-dark transition-colors">
                Place Order
              </button>
            </div>
          </div>
        </form>
      </div>
    </main>
  );
};

export default Checkout;
