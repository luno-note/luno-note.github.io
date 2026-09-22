import { useI18n } from '@/lib/i18n';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';

export default function Philosophy() {
  const { t } = useI18n();
  return (
    <section id="explore" className="border-t border-border py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <SectionHeading eyebrow={t.philosophy.eyebrow} title={t.philosophy.title} desc={t.philosophy.statement} />
        </Reveal>
        <div className="mt-14 grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {t.philosophy.items.map((item, i) => (
            <Reveal key={item.title} delay={i * 60} className="bg-background p-7">
              <div className="text-xs font-semibold uppercase tracking-wider text-primary">
                {String(i + 1).padStart(2, '0')}
              </div>
              <h3 className="mt-3 font-heading text-lg font-semibold text-foreground">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}