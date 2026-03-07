import { motion } from 'motion/react';

const images = [
  'https://imageproxy.wolt.com/assets/68bee8aa03d9403079da8b83', // Hähnchen Schawarma Teller Menü
  'https://imageproxy.wolt.com/assets/68c17d0e2f12e4d8636f4fea', // Hähnchen Schawarma Sandwich
  'https://imageproxy.wolt.com/assets/68bee8ab03d9403079da8bb3', // Farncesco Sandwich
  'https://imageproxy.wolt.com/assets/68bee8aa03d9403079da8b91', // Crispy Menü
  'https://imageproxy.wolt.com/assets/68bee8aa03d9403079da8b95', // Falafel-Teller Menü
  'https://imageproxy.wolt.com/assets/68bee8aa03d9403079da8b9d', // Pizza Margherita
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 bg-bg">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <h4 className="text-primary font-bold tracking-widest uppercase text-sm">Impressionen</h4>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-text">
            Unsere <span className="text-accent">Galerie</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {images.map((src, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative overflow-hidden rounded-2xl group ${
                index === 0 || index === 3 ? 'md:col-span-2 md:row-span-2' : ''
              }`}
            >
              <img
                src={src}
                alt={`Gallery image ${index + 1}`}
                className="w-full h-full object-cover aspect-square md:aspect-auto transform group-hover:scale-110 transition-transform duration-700 ease-out"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
