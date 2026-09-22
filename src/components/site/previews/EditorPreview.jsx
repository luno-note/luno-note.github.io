import { FileText, Hash, Search, Link2, Star } from 'lucide-react';

const notes = [
  { icon: FileText, name: 'On Reading', active: true },
  { icon: Hash, name: 'Deep Work' },
  { icon: FileText, name: 'Attention' },
  { icon: Link2, name: 'Zettelkasten' },
  { icon: FileText, name: 'Morning pages' },
  { icon: Star, name: 'Highlights' },
];

export default function EditorPreview() {
  return (
    <div className="flex h-[400px] text-sm sm:h-[440px]">
      {/* Sidebar */}
      <aside className="hidden w-44 shrink-0 flex-col border-r border-border bg-secondary/40 p-3 md:flex">
        <div className="flex items-center gap-2 rounded-md border border-border bg-background px-2 py-1.5 text-muted-foreground">
          <Search className="h-3.5 w-3.5" aria-hidden="true" />
          <span className="text-xs">Search</span>
        </div>
        <div className="mb-2 mt-4 px-1 text-[0.68rem] font-semibold uppercase tracking-wider text-muted-foreground/70">
          Notes
        </div>
        <ul className="space-y-0.5">
          {notes.map((n) => (
            <li key={n.name}>
              <div
                className={`flex items-center gap-2 rounded-md px-2 py-1.5 text-[0.8rem] ${
                  n.active ? 'bg-primary/10 font-medium text-primary' : 'text-foreground/80'
                }`}
              >
                <n.icon className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                <span className="truncate">{n.name}</span>
              </div>
            </li>
          ))}
        </ul>
      </aside>

      {/* Main */}
      <div className="flex min-w-0 flex-1 flex-col">
        <div className="flex items-center gap-1 border-b border-border bg-background px-3 py-1.5">
          <div className="flex items-center gap-2 rounded-md border border-border bg-secondary/60 px-3 py-1 text-xs text-foreground">
            <FileText className="h-3 w-3 text-primary" aria-hidden="true" /> On Reading
          </div>
          <div className="px-2 py-1 text-xs text-muted-foreground">Deep Work</div>
        </div>

        <div className="flex-1 overflow-hidden px-5 py-5 md:px-7">
          <p className="text-[0.78rem] text-muted-foreground">
            <span className="md-hash">#</span> Reading
          </p>
          <h2 className="mt-1 font-heading text-lg font-semibold text-foreground">On Reading</h2>
          <p className="mt-3 text-[0.82rem] leading-relaxed text-muted-foreground">
            Reading is not just consuming — it is a{' '}
            <span className="md-link">conversation</span> with the author. The best readers{' '}
            <span className="md-strong">mark, question, and connect</span>.
          </p>
          <ul className="mt-3 space-y-1 text-[0.82rem] text-foreground/85">
            <li className="flex gap-2"><span className="text-primary">•</span> Capture one idea per note</li>
            <li className="flex gap-2"><span className="text-primary">•</span> Link to <span className="md-link">[[Deep Work]]</span></li>
          </ul>
          <div className="mt-3 flex flex-wrap gap-1.5">
            <span className="md-tag">#focus</span>
            <span className="md-tag">#books</span>
            <span className="md-tag">#attention</span>
          </div>
          <pre className="mt-3 overflow-hidden rounded-md border border-border bg-muted/60 p-2.5 font-mono text-[0.72rem] leading-relaxed text-foreground/80">
            <code>{`while reading:
  ask: "what changes?"`}</code>
          </pre>
          <p className="mt-3 text-[0.82rem] text-foreground/80">
            A note becomes useful when it finds its neighbors
            <span className="ml-0.5 inline-block h-4 w-[2px] translate-y-0.5 animate-blink bg-primary" />
          </p>
        </div>
      </div>
    </div>
  );
}