import { useI18n } from '@/lib/i18n';
import Reveal from './Reveal';
import GraphPreview from './previews/GraphPreview';

export default function GraphFeature() {
  const { t } = useI18n();
  return (
    <section className="border-t border-border py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <div className="max-w-2xl">
            <div className="flex items-center gap-2.5 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
              <span className="h-px w-6 bg-primary/50" aria-hidden="true" />
              {t.graph.eyebrow}
            </div>
            <h2 className="luno-display mt-5 text-3xl text-foreground sm:text-4xl md:text-[2.6rem]">
              {t.graph.title}
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground md:text-lg">{t.graph.desc}</p>
          </div>
        </Reveal>
        <Reveal delay={120}>
          <div className="mt-12 overflow-hidden rounded-xl border border-border bg-card shadow-xl shadow-foreground/5">
            <div className="h-[340px] sm:h-[440px]">
              <GraphPreview className="h-full w-full rounded-none" />
            </div>
            <div className="border-t border-border px-5 py-3 text-center text-xs text-muted-foreground">
              {t.graph.caption}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}