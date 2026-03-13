import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/landing/Hero';
import LiveBanner from '@/components/landing/LiveBanner';
import Agents from '@/components/landing/Agents';
import ArenaShowcase from '@/components/landing/ArenaShowcase';
import HowItWorks from '@/components/landing/HowItWorks';
import TechStrip from '@/components/landing/TechStrip';
import Tokenomics from '@/components/landing/Tokenomics';
import ClosingCTA from '@/components/landing/ClosingCTA';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-cream">
      <Navbar />
      <Hero />
      <LiveBanner />
      <Agents />
      <ArenaShowcase />
      <HowItWorks />
      <TechStrip />
      <Tokenomics />
      <ClosingCTA />
      <Footer />
    </div>
  );
}
