import { useEffect, useState } from 'react';
import { Menu, X, Download } from 'lucide-react';
import Logo from './Logo';
import LanguageSelector from './LanguageSelector';
import ThemeToggle from './ThemeToggle';
import { useI18n } from '@/lib/i18n';

const navKeys = ['features', 'explore', 'download', 'resources'];

export default function Navbar() {
  const { t } = useI18n();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled ? 'border-b border-border bg-background/80 backdrop-blur-md' : 'border-b border-transparent'
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-5 sm:px-8">
        <a href="#top" className="flex items-center" aria-label="Luno home">
          <Logo />
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {navKeys.map((k) => (
            <a
              key={k}
              href={k === 'features' ? '#features' : k === 'explore' ? '#explore' : k === 'download' ? '#download' : '#resources'}
              className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {t.nav[k]}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <div className="hidden sm:block">
            <LanguageSelector />
          </div>
          <ThemeToggle label={t.nav.switchTheme} />
          <a
            href="#download"
            className="hidden items-center gap-1.5 rounded-xl bg-primary px-3.5 py-2 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5 sm:inline-flex"
          >
            <Download className="h-4 w-4" aria-hidden="true" /> {t.nav.getLuno}
          </a>
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-border text-foreground md:hidden"
            aria-label={open ? t.nav.closeMenu : t.nav.openMenu}
            aria-expanded={open}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-border bg-background px-5 py-4 md:hidden">
          <div className="flex flex-col gap-1">
            {navKeys.map((k) => (
              <a
                key={k}
                href={k === 'features' ? '#features' : k === 'explore' ? '#explore' : k === 'download' ? '#download' : '#resources'}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2.5 text-sm font-medium text-foreground hover:bg-secondary"
              >
                {t.nav[k]}
              </a>
            ))}
          </div>
          <div className="mt-4 flex items-center justify-between border-t border-border pt-4">
            <LanguageSelector align="left" />
            <a
              href="#download"
              onClick={() => setOpen(false)}
              className="inline-flex items-center gap-1.5 rounded-xl bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground"
            >
              <Download className="h-4 w-4" /> {t.nav.getLuno}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}