import { motion } from 'motion/react';

export default function About() {
  return (
    <section id="about" className="py-24 bg-bg overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        {/* Image Grid */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative grid grid-cols-2 gap-4"
        >
          <div className="space-y-4 mt-12">
            <img
              src="https://images.unsplash.com/photo-1590846406792-0adc7f938f1d?q=80&w=800&auto=format&fit=crop"
              alt="Restaurant Interior"
              className="w-full h-64 object-cover rounded-2xl shadow-lg"
              referrerPolicy="no-referrer"
            />
            <img
              src="https://images.unsplash.com/photo-1628840042765-356cda07504e?q=80&w=800&auto=format&fit=crop"
              alt="Fresh Ingredients"
              className="w-full h-48 object-cover rounded-2xl shadow-lg"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="space-y-4">
            <img
              src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=800&auto=format&fit=crop"
              alt="Chef cooking"
              className="w-full h-80 object-cover rounded-2xl shadow-lg"
              referrerPolicy="no-referrer"
            />
            <div className="bg-accent-light/20 p-6 rounded-2xl flex items-center justify-center text-center h-32">
              <p className="font-serif text-2xl font-bold text-primary-dark">Seit 1998</p>
            </div>
          </div>
        </motion.div>

        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="space-y-8"
        >
          <div className="space-y-4">
            <h4 className="text-primary font-bold tracking-widest uppercase text-sm">Unsere Geschichte</h4>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-text leading-tight">
              Tradition trifft auf <br />
              <span className="text-accent">moderne Küche</span>
            </h2>
          </div>
          
          <div className="space-y-6 text-text-light text-lg leading-relaxed">
            <p>
              Was als kleiner Familienbetrieb begann, ist heute ein Treffpunkt für Liebhaber der authentischen orientalischen Küche. Wir bereiten unseren Shawarma nach einem geheimen Familienrezept zu, das über Generationen weitergegeben wurde.
            </p>
            <p>
              Unser Geheimnis? Kompromisslose Qualität. Wir verwenden ausschließlich frisches Fleisch, handverlesene Gewürze und backen unser Brot täglich frisch. Jeder Biss ist eine Reise durch die Aromen des Orients.
            </p>
          </div>

          <div className="pt-4 flex items-center gap-6">
            <div className="flex flex-col">
              <span className="text-3xl font-bold font-serif text-primary">100%</span>
              <span className="text-sm text-text-light uppercase tracking-wider font-medium">Frische Zutaten</span>
            </div>
            <div className="w-px h-12 bg-gray-200" />
            <div className="flex flex-col">
              <span className="text-3xl font-bold font-serif text-primary">24h</span>
              <span className="text-sm text-text-light uppercase tracking-wider font-medium">Marinade</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
