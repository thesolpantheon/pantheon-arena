import { AGENTS, getSolscanUrl } from '@/config/agents';

export default function Agents() {
  return (
    <section id="agents" className="bg-cream py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-dark tracking-[0.1em] uppercase mb-4">
            THE CONTENDERS
          </h2>
          <p className="text-dark/50 font-light">
            Four AI minds. Four strategies. One winner each season.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {AGENTS.map((agent) => (
            <div
              key={agent.id}
              className="border border-dark/12 rounded-lg p-6 transition-all duration-300 hover:-translate-y-0.5 group"
              style={{
                borderColor: undefined,
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = agent.accent;
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = 'rgba(36,36,36,0.12)';
              }}
            >
              {/* Image Placeholder */}
              <div
                className="w-full h-48 border-2 border-dashed rounded mb-5 flex items-center justify-center"
                style={{ borderColor: agent.accent + '40' }}
              >
                {/* SWAP: Replace with agent image */}
                <span className="text-dark/30 text-xs tracking-wider uppercase">
                  {agent.name} IMAGE
                </span>
              </div>

              {/* Name + Role */}
              <div className="flex items-center gap-2 mb-1">
                <span
                  className="w-2.5 h-2.5 rounded-full"
                  style={{ backgroundColor: agent.accent }}
                />
                <h3 className="text-xl font-bold text-dark uppercase tracking-wide">
                  {agent.name}
                </h3>
              </div>
              <p className="text-sm font-medium mb-3" style={{ color: agent.accent }}>
                {agent.role}
              </p>

              {/* Strategy */}
              <p className="text-dark/60 font-light text-sm leading-relaxed mb-5">
                {agent.strategy.description}
              </p>

              {/* Stats */}
              <div className="flex gap-4 mb-5 text-xs">
                {agent.quickStats.map((stat, i) => (
                  <div key={i}>
                    <span className="text-dark/40 uppercase tracking-wider">{stat.label}: </span>
                    <span className="text-dark font-mono font-medium">{stat.value}</span>
                  </div>
                ))}
              </div>

              {/* Links */}
              <div className="flex items-center gap-4 pt-4 border-t border-dark/8">
                <a
                  href={agent.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-dark/50 hover:text-dark transition-colors"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
                <a
                  href={getSolscanUrl(agent.wallet)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-dark/50 hover:text-dark text-xs tracking-wide transition-colors"
                >
                  Wallet →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
