import { Sparkles, ArrowUp } from 'lucide-react';
import { useI18n } from '@/lib/i18n';

export default function AIPreview() {
  const { t } = useI18n();
  return (
    <div className="flex h-[400px] flex-col text-sm sm:h-[440px]">
      {/* context chips */}
      <div className="flex flex-wrap items-center gap-1.5 border-b border-border bg-secondary/40 px-4 py-2.5">
        <span className="text-[0.68rem] font-semibold uppercase tracking-wider text-muted-foreground/70">Context</span>
        <span className="rounded-md border border-border bg-background px-2 py-0.5 text-[0.72rem] text-foreground/80">Deep Work</span>
        <span className="rounded-md border border-border bg-background px-2 py-0.5 text-[0.72rem] text-foreground/80">Attention</span>
        <span className="rounded-md border border-border bg-background px-2 py-0.5 text-[0.72rem] text-foreground/80">Focus</span>
      </div>

      {/* conversation */}
      <div className="flex-1 space-y-3 overflow-hidden p-4">
        <div className="flex justify-end">
          <div className="max-w-[80%] rounded-lg rounded-br-sm bg-primary/10 px-3 py-2 text-[0.82rem] text-foreground">
            {t.ai.prompt}
          </div>
        </div>
        <div className="flex gap-2.5">
          <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-primary/15 text-primary">
            <Sparkles className="h-4 w-4" aria-hidden="true" />
          </div>
          <div className="max-w-[85%] rounded-lg rounded-tl-sm border border-border bg-card px-3 py-2 text-[0.82rem] leading-relaxed text-foreground/85">
            {t.ai.response}
          </div>
        </div>
        <div className="flex gap-2 pt-1">
          <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-primary/15 text-primary">
            <Sparkles className="h-4 w-4" aria-hidden="true" />
          </div>
          <div className="flex items-center gap-1.5 rounded-lg border border-border bg-card px-3 py-2 text-[0.78rem] text-muted-foreground">
            <span className="inline-block h-1.5 w-1.5 animate-bounce rounded-full bg-primary" style={{ animationDelay: '0ms' }} />
            <span className="inline-block h-1.5 w-1.5 animate-bounce rounded-full bg-primary" style={{ animationDelay: '150ms' }} />
            <span className="inline-block h-1.5 w-1.5 animate-bounce rounded-full bg-primary" style={{ animationDelay: '300ms' }} />
          </div>
        </div>
      </div>

      {/* input */}
      <div className="border-t border-border p-3">
        <div className="flex items-center gap-2 rounded-lg border border-border bg-background px-3 py-2">
          <span className="text-[0.8rem] text-muted-foreground truncate">Ask Luno about your notes…</span>
          <button className="ml-auto flex h-6 w-6 items-center justify-center rounded-xl bg-primary text-primary-foreground" aria-label="Send">
            <ArrowUp className="h-3.5 w-3.5" aria-hidden="true" />
          </button>
        </div>
      </div>
    </div>
  );
}