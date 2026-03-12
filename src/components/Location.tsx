import { motion } from 'motion/react';
import { MapPin, Phone, Clock, Navigation } from 'lucide-react';

export default function Location() {
    return (
        <section id="location" className="py-24 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Map Section */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative rounded-3xl overflow-hidden shadow-2xl h-[500px] bg-gray-100"
                    >
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2512.0!2d6.9120!3d50.9580!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47bf25a0a0a0a0a0%3A0x0!2sMaybachstra%C3%9Fe%20100%2C%2050670%20K%C3%B6ln!5e0!3m2!1sde!2sde!4v1710000000000!5m2!1sde!2sde"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="MAY FOOD Standort"
                            className="grayscale contrast-125 transition-all duration-700 hover:grayscale-0"
                        />
                        <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md p-6 rounded-2xl shadow-lg flex items-center justify-between">
                            <div>
                                <h4 className="font-bold text-text">Maybachstraße 100, 50670 Köln</h4>
                                <p className="text-sm text-text-light">Besuchen Sie uns im Herzen von Köln</p>
                            </div>
                            <a
                                href="https://www.google.com/maps/place/Maybachstra%C3%9Fe+100,+50670+K%C3%B6ln"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-primary text-white p-3 rounded-xl hover:bg-primary-dark transition-colors shadow-lg shadow-primary/20"
                            >
                                <Navigation className="w-6 h-6" />
                            </a>
                        </div>
                    </motion.div>

                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="space-y-12"
                    >
                        <div className="space-y-4">
                            <h4 className="text-primary font-bold tracking-widest uppercase text-sm">Unser Standort</h4>
                            <h2 className="text-4xl md:text-5xl font-serif font-bold text-text leading-tight">
                                Besuchen Sie uns im <br />
                                <span className="text-accent">Herzen von Köln</span>
                            </h2>
                        </div>

                        <div className="grid sm:grid-cols-2 gap-8">
                            <div className="space-y-4">
                                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                                    <MapPin className="w-6 h-6 text-primary" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-text uppercase tracking-wider text-sm">Adresse</h4>
                                    <p className="text-text-light text-lg">Maybachstraße 100<br />50670 Köln, Deutschland</p>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center">
                                    <Phone className="w-6 h-6 text-accent" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-text uppercase tracking-wider text-sm">Bestellung</h4>
                                    <p className="text-text-light text-lg">
                                        <a href="tel:+4901789624429" className="hover:text-primary transition-colors">0178 962 4429</a><br />
                                        oder via Lieferando
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="p-8 bg-text rounded-3xl text-white space-y-6 border border-white/5 shadow-2xl shadow-black/20">
                            <div className="flex items-center gap-4 border-b border-white/10 pb-6">
                                <Clock className="w-8 h-8 text-primary" />
                                <div>
                                    <h4 className="font-bold text-xl">Öffnungszeiten</h4>
                                    <p className="text-gray-400 text-sm">Immer für Sie da</p>
                                </div>
                            </div>
                            <div className="space-y-3">
                                <div className="flex justify-between items-center text-lg">
                                    <span className="text-gray-400">Donnerstag:</span>
                                    <span className="font-medium">11:00 – 23:00</span>
                                </div>
                                <div className="flex justify-between items-center text-lg">
                                    <span className="text-gray-400">Freitag:</span>
                                    <span className="font-medium text-primary">11:00 – 00:30</span>
                                </div>
                                <div className="flex justify-between items-center text-lg">
                                    <span className="text-gray-400">Samstag:</span>
                                    <span className="font-medium text-primary">11:00 – 00:30</span>
                                </div>
                                <div className="flex justify-between items-center text-lg">
                                    <span className="text-gray-400">Sonntag:</span>
                                    <span className="font-medium">11:00 – 23:00</span>
                                </div>
                                <div className="flex justify-between items-center text-lg">
                                    <span className="text-gray-400">Mo – Mi:</span>
                                    <span className="font-medium">11:00 – 23:00</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
