import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Metrics } from './components/Metrics';
import { ProblemSolution } from './components/ProblemSolution';
import { Features } from './components/Features';
import { Widgets } from './components/Widgets';
import { HowItWorks } from './components/HowItWorks';
import { Pricing } from './components/Pricing';
import { Faq } from './components/Faq';
import { FinalCta } from './components/FinalCta';
import { Footer } from './components/Footer';
import { DownloadModal } from './components/DownloadModal';
import { useReveal } from './hooks/useReveal';

export default function App() {
  const [downloadOpen, setDownloadOpen] = useState(false);
  useReveal();

  return (
    <div className="min-h-screen bg-paper text-ink">
      <Navbar onDownload={() => setDownloadOpen(true)} />

      <main>
        <Hero onDownload={() => setDownloadOpen(true)} />
        <Metrics />
        <ProblemSolution />
        <Features />
        <Widgets />
        <HowItWorks />
        <Pricing onDownload={() => setDownloadOpen(true)} />
        <Faq />
        <FinalCta onDownload={() => setDownloadOpen(true)} />
      </main>

      <Footer />

      <DownloadModal open={downloadOpen} onClose={() => setDownloadOpen(false)} />
    </div>
  );
}
