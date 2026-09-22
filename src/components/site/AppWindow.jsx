// Shared "application window" frame used by product previews.
export default function AppWindow({ children, title = 'Luno', className = '', bodyClassName = '' }) {
  return (
    <div className={`overflow-hidden rounded-xl border border-border bg-card shadow-2xl shadow-foreground/5 ${className}`}>
      <div className="flex items-center gap-2 border-b border-border bg-secondary/50 px-4 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-foreground/15" />
        <span className="h-2.5 w-2.5 rounded-full bg-foreground/15" />
        <span className="h-2.5 w-2.5 rounded-full bg-foreground/15" />
        <span className="ml-2 truncate text-xs font-medium text-muted-foreground">{title}</span>
      </div>
      <div className={bodyClassName}>{children}</div>
    </div>
  );
}