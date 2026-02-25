import { useState, useEffect } from "react";
import { useAuth } from "@/context/AuthContext";
import { products as defaultProducts, Product } from "@/data/products";
import { Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { toast } from "sonner";
import { Pencil, Save, X } from "lucide-react";

const Admin = () => {
  const { user, isAdmin } = useAuth();

  const [productList, setProductList] = useState<Product[]>(() => {
    const saved = localStorage.getItem("olivegold-admin-products");
    return saved ? JSON.parse(saved) : defaultProducts;
  });
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editForm, setEditForm] = useState<Partial<Product>>({});

  useEffect(() => {
    localStorage.setItem("olivegold-admin-products", JSON.stringify(productList));
  }, [productList]);

  if (!user || !isAdmin) {
    return <Navigate to="/account" replace />;
  }

  const startEdit = (product: Product) => {
    setEditingId(product.id);
    setEditForm({ title: product.title, price: product.price, shortDescription: product.shortDescription, inStock: product.inStock, stockCount: product.stockCount });
  };

  const saveEdit = (id: string) => {
    setProductList(prev => prev.map(p => p.id === id ? { ...p, ...editForm } : p));
    setEditingId(null);
    toast.success("Produsul a fost actualizat");
  };

  return (
    <main className="min-h-screen">
      <section className="bg-primary text-primary-foreground py-12 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <p className="text-secondary font-sans uppercase tracking-[0.3em] text-sm mb-2">Administrare</p>
          <h1 className="font-serif text-3xl md:text-4xl font-bold">Manager Produse</h1>
        </motion.div>
      </section>

      <div className="container mx-auto px-4 py-10">
        <p className="text-sm text-muted-foreground font-sans mb-6">
          Conectat ca <span className="font-bold">{user.email}</span>. Editează produsele mai jos.
        </p>

        <div className="space-y-4">
          {productList.map(product => (
            <div key={product.id} className="bg-card rounded-lg p-4 md:p-6 shadow-card">
              {editingId === product.id ? (
                <div className="space-y-3">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    <div>
                      <label className="text-xs font-sans font-bold text-muted-foreground">Titlu</label>
                      <input value={editForm.title || ""} onChange={e => setEditForm({ ...editForm, title: e.target.value })} className="w-full px-3 py-2 border border-border rounded-md text-sm font-sans bg-background" />
                    </div>
                    <div>
                      <label className="text-xs font-sans font-bold text-muted-foreground">Preț (€)</label>
                      <input type="number" step="0.01" value={editForm.price || 0} onChange={e => setEditForm({ ...editForm, price: parseFloat(e.target.value) })} className="w-full px-3 py-2 border border-border rounded-md text-sm font-sans bg-background" />
                    </div>
                    <div>
                      <label className="text-xs font-sans font-bold text-muted-foreground">Stoc</label>
                      <input type="number" value={editForm.stockCount || 0} onChange={e => setEditForm({ ...editForm, stockCount: parseInt(e.target.value), inStock: parseInt(e.target.value) > 0 })} className="w-full px-3 py-2 border border-border rounded-md text-sm font-sans bg-background" />
                    </div>
                  </div>
                  <div>
                    <label className="text-xs font-sans font-bold text-muted-foreground">Descriere Scurtă</label>
                    <textarea value={editForm.shortDescription || ""} onChange={e => setEditForm({ ...editForm, shortDescription: e.target.value })} rows={2} className="w-full px-3 py-2 border border-border rounded-md text-sm font-sans bg-background resize-none" />
                  </div>
                  <div className="flex gap-2">
                    <button onClick={() => saveEdit(product.id)} className="flex items-center gap-1 px-4 py-2 bg-primary text-primary-foreground text-sm font-sans font-bold rounded-md hover:bg-olive-dark transition-colors">
                      <Save size={14} /> Salvează
                    </button>
                    <button onClick={() => setEditingId(null)} className="flex items-center gap-1 px-4 py-2 border border-border text-sm font-sans rounded-md hover:bg-muted transition-colors">
                      <X size={14} /> Anulează
                    </button>
                  </div>
                </div>
              ) : (
                <div className="flex items-center gap-4">
                  <img src={product.image} alt={product.title} className="w-16 h-16 rounded-md object-cover flex-shrink-0" />
                  <div className="flex-1 min-w-0">
                    <h3 className="font-serif font-bold truncate">{product.title}</h3>
                    <p className="text-sm text-muted-foreground font-sans">€{product.price.toFixed(2)} · {product.stockCount} în stoc</p>
                  </div>
                  <button onClick={() => startEdit(product)} className="flex items-center gap-1 px-4 py-2 border border-border text-sm font-sans rounded-md hover:bg-muted transition-colors flex-shrink-0">
                    <Pencil size={14} /> Editează
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Admin;
