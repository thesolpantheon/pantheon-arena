import {
  RadarChart as ReRadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  ResponsiveContainer,
  Legend,
} from 'recharts';
import { AGENTS } from '@/config/agents';

const AXES = ['speed', 'aggression', 'patience', 'riskTolerance', 'diversification'] as const;
const LABELS: Record<(typeof AXES)[number], string> = {
  speed: 'Speed',
  aggression: 'Aggression',
  patience: 'Patience',
  riskTolerance: 'Risk Tolerance',
  diversification: 'Diversification',
};

const data = AXES.map((axis) => {
  const point: Record<string, string | number> = { axis: LABELS[axis] };
  AGENTS.forEach((a) => {
    point[a.name] = a.radarProfile[axis];
  });
  return point;
});

export default function StrategyRadarChart() {
  return (
    <div className="chart-panel">
      <h4 className="text-light-text text-sm font-semibold mb-6 tracking-wide">
        Strategy Profile Radar
      </h4>
      <ResponsiveContainer width="100%" height={300}>
        <ReRadarChart data={data}>
          <PolarGrid stroke="rgba(244,241,236,0.1)" />
          <PolarAngleAxis
            dataKey="axis"
            tick={{ fill: 'rgba(244,241,236,0.6)', fontSize: 11 }}
          />
          <PolarRadiusAxis
            angle={90}
            domain={[0, 10]}
            tick={{ fill: 'rgba(244,241,236,0.3)', fontSize: 10 }}
            axisLine={false}
          />
          {AGENTS.map((agent) => (
            <Radar
              key={agent.id}
              name={agent.name}
              dataKey={agent.name}
              stroke={agent.accent}
              fill={agent.accent}
              fillOpacity={0.08}
              strokeWidth={2}
            />
          ))}
          <Legend
            wrapperStyle={{ fontSize: 11, color: 'rgba(244,241,236,0.6)', paddingTop: 16 }}
          />
        </ReRadarChart>
      </ResponsiveContainer>
    </div>
  );
}
