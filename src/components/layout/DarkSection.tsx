import { ReactNode } from 'react';

interface ColorDot {
  color: string;
  top: string;
  left: string;
}

const DEFAULT_DOTS: ColorDot[] = [
  { color: '#B8860B', top: '12%', left: '8%' },
  { color: '#0A7E8C', top: '34%', left: '78%' },
  { color: '#8B2500', top: '67%', left: '22%' },
  { color: '#6B6B6B', top: '23%', left: '52%' },
  { color: '#F4F1EC', top: '78%', left: '89%' },
  { color: '#B8860B', top: '56%', left: '65%' },
  { color: '#0A7E8C', top: '89%', left: '12%' },
];

interface DarkSectionProps {
  children: ReactNode;
  className?: string;
  dots?: ColorDot[];
  id?: string;
}

export default function DarkSection({
  children,
  className = '',
  dots = DEFAULT_DOTS,
  id,
}: DarkSectionProps) {
  return (
    <section id={id} className={`dark-grid relative overflow-hidden ${className}`}>
      {/* Scattered colored square dots */}
      {dots.map((dot, i) => (
        <div
          key={i}
          className="absolute w-2.5 h-2.5 pointer-events-none"
          style={{
            backgroundColor: dot.color,
            top: dot.top,
            left: dot.left,
            opacity: 0.7,
          }}
        />
      ))}
      <div className="relative z-10">{children}</div>
    </section>
  );
}
