import { Check } from 'lucide-react';
import { useI18n } from '@/lib/i18n';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';

export default function MarkdownFeature() {
  const { t } = useI18n();
  return (
    <section id="features" className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <SectionHeading eyebrow={t.markdown.eyebrow} title={t.markdown.title} desc={t.markdown.desc} />
            <ul className="mt-8 space-y-3">
              {t.markdown.points.map((p) => (
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
            <div className="overflow-hidden rounded-xl border border-border bg-card shadow-xl shadow-foreground/5">
              <div className="grid grid-cols-2 divide-x divide-border">
                <div className="p-4">
                  <div className="mb-3 text-[0.68rem] font-semibold uppercase tracking-wider text-muted-foreground/70">
                    Markdown
                  </div>
                  <pre className="whitespace-pre-wrap font-mono text-[0.78rem] leading-relaxed text-foreground/80">
{`# On Reading

Reading is a **conversation**
with the author. Link to
[[Deep Work]].

- one idea per note
- mark, question, connect

#focus #books`}
                  </pre>
                </div>
                <div className="bg-secondary/30 p-4">
                  <div className="mb-3 text-[0.68rem] font-semibold uppercase tracking-wider text-primary/80">
                    Preview
                  </div>
                  <div className="text-[0.82rem] leading-relaxed">
                    <div className="font-heading text-base font-semibold text-foreground">On Reading</div>
                    <p className="mt-2 text-muted-foreground">
                      Reading is a <span className="md-strong">conversation</span> with the author. Link to{' '}
                      <span className="md-link">Deep Work</span>.
                    </p>
                    <ul className="mt-2 space-y-0.5 text-foreground/85">
                      <li className="flex gap-2"><span className="text-primary">•</span> one idea per note</li>
                      <li className="flex gap-2"><span className="text-primary">•</span> mark, question, connect</li>
                    </ul>
                    <div className="mt-2 flex gap-1.5">
                      <span className="md-tag">#focus</span>
                      <span className="md-tag">#books</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}