import { useState, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { products, categories } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import { useWishlist } from "@/context/WishlistContext";
import { motion } from "framer-motion";
import { SlidersHorizontal } from "lucide-react";

const Shop = () => {
  const [searchParams] = useSearchParams();
  const initialSearch = searchParams.get("search") || "";
  const showWishlist = searchParams.get("wishlist") === "true";

  const [search, setSearch] = useState(initialSearch);
  const [category, setCategory] = useState("all");
  const [sortBy, setSortBy] = useState("newest");
  const [filtersOpen, setFiltersOpen] = useState(false);
  const { wishlist } = useWishlist();

  const filtered = useMemo(() => {
    let result = [...products];

    // Wishlist filter
    if (showWishlist) result = result.filter(p => wishlist.includes(p.id));

    // Search
    if (search) result = result.filter(p => p.title.toLowerCase().includes(search.toLowerCase()));

    // Category
    if (category !== "all") result = result.filter(p => p.category === category);

    // Sort
    switch (sortBy) {
      case "price-asc": result.sort((a, b) => a.price - b.price); break;
      case "price-desc": result.sort((a, b) => b.price - a.price); break;
      case "newest": result.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()); break;
    }

    return result;
  }, [search, category, sortBy, showWishlist, wishlist]);

  return (
    <main className="min-h-screen">
      {/* Page Header */}
      <section className="bg-primary text-primary-foreground py-16 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <p className="text-secondary font-sans uppercase tracking-[0.3em] text-sm mb-2">Our Collection</p>
          <h1 className="font-serif text-4xl md:text-5xl font-bold">
            {showWishlist ? "Your Wishlist" : "Shop Premium Olive Oils"}
          </h1>
        </motion.div>
      </section>

      <div className="container mx-auto px-4 py-10">
        {/* Filters Bar */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-8">
          <div className="flex items-center gap-3 flex-wrap">
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search products..."
              className="px-4 py-2 border border-border rounded-md text-sm font-sans focus:outline-none focus:ring-2 focus:ring-secondary bg-card w-60"
            />
            <button
              onClick={() => setFiltersOpen(!filtersOpen)}
              className="md:hidden flex items-center gap-2 px-4 py-2 border border-border rounded-md text-sm font-sans"
            >
              <SlidersHorizontal size={14} /> Filters
            </button>
          </div>

          <div className={`flex items-center gap-3 flex-wrap ${filtersOpen ? "" : "hidden md:flex"}`}>
            {/* Category Filter */}
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="px-4 py-2 border border-border rounded-md text-sm font-sans bg-card focus:outline-none focus:ring-2 focus:ring-secondary"
            >
              {categories.map(c => (
                <option key={c.value} value={c.value}>{c.label}</option>
              ))}
            </select>

            {/* Sort */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-2 border border-border rounded-md text-sm font-sans bg-card focus:outline-none focus:ring-2 focus:ring-secondary"
            >
              <option value="newest">Newest</option>
              <option value="price-asc">Price: Low → High</option>
              <option value="price-desc">Price: High → Low</option>
            </select>
          </div>
        </div>

        {/* Results */}
        <p className="text-sm text-muted-foreground font-sans mb-6">{filtered.length} product{filtered.length !== 1 ? "s" : ""} found</p>

        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {filtered.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="font-serif text-2xl text-muted-foreground">No products found</p>
            <p className="text-sm text-muted-foreground font-sans mt-2">Try adjusting your filters or search term.</p>
          </div>
        )}
      </div>
    </main>
  );
};

export default Shop;
