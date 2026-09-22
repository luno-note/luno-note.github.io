// SVG graph visualization. Nodes drift gently; important nodes use the teal accent.
const nodes = [
  { id: 'reading', x: 200, y: 130, r: 9, label: 'Reading', primary: true, drift: 'luno-node-drift' },
  { id: 'deepwork', x: 96, y: 78, r: 6, label: 'Deep Work', drift: 'luno-node-drift-2' },
  { id: 'attention', x: 92, y: 196, r: 5, label: 'Attention' },
  { id: 'zettel', x: 312, y: 70, r: 6, label: 'Zettelkasten', drift: 'luno-node-drift' },
  { id: 'focus', x: 326, y: 200, r: 5, label: 'Focus', drift: 'luno-node-drift-2' },
  { id: 'morning', x: 200, y: 232, r: 4, label: 'Morning' },
  { id: 'books', x: 60, y: 138, r: 4, label: 'Books' },
  { id: 'ideas', x: 350, y: 138, r: 4, label: 'Ideas', drift: 'luno-node-drift' },
];

const edges = [
  ['reading', 'deepwork'],
  ['reading', 'attention'],
  ['reading', 'zettel'],
  ['reading', 'focus'],
  ['reading', 'morning'],
  ['reading', 'books'],
  ['reading', 'ideas'],
  ['deepwork', 'attention'],
  ['deepwork', 'books'],
  ['zettel', 'ideas'],
  ['focus', 'ideas'],
  ['attention', 'morning'],
];

const byId = (id) => nodes.find((n) => n.id === id);

export default function GraphPreview({ className = '' }) {
  return (
    <div className={`luno-grid-bg relative h-full w-full overflow-hidden rounded-lg ${className}`}>
      <svg viewBox="0 0 400 270" className="h-full w-full" preserveAspectRatio="xMidYMid meet" role="img" aria-label="Graph of connected notes">
        {edges.map(([a, b], i) => {
          const na = byId(a);
          const nb = byId(b);
          const active = a === 'reading' || b === 'reading';
          return (
            <line
              key={i}
              x1={na.x}
              y1={na.y}
              x2={nb.x}
              y2={nb.y}
              className={`graph-edge ${active ? 'stroke-primary/60' : 'stroke-foreground/15'}`}
              strokeWidth={active ? 1.4 : 1}
              style={{ animationDelay: `${i * 0.12}s` }}
            />
          );
        })}
        {nodes.map((n) => (
          <g key={n.id} className={n.drift || ''} style={{ transformOrigin: `${n.x}px ${n.y}px` }}>
            <circle
              cx={n.x}
              cy={n.y}
              r={n.r}
              className={n.primary ? 'fill-primary' : 'fill-foreground/55'}
              stroke={n.primary ? 'hsl(var(--primary))' : 'hsl(var(--foreground) / 0.2)'}
              strokeWidth={n.primary ? 2 : 1}
            />
            {n.primary && <circle cx={n.x} cy={n.y} r={n.r + 5} className="fill-primary/15 luno-pulse" />}
            <text
              x={n.x}
              y={n.y - n.r - 5}
              textAnchor="middle"
              className="fill-foreground/70 text-[7px] font-medium"
              style={{ fontSize: '7px' }}
            >
              {n.label}
            </text>
          </g>
        ))}
      </svg>
    </div>
  );
}