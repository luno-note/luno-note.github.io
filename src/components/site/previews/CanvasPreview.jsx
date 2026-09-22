// Infinite-canvas style composition: spatially arranged cards connected by lines.
const cards = [
  { x: 6, y: 14, w: 30, title: 'Problem', body: 'Attention is fragmented across tabs and tools.', tone: 'note' },
  { x: 44, y: 6, w: 30, title: 'Idea', body: 'One calm space for everything I think.', tone: 'primary' },
  { x: 70, y: 44, w: 26, title: 'Sketch', body: 'Sidebar · editor · graph', tone: 'note' },
  { x: 10, y: 58, w: 28, title: 'Quote', body: '“The mind is for seeing, not storing.”', tone: 'muted' },
  { x: 40, y: 62, w: 26, title: 'Next', body: 'Ship the editor first.', tone: 'note' },
];

const links = [
  [0, 1],
  [1, 2],
  [1, 4],
  [0, 3],
  [3, 4],
];

export default function CanvasPreview({ className = '' }) {
  return (
    <div className={`luno-grid-bg relative h-full w-full overflow-hidden rounded-lg ${className}`}>
      <svg viewBox="0 0 100 84" className="absolute inset-0 h-full w-full" preserveAspectRatio="none" aria-hidden="true">
        {links.map(([a, b], i) => {
          const ca = cards[a];
          const cb = cards[b];
          const x1 = ca.x + ca.w / 2;
          const y1 = ca.y + 18;
          const x2 = cb.x + cb.w / 2;
          const y2 = cb.y + 18;
          return (
            <path
              key={i}
              d={`M ${x1} ${y1} C ${x1} ${(y1 + y2) / 2}, ${x2} ${(y1 + y2) / 2}, ${x2} ${y2}`}
              className="stroke-primary/40"
              strokeWidth={0.5}
              fill="none"
              strokeDasharray="1.5 1.5"
            />
          );
        })}
      </svg>
      <div className="absolute inset-0 p-3">
        {cards.map((c, i) => (
          <div
            key={i}
            className={`absolute rounded-lg border p-2 shadow-sm transition-transform hover:-translate-y-0.5 ${
              c.tone === 'primary'
                ? 'border-primary/40 bg-primary/10'
                : c.tone === 'muted'
                ? 'border-border bg-muted/60'
                : 'border-border bg-card'
            }`}
            style={{ left: `${c.x}%`, top: `${c.y}%`, width: `${c.w}%` }}
          >
            <div className={`text-[0.62rem] font-semibold uppercase tracking-wide ${c.tone === 'primary' ? 'text-primary' : 'text-muted-foreground'}`}>
              {c.title}
            </div>
            <div className="mt-1 text-[0.72rem] leading-snug text-foreground/85">{c.body}</div>
          </div>
        ))}
      </div>
    </div>
  );
}