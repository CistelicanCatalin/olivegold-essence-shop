import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const CookieNotice = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem("olivegold-cookies");
    if (!accepted) {
      const timer = setTimeout(() => setVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const accept = () => {
    localStorage.setItem("olivegold-cookies", "true");
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-0 left-0 right-0 z-50 p-4"
        >
          <div className="container mx-auto max-w-4xl bg-foreground text-primary-foreground rounded-lg p-6 flex flex-col md:flex-row items-center gap-4 shadow-2xl">
            <p className="text-sm font-sans flex-1">
              Folosim cookie-uri pentru a îmbunătăți experiența ta de navigare și pentru a oferi conținut personalizat. Continuând să folosești site-ul nostru, ești de acord cu utilizarea cookie-urilor.
            </p>
            <div className="flex items-center gap-3">
              <button onClick={accept} className="px-6 py-2 bg-secondary text-secondary-foreground font-sans font-bold text-sm rounded-md hover:bg-gold-dark transition-colors">
                Acceptă Toate
              </button>
              <button onClick={accept} className="text-primary-foreground/60 hover:text-primary-foreground transition-colors" aria-label="Închide">
                <X size={20} />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieNotice;
