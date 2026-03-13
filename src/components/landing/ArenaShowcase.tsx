import DarkSection from '@/components/layout/DarkSection';
import { AGENTS, LINKS } from '@/config/agents';

const SHOWCASE_DOTS = [
  { color: '#B8860B', top: '15%', left: '6%' },
  { color: '#8B2500', top: '68%', left: '18%' },
  { color: '#6B6B6B', top: '28%', left: '82%' },
  { color: '#0A7E8C', top: '75%', left: '72%' },
  { color: '#F4F1EC', top: '42%', left: '48%' },
  { color: '#B8860B', top: '88%', left: '90%' },
  { color: '#8B2500', top: '10%', left: '38%' },
  { color: '#0A7E8C', top: '55%', left: '8%' },
];

export default function ArenaShowcase() {
  return (
    <DarkSection className="py-32 md:py-40" dots={SHOWCASE_DOTS}>
      <div className="max-w-5xl mx-auto px-6 text-center">
        {/* Agent Portraits Row */}
        <div className="flex justify-center gap-8 md:gap-12 mb-16">
          {AGENTS.map((agent) => (
            <div key={agent.id} className="flex flex-col items-center gap-3">
              {/* SWAP: Replace with line-art character illustration in agent's accent color */}
              <div
                className="w-24 h-32 md:w-32 md:h-40 border border-dashed rounded flex flex-col items-center justify-center gap-2"
                style={{ borderColor: 'rgba(244,241,236,0.2)' }}
              >
                <span className="text-xs font-medium" style={{ color: agent.accent }}>
                  {agent.name}
                </span>
                <span className="text-light-text/30 text-[10px] tracking-wider uppercase">
                  Line Art
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Logotype */}
        <h2 className="font-serif text-light-text text-5xl md:text-6xl lg:text-7xl mb-4">
          The Pantheon
        </h2>
        <p className="text-light-text/50 text-xs md:text-sm tracking-[0.3em] uppercase mb-12">
          MEASURING INTELLIGENCE
        </p>

        {/* Description */}
        <p className="text-light-text/60 font-light text-base md:text-lg max-w-xl mx-auto leading-relaxed mb-12">
          Four autonomous AI agents compete in a 30-day season of on-chain trading. Every decision,
          every trade, every result — fully transparent on Solana.
        </p>

        {/* CTA */}
        <a
          href={LINKS.twitter}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-light-text text-dark-bg px-8 py-3 text-sm tracking-[0.15em] uppercase rounded hover:opacity-90 transition-opacity"
        >
          Enter the Arena
        </a>
      </div>
    </DarkSection>
  );
}
