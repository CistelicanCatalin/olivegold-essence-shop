import { motion } from "framer-motion";
import aboutBg from "@/assets/about-bg.jpg";
import { Leaf, Sun, Droplets, Heart } from "lucide-react";

const About = () => {
  const values = [
    { icon: Leaf, title: "100% Natural", desc: "No chemicals, no additives. Pure olive oil from nature's finest trees." },
    { icon: Sun, title: "Sun-Ripened", desc: "Our olives bask in Mediterranean sunshine for perfect ripeness." },
    { icon: Droplets, title: "Cold-Pressed", desc: "Traditional methods preserve every nutrient and flavor note." },
    { icon: Heart, title: "Family Heritage", desc: "Four generations of olive oil craftsmanship and passion." },
  ];

  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="relative h-[50vh] overflow-hidden">
        <img src={aboutBg} alt="Olive grove" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-foreground/50 flex items-center justify-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center">
            <p className="text-secondary font-sans uppercase tracking-[0.3em] text-sm mb-2">Our Heritage</p>
            <h1 className="font-serif text-4xl md:text-6xl font-bold text-primary-foreground">Our Story</h1>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-3xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="font-serif text-3xl font-bold mb-6 text-center">From Our Family to Yours</h2>
            <div className="space-y-5 text-muted-foreground font-sans leading-relaxed">
              <p>OliveGold was born from a simple belief: that the world's finest olive oil should be accessible to everyone who appreciates quality. Our journey began in the sun-drenched groves of southern Greece, where our family has been cultivating olive trees for over four generations.</p>
              <p>Every bottle we produce is a testament to our unwavering commitment to tradition and quality. From the hand-picking of perfectly ripened olives to the careful cold-pressing within hours of harvest, every step is guided by the wisdom passed down through generations.</p>
              <p>We work directly with small, family-owned groves across Greece and Italy, ensuring that every producer shares our passion for sustainable farming and exceptional quality. Our olives are never mass-produced — each tree is cared for individually, each harvest is tasted and tested before it earns the OliveGold name.</p>
              <p>Today, OliveGold brings the pure, unfiltered taste of the Mediterranean to tables around the world. Whether you're a professional chef or a home cook, we invite you to taste the difference that centuries of tradition make.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-cream">
        <div className="container mx-auto px-4">
          <h2 className="font-serif text-3xl font-bold text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map(({ icon: Icon, title, desc }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center bg-card p-8 rounded-lg shadow-card"
              >
                <Icon size={40} className="mx-auto text-secondary mb-4" />
                <h3 className="font-serif text-xl font-bold mb-2">{title}</h3>
                <p className="text-sm text-muted-foreground font-sans">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
