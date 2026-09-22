import { FileText, Users, BookOpen, Briefcase } from 'lucide-react';
import { useI18n } from '@/lib/i18n';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';

const icons = [FileText, Users, BookOpen, Briefcase];

export default function TemplatesFeature() {
  const { t } = useI18n();
  return (
    <section className="border-t border-border py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <SectionHeading
            align="center"
            eyebrow={t.templates.eyebrow}
            title={t.templates.title}
            desc={t.templates.desc}
          />
        </Reveal>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {t.templates.cards.map((c, i) => {
            const Icon = icons[i] || FileText;
            return (
              <Reveal key={c.name} delay={i * 60}>
                <div className="group h-full rounded-xl border border-border bg-card p-5 transition-all hover:-translate-y-1 hover:border-primary/40">
                  <div className="flex h-9 w-9 items-center justify-center rounded-md bg-primary/10 text-primary">
                    <Icon className="h-4 w-4" aria-hidden="true" />
                  </div>
                  <h3 className="mt-4 font-heading text-base font-semibold text-foreground">{c.name}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{c.desc}</p>
                  <div className="mt-4 text-xs font-medium text-primary opacity-0 transition-opacity group-hover:opacity-100">
                    Use template →
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}