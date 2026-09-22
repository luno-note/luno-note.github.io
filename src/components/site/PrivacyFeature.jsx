import { Lock, ShieldCheck, Cloud } from 'lucide-react';
import { useI18n } from '@/lib/i18n';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';

const icons = [Lock, ShieldCheck, Cloud];

export default function PrivacyFeature() {
  const { t } = useI18n();
  return (
    <section className="border-t border-border py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <SectionHeading
            align="center"
            eyebrow={t.privacy.eyebrow}
            title={t.privacy.title}
            desc={t.privacy.desc}
          />
        </Reveal>
        <div className="mt-12 grid gap-4 sm:grid-cols-3">
          {t.privacy.points.map((p, i) => {
            const Icon = icons[i] || ShieldCheck;
            return (
              <Reveal key={p} delay={i * 80}>
                <div className="flex h-full flex-col items-center rounded-xl border border-border bg-card p-6 text-center">
                  <div className="flex h-10 w-10 items-center justify-center rounded-md bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <p className="mt-4 text-sm font-medium leading-relaxed text-foreground">{p}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}