import React from 'react';
import { X } from 'lucide-react';

interface LegalModalProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    children: React.ReactNode;
}

const LegalModal: React.FC<LegalModalProps> = ({ isOpen, onClose, title, children }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
            <div className="bg-white text-text w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl relative shadow-2xl animate-in fade-in zoom-in duration-300">
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full transition-colors z-10"
                >
                    <X className="w-6 h-6" />
                </button>

                <div className="p-8 md:p-12">
                    <h2 className="text-3xl font-serif font-bold mb-8 text-primary border-b pb-4">{title}</h2>
                    <div className="prose prose-sm md:prose-base max-w-none text-gray-600 leading-relaxed">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
};

interface LegalModalsProps {
    showImpressum: boolean;
    setShowImpressum: (show: boolean) => void;
    showDatenschutz: boolean;
    setShowDatenschutz: (show: boolean) => void;
}

export const LegalModals: React.FC<LegalModalsProps> = ({
    showImpressum,
    setShowImpressum,
    showDatenschutz,
    setShowDatenschutz,
}) => {
    return (
        <>
            {/* Impressum */}
            <LegalModal
                isOpen={showImpressum}
                onClose={() => setShowImpressum(false)}
                title="Impressum"
            >
                <div className="space-y-6">
                    <section>
                        <h3 className="text-xl font-bold text-text mb-2">Angaben gemäß § 5 TMG</h3>
                        <p>
                            MAY FOOD<br />
                            Alexander Rheindorf<br />
                            Maybachstraße 100<br />
                            50670 Köln
                        </p>
                    </section>

                    <section>
                        <h3 className="text-xl font-bold text-text mb-2">Kontakt</h3>
                        <p>
                            E-Mail: alexander.rheindorf@fdp-rek.de<br />
                            (Hinweis: Dies ist eine Beispielseite für MAY FOOD)
                        </p>
                    </section>

                    <section>
                        <h3 className="text-xl font-bold text-text mb-2">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h3>
                        <p>
                            Alexander Rheindorf<br />
                            Maybachstraße 100<br />
                            50670 Köln
                        </p>
                    </section>

                    <section>
                        <h3 className="text-xl font-bold text-text mb-2">Streitschlichtung</h3>
                        <p className="text-sm">
                            Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:
                            <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline ml-1">
                                https://ec.europa.eu/consumers/odr
                            </a>.
                            Unsere E-Mail-Adresse finden Sie oben im Impressum. Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
                        </p>
                    </section>
                </div>
            </LegalModal>

            {/* Datenschutz */}
            <LegalModal
                isOpen={showDatenschutz}
                onClose={() => setShowDatenschutz(false)}
                title="Datenschutzerklärung"
            >
                <div className="space-y-6">
                    <section>
                        <h3 className="text-xl font-bold text-text mb-2">1. Datenschutz auf einen Blick</h3>
                        <p>
                            Der Schutz Ihrer persönlichen Daten ist uns ein besonderes Anliegen. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.
                        </p>
                    </section>

                    <section>
                        <h3 className="text-xl font-bold text-text mb-2">2. Datenerfassung auf dieser Website</h3>
                        <h4 className="font-bold mb-1">Cookies</h4>
                        <p className="mb-4">
                            Unsere Webseite verwendet keine Cookies oder Tracking-Tools zur Analyse Ihres Nutzerverhaltens.
                        </p>

                        <h4 className="font-bold mb-1">Server-Log-Dateien</h4>
                        <p>
                            Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten Server-Log-Dateien, die Ihr Browser automatisch an uns übermittelt. Dies sind:
                        </p>
                        <ul className="list-disc pl-5 mt-2 space-y-1">
                            <li>Browsertyp und Browserversion</li>
                            <li>Verwendetes Betriebssystem</li>
                            <li>Referrer URL</li>
                            <li>Hostname des zugreifenden Rechners</li>
                            <li>Uhrzeit der Serveranfrage</li>
                            <li>IP-Adresse</li>
                        </ul>
                    </section>

                    <section>
                        <h3 className="text-xl font-bold text-text mb-2">3. Ihre Rechte</h3>
                        <p>
                            Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung oder Löschung dieser Daten zu verlangen.
                        </p>
                    </section>
                </div>
            </LegalModal>
        </>
    );
};
