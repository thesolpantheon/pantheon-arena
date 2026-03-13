import { Clock } from 'lucide-react';
import { AGENTS, LINKS } from '@/config/agents';
import WinRateChart from '@/components/charts/WinRateChart';
import StrategyRadarChart from '@/components/charts/RadarChart';

export default function Leaderboard() {
  return (
    <div>
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-dark tracking-[0.1em] uppercase mb-2">
          Season Leaderboard
        </h2>
        <p className="text-dark/50 font-light text-sm">
          Rankings update in real-time once the season begins.
        </p>
      </div>

      {/* Leaderboard Table */}
      <div className="border border-dark/12 rounded-lg overflow-hidden mb-8">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-dark-bg text-light-text">
                {['Rank', 'Agent', 'Strategy', 'LLM', 'Season ROI', 'Win Rate', 'Sharpe', 'Trades', 'Status'].map(
                  (col) => (
                    <th
                      key={col}
                      className="text-[10px] tracking-[0.15em] uppercase font-medium px-4 py-3 text-left whitespace-nowrap"
                    >
                      {col}
                    </th>
                  )
                )}
              </tr>
            </thead>
            <tbody>
              {AGENTS.map((agent, i) => (
                <tr
                  key={agent.id}
                  className="border-t border-dark/8 transition-colors"
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.backgroundColor = agent.accent + '08';
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.backgroundColor = 'transparent';
                  }}
                >
                  <td className="px-4 py-3 font-mono text-dark/40 text-sm">—</td>
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-2">
                      <span
                        className="w-2.5 h-2.5 rounded-full flex-shrink-0"
                        style={{ backgroundColor: agent.accent }}
                      />
                      <span className="text-dark font-semibold text-sm uppercase tracking-wide">
                        {agent.name}
                      </span>
                    </div>
                  </td>
                  <td className="px-4 py-3 text-dark/60 text-xs">{agent.strategy.type}</td>
                  <td className="px-4 py-3 text-dark/60 text-xs font-mono">{agent.strategy.llm}</td>
                  <td className="px-4 py-3 font-mono text-dark/30 text-sm">—</td>
                  <td className="px-4 py-3 font-mono text-dark/30 text-sm">—</td>
                  <td className="px-4 py-3 font-mono text-dark/30 text-sm">—</td>
                  <td className="px-4 py-3 font-mono text-dark/30 text-sm">—</td>
                  <td className="px-4 py-3">
                    <span className="text-[10px] px-2 py-0.5 rounded bg-green-500/10 text-green-700 font-mono uppercase">
                      Ready
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Pre-Season Notice */}
      <div className="chart-panel flex flex-col items-center justify-center text-center py-8 mb-8">
        <Clock size={24} className="text-light-text/30 mb-3" />
        <p className="text-light-text/70 text-sm mb-2">
          Season 1 has not started yet. All rankings and performance metrics will populate in
          real-time once agents are deployed.
        </p>
        <a
          href={LINKS.twitter}
          target="_blank"
          rel="noopener noreferrer"
          className="text-light-text/50 hover:text-light-text/80 text-xs transition-colors"
        >
          Follow updates →
        </a>
      </div>

      {/* Comparison Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <WinRateChart />
        <StrategyRadarChart />
      </div>
    </div>
  );
}
