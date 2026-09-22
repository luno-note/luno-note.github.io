import { Check } from 'lucide-react';
import { useI18n } from '@/lib/i18n';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';
import AppWindow from './AppWindow';
import CanvasPreview from './previews/CanvasPreview';

export default function CanvasFeature() {
  const { t } = useI18n();
  return (
    <section className="border-t border-border py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <SectionHeading eyebrow={t.canvas.eyebrow} title={t.canvas.title} desc={t.canvas.desc} />
            <ul className="mt-8 space-y-3">
              {t.canvas.points.map((p) => (
                <li key={p} className="flex items-center gap-2.5 text-sm text-foreground/85">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-primary/12 text-primary">
                    <Check className="h-3 w-3" aria-hidden="true" />
                  </span>
                  {p}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={100}>
            <AppWindow title="Luno — Canvas">
              <div className="h-[340px] sm:h-[420px]">
                <CanvasPreview className="h-full w-full rounded-none" />
              </div>
            </AppWindow>
          </Reveal>
        </div>
      </div>
    </section>
  );
}