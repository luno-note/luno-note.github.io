import { Check, Link2 } from 'lucide-react';
import { useI18n } from '@/lib/i18n';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';

const backlinks = [
  { title: 'Deep Work', snippet: '…builds on the idea that [[On Reading]] requires long, uninterrupted stretches.' },
  { title: 'Attention', snippet: '…see [[On Reading]] for how focused attention compounds over time.' },
  { title: 'Morning pages', snippet: '…a quiet warm-up before [[On Reading]] each day.' },
];

export default function ConnectionsFeature() {
  const { t } = useI18n();
  return (
    <section className="border-t border-border py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal className="lg:order-2">
            <SectionHeading eyebrow={t.connections.eyebrow} title={t.connections.title} desc={t.connections.desc} />
            <ul className="mt-8 space-y-3">
              {t.connections.points.map((p) => (
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
            <div className="overflow-hidden rounded-xl border border-border bg-card shadow-xl shadow-foreground/5">
              <div className="border-b border-border px-4 py-3">
                <div className="flex items-center gap-2 text-sm font-medium text-foreground">
                  <Link2 className="h-4 w-4 text-primary" aria-hidden="true" /> Linked references
                </div>
                <div className="mt-0.5 text-xs text-muted-foreground">3 notes link to this one</div>
              </div>
              <ul className="divide-y divide-border">
                {backlinks.map((b) => (
                  <li key={b.title} className="px-4 py-3">
                    <div className="text-sm font-medium text-foreground">{b.title}</div>
                    <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{b.snippet}</p>
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-1.5 border-t border-border px-4 py-3">
                <span className="md-tag">#focus</span>
                <span className="md-tag">#books</span>
                <span className="md-tag">#attention</span>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}