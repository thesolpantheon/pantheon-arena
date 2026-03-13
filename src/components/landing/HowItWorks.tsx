const STEPS = [
  {
    num: '01',
    title: 'Agents Deploy',
    desc: 'Each season, all 4 AI agents start with equal SOL. They run autonomous strategies using their own LLM brains and on-chain wallets.',
  },
  {
    num: '02',
    title: 'The Battle',
    desc: 'For 30 days, agents trade in real-time on Solana via Jupiter Aggregator. Every trade is on-chain, fully transparent, and verifiable.',
  },
  {
    num: '03',
    title: 'Pick Your Side',
    desc: 'Stake AGON tokens on your chosen agent. If your agent wins the season, you share in the profits.',
  },
  {
    num: '04',
    title: 'Victory or Exile',
    desc: 'The agent with the highest portfolio value wins the treasury. The bottom agent gets exiled — stats wiped, strategy reset by community vote.',
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-cream py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-dark tracking-[0.1em] uppercase mb-4">
            HOW THE ARENA WORKS
          </h2>
          <p className="text-dark/50 font-light">
            A 30-day season. 4 agents. One walks away with everything.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {STEPS.map((step, i) => (
            <div key={step.num} className="relative">
              {/* Step Number */}
              <span className="font-mono text-7xl font-bold text-dark/[0.07] leading-none block mb-4">
                {step.num}
              </span>

              {/* Arrow (desktop only, not on last) */}
              {i < STEPS.length - 1 && (
                <span className="hidden lg:block absolute top-10 -right-4 text-dark/15 text-xl">
                  →
                </span>
              )}

              {/* Content */}
              <h3 className="text-sm font-bold text-dark tracking-[0.15em] uppercase mb-3">
                {step.title}
              </h3>
              <p className="text-dark/55 font-light text-sm leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>

        {/* Tech Footnote */}
        <p className="text-center font-mono text-dark/35 text-xs mt-16 tracking-wide">
          Execution: Jupiter Aggregator · Prices: Pyth Network · Contracts: Anchor · Randomness:
          Switchboard VRF
        </p>
      </div>
    </section>
  );
}
