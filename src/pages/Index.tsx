import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Leaf, Award, Truck } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import aboutBg from "@/assets/about-bg.jpg";
import { products } from "@/data/products";
import ProductCard from "@/components/ProductCard";

const Index = () => {
  const bestSellers = products.filter(p => p.isBestSeller);

  return (
    <main>
      {/* Secțiunea Hero */}
      <section className="relative h-[80vh] md:h-[90vh] overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroBg} alt="Livadă de măslini mediteraneană" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/70 via-foreground/40 to-transparent" />
        </div>
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-xl"
          >
            <p className="text-secondary font-sans uppercase tracking-[0.3em] text-sm mb-4">Ulei de Măsline Premium din Mediterana</p>
            <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-primary-foreground font-bold leading-tight mb-6">
              Aurul <span className="text-gradient-gold">Lichid</span> al Mediteranei
            </h1>
            <p className="text-primary-foreground/80 font-sans text-lg mb-8 leading-relaxed">
              Culese manual, presate la rece și create cu secole de tradiție. Descoperă cele mai pure uleiuri de măsline din Grecia și Italia.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/shop"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-secondary text-secondary-foreground font-sans font-bold text-sm uppercase tracking-wider rounded-md hover:bg-gold-dark transition-colors"
              >
                Vezi Colecția <ArrowRight size={16} />
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-primary-foreground/30 text-primary-foreground font-sans font-bold text-sm uppercase tracking-wider rounded-md hover:border-secondary hover:text-secondary transition-colors"
              >
                Povestea Noastră
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Bara de Caracteristici */}
      <section className="bg-primary text-primary-foreground py-6">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            {[
              { icon: Leaf, title: "100% Natural", desc: "Fără aditivi, fără conservanți" },
              { icon: Award, title: "Premiat Internațional", desc: "Certificat de calitate internațională" },
              { icon: Truck, title: "Transport Gratuit", desc: "La comenzi peste 50€" },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="flex items-center justify-center gap-3">
                <Icon size={24} className="text-secondary" />
                <div className="text-left">
                  <p className="font-serif font-bold">{title}</p>
                  <p className="text-sm opacity-70 font-sans">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cele Mai Vândute */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="text-secondary font-sans uppercase tracking-[0.3em] text-sm mb-2">Selecție Aleasă</p>
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground">Cele Mai Vândute</h2>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {bestSellers.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/shop"
              className="inline-flex items-center gap-2 px-8 py-3 border-2 border-primary text-primary font-sans font-bold text-sm uppercase tracking-wider rounded-md hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              Vezi Toate Produsele <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Secțiunea Poveste */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img src={aboutBg} alt="Peisaj cu livadă de măslini" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-foreground/60" />
        </div>
        <div className="relative container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <p className="text-secondary font-sans uppercase tracking-[0.3em] text-sm mb-4">Moștenirea Noastră</p>
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-primary-foreground mb-6">
              De la Livadă la Masă
            </h2>
            <p className="text-primary-foreground/80 font-sans text-lg leading-relaxed mb-8">
              De generații, familia noastră a cultivat măslini sub soarele Mediteranei. Fiecare sticlă de la Livada cu Măslini poartă căldura pământului nostru, înțelepciunea tradiției și puritatea celui mai fin dar al naturii.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 px-8 py-3 bg-secondary text-secondary-foreground font-sans font-bold text-sm uppercase tracking-wider rounded-md hover:bg-gold-dark transition-colors"
            >
              Descoperă Povestea Noastră <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-cream">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-lg mx-auto"
          >
            <h2 className="font-serif text-3xl font-bold text-foreground mb-4">Alătură-te Familiei Livada cu Măslini</h2>
            <p className="text-muted-foreground font-sans mb-6">
              Abonează-te pentru rețete exclusive, noutăți despre recoltă și oferte speciale direct în inbox-ul tău.
            </p>
            <form onSubmit={(e) => e.preventDefault()} className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Introdu emailul tău"
                className="flex-1 px-4 py-3 border border-border rounded-md font-sans text-sm focus:outline-none focus:ring-2 focus:ring-secondary bg-card"
              />
              <button className="px-8 py-3 bg-primary text-primary-foreground font-sans font-bold text-sm uppercase tracking-wider rounded-md hover:bg-olive-dark transition-colors">
                Abonare
              </button>
            </form>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default Index;
