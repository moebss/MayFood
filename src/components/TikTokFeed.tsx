import { useEffect, useRef } from 'react';
import { motion } from 'motion/react';

const tiktokVideos = [
    '7581249943869017347',
    '7580874400988155158',
    '7576660068842687766',
    '7575880412799552790',
    '7575880217882004738',
    '7574212642537999638',
];

const TIKTOK_USER = 'may_food.1';

export default function TikTokFeed() {
    const containerRef = useRef<HTMLDivElement>(null);
    const scriptLoaded = useRef(false);

    useEffect(() => {
        if (!scriptLoaded.current) {
            const script = document.createElement('script');
            script.src = 'https://www.tiktok.com/embed.js';
            script.async = true;
            document.body.appendChild(script);
            scriptLoaded.current = true;
        }
    }, []);

    return (
        <section id="tiktok" className="py-24 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16 space-y-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h4 className="text-primary font-bold tracking-widest uppercase text-sm">Folge uns</h4>
                        <h2 className="text-4xl md:text-5xl font-serif font-bold text-text mt-4">
                            Unsere <span className="text-accent">TikToks</span>
                        </h2>
                        <p className="text-text-light text-lg mt-4 max-w-2xl mx-auto">
                            Schau hinter die Kulissen und entdecke, wie wir unseren Shawarma frisch für dich zubereiten.
                        </p>
                    </motion.div>
                </div>

                {/* Horizontally scrollable TikTok feed */}
                <div
                    ref={containerRef}
                    className="flex gap-6 overflow-x-auto pb-6 snap-x snap-mandatory scrollbar-hide"
                    style={{
                        scrollbarWidth: 'none',
                        msOverflowStyle: 'none',
                    }}
                >
                    {tiktokVideos.map((videoId, index) => (
                        <motion.div
                            key={videoId}
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="flex-shrink-0 snap-center w-[325px]"
                        >
                            <blockquote
                                className="tiktok-embed"
                                cite={`https://www.tiktok.com/@${TIKTOK_USER}/video/${videoId}`}
                                data-video-id={videoId}
                                style={{ maxWidth: '325px', minWidth: '325px' }}
                            >
                                <section />
                            </blockquote>
                        </motion.div>
                    ))}
                </div>

                {/* CTA to TikTok profile */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="text-center mt-12"
                >
                    <a
                        href={`https://www.tiktok.com/@${TIKTOK_USER}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex items-center gap-3 px-8 py-4 bg-text text-white text-lg font-semibold rounded-full transition-all hover:scale-105 hover:shadow-xl"
                    >
                        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 0 0-.79-.05A6.34 6.34 0 0 0 3.15 15a6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.69a8.29 8.29 0 0 0 4.76 1.5V6.73a4.83 4.83 0 0 1-1-.04z" />
                        </svg>
                        Mehr auf TikTok
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
