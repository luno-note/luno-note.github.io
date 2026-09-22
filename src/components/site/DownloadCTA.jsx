import { Download, ArrowRight } from 'lucide-react';
import { useI18n } from '@/lib/i18n';
import Reveal from './Reveal';

export default function DownloadCTA() {
  const { t } = useI18n();
  return (
    <section id="download" className="relative overflow-hidden border-t border-border py-24 md:py-32">
      <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
        <div className="absolute left-1/2 top-1/2 h-[360px] w-[680px] max-w-[110vw] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/[0.06] blur-3xl" />
      </div>
      <div className="mx-auto max-w-3xl px-5 text-center sm:px-8">
        <Reveal>
          <div className="flex items-center justify-center gap-2.5 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
            <span className="h-px w-6 bg-primary/50" aria-hidden="true" />
            {t.download.eyebrow}
            <span className="h-px w-6 bg-primary/50" aria-hidden="true" />
          </div>
          <h2 className="luno-display mt-5 text-4xl text-foreground sm:text-5xl md:text-[3.2rem]">
            {t.download.title}
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-muted-foreground">{t.download.desc}</p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <a
              href="https://github.com/phanuwatla/luno-note/releases/download/v1.3.1/luno-note-setup-1.3.1.exe"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
            >
              <Download className="h-4 w-4" aria-hidden="true" /> {t.download.download}
            </a>
            <a
              href="#features"
              className="inline-flex items-center gap-2 rounded-xl border border-border px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:border-foreground/30"
            >
              {t.download.explore} <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
          <div className="mt-8 text-xs text-muted-foreground">
            {t.download.platformsLabel}{' '}
            <span className="font-medium text-foreground/80">{t.download.platforms.join('  ·  ')}</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}