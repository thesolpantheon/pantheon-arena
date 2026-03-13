import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell, ErrorBar } from 'recharts';
import { AGENTS } from '@/config/agents';

const data = AGENTS.map((a) => ({
  name: a.name,
  winRate: a.projectedWinRate.value,
  error: a.projectedWinRate.variance,
  fill: a.accent,
}));

export default function WinRateChart() {
  return (
    <div className="chart-panel">
      <h4 className="text-light-text text-sm font-semibold mb-6 tracking-wide">
        Win Rate Projection by Strategy Type
      </h4>
      <ResponsiveContainer width="100%" height={260}>
        <BarChart data={data} margin={{ left: 0, right: 10, top: 20 }}>
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
            domain={[0, 80]}
            tickFormatter={(v) => `${v}%`}
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
            formatter={(value: number, _name: string, props: { payload: { error: number } }) => [
              `${value}% (±${props.payload.error}%)`,
              'Projected Win Rate',
            ]}
          />
          <Bar dataKey="winRate" radius={[4, 4, 0, 0]} barSize={36}>
            <ErrorBar
              dataKey="error"
              width={8}
              strokeWidth={1.5}
              stroke="rgba(244,241,236,0.5)"
            />
            {data.map((entry, i) => (
              <Cell key={i} fill={entry.fill} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
      <p className="text-light-text/30 text-[10px] mt-4 font-mono">
        Projections based on backtesting. Actual results will vary.
      </p>
    </div>
  );
}
