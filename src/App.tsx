/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Menu from './components/Menu';
import Gallery from './components/Gallery';
import Location from './components/Location';
import TikTokFeed from './components/TikTokFeed';
import Footer from './components/Footer';
import { LegalModals } from './components/LegalModals';

export default function App() {
  const [showImpressum, setShowImpressum] = useState(false);
  const [showDatenschutz, setShowDatenschutz] = useState(false);

  return (
    <div className="min-h-screen bg-bg font-sans text-text">
      <Navbar />
      <Hero />
      <About />
      <Menu />
      <Gallery />
      <TikTokFeed />
      <Location />
      <Footer
        onShowImpressum={() => setShowImpressum(true)}
        onShowDatenschutz={() => setShowDatenschutz(true)}
      />

      <LegalModals
        showImpressum={showImpressum}
        setShowImpressum={setShowImpressum}
        showDatenschutz={showDatenschutz}
        setShowDatenschutz={setShowDatenschutz}
      />
    </div>
  );
}
