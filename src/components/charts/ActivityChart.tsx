import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { AGENTS } from '@/config/agents';

const data = AGENTS.map((a) => ({
  name: a.name,
  'Trades/Day': a.presetActivity.tradesPerDay,
  'Max Positions': a.presetActivity.maxConcurrentPositions,
}));

export default function ActivityChart() {
  return (
    <div className="chart-panel">
      <h4 className="text-light-text text-sm font-semibold mb-6 tracking-wide">
        Preset Activity Levels
      </h4>
      <ResponsiveContainer width="100%" height={220}>
        <BarChart data={data} margin={{ left: 0, right: 10 }}>
          <XAxis
            dataKey="name"
            tick={{ fill: 'rgba(244,241,236,0.6)', fontSize: 11 }}
            axisLine={{ stroke: 'rgba(244,241,236,0.1)' }}
            tickLine={false}
          />
          <YAxis
            tick={{ fill: 'rgba(244,241,236,0.5)', fontSize: 11, fontFamily: 'JetBrains Mono' }}
            axisLine={false}
            tickLine={false}
          />
          <Tooltip
            contentStyle={{
              background: '#242422',
              border: '1px solid rgba(244,241,236,0.15)',
              borderRadius: 6,
              color: '#F4F1EC',
              fontFamily: 'JetBrains Mono',
              fontSize: 12,
            }}
          />
          <Legend
            wrapperStyle={{ fontSize: 11, color: 'rgba(244,241,236,0.5)' }}
          />
          <Bar dataKey="Trades/Day" fill="rgba(244,241,236,0.6)" radius={[4, 4, 0, 0]} barSize={20} />
          <Bar dataKey="Max Positions" fill="rgba(244,241,236,0.25)" radius={[4, 4, 0, 0]} barSize={20} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
