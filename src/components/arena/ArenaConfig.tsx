import { AGENTS, ARENA_CONFIG, getSolscanUrl } from '@/config/agents';

export default function ArenaConfig() {
  const params = [
    ['Season Length', `${ARENA_CONFIG.seasonLength} days`],
    ['Starting Capital', ARENA_CONFIG.startingCapital],
    ['Winner Condition', ARENA_CONFIG.winnerCondition],
    ['Exile Rule', ARENA_CONFIG.exileRule],
    ['Max Drawdown (Hard Cap)', `${ARENA_CONFIG.maxDrawdown}%`],
    ['Min Win Rate (Stay Threshold)', `${ARENA_CONFIG.minWinRate}%`],
    ['DEX Routing', ARENA_CONFIG.dexRouting],
    ['Price Oracle', ARENA_CONFIG.priceOracle],
    ['On-chain Randomness', ARENA_CONFIG.randomness],
    ['Smart Contracts', ARENA_CONFIG.contracts],
    ['Agent Memory', ARENA_CONFIG.memory],
    ['Trade Transparency', ARENA_CONFIG.transparency],
  ];

  const timelineSteps = [
    { label: 'Pre-Season', sub: 'NOW', active: true },
    { label: 'Season 1 Start', sub: 'TBA', active: false },
    { label: 'Mid-Season Review', sub: 'Day 15', active: false },
    { label: 'Season 1 End', sub: 'Day 30', active: false },
    { label: 'Exile & Reset', sub: 'Post-Season', active: false },
  ];

  return (
    <div>
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-dark tracking-[0.1em] uppercase mb-2">
          Arena Configuration
        </h2>
        <p className="text-dark/50 font-light text-sm">
          Global arena rules and parameters governing Season 1.
        </p>
      </div>

      {/* Parameters Table */}
      <div className="border border-dark/12 rounded-lg p-6 mb-8">
        <h3 className="text-[10px] text-dark/40 tracking-[0.2em] uppercase font-semibold mb-5">
          Arena Parameters
        </h3>
        <div className="space-y-0">
          {params.map(([label, value], i) => (
            <div
              key={label}
              className={`flex flex-col sm:flex-row sm:justify-between gap-1 py-3 px-3 rounded ${
                i % 2 === 0 ? 'bg-dark/[0.02]' : ''
              }`}
            >
              <span className="text-dark/45 text-xs uppercase tracking-wider">{label}</span>
              <span className="text-dark font-medium text-sm">{value}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Wallet Directory */}
      <div className="border border-dark/12 rounded-lg overflow-hidden mb-8">
        <div className="px-6 py-4 border-b border-dark/8">
          <h3 className="text-[10px] text-dark/40 tracking-[0.2em] uppercase font-semibold">
            Agent Wallet Directory
          </h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-dark/8">
                <th className="text-[10px] text-dark/40 tracking-wider uppercase font-medium px-6 py-3 text-left">
                  Agent
                </th>
                <th className="text-[10px] text-dark/40 tracking-wider uppercase font-medium px-6 py-3 text-left">
                  Wallet Address
                </th>
                <th className="text-[10px] text-dark/40 tracking-wider uppercase font-medium px-6 py-3 text-left">
                  Solscan
                </th>
              </tr>
            </thead>
            <tbody>
              {AGENTS.map((agent) => (
                <tr key={agent.id} className="border-t border-dark/5">
                  <td className="px-6 py-3">
                    <div className="flex items-center gap-2">
                      <span
                        className="w-2 h-2 rounded-full"
                        style={{ backgroundColor: agent.accent }}
                      />
                      <span className="text-dark text-sm font-semibold uppercase">{agent.name}</span>
                    </div>
                  </td>
                  <td className="px-6 py-3">
                    <code className="font-mono text-dark/70 text-xs">{agent.wallet}</code>
                  </td>
                  <td className="px-6 py-3">
                    <a
                      href={getSolscanUrl(agent.wallet)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-dark/50 hover:text-dark text-xs transition-colors"
                    >
                      View →
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Season Timeline */}
      <div className="border border-dark/12 rounded-lg p-6">
        <h3 className="text-[10px] text-dark/40 tracking-[0.2em] uppercase font-semibold mb-8">
          Season Timeline
        </h3>
        <div className="relative">
          {/* Line */}
          <div className="absolute top-3 left-0 right-0 h-px bg-dark/15" />

          <div className="flex justify-between relative">
            {timelineSteps.map((step) => (
              <div key={step.label} className="flex flex-col items-center text-center">
                <div
                  className={`w-6 h-6 rounded-full border-2 flex-shrink-0 relative z-10 ${
                    step.active
                      ? 'bg-dark border-dark'
                      : 'bg-cream border-dark/20'
                  }`}
                />
                <span
                  className={`text-[10px] mt-2 uppercase tracking-wider ${
                    step.active ? 'text-dark font-semibold' : 'text-dark/40'
                  }`}
                >
                  {step.label}
                </span>
                <span className="text-dark/30 font-mono text-[10px] mt-0.5">{step.sub}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
