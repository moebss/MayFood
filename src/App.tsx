/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Menu from './components/Menu';
import Gallery from './components/Gallery';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-bg font-sans text-text">
      <Navbar />
      <Hero />
      <About />
      <Menu />
      <Gallery />
      <Footer />
    </div>
  );
}
