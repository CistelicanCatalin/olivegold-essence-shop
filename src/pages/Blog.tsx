import { motion } from "framer-motion";

const blogPosts = [
  { id: 1, title: "Cum să alegi cel mai bun ulei de măsline extra virgin", date: "15 Februarie 2026", excerpt: "Nu toate uleiurile de măsline sunt la fel. Află cum să identifici calitatea adevărată analizând datele de recoltare, nivelurile de aciditate și profilurile de gust.", category: "Ghid" },
  { id: 2, title: "5 Rețete Mediteraneene cu Ulei de Măsline Premium", date: "1 Februarie 2026", excerpt: "De la salate grecești clasice la bruschetta italiană, descoperă cinci rețete simple care lasă uleiul de măsline să fie vedeta.", category: "Rețete" },
  { id: 3, title: "Beneficiile pentru Sănătate ale Uleiului de Măsline Presat la Rece", date: "20 Ianuarie 2026", excerpt: "Bogat în polifenoli și antioxidanți, uleiul de măsline presat la rece oferă beneficii remarcabile pentru sănătate, susținute de știință.", category: "Sănătate" },
];

const Blog = () => {
  return (
    <main className="min-h-screen">
      <section className="bg-primary text-primary-foreground py-16 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <p className="text-secondary font-sans uppercase tracking-[0.3em] text-sm mb-2">Din Livada Noastră</p>
          <h1 className="font-serif text-4xl md:text-5xl font-bold">Jurnalul Livezii</h1>
        </motion.div>
      </section>

      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <div className="space-y-10">
          {blogPosts.map((post, i) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card rounded-lg p-8 shadow-card hover:shadow-hover transition-shadow cursor-pointer"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="px-3 py-1 bg-secondary/20 text-secondary-foreground text-xs font-sans font-bold rounded-full uppercase tracking-wider">{post.category}</span>
                <span className="text-sm text-muted-foreground font-sans">{post.date}</span>
              </div>
              <h2 className="font-serif text-2xl font-bold text-foreground mb-3 hover:text-secondary transition-colors">{post.title}</h2>
              <p className="text-muted-foreground font-sans leading-relaxed">{post.excerpt}</p>
              <span className="inline-block mt-4 text-sm text-secondary font-sans font-bold uppercase tracking-wider">Citește Mai Mult →</span>
            </motion.article>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Blog;
