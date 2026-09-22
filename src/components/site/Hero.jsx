import { Download, ArrowRight } from 'lucide-react';
import { useI18n } from '@/lib/i18n';
import AppWindow from './AppWindow';
import EditorPreview from './previews/EditorPreview';

export default function Hero() {
  const { t } = useI18n();
  const stats = [
    ['stat1', 'stat1sub'],
    ['stat2', 'stat2sub'],
    ['stat3', 'stat3sub'],
  ];

  return (
    <section id="top" className="relative overflow-hidden pt-28 pb-16 sm:pt-32 md:pb-24">
      <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
        <div className="absolute left-1/2 top-[-10%] h-[480px] w-[900px] max-w-[120vw] -translate-x-1/2 rounded-full bg-primary/[0.06] blur-3xl" />
      </div>

      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-5">
          <div className="flex items-center gap-2.5 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
            <span className="h-px w-6 bg-primary/50" aria-hidden="true" />
            {t.hero.eyebrow}
          </div>
          <h1 className="luno-display mt-5 text-[2.6rem] leading-[1.05] text-foreground sm:text-5xl md:text-[3.4rem]">
            {t.hero.title}
          </h1>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-muted-foreground">{t.hero.subtitle}</p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#download"
              className="inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
            >
              <Download className="h-4 w-4" aria-hidden="true" /> {t.hero.download}
            </a>
            <a
              href="#features"
              className="inline-flex items-center gap-2 rounded-xl border border-border px-5 py-3 text-sm font-semibold text-foreground transition-colors hover:border-foreground/30"
            >
              {t.hero.explore} <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>

          <dl className="mt-10 grid max-w-md grid-cols-3 gap-4 border-t border-border pt-6">
            {stats.map(([s, ss]) => (
              <div key={s}>
                <dt className="text-sm font-semibold text-foreground">{t.hero[s]}</dt>
                <dd className="mt-0.5 text-xs leading-snug text-muted-foreground">{t.hero[ss]}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="lg:col-span-7">
          <div className="animate-fade-up" style={{ animationDelay: '0.15s' }}>
            <AppWindow title="Luno — On Reading.md">
              <EditorPreview />
            </AppWindow>
          </div>
        </div>
      </div>
    </section>
  );
}