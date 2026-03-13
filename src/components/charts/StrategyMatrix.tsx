import { AGENTS, STRATEGY_OVERLAP } from '@/config/agents';

function getHeatColor(value: number): string {
  if (value >= 100) return 'rgba(244,241,236,0.15)';
  if (value >= 40) return 'rgba(184,134,11,0.5)';
  if (value >= 30) return 'rgba(139,37,0,0.4)';
  if (value >= 20) return 'rgba(10,126,140,0.4)';
  return 'rgba(10,126,140,0.2)';
}

export default function StrategyMatrix() {
  const names = AGENTS.map((a) => a.name);

  return (
    <div className="chart-panel">
      <h4 className="text-light-text text-sm font-semibold mb-6 tracking-wide">
        Agent Strategy Overlap Matrix
      </h4>
      <div className="overflow-x-auto">
        <table className="mx-auto">
          <thead>
            <tr>
              <th className="w-20" />
              {names.map((n) => (
                <th
                  key={n}
                  className="text-light-text/50 text-[10px] font-mono font-normal px-2 pb-2 text-center"
                >
                  {n}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {names.map((row) => (
              <tr key={row}>
                <td className="text-light-text/60 text-[11px] font-mono pr-3 text-right">
                  {row}
                </td>
                {names.map((col) => {
                  const val = STRATEGY_OVERLAP[row][col];
                  return (
                    <td key={col} className="p-1">
                      <div
                        className="w-14 h-10 flex items-center justify-center rounded text-light-text/80 font-mono text-xs"
                        style={{ backgroundColor: getHeatColor(val) }}
                      >
                        {val}
                      </div>
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="text-light-text/30 text-[10px] mt-4 font-mono text-center">
        Lower scores = more strategy diversification between agents
      </p>
    </div>
  );
}
