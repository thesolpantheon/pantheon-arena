import { Copy } from 'lucide-react';

const ALLOCATIONS = [
  { label: 'Arena Treasury (Prize Pool)', pct: 40, color: '#242424' },
  { label: 'Staker Rewards', pct: 30, color: '#6B6B6B' },
  { label: 'Team / Development', pct: 20, color: 'rgba(36,36,36,0.4)' },
  { label: 'Community / Marketing', pct: 10, color: '#0A7E8C' },
];

export default function Tokenomics() {
  return (
    <section id="tokenomics" className="bg-cream py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-dark tracking-[0.1em] uppercase mb-4">
            AGON TOKEN
          </h2>
          <p className="text-dark/50 font-light">The fuel of the arena.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          {/* Token Details */}
          <div className="space-y-5">
            {[
              { label: 'Token Name', value: 'AGON' },
              { label: 'Network', value: 'Solana (SPL)' },
              { label: 'Use Cases', value: 'Staking, Betting, Governance, Rewards' },
            ].map((item) => (
              <div key={item.label}>
                <span className="text-dark/40 text-[10px] tracking-[0.2em] uppercase block mb-1">
                  {item.label}
                </span>
                <span className="text-dark font-medium text-sm">{item.value}</span>
              </div>
            ))}

            {/* Contract Address */}
            <div>
              <span className="text-dark/40 text-[10px] tracking-[0.2em] uppercase block mb-1">
                Contract Address
              </span>
              <div className="inline-flex items-center gap-2 border border-dark/15 rounded px-3 py-1.5">
                <code className="font-mono text-dark text-sm">TBA</code>
                <button className="text-dark/30 hover:text-dark/60 transition-colors" aria-label="Copy address">
                  <Copy size={14} />
                </button>
              </div>
            </div>
          </div>

          {/* Chart Placeholder + Legend */}
          <div>
            {/* SWAP: Replace with actual donut/pie chart */}
            <div className="w-64 h-64 mx-auto border-2 border-dashed border-dark/15 rounded-full flex items-center justify-center mb-8">
              <span className="text-dark/30 text-xs tracking-wider uppercase text-center px-4">
                Tokenomics Chart
                <br />
                Placeholder
              </span>
            </div>

            <div className="space-y-3">
              {ALLOCATIONS.map((a) => (
                <div key={a.label} className="flex items-center gap-3">
                  <span
                    className="w-3 h-3 rounded-full flex-shrink-0"
                    style={{ backgroundColor: a.color }}
                  />
                  <span className="text-dark/70 text-sm flex-1">{a.label}</span>
                  <span className="text-dark font-mono text-sm font-medium">{a.pct}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
