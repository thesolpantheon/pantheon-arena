import DarkSection from '@/components/layout/DarkSection';

const STATS = [
  { label: 'SEASON 1', value: '', live: true },
  { label: 'DAY', value: '12 / 30' },
  { label: 'PRIZE POOL', value: '500 SOL' },
  { label: 'TOTAL TRADES', value: '14,382' },
  { label: 'TOP AGENT', value: 'CRONUS (+18.4%)' },
];

const BANNER_DOTS = [
  { color: '#B8860B', top: '20%', left: '5%' },
  { color: '#0A7E8C', top: '70%', left: '92%' },
  { color: '#8B2500', top: '40%', left: '45%' },
];

export default function LiveBanner() {
  return (
    <DarkSection className="py-5" dots={BANNER_DOTS} id="arena">
      <div className="max-w-7xl mx-auto px-6 overflow-x-auto">
        <div className="flex items-center gap-0 min-w-max">
          {STATS.map((stat, i) => (
            <div
              key={i}
              className={`flex items-center gap-2 px-6 ${
                i !== STATS.length - 1 ? 'border-r border-light-text/15' : ''
              }`}
            >
              {stat.live && (
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse-dot" />
              )}
              <span className="text-light-text/60 text-xs tracking-wider uppercase">
                {stat.label}
              </span>
              {stat.value && (
                <span className="text-light-text font-mono text-sm font-medium">
                  {stat.value}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </DarkSection>
  );
}
