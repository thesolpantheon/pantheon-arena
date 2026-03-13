import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { AGENTS } from '@/config/agents';

const data = AGENTS.map((a) => ({
  name: a.name,
  confidence: a.strategy.confidenceThreshold,
  fill: a.accent,
}));

export default function ConfidenceChart() {
  return (
    <div className="chart-panel">
      <h4 className="text-light-text text-sm font-semibold mb-6 tracking-wide">
        Agent Confidence Levels
      </h4>
      <ResponsiveContainer width="100%" height={220}>
        <BarChart data={data} layout="vertical" margin={{ left: 20, right: 20 }}>
          <XAxis
            type="number"
            domain={[0, 100]}
            tick={{ fill: 'rgba(244,241,236,0.5)', fontSize: 11, fontFamily: 'JetBrains Mono' }}
            axisLine={{ stroke: 'rgba(244,241,236,0.1)' }}
            tickLine={false}
          />
          <YAxis
            type="category"
            dataKey="name"
            tick={{ fill: 'rgba(244,241,236,0.6)', fontSize: 12 }}
            axisLine={false}
            tickLine={false}
            width={80}
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
            formatter={(value: number) => [`${value}%`, 'Confidence']}
          />
          <Bar dataKey="confidence" radius={[0, 4, 4, 0]} barSize={24}>
            {data.map((entry, i) => (
              <Cell key={i} fill={entry.fill} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
      <p className="text-light-text/30 text-[10px] mt-4 font-mono">
        Minimum confidence score required before executing a trade
      </p>
    </div>
  );
}
