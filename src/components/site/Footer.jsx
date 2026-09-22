import { useI18n } from '@/lib/i18n';
import Logo from './Logo';
import LanguageSelector from './LanguageSelector';
import ThemeToggle from './ThemeToggle';

export default function Footer() {
  const { t } = useI18n();
  const cols = [
    { title: t.footer.columns.product, items: t.footer.product },
    { title: t.footer.columns.resources, items: t.footer.resources },
    { title: t.footer.columns.company, items: t.footer.company },
    { title: t.footer.columns.social, items: t.footer.social },
  ];

  return (
    <footer id="resources" className="border-t border-border bg-secondary/30">
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Logo />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">{t.footer.tagline}</p>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4 lg:col-span-8">
            {cols.map((c) => (
              <div key={c.title}>
                <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground/80">{c.title}</h3>
                <ul className="mt-3 space-y-2">
                  {c.items.map((it) => (
                    <li key={it.label}>
                      <a href={it.href} className="text-sm text-foreground/75 transition-colors hover:text-primary">
                        {it.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-border pt-6 sm:flex-row sm:items-center">
          <p className="text-xs text-muted-foreground">{t.footer.rights}</p>
          <div className="flex items-center gap-2">
            <span className="text-xs text-muted-foreground">{t.footer.columns.language}</span>
            <LanguageSelector align="left" />
            <ThemeToggle label={t.nav.switchTheme} />
          </div>
        </div>
      </div>
    </footer>
  );
}