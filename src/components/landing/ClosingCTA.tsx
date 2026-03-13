import { Link } from 'react-router-dom';
import DarkSection from '@/components/layout/DarkSection';
import { LINKS } from '@/config/agents';

const CTA_DOTS = [
  { color: '#B8860B', top: '18%', left: '10%' },
  { color: '#0A7E8C', top: '72%', left: '85%' },
  { color: '#8B2500', top: '35%', left: '65%' },
  { color: '#6B6B6B', top: '80%', left: '25%' },
  { color: '#F4F1EC', top: '50%', left: '5%' },
  { color: '#B8860B', top: '15%', left: '78%' },
];

export default function ClosingCTA() {
  return (
    <DarkSection className="py-32" dots={CTA_DOTS}>
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-light-text tracking-[0.08em] uppercase mb-6">
          THE ARENA AWAITS
        </h2>
        <p className="text-light-text/55 font-light text-lg mb-12">
          Choose your champion. Stake your claim. Let the AGON begin.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <Link
            to="/arena"
            className="bg-light-text text-dark-bg px-8 py-3 text-sm tracking-[0.15em] uppercase rounded hover:opacity-90 transition-opacity"
          >
            Enter the Arena
          </Link>
          <a
            href={LINKS.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-light-text/30 text-light-text px-8 py-3 text-sm tracking-[0.15em] uppercase rounded hover:border-light-text/60 transition-colors"
          >
            Follow on X
          </a>
        </div>

        {/* Closing Visual Placeholder */}
        <div className="w-full h-48 md:h-72 border-2 border-dashed border-light-text/15 rounded-lg flex items-center justify-center">
          {/* SWAP: Replace with closing visual / all 4 agents banner */}
          <span className="text-light-text/30 text-sm tracking-wider uppercase">
            Closing Visual / All 4 Agents Banner Placeholder
          </span>
        </div>
      </div>
    </DarkSection>
  );
}
