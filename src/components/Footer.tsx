import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-foreground text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <h3 className="font-serif text-2xl text-gradient-gold mb-4">LIVADA CU MĂSLINI</h3>
            <p className="text-sm opacity-70 font-sans leading-relaxed">
              Uleiuri de măsline premium, presate la rece, din cele mai bune livezi mediteraneene. Calitate, tradiție și gust în fiecare sticlă.
            </p>
          </div>

          {/* Linkuri rapide */}
          <div>
            <h4 className="font-serif text-lg mb-4">Linkuri Rapide</h4>
            <ul className="space-y-2 text-sm font-sans opacity-70">
              <li><Link to="/shop" className="hover:opacity-100 transition-opacity">Toate Produsele</Link></li>
              <li><Link to="/about" className="hover:opacity-100 transition-opacity">Povestea Noastră</Link></li>
              <li><Link to="/blog" className="hover:opacity-100 transition-opacity">Blog</Link></li>
              <li><Link to="/contact" className="hover:opacity-100 transition-opacity">Contact</Link></li>
            </ul>
          </div>

          {/* Asistență Clienți */}
          <div>
            <h4 className="font-serif text-lg mb-4">Asistență Clienți</h4>
            <ul className="space-y-2 text-sm font-sans opacity-70">
              <li><span className="hover:opacity-100 cursor-pointer transition-opacity">Livrare & Retururi</span></li>
              <li><span className="hover:opacity-100 cursor-pointer transition-opacity">Întrebări Frecvente</span></li>
              <li><span className="hover:opacity-100 cursor-pointer transition-opacity">Politica de Confidențialitate</span></li>
              <li><span className="hover:opacity-100 cursor-pointer transition-opacity">Termeni și Condiții</span></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-serif text-lg mb-4">Rămâi Conectat</h4>
            <p className="text-sm opacity-70 font-sans mb-3">Abonează-te pentru rețete, sfaturi și oferte exclusive.</p>
            <form onSubmit={(e) => e.preventDefault()} className="flex gap-2">
              <input
                type="email"
                placeholder="Emailul tău"
                className="flex-1 px-3 py-2 bg-charcoal-light text-primary-foreground text-sm rounded-md border border-charcoal-light focus:outline-none focus:ring-1 focus:ring-secondary font-sans"
              />
              <button type="submit" className="px-4 py-2 bg-secondary text-secondary-foreground text-sm font-bold rounded-md hover:bg-gold-dark transition-colors font-sans">
                Abonare
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-charcoal-light mt-12 pt-8 text-center text-sm opacity-50 font-sans">
          © 2026 Livada cu Măslini. Toate drepturile rezervate. Creat cu dragoste în Mediterana.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
