import { motion } from 'motion/react';
import { ChevronRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1561651823-34feb02250e4?q=80&w=2000&auto=format&fit=crop"
          alt="Fresh Shawarma"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto mt-20">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight"
        >
          Authentischer <span className="text-accent">Shawarma</span>
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-lg md:text-2xl text-white/90 mb-10 font-light max-w-2xl mx-auto"
        >
          Frisch, saftig und voller Geschmack. Erlebe die Tradition des echten Streetfoods in modernem Ambiente.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="https://www.lieferando.de/speisekarte/may-food-kln"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative px-8 py-4 bg-primary text-white text-lg font-semibold uppercase tracking-wider rounded-full overflow-hidden transition-all hover:scale-105 hover:shadow-xl w-full sm:w-auto flex items-center justify-center"
          >
            <span className="relative z-10">Auf Lieferando bestellen</span>
            <div className="absolute inset-0 bg-primary-dark transform scale-x-0 origin-left transition-transform group-hover:scale-x-100 z-0" />
          </a>
          
          <a
            href="#menu"
            className="group px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/30 text-white text-lg font-semibold uppercase tracking-wider rounded-full transition-all hover:bg-white/20 hover:scale-105 w-full sm:w-auto flex items-center justify-center gap-2"
          >
            Menü ansehen
            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-white/60 text-xs uppercase tracking-widest">Scroll</span>
        <div className="w-[1px] h-12 bg-white/30 overflow-hidden">
          <motion.div
            animate={{ y: [0, 48, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
            className="w-full h-1/2 bg-white"
          />
        </div>
      </motion.div>
    </section>
  );
}
