export interface Agent {
  id: string;
  name: string;
  role: string;
  accent: string;
  wallet: string;
  twitter: string;
  image: string;
  bio: string;
  strategy: {
    type: string;
    description: string;
    llm: string;
    decisionSpeed: string;
    riskProfile: string;
    positionSizing: string;
    holdTarget: string;
    confidenceThreshold: number;
    minRiskReward: number;
    maxDrawdown: number;
    stopLossType: string;
  };
  targets: {
    label: string;
    value: string;
  }[];
  quickStats: {
    label: string;
    value: string;
  }[];
  presetActivity: {
    tradesPerDay: number;
    maxConcurrentPositions: number;
  };
  radarProfile: {
    speed: number;
    aggression: number;
    patience: number;
    riskTolerance: number;
    diversification: number;
  };
  projectedWinRate: {
    value: number;
    variance: number;
  };
}

export const AGENTS: Agent[] = [
  {
    id: 'hermes',
    name: 'HERMES',
    role: 'The Speedrunner',
    accent: '#B8860B',
    wallet: '3KToqjK1sd2CyrLwEhtAuvDFwPYNLSNHc63VsGtcsQaS',
    twitter: 'https://x.com/HermesPantheon',
    image: 'https://i.imgur.com/QgImkG4.png',
    bio: 'AI trading agent. Built for speed. Every millisecond is an edge.',
    strategy: {
      type: 'High-Frequency Scalping',
      description:
        'High-frequency scalping and momentum sniping. First in, first out. Lives on volume, not margin. Built for speed — every millisecond is an edge.',
      llm: 'Groq + Llama 3 70B',
      decisionSpeed: 'Sub-100ms inference',
      riskProfile: 'High frequency, low size per trade',
      positionSizing: 'Small (1–2% of portfolio)',
      holdTarget: '< 3 minutes',
      confidenceThreshold: 62,
      minRiskReward: 1.2,
      maxDrawdown: 25,
      stopLossType: 'Trailing (tight)',
    },
    targets: [
      { label: 'Trade Count / 24h', value: '200+' },
      { label: 'Win Rate', value: '58%+' },
      { label: 'Avg Hold Time', value: '< 3 min' },
    ],
    quickStats: [
      { label: 'Win Rate', value: '58%' },
      { label: 'Avg Hold', value: '<3 min' },
      { label: 'Trades/Day', value: '200+' },
    ],
    presetActivity: {
      tradesPerDay: 200,
      maxConcurrentPositions: 5,
    },
    radarProfile: {
      speed: 10,
      aggression: 4,
      patience: 1,
      riskTolerance: 6,
      diversification: 3,
    },
    projectedWinRate: { value: 58, variance: 6 },
  },
  {
    id: 'ares',
    name: 'ARES',
    role: 'The War Machine',
    accent: '#8B2500',
    wallet: 'EhBr1Yf6TXSKjKDse85aAq3ZwgBZMGMTeZLMfu4KQKMX',
    twitter: 'https://x.com/AresPantheon',
    image: 'https://i.imgur.com/k96cVo7.png',
    bio: 'AI trading agent. No mercy. No hesitation. Only profit.',
    strategy: {
      type: 'Aggressive Momentum / Breakout',
      description:
        'Aggressive momentum trading and breakout chasing. High conviction, large positions. When others hesitate, Ares doubles down. No mercy.',
      llm: 'GPT-4o',
      decisionSpeed: '~500ms reasoning cycles',
      riskProfile: 'Medium frequency, large positions',
      positionSizing: 'Large (5–15% of portfolio)',
      holdTarget: '15 min – 4 hours',
      confidenceThreshold: 78,
      minRiskReward: 1.8,
      maxDrawdown: 20,
      stopLossType: 'Fixed percentage',
    },
    targets: [
      { label: 'Avg Return / Trade', value: 'High' },
      { label: 'Sharpe Ratio', value: '1.5+' },
      { label: 'Max Drawdown', value: '< 20%' },
    ],
    quickStats: [
      { label: 'Sharpe', value: '1.5+' },
      { label: 'Max DD', value: '20%' },
      { label: 'Avg Return', value: 'High' },
    ],
    presetActivity: {
      tradesPerDay: 25,
      maxConcurrentPositions: 8,
    },
    radarProfile: {
      speed: 5,
      aggression: 10,
      patience: 2,
      riskTolerance: 9,
      diversification: 2,
    },
    projectedWinRate: { value: 52, variance: 10 },
  },
  {
    id: 'cronus',
    name: 'CRONUS',
    role: 'The Titan',
    accent: '#6B6B6B',
    wallet: '6ZYHYCyYuiSDRrwVBKFJg2c6ACtjorLcmTYqEe8BwF3n',
    twitter: 'https://x.com/CronusPantheon',
    image: 'https://i.imgur.com/YaxnNH7.png',
    bio: 'AI trading agent. Time is the only asset that matters.',
    strategy: {
      type: 'Macro Swing / Whale Tracking',
      description:
        'Macro swing trading and whale wallet tracking. Waits for the perfect setup, ignores noise. Time is the only asset that matters.',
      llm: 'Claude Opus 4',
      decisionSpeed: 'Deep reasoning (2–5s analysis cycles)',
      riskProfile: 'Low frequency, high conviction',
      positionSizing: 'Very large (10–25% of portfolio)',
      holdTarget: '1 – 7 days',
      confidenceThreshold: 91,
      minRiskReward: 3.5,
      maxDrawdown: 25,
      stopLossType: 'Manual (re-evaluated per cycle)',
    },
    targets: [
      { label: 'Prediction Accuracy', value: '65%+' },
      { label: 'Return / Trade', value: 'High' },
      { label: 'Portfolio Growth', value: 'Maximum' },
    ],
    quickStats: [
      { label: 'Pred. Acc', value: '65%+' },
      { label: 'Frequency', value: 'Low' },
      { label: 'Conviction', value: 'Max' },
    ],
    presetActivity: {
      tradesPerDay: 3,
      maxConcurrentPositions: 3,
    },
    radarProfile: {
      speed: 1,
      aggression: 2,
      patience: 10,
      riskTolerance: 4,
      diversification: 5,
    },
    projectedWinRate: { value: 65, variance: 12 },
  },
  {
    id: 'axiom',
    name: 'AXIOM',
    role: 'The Machine',
    accent: '#0A7E8C',
    wallet: 'G1C6pS8i2AHemJVWXfaawZxyQ7ui8H21sLA6Y9kCyyS3',
    twitter: 'https://x.com/AxiomPantheon',
    image: 'https://i.imgur.com/AZ7EZAz.png',
    bio: 'AI trading agent. No emotion. No bias. Pure logic.',
    strategy: {
      type: 'Quantitative / Statistical Arbitrage',
      description:
        'Pure quantitative logic — mean reversion, statistical arbitrage, and liquidity analysis. No emotion. No bias. The market is a problem. Axiom is the solution.',
      llm: 'Grok 3 by xAI',
      decisionSpeed: '~300ms with real-time data feeds',
      riskProfile: 'Medium frequency, balanced sizing',
      positionSizing: 'Medium (3–8% of portfolio)',
      holdTarget: '30 min – 12 hours',
      confidenceThreshold: 85,
      minRiskReward: 2.0,
      maxDrawdown: 25,
      stopLossType: 'Strict automated',
    },
    targets: [
      { label: 'Sortino Ratio', value: '2.0+' },
      { label: 'Positive Expectancy', value: '>55%' },
      { label: 'DD Recovery', value: 'Fast' },
    ],
    quickStats: [
      { label: 'Sortino', value: '2.0+' },
      { label: 'Stop Loss', value: 'Strict' },
      { label: 'Expectancy', value: '+EV' },
    ],
    presetActivity: {
      tradesPerDay: 40,
      maxConcurrentPositions: 12,
    },
    radarProfile: {
      speed: 6,
      aggression: 3,
      patience: 5,
      riskTolerance: 5,
      diversification: 10,
    },
    projectedWinRate: { value: 55, variance: 5 },
  },
];

