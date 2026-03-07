import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const categories = ['Alle', 'Schawarma & Döner', 'Sandwiches', 'Menüs', 'Pizzen', 'Vorspeisen'];

const menuItems = [
  // Schawarma & Döner
  {
    id: 1,
    name: 'Hähnchen Schawarma Sandwich',
    category: 'Schawarma & Döner',
    price: '8.50 €',
    description: 'mit Knoblauchsoße und sauren Gurken',
    image: 'https://imageproxy.wolt.com/assets/68c17d0e2f12e4d8636f4fea',
    bestseller: true,
  },
  {
    id: 2,
    name: 'Schawarma Damaskt Sandwich',
    category: 'Schawarma & Döner',
    price: '10.50 €',
    description: 'mit Champignons, Mais, Käse und Cocktailsoße',
    image: 'https://imageproxy.wolt.com/assets/68bee8aa03d9403079da8b9b',
    bestseller: true,
  },
  {
    id: 3,
    name: 'Döner Tasche Hähnchen',
    category: 'Schawarma & Döner',
    price: '10.50 €',
    description: 'Klassische Döner Tasche mit Hähnchenfleisch',
    image: 'https://imageproxy.wolt.com/assets/68bee8aa03d9403079da8ba2',
    bestseller: false,
  },
  {
    id: 4,
    name: 'Falafel Dürüm',
    category: 'Schawarma & Döner',
    price: '6.50 €',
    description: 'mit Hummus und Sesamsoße',
    image: 'https://imageproxy.wolt.com/assets/68bee8aa03d9403079da8bb1',
    bestseller: false,
  },

  // Sandwiches
  {
    id: 5,
    name: 'Farncesco Sandwich',
    category: 'Sandwiches',
    price: '10.50 €',
    description: 'mit Hähnchenspieß, Mais, Pilzen, Cheddar und Cocktailsoße',
    image: 'https://imageproxy.wolt.com/assets/68bee8ab03d9403079da8bb3',
    bestseller: true,
  },
  {
    id: 6,
    name: 'Zinger Sandwich',
    category: 'Sandwiches',
    price: '10.50 €',
    description: 'scharf mit Hähnchen, Pommes frites, Salat und Soße',
    image: 'https://imageproxy.wolt.com/assets/68bee8aa03d9403079da8b76',
    bestseller: false,
  },
  {
    id: 7,
    name: 'Falafel Baguette',
    category: 'Sandwiches',
    price: '6.60 €',
    description: 'mit Salat und Sesamsoße',
    image: 'https://imageproxy.wolt.com/assets/68bee8aa03d9403079da8b81',
    bestseller: false,
  },
  {
    id: 8,
    name: 'Halloumi Sandwich',
    category: 'Sandwiches',
    price: '7.50 €',
    description: 'mit Salat, Hummus und Oliven',
    image: 'https://imageproxy.wolt.com/assets/68bee8aa03d9403079da8b96',
    bestseller: false,
  },

  // Menüs
  {
    id: 9,
    name: 'Hähnchen Schawarma Teller Menü',
    category: 'Menüs',
    price: '14.50 €',
    description: 'mit Hähnchen, Salat und Knoblauchsoße',
    image: 'https://imageproxy.wolt.com/assets/68bee8aa03d9403079da8b83',
    bestseller: true,
  },
  {
    id: 10,
    name: 'Zinger Menü',
    category: 'Menüs',
    price: '14.60 €',
    description: 'scharf mit Hähnchen, Truthahnstücken, Cheddar und Cocktailsoße',
    image: 'https://imageproxy.wolt.com/assets/68bee8aa03d9403079da8baa',
    bestseller: true,
  },
  {
    id: 11,
    name: 'Crispy Menü',
    category: 'Menüs',
    price: '12.50 €',
    description: 'mit knusprigem Hähnchen, Reis, Coleslaw und Cocktailsoße',
    image: 'https://imageproxy.wolt.com/assets/68bee8aa03d9403079da8b91',
    bestseller: false,
  },
  {
    id: 12,
    name: 'Falafel-Teller Menü',
    category: 'Menüs',
    price: '12.50 €',
    description: '5 Stück mit Falafel, Salat, Hummus und sauren Gurken',
    image: 'https://imageproxy.wolt.com/assets/68bee8aa03d9403079da8b95',
    bestseller: false,
  },

  // Pizzen
  {
    id: 13,
    name: 'Pizza Margherita',
    category: 'Pizzen',
    price: '7.50 €',
    description: 'Klassische Pizza Margherita',
    image: 'https://imageproxy.wolt.com/assets/68bee8aa03d9403079da8b9d',
    bestseller: true,
  },
  {
    id: 14,
    name: 'Pizza Hähnchen Schawarma',
    category: 'Pizzen',
    price: '11.50 €',
    description: 'Pizza belegt mit leckerem Hähnchen Schawarma',
    image: 'https://imageproxy.wolt.com/assets/68bee8aa03d9403079da8b98',
    bestseller: false,
  },
  {
    id: 15,
    name: 'Pizza Tonno',
    category: 'Pizzen',
    price: '10.50 €',
    description: 'mit Thunfisch, Zwiebeln, Oliven und Paprika',
    image: 'https://imageproxy.wolt.com/assets/68bee8aa03d9403079da8bab',
    bestseller: false,
  },

  // Vorspeisen
  {
    id: 16,
    name: 'Hummus',
    category: 'Vorspeisen',
    price: '7.50 €',
    description: 'Klassischer Hummus',
    image: 'https://imageproxy.wolt.com/assets/68bee8aa03d9403079da8b90',
    bestseller: false,
  },
  {
    id: 17,
    name: 'Fattoush',
    category: 'Vorspeisen',
    price: '7.70 €',
    description: 'Frischer orientalischer Salat',
    image: 'https://imageproxy.wolt.com/assets/68bee8aa03d9403079da8bac',
    bestseller: false,
  },
  {
    id: 18,
    name: 'Pommes frites',
    category: 'Vorspeisen',
    price: '6.50 €',
    description: 'Knusprige Pommes frites',
    image: 'https://imageproxy.wolt.com/assets/68bee8aa03d9403079da8b7b',
    bestseller: true,
  },
];

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState('Alle');

  const filteredItems = menuItems.filter(
    (item) => activeCategory === 'Alle' || item.category === activeCategory
  );

  return (
    <section id="menu" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <h4 className="text-primary font-bold tracking-widest uppercase text-sm">Unser Angebot</h4>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-text">
            Das <span className="text-accent">Menü</span>
          </h2>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full text-sm font-semibold uppercase tracking-wider transition-all ${
                activeCategory === category
                  ? 'bg-primary text-white shadow-md'
                  : 'bg-gray-100 text-text-light hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Menu Grid */}
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group bg-bg rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  {item.bestseller && (
                    <div className="absolute top-4 right-4 bg-accent text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-md">
                      Bestseller
                    </div>
                  )}
                </div>
                <div className="p-6 space-y-4">
                  <div className="flex justify-between items-start gap-4">
                    <h3 className="text-xl font-serif font-bold text-text leading-tight group-hover:text-primary transition-colors">
                      {item.name}
                    </h3>
                    <span className="text-lg font-bold text-primary whitespace-nowrap">
                      {item.price}
                    </span>
                  </div>
                  <p className="text-text-light text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
