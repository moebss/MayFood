import { MapPin, Phone, Clock, Instagram } from 'lucide-react';

interface FooterProps {
  onShowImpressum: () => void;
  onShowDatenschutz: () => void;
}

export default function Footer({ onShowImpressum, onShowDatenschutz }: FooterProps) {
  return (
    <footer className="bg-text text-white pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        {/* Brand */}
        <div className="space-y-6">
          <h3 className="text-3xl font-bold font-serif tracking-tighter text-primary">MAY FOOD</h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            Authentischer Shawarma, frisch zubereitet mit Liebe und Tradition. Erlebe den Geschmack des Orients in Köln.
          </p>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 0 0-.79-.05A6.34 6.34 0 0 0 3.15 15a6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.69a8.29 8.29 0 0 0 4.76 1.5V6.73a4.83 4.83 0 0 1-1-.04z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Links */}
        <div className="space-y-6">
          <h4 className="text-lg font-bold uppercase tracking-wider">Links</h4>
          <ul className="space-y-3">
            <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">Über uns</a></li>
            <li><a href="#menu" className="text-gray-400 hover:text-white transition-colors">Menü</a></li>
            <li><a href="#gallery" className="text-gray-400 hover:text-white transition-colors">Galerie</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div className="space-y-6">
          <h4 className="text-lg font-bold uppercase tracking-wider">Kontakt</h4>
          <ul className="space-y-4">
            <li className="flex items-start gap-3 text-gray-400">
              <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
              <span>Maybachstraße 100<br />50670 Köln</span>
            </li>
            <li className="flex items-center gap-3 text-gray-400">
              <Phone className="w-5 h-5 text-primary flex-shrink-0" />
              <span>Online Bestellung</span>
            </li>
          </ul>
        </div>

        {/* Hours */}
        <div className="space-y-6">
          <h4 className="text-lg font-bold uppercase tracking-wider">Öffnungszeiten</h4>
          <ul className="space-y-4">
            <li className="flex items-start gap-3 text-gray-400">
              <Clock className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
              <div className="space-y-1">
                <p className="flex justify-between gap-4">
                  <span>Do:</span>
                  <span>11:00 – 23:00</span>
                </p>
                <p className="flex justify-between gap-4">
                  <span>Fr – Sa:</span>
                  <span>11:00 – 00:30</span>
                </p>
                <p className="flex justify-between gap-4">
                  <span>So – Mi:</span>
                  <span>11:00 – 23:00</span>
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-8 border-t border-white/10 text-center text-gray-500 text-sm flex flex-col md:flex-row justify-between items-center gap-4">
        <p>&copy; {new Date().getFullYear()} MAY FOOD. Alle Rechte vorbehalten.</p>
        <div className="flex gap-4">
          <button onClick={onShowImpressum} className="hover:text-white transition-colors cursor-pointer">Impressum</button>
          <button onClick={onShowDatenschutz} className="hover:text-white transition-colors cursor-pointer">Datenschutz</button>
        </div>
      </div>
    </footer>
  );
}
