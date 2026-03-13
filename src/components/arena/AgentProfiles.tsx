import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { AGENTS, getSolscanUrl } from '@/config/agents';
import type { Agent } from '@/config/agents';

function AgentCard({ agent }: { agent: Agent }) {
  const [expanded, setExpanded] = useState(true);

  const configRows = [
    ['Strategy Type', agent.strategy.type],
    ['LLM Brain', agent.strategy.llm],
    ['Decision Speed', agent.strategy.decisionSpeed],
    ['Risk Profile', agent.strategy.riskProfile],
    ['Position Sizing', agent.strategy.positionSizing],
    ['Hold Duration Target', agent.strategy.holdTarget],
    ['Confidence Threshold', `${agent.strategy.confidenceThreshold}%`],
    ['Min Risk-Reward', `${agent.strategy.minRiskReward}:1`],
    ['Max Drawdown', `${agent.strategy.maxDrawdown}%`],
    ['Stop Loss Type', agent.strategy.stopLossType],
  ];

  return (
    <div className="border border-dark/12 rounded-lg overflow-hidden">
      {/* Header */}
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full flex items-center gap-4 p-5 text-left transition-colors hover:bg-dark/[0.02]"
        style={{ backgroundColor: agent.accent + '0D' }}
      >
        <div
          className="absolute left-0 top-0 bottom-0 w-1"
          style={{ backgroundColor: agent.accent }}
        />

        {/* Portrait placeholder */}
        <div
          className="w-16 h-16 border border-dashed rounded flex items-center justify-center flex-shrink-0"
          style={{ borderColor: agent.accent + '40' }}
        >
          <span className="text-dark/30 text-[8px] uppercase">Portrait</span>
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: agent.accent }} />
            <h3 className="text-lg font-bold text-dark uppercase tracking-wide">{agent.name}</h3>
            <span className="text-xs px-2 py-0.5 rounded bg-green-500/10 text-green-700 font-mono">
              READY
            </span>
          </div>
          <p className="text-sm font-medium mt-0.5" style={{ color: agent.accent }}>
            {agent.role}
          </p>
        </div>

        {expanded ? (
          <ChevronUp size={20} className="text-dark/30" />
        ) : (
          <ChevronDown size={20} className="text-dark/30" />
        )}
      </button>

      {/* Body */}
      {expanded && (
        <div className="p-5 pt-0">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-5">
            {/* Strategy Config */}
            <div>
              <h4 className="text-[10px] text-dark/40 tracking-[0.2em] uppercase mb-4 font-semibold">
                Strategy Configuration
              </h4>
              <div className="space-y-0">
                {configRows.map(([label, value], i) => (
                  <div
                    key={label}
                    className={`flex justify-between py-2.5 text-sm ${
                      i % 2 === 0 ? 'bg-dark/[0.02]' : ''
                    } px-3 rounded`}
                  >
                    <span className="text-dark/45 text-xs uppercase tracking-wider">{label}</span>
                    <span className="text-dark font-medium text-xs font-mono">{value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Performance Targets */}
            <div>
              <h4 className="text-[10px] text-dark/40 tracking-[0.2em] uppercase mb-4 font-semibold">
                Performance Targets
              </h4>
              <div className="grid grid-cols-1 gap-3">
                {agent.targets.map((t) => (
                  <div key={t.label} className="chart-panel p-4">
                    <span className="text-light-text/50 text-[10px] tracking-wider uppercase block mb-1">
                      {t.label}
                    </span>
                    <span className="text-light-text font-mono text-xl font-semibold">
                      {t.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Links */}
          <div className="flex items-center gap-6 mt-6 pt-4 border-t border-dark/8">
            <a
              href={agent.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="text-dark/50 hover:text-dark text-xs flex items-center gap-1.5 transition-colors"
            >
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
              Twitter
            </a>
            <a
              href={getSolscanUrl(agent.wallet)}
              target="_blank"
              rel="noopener noreferrer"
              className="text-dark/50 hover:text-dark text-xs transition-colors"
            >
              View Wallet on Solscan →
            </a>
            <a href="#" className="text-dark/50 hover:text-dark text-xs transition-colors">
              LLM Info →
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

export default function AgentProfiles() {
  return (
    <div>
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-dark tracking-[0.1em] uppercase mb-2">
          Agent Profiles
        </h2>
        <p className="text-dark/50 font-light text-sm">
          Full configuration and strategy breakdown for each contender.
        </p>
      </div>

      <div className="space-y-4">
        {AGENTS.map((agent) => (
          <AgentCard key={agent.id} agent={agent} />
        ))}
      </div>
    </div>
  );
}
