import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thank you! Your message has been sent.");
  };

  return (
    <main className="min-h-screen">
      <section className="bg-primary text-primary-foreground py-16 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <p className="text-secondary font-sans uppercase tracking-[0.3em] text-sm mb-2">Get In Touch</p>
          <h1 className="font-serif text-4xl md:text-5xl font-bold">Contact Us</h1>
        </motion.div>
      </section>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-5xl mx-auto">
          {/* Contact Info */}
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <h2 className="font-serif text-2xl font-bold mb-6">We'd Love to Hear From You</h2>
            <p className="text-muted-foreground font-sans leading-relaxed mb-8">
              Whether you have questions about our products, wholesale inquiries, or just want to share your favorite olive oil recipe — we're here to help.
            </p>
            <div className="space-y-6">
              {[
                { icon: Mail, label: "Email", value: "hello@olivegold.com" },
                { icon: Phone, label: "Phone", value: "+30 210 123 4567" },
                { icon: MapPin, label: "Address", value: "Olive Grove Lane 1, Kalamata, Greece" },
              ].map(({ icon: Icon, label, value }) => (
                <div key={label} className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-secondary/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon size={18} className="text-secondary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground font-sans">{label}</p>
                    <p className="font-sans font-bold">{value}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="space-y-5"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-sans font-bold mb-1">Name</label>
                <input type="text" required className="w-full px-4 py-3 border border-border rounded-md font-sans text-sm bg-card focus:outline-none focus:ring-2 focus:ring-secondary" />
              </div>
              <div>
                <label className="block text-sm font-sans font-bold mb-1">Email</label>
                <input type="email" required className="w-full px-4 py-3 border border-border rounded-md font-sans text-sm bg-card focus:outline-none focus:ring-2 focus:ring-secondary" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-sans font-bold mb-1">Subject</label>
              <input type="text" required className="w-full px-4 py-3 border border-border rounded-md font-sans text-sm bg-card focus:outline-none focus:ring-2 focus:ring-secondary" />
            </div>
            <div>
              <label className="block text-sm font-sans font-bold mb-1">Message</label>
              <textarea rows={5} required className="w-full px-4 py-3 border border-border rounded-md font-sans text-sm bg-card focus:outline-none focus:ring-2 focus:ring-secondary resize-none" />
            </div>
            <button type="submit" className="w-full px-8 py-3 bg-primary text-primary-foreground font-sans font-bold text-sm uppercase tracking-wider rounded-md hover:bg-olive-dark transition-colors">
              Send Message
            </button>
          </motion.form>
        </div>
      </div>
    </main>
  );
};

export default Contact;
