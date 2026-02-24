import { motion } from "framer-motion";

const blogPosts = [
  { id: 1, title: "How to Choose the Best Extra Virgin Olive Oil", date: "February 15, 2026", excerpt: "Not all olive oils are created equal. Learn how to identify true quality by looking at harvest dates, acidity levels, and taste profiles.", category: "Guide" },
  { id: 2, title: "5 Mediterranean Recipes Using Premium Olive Oil", date: "February 1, 2026", excerpt: "From classic Greek salads to Italian bruschetta, discover five simple recipes that let your olive oil shine as the star ingredient.", category: "Recipes" },
  { id: 3, title: "The Health Benefits of Cold-Pressed Olive Oil", date: "January 20, 2026", excerpt: "Rich in polyphenols and antioxidants, cold-pressed olive oil offers remarkable health benefits backed by science.", category: "Health" },
];

const Blog = () => {
  return (
    <main className="min-h-screen">
      {/* Header */}
      <section className="bg-primary text-primary-foreground py-16 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <p className="text-secondary font-sans uppercase tracking-[0.3em] text-sm mb-2">From Our Grove</p>
          <h1 className="font-serif text-4xl md:text-5xl font-bold">The OliveGold Journal</h1>
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
              <span className="inline-block mt-4 text-sm text-secondary font-sans font-bold uppercase tracking-wider">Read More →</span>
            </motion.article>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Blog;
