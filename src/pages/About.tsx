import { motion } from "framer-motion";
import aboutBg from "@/assets/about-bg.jpg";
import { Leaf, Sun, Droplets, Heart } from "lucide-react";

const About = () => {
  const values = [
    { icon: Leaf, title: "100% Natural", desc: "Fără chimicale, fără aditivi. Ulei de măsline pur din cei mai buni arbori ai naturii." },
    { icon: Sun, title: "Copt la Soare", desc: "Măslinele noastre se coc sub soarele Mediteranei pentru o maturitate perfectă." },
    { icon: Droplets, title: "Presat la Rece", desc: "Metodele tradiționale păstrează fiecare nutrient și notă de aromă." },
    { icon: Heart, title: "Moștenire de Familie", desc: "Patru generații de meșteșug și pasiune pentru uleiul de măsline." },
  ];

  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="relative h-[50vh] overflow-hidden">
        <img src={aboutBg} alt="Livadă de măslini" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-foreground/50 flex items-center justify-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center">
            <p className="text-secondary font-sans uppercase tracking-[0.3em] text-sm mb-2">Moștenirea Noastră</p>
            <h1 className="font-serif text-4xl md:text-6xl font-bold text-primary-foreground">Povestea Noastră</h1>
          </motion.div>
        </div>
      </section>

      {/* Conținut */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-3xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="font-serif text-3xl font-bold mb-6 text-center">De la Familia Noastră la a Ta</h2>
            <div className="space-y-5 text-muted-foreground font-sans leading-relaxed">
              <p>Livada cu Măslini s-a născut dintr-o credință simplă: că cel mai fin ulei de măsline din lume ar trebui să fie accesibil tuturor celor care apreciază calitatea. Călătoria noastră a început în livezile însorite din sudul Greciei, unde familia noastră cultivă măslini de peste patru generații.</p>
              <p>Fiecare sticlă pe care o producem este o mărturie a angajamentului nostru neclintit față de tradiție și calitate. De la culegerea manuală a măslinelor perfect coapte până la presarea atentă la rece în câteva ore de la recoltare, fiecare pas este ghidat de înțelepciunea transmisă din generație în generație.</p>
              <p>Lucrăm direct cu livezi mici, deținute de familii, din Grecia și Italia, asigurându-ne că fiecare producător împărtășește pasiunea noastră pentru agricultura sustenabilă și calitatea excepțională. Măslinele noastre nu sunt niciodată produse în masă — fiecare copac este îngrijit individual, fiecare recoltă este degustată și testată înainte de a primi numele Livada cu Măslini.</p>
              <p>Astăzi, Livada cu Măslini aduce gustul pur, nefiltrat al Mediteranei pe mese din întreaga lume. Fie că ești un bucătar profesionist sau un pasionat de gătit acasă, te invităm să descoperi diferența pe care secole de tradiție o fac.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Valori */}
      <section className="py-20 bg-cream">
        <div className="container mx-auto px-4">
          <h2 className="font-serif text-3xl font-bold text-center mb-12">Valorile Noastre</h2>
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
