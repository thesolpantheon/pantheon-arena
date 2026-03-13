import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell, ReferenceLine } from 'recharts';
import { AGENTS } from '@/config/agents';

const data = AGENTS.map((a) => ({
  name: a.name,
  rr: a.strategy.minRiskReward,
  fill: a.accent,
}));

export default function RiskRewardChart() {
  return (
    <div className="chart-panel">
      <h4 className="text-light-text text-sm font-semibold mb-6 tracking-wide">
        Minimum Risk-Reward Ratio
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
            domain={[0, 4]}
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
            formatter={(value: number) => [`${value}:1`, 'Min R:R']}
          />
          <ReferenceLine
            y={1.5}
            stroke="rgba(244,241,236,0.2)"
            strokeDasharray="4 4"
            label={{
              value: 'Arena Avg',
              fill: 'rgba(244,241,236,0.3)',
              fontSize: 10,
              position: 'right',
            }}
          />
          <Bar dataKey="rr" radius={[4, 4, 0, 0]} barSize={36}>
            {data.map((entry, i) => (
              <Cell key={i} fill={entry.fill} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
