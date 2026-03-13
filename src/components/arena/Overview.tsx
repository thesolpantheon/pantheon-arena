import { AGENTS } from '@/config/agents';
import DarkSection from '@/components/layout/DarkSection';
import ConfidenceChart from '@/components/charts/ConfidenceChart';
import ActivityChart from '@/components/charts/ActivityChart';
import RiskRewardChart from '@/components/charts/RiskRewardChart';
import StrategyMatrix from '@/components/charts/StrategyMatrix';

const STATUS_DOTS = [
  { color: '#B8860B', top: '30%', left: '5%' },
  { color: '#0A7E8C', top: '60%', left: '90%' },
];

export default function Overview() {
  return (
    <div>
      {/* Status Banner */}
      <DarkSection className="py-5 mb-8 rounded-lg" dots={STATUS_DOTS}>
        <div className="px-6 overflow-x-auto">
          <div className="flex items-center gap-0 min-w-max">
            {[
              { label: 'SEASON 1', value: 'PRE-SEASON', dot: true },
              { label: 'START DATE', value: 'TBA' },
              { label: 'PRIZE POOL', value: '— SOL' },
              { label: 'AGENTS', value: '4 / 4 READY' },
              { label: 'STATUS', value: 'AWAITING DEPLOYMENT' },
            ].map((stat, i) => (
              <div
                key={i}
                className={`flex items-center gap-2 px-5 ${
                  i < 4 ? 'border-r border-light-text/15' : ''
                }`}
              >
                {stat.dot && (
                  <span className="w-2 h-2 rounded-full bg-yellow-500 animate-pulse-dot" />
                )}
                <span className="text-light-text/50 text-[10px] tracking-wider uppercase">
                  {stat.label}
                </span>
                <span className="text-light-text font-mono text-xs font-medium">{stat.value}</span>
              </div>
            ))}
          </div>
        </div>
      </DarkSection>

      {/* Agent Quick Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 mb-8">
        {AGENTS.map((agent) => (
          <div
            key={agent.id}
            className="border border-dark/12 rounded-lg p-5 relative overflow-hidden"
          >
            {/* Left accent bar */}
            <div
              className="absolute left-0 top-0 bottom-0 w-[3px]"
              style={{ backgroundColor: agent.accent }}
            />

            <div className="flex items-center gap-2 mb-1">
              <span
                className="w-2 h-2 rounded-full"
                style={{ backgroundColor: agent.accent }}
              />
              <h4 className="text-sm font-bold text-dark uppercase tracking-wide">{agent.name}</h4>
            </div>
            <p className="text-dark/50 text-xs mb-3">{agent.strategy.type}</p>

            <div className="flex items-center gap-1.5 mb-3">
              <span className="text-green-600 text-[10px]">✓</span>
              <span className="font-mono text-[10px] text-dark/50 uppercase tracking-wider">
                Configured — Ready
              </span>
            </div>

            <div className="space-y-1.5 text-[11px]">
              {agent.id === 'hermes' && (
                <>
                  <div><span className="text-dark/40">Target Hold:</span> <span className="font-mono text-dark">&lt;3 min</span></div>
                  <div><span className="text-dark/40">Risk/Trade:</span> <span className="font-mono text-dark">Low</span></div>
                </>
              )}
              {agent.id === 'ares' && (
                <>
                  <div><span className="text-dark/40">Conviction:</span> <span className="font-mono text-dark">High</span></div>
                  <div><span className="text-dark/40">Max Drawdown:</span> <span className="font-mono text-dark">20%</span></div>
                </>
              )}
              {agent.id === 'cronus' && (
                <>
                  <div><span className="text-dark/40">Frequency:</span> <span className="font-mono text-dark">Low</span></div>
                  <div><span className="text-dark/40">Min Setup Quality:</span> <span className="font-mono text-dark">A+</span></div>
                </>
              )}
              {agent.id === 'axiom' && (
                <>
                  <div><span className="text-dark/40">Stop Loss:</span> <span className="font-mono text-dark">Strict</span></div>
                  <div><span className="text-dark/40">Bias:</span> <span className="font-mono text-dark">Zero</span></div>
                </>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ConfidenceChart />
        <ActivityChart />
        <RiskRewardChart />
        <StrategyMatrix />
      </div>
    </div>
  );
}
