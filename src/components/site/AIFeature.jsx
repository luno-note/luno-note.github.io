import { Check } from 'lucide-react';
import { useI18n } from '@/lib/i18n';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';
import AppWindow from './AppWindow';
import AIPreview from './previews/AIPreview';

export default function AIFeature() {
  const { t } = useI18n();
  return (
    <section className="border-t border-border py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal className="lg:order-2">
            <SectionHeading eyebrow={t.ai.eyebrow} title={t.ai.title} desc={t.ai.desc} />
            <ul className="mt-8 space-y-3">
              {t.ai.points.map((p) => (
                <li key={p} className="flex items-center gap-2.5 text-sm text-foreground/85">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-primary/12 text-primary">
                    <Check className="h-3 w-3" aria-hidden="true" />
                  </span>
                  {p}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={100} className="lg:order-1">
            <AppWindow title="Luno — Assistant">
              <AIPreview />
            </AppWindow>
          </Reveal>
        </div>
      </div>
    </section>
  );
}