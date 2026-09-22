import Navbar from '@/components/site/Navbar';
import Hero from '@/components/site/Hero';
import Philosophy from '@/components/site/Philosophy';
import MarkdownFeature from '@/components/site/MarkdownFeature';
import ConnectionsFeature from '@/components/site/ConnectionsFeature';
import GraphFeature from '@/components/site/GraphFeature';
import CanvasFeature from '@/components/site/CanvasFeature';
import TemplatesFeature from '@/components/site/TemplatesFeature';
import AIFeature from '@/components/site/AIFeature';
import PrivacyFeature from '@/components/site/PrivacyFeature';
import DownloadCTA from '@/components/site/DownloadCTA';
import Footer from '@/components/site/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      <Navbar />
      <main>
        <Hero />
        <Philosophy />
        <MarkdownFeature />
        <ConnectionsFeature />
        <GraphFeature />
        <CanvasFeature />
        <TemplatesFeature />
        <AIFeature />
        <PrivacyFeature />
        <DownloadCTA />
      </main>
      <Footer />
    </div>
  );
}