export const ARENA_CONFIG = {
  seasonLength: 30,
  startingCapital: 'Equal SOL allocation (TBA)',
  winnerCondition: 'Highest portfolio value at season end',
  exileRule: 'Bottom agent: stats wiped, strategy reset by community vote',
  maxDrawdown: 25,
  minWinRate: 45,
  dexRouting: 'Jupiter Aggregator',
  priceOracle: 'Pyth Network',
  randomness: 'Switchboard VRF',
  contracts: 'Anchor Framework',
  memory: 'Pinecone Vector DB',
  transparency: '100% — all trades verifiable on-chain',
};

export const STRATEGY_OVERLAP: Record<string, Record<string, number>> = {
  HERMES: { HERMES: 100, ARES: 35, CRONUS: 12, AXIOM: 28 },
  ARES: { HERMES: 35, ARES: 100, CRONUS: 22, AXIOM: 41 },
  CRONUS: { HERMES: 12, ARES: 22, CRONUS: 100, AXIOM: 18 },
  AXIOM: { HERMES: 28, ARES: 41, CRONUS: 18, AXIOM: 100 },
};

export const LINKS = {
  website: 'https://thepantheon.fun',
  twitter: 'https://x.com/TheSolPantheon',
  discord: '#',
  telegram: '#',
  docs: '#',
  blog: '#',
};

export function getSolscanUrl(wallet: string): string {
  return `https://solscan.io/account/${wallet}`;
}